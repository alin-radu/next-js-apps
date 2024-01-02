import mongoose from 'mongoose';

import { Post, User } from './db-models';
import { getDelay } from './getDelay';

const connection: { isConnected?: number } = {};

export async function connectDatabase() {
  const username = process.env.MONGO_DB_USERNAME;
  const password = process.env.MONGO_DB_PASSWORD;
  const clusterName = process.env.MONGO_DB_CLUSTER_NAME;
  const clusterUrl = process.env.MONGO_DB_CLUSTER_URL;
  const database = process.env.MONGO_DB_DATABASE;

  const connectionString = `mongodb+srv://${username}:${password}@${clusterName}.${clusterUrl}.mongodb.net/${database}?retryWrites=true&w=majority`;

  try {
    if (connection.isConnected) {
      return;
    }

    const db = await mongoose.connect(connectionString);

    connection.isConnected = db.connections[0].readyState;
  } catch (error) {
    console.log(
      '%c-> developmentConsole: connectDatabase | error ==================================> ',
      'color:#77dcfd',
      error
    );
    throw new Error('Error connecting to database');
  }
}

// POSTS
export const getPosts = async () => {
  try {
    connectDatabase();
    const posts = await Post.find();

    return posts;
  } catch (err) {
    console.log(err);
    throw new Error('Failed to fetch posts!');
  }
};

export const getPost = async (slug: string) => {
  try {
    connectDatabase();
    const post = await Post.findOne({ slug });

    return post;
  } catch (err) {
    console.log(err);
    throw new Error('Failed to fetch post!');
  }
};

// USERS
export const getUser = async (id: string) => {
  // await getDelay(1500);
  try {
    connectDatabase();
    const user = await User.findById(id);
    return user;
  } catch (err) {
    console.log(err);
    throw new Error('Failed to fetch user!');
  }
};

export const getUsers = async () => {
  try {
    connectDatabase();
    const users = await User.find();
    return users;
  } catch (err) {
    console.log(err);
    throw new Error('Failed to fetch users!');
  }
};
