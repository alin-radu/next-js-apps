interface Link {
  title: string;
  path: string;
}

interface Post {
  id?: number;
  userId?: number;
  title?: string;
  slug?: string;
  body?: string;
  desc?: string;
  img?: string;
  createdAt?: number;
}

interface User {
  id?: number;
  username?: string;
  img?: string;
}
