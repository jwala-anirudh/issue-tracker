import prisma from '@/prisma/client';
import { Flex, Grid } from '@radix-ui/themes';
import { Metadata } from 'next';
import InfoBar from './InfoBar';
import IssueChart from './IssueChart';
import IssueSummary from './IssueSummary';
import LatestIssues from './LatestIssues';

const Home = async () => {
  const open = await prisma.issue.count({ where: { status: 'OPEN' } });
  const inProgress = await prisma.issue.count({
    where: { status: 'IN_PROGRESS' },
  });
  const closed = await prisma.issue.count({ where: { status: 'CLOSED' } });

  const issueCounts = { open, inProgress, closed };

  return (
    <Flex direction='column' gap='5'>
      <InfoBar />
      <Grid columns={{ initial: '1', md: '2' }} gap='5'>
        <Flex direction='column' gap='5'>
          <IssueSummary issueCounts={issueCounts} />
          <IssueChart issueCounts={issueCounts} />
        </Flex>
        <LatestIssues />
      </Grid>
    </Flex>
  );
};

export const metadata: Metadata = {
  title: 'Issue Tracker - Dashboard',
  description: 'View a summary of project issues',
};

export const revalidate = 3600;

export default Home;
