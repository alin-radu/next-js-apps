import { Skeleton } from '@nextui-org/react';

interface SkeletonBasicProps {
  items: number;
  rows: number;
  withTitle?: boolean;
}

export function SkeletonBasic({ items, rows, withTitle }: SkeletonBasicProps) {
  const skeletons = Array.from({ length: items }).map((_, idx) => (
    <div key={idx} className="space-y-2 p-4 border rounded">
      {Array.from({ length: rows }).map((_, idx) => (
        <Skeleton key={idx} className="h-6 w-full border rounded" />
      ))}
    </div>
  ));

  return (
    <div>
      {withTitle && (
        <div className="my-2">
          <Skeleton className="h-8 w-48 border rounded" />
        </div>
      )}
      <div className="space-y-2">{skeletons}</div>
    </div>
  );
}
