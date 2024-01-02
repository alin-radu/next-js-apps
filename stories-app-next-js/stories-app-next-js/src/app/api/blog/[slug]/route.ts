import { NextResponse } from 'next/server';

import { Post } from '@/lib/db-models';
import { connectDatabase } from '@/lib/db-utils';

import { NextApiRequest } from 'next';

interface Params {
  params: { slug: string };
}

export const GET = async (_: NextApiRequest, { params }: Params) => {
  const { slug } = params;

  try {
    connectDatabase();

    const post = await Post.findOne({ slug });

    return NextResponse.json(post);
  } catch (err) {
    console.log('%c-> developmentConsole: err= ', 'color:#77dcfd', err);
    throw new Error('Failed to fetch the post!');
  }
};
