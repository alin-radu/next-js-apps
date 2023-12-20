import { db } from '@/db';

import { paths } from '@/utils/paths';

import Link from 'next/link';

import { Chip } from '@nextui-org/react';

import type { Topic } from '@prisma/client';

const TopicItem = ({ topic }: { topic: Topic }) => (
  <div key={topic.id}>
    <Link href={paths.topicShow(topic.slug)}>
      <Chip color="warning" variant="shadow">
        {topic.slug}
      </Chip>
    </Link>
  </div>
);

export async function TopicList() {
  const topics = await db.topic.findMany();

  const renderedTopics = topics.map((topic) => (
    <TopicItem key={topic.id} topic={topic} />
  ));

  return <div className="flex flex-row flex-wrap gap-2">{renderedTopics}</div>;
}
