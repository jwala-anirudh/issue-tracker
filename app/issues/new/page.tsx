'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

import axios from 'axios';
import SimpleMDE from 'react-simplemde-editor';

import { useForm, Controller } from 'react-hook-form';
import { Button, Callout, TextField } from '@radix-ui/themes';

import 'easymde/dist/easymde.min.css';

interface IssueForm {
  title: string;
  description: string;
}

const NewIssuePage = () => {
  const { register, control, handleSubmit } = useForm<IssueForm>();
  const router = useRouter();
  const [error, setError] = useState('');

  return (
    <div className="max-w-xl">
      {error && (
        <Callout.Root color="red" className="mb-5">
          <Callout.Text>{error}</Callout.Text>
        </Callout.Root>
      )}
      <form
        className="space-y-3"
        onSubmit={handleSubmit(async (data) => {
          try {
            await axios.post('/api/issues', data);
            router.push('/issues');
          } catch (error) {
            setError('An unexpected error occured.');
          }
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
    </div>
  );
};

export default NewIssuePage;
