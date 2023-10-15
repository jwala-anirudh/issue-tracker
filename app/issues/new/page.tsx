'use client';

import { useRouter } from 'next/navigation';

import axios from 'axios';
import SimpleMDE from 'react-simplemde-editor';
import { Button, TextField } from '@radix-ui/themes';
import { useForm, Controller } from 'react-hook-form';

import 'easymde/dist/easymde.min.css';

interface IssueForm {
  title: string;
  description: string;
}

const NewIssuePage = () => {
  const { register, control, handleSubmit } = useForm<IssueForm>();
  const router = useRouter();

  return (
    <form
      className="max-w-xl space-y-3"
      onSubmit={handleSubmit(async (data) => {
        await axios.post('/api/issues', data);
        router.push('/issues');
      })}
    >
      <TextField.Root>
        <TextField.Input
          placeholder="Enter issue title..."
          {...register('title')}
        />
      </TextField.Root>
      <Controller
        name="description"
        control={control}
        render={({ field }) => (
          <SimpleMDE placeholder="Enter issue description..." {...field} />
        )}
      />
      <Button>Submit New Issue</Button>
    </form>
  );
};

export default NewIssuePage;
