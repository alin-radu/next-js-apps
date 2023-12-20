import Image from 'next/image';
import { Button } from '@nextui-org/react';
import { CommentCreateForm } from '../CommentCreateForm';
import { CommentWithAuthor } from '@/db/queries/comments';

interface CommentShowProps {
  commentId: string;
  comments: CommentWithAuthor[];
}

function formatDate(date: Date) {
  let hours = date.getHours();
  let minutes = date.getMinutes();
  const ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? 0 + minutes : minutes;
  let strTime = hours + ':' + minutes + ' ' + ampm;

  return (
    date.getMonth() + 1 + '/' + date.getDate() + '/' + date.getFullYear() + '  ' + strTime
  );
}

// TODO: Get a list of comments
export function CommentShow({ commentId, comments }: CommentShowProps) {
  const comment = comments.find((c) => c.id === commentId);

  if (!comment) {
    return null;
  }
  const date = new Date(comment.createdAt);
  const formatedDate = formatDate(date);

  const children = comments.filter((c) => c.parentId === commentId);
  const renderedChildren = children.map((child) => {
    return <CommentShow key={child.id} commentId={child.id} comments={comments} />;
  });

  return (
    <div className="p-4 border mt-2 mb-1">
      <div className="flex gap-3">
        <Image
          src={comment.user.image || ''}
          alt="user image"
          width={40}
          height={40}
          className="w-10 h-10 rounded-full"
        />
        <div className="flex-1 space-y-3">
          <div className="flex">
            <p className="text-sm font-medium text-gray-600">{comment.user.name}</p>
            &nbsp; &nbsp;
            <p className="text-sm font-medium text-gray-400">{formatedDate}</p>
          </div>

          <p className="text-gray-900">{comment.content}</p>

          <CommentCreateForm postId={comment.postId} parentId={comment.id} />
        </div>
      </div>
      <div className="pl-4">{renderedChildren}</div>
    </div>
  );
}
