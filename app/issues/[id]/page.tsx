import authOptions from '@/app/auth/authOptions';
import prisma from '@/prisma/client';
import { Box, Flex, Grid, Text } from '@radix-ui/themes';
import { getServerSession } from 'next-auth';
import { notFound } from 'next/navigation';
import { cache } from 'react';
import AssigneeSelect from './AssigneeSelect';
import DeleteIssueButton from './DeleteIssueButton';
import EditIssueButton from './EditIssueButton';
import IssueDetails from './IssueDetails';
import StatusSelect from './StatusSelect';

interface Props {
  params: { id: string };
}

const fetchUser = cache((issueId: number) =>
  prisma.issue.findUnique({
    where: {
      id: issueId,
    },
  })
);

const IssueDetailPage = async ({ params }: Props) => {
  if (typeof params.id !== 'string') notFound();

  const session = await getServerSession(authOptions);

  const issue = await fetchUser(parseInt(params.id));

  if (!issue) {
    notFound();
  }

  return (
    <Grid
      columns={{
        initial: '1',
        sm: '5',
      }}
      gap='5'
    >
      <Box className='md:col-span-4'>
        <IssueDetails issue={issue} />
      </Box>
      {session && issue.status !== 'CLOSED' && (
        <Box>
          <Flex direction='column' gap='4'>
            <Flex direction='column'>
              <Text as='p' size='2' weight='bold'>
                Status
              </Text>
              <StatusSelect issue={issue} />
            </Flex>
            <Flex direction='column'>
              <Text as='p' size='2' weight='bold'>
                Assignee
              </Text>
              <AssigneeSelect issue={issue} />
            </Flex>
            <EditIssueButton issueId={issue.id} />
            <DeleteIssueButton issueId={issue.id} />
          </Flex>
        </Box>
      )}
    </Grid>
  );
};

export async function generateMetadata({ params }: Props) {
  const issue = await fetchUser(parseInt(params.id));

  return {
    title: issue?.title + ' - Issue Tracker',
    description: 'Details of issue ' + issue?.id,
  };
}

export default IssueDetailPage;
