'use client';

import { Button, TextArea, TextField } from '@radix-ui/themes';

const NewIssuePage = () => {
  return (
    <div className="max-w-xl space-y-3">
      <TextField.Root>
        <TextField.Input placeholder="Enter issue title..." />
      </TextField.Root>
      <TextArea placeholder="Enter issue description..." />
      <Button>Submit New Issue</Button>
    </div>
  );
};

export default NewIssuePage;
