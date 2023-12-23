'use client';

import { useState } from 'react';
import { useSearchParams } from 'next/navigation';

import { useRouter } from 'next/navigation';

// import * as actions from '@/actions';

import { Input } from '@nextui-org/react';

export function SearchInput() {
  const searchParams = useSearchParams();
  const { push } = useRouter();

  const [term, setTerm] = useState(String(searchParams));

  const onChangeIputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTerm(e.target.value);
  };
  const onSubmitFormHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    push(`/search?term=${term}`);
  };

  return (
    <form onSubmit={onSubmitFormHandler}>
      <Input
        defaultValue={searchParams.get('term') || ''}
        onChange={onChangeIputHandler}
      />
    </form>
  );
}
