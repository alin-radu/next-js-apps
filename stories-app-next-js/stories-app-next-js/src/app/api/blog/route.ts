import { NextResponse } from 'next/server';

import { Post } from '@/lib/db-models';
import { connectDatabase } from '@/lib/db-utils';

export const GET = async () => {
  try {
    connectDatabase();

    const posts = await Post.find();

    return NextResponse.json(posts);
  } catch (err) {
    console.log('%c-> developmentConsole: err= ', 'color:#77dcfd', err);
    throw new Error('Failed to fetch posts!');
  }
};
