import NextAuth from 'next-auth';

declare module 'next-auth' {
  interface UserEnhanced {
    isAdmin: boolean;
  }

  interface Session extends DefaultSession {
    user?: User & UserEnhanced;
  }
}
