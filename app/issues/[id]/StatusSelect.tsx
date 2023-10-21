'use client';

import { Issue, Status } from '@prisma/client';
import { Select } from '@radix-ui/themes';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import toast, { Toaster } from 'react-hot-toast';

const StatusSelect = ({ issue }: { issue: Issue }) => {
  const router = useRouter();

  const statuses: { label: string; value: Status }[] = [
    { label: 'Open', value: 'OPEN' },
    { label: 'In Progress', value: 'IN_PROGRESS' },
    { label: 'Closed', value: 'CLOSED' },
  ];

  const assignStatus = (status: string) => {
    axios
      .patch(`/api/issues/status/${issue.id}`, {
        issueStatus: status,
      })
      .then(() => {
        toast.success('Status updated successfully.');
        router.refresh();
      })
      .catch(() => {
        toast.error('Changes could not be saved.');
      });
  };

  return (
    <>
      <Select.Root
        defaultValue={issue.status || null!}
        onValueChange={assignStatus}
      >
        <Select.Trigger placeholder='Status...' />
        <Select.Content>
          <Select.Group>
            <Select.Label>Available options</Select.Label>
            {statuses?.map((status) => (
              <Select.Item key={status.value} value={status.value}>
                {status.label}
              </Select.Item>
            ))}
          </Select.Group>
        </Select.Content>
      </Select.Root>
      <Toaster />
    </>
  );
};

export default StatusSelect;
