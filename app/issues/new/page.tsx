'use client';

import { Button, TextField } from '@radix-ui/themes';
import SimpleMDE from 'react-simplemde-editor';
import 'easymde/dist/easymde.min.css';

const NewIssuePage = () => {
  return (
    <div className="max-w-xl space-y-3">
      <TextField.Root>
        <TextField.Input placeholder="Enter issue title..." />
      </TextField.Root>
      <SimpleMDE placeholder="Enter issue description..." />
      <Button>Submit New Issue</Button>
    </div>
  );
};

export default NewIssuePage;
