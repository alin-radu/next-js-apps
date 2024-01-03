import NextAuth, { Account, DefaultSession, User } from 'next-auth';
import { JWT } from 'next-auth/jwt';

declare module 'next-auth' {
  interface UserEnhanced {
    isAdmin: boolean;
  }

  interface Session extends DefaultSession {
    user?: User & UserEnhanced;
    accessToken?: Account.accessToken;
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    id?: string;
    isAdmin: boolean;
  }
}
