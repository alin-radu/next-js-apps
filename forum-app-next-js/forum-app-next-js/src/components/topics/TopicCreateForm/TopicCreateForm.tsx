'use client';

import { useFormState } from 'react-dom';

import * as actions from '@/actions';

import { Input } from '@nextui-org/react';
import { Button } from '@nextui-org/react';
import { Textarea } from '@nextui-org/react';
import { Popover } from '@nextui-org/react';
import { PopoverTrigger } from '@nextui-org/react';
import { PopoverContent } from '@nextui-org/react';

import { FormButton } from '@/components/common/FormButton';

export function TopicCreateForm() {
  const [formState, action] = useFormState(actions.createTopic, {
    errors: {},
  });

  return (
    <Popover placement="left-start">
      <PopoverTrigger>
        <Button color="primary">Create a Topic</Button>
      </PopoverTrigger>
      <PopoverContent>
        <form action={action}>
          <div className="flex flex-col gap-4 p-4 w-80">
            <h3 className="text-lg">Create a Topic</h3>
            <Input
              name="name"
              label="Name"
              labelPlacement="outside"
              placeholder="Name"
              isInvalid={Boolean(formState.errors.name)}
              errorMessage={formState.errors.name?.join(', ')}
            />
            <Textarea
              name="description"
              label="Description"
              labelPlacement="outside"
              placeholder="Describe your topic"
              isInvalid={Boolean(formState.errors.description)}
              errorMessage={formState.errors.description?.join(', ')}
            />

            {formState.errors._form && (
              <div className="p-2 bg-red-200 border border-red-400 rounded-md">
                {formState.errors._form?.join(', ')}
              </div>
            )}

            <FormButton>Submit</FormButton>
          </div>
        </form>
      </PopoverContent>
    </Popover>
  );
}
