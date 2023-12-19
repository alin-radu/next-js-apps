'use client';

import { useFormState } from 'react-dom';

import * as actions from '@/actions';

import { Input } from '@nextui-org/react';
import { Textarea } from '@nextui-org/react';
import { Button } from '@nextui-org/react';
import { Popover } from '@nextui-org/react';
import { PopoverTrigger } from '@nextui-org/react';
import { PopoverContent } from '@nextui-org/react';

import { FormButton } from '@/components/common/FormButton';

interface PostCreateFormProps {
  slug: string;
}

export function PostCreateForm({ slug }: PostCreateFormProps) {
  const [formState, action] = useFormState(actions.createPost.bind(null, slug), {
    errors: {},
  });

  return (
    <Popover placement="left-start">
      <PopoverTrigger>
        <Button color="primary">Create a Post</Button>
      </PopoverTrigger>
      <PopoverContent>
        <form action={action}>
          <div className="flex flex-col gap-4 p-4 w-80">
            <h3 className="text-lg">Create a Post</h3>

            <Input
              name="title"
              label="Title"
              labelPlacement="outside"
              placeholder="Title"
              isInvalid={Boolean(formState.errors.title)}
              errorMessage={formState.errors.title?.join(', ')}
            />
            <Textarea
              name="content"
              label="Content"
              labelPlacement="outside"
              placeholder="Content"
              isInvalid={Boolean(formState.errors.content)}
              errorMessage={formState.errors.content?.join(', ')}
            />

            {formState.errors._form && (
              <div className="p-2 bg-red-200 border border-red-400 rounded-md">
                {formState.errors._form?.join(', ')}
              </div>
            )}

            <FormButton>Create Post</FormButton>
          </div>
        </form>
      </PopoverContent>
    </Popover>
  );
}
