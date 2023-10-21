import prisma from '@/prisma/client';
import { Avatar, Card, Flex, Heading, Table, Text } from '@radix-ui/themes';
import Link from 'next/link';
import { IssueStatusBadge } from './components';

const LatestIssues = async () => {
  const issues = await prisma.issue.findMany({
    orderBy: {
      createdAt: 'desc',
    },
    take: 5,
    include: {
      assignedToUser: true,
    },
  });

  return (
    <Card>
      <Heading size='4' mb='5'>
        Latest Issues
      </Heading>
      <Table.Root>
        <Table.Body>
          {issues.length === 0 && (
            <Table.Row>
              <Table.Cell>
                <Text>No issues available yet...</Text>
              </Table.Cell>
            </Table.Row>
          )}
          {issues.map((issue) => (
            <Table.Row key={issue.id}>
              <Table.Cell>
                <Flex justify='between'>
                  <Flex direction='column' align='start' gap='2'>
                    <Link
                      href={`/issues/${issue.id}`}
                      className='hover:text-purple-500'
                    >
                      {issue.title}
                    </Link>
                    <IssueStatusBadge status={issue.status} />
                  </Flex>
                  {issue.assignedToUser && (
                    <Avatar
                      src={issue.assignedToUser.image!}
                      fallback='?'
                      size='2'
                      radius='full'
                    />
                  )}
                </Flex>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </Card>
  );
};

export default LatestIssues;
