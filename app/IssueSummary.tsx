import { Status } from '@prisma/client';
import { Card, Flex, Text } from '@radix-ui/themes';
import Link from 'next/link';

interface Props {
  issueCounts: {
    open: number;
    inProgress: number;
    closed: number;
  };
}

const IssueSummary = ({ issueCounts: { open, inProgress, closed } }: Props) => {
  const containers: { label: string; value: number; status: Status }[] = [
    { label: 'Open Issues', value: open, status: 'OPEN' },
    { label: 'In Progress Issues', value: inProgress, status: 'IN_PROGRESS' },
    { label: 'Closed Issues', value: closed, status: 'CLOSED' },
  ];

  return (
    <Flex gap='4'>
      {containers.map((container) => (
        <Card key={container.label}>
          <Flex direction='column' gap='1'>
            <Link
              href={`/issues/list?status=${container.status}`}
              className='text-sm font-medium hover:text-purple-500'
            >
              {container.label}
            </Link>
            <Text size='5' className='font-bold'>
              {container.value}
            </Text>
          </Flex>
        </Card>
      ))}
    </Flex>
  );
};

export default IssueSummary;
