import { User } from 'next-auth';
import { JWT } from 'next-auth/jwt';
import { Session } from 'next-auth/types';
import { NextRequest } from 'next/server';

type UserEnhanced = User & { isAdmin: boolean };

export const authConfig = {
  pages: {
    signIn: '/login',
  },
  providers: [],
  callbacks: {
    // FOR MORE DETAIL ABOUT CALLBACK FUNCTIONS CHECK https://next-auth.js.org/configuration/callbacks
    async jwt({ token, user }: { token: JWT; user: UserEnhanced }): Promise<JWT> {
      if (user) {
        token.id = user.id;
        token.isAdmin = user.isAdmin;
      }
      return token;
    },
    async session({ session, token }: { session: Session; token: JWT }) {
      if (token && session.user?.isAdmin && typeof session.user?.id === 'string') {
        session.user.id = token.id as string;
        session.user.isAdmin = token.isAdmin;
      }
      return session;
    },
    authorized({ auth, request }: { auth: Session; request: NextRequest }) {
      const user = auth?.user;
      const isOnAdminPanel = request.nextUrl?.pathname.startsWith('/admin');
      const isOnBlogPage = request.nextUrl?.pathname.startsWith('/blog');
      const isOnLoginPage = request.nextUrl?.pathname.startsWith('/login');

      // ONLY ADMIN CAN REACH THE ADMIN DASHBOARD

      if (isOnAdminPanel && !user?.isAdmin) {
        return false;
      }

      // ONLY AUTHENTICATED USERS CAN REACH THE BLOG PAGE

      if (isOnBlogPage && !user) {
        return false;
      }

      // ONLY UNAUTHENTICATED USERS CAN REACH THE LOGIN PAGE

      if (isOnLoginPage && user) {
        return Response.redirect(new URL('/', request.nextUrl));
      }

      return true;
    },
  },
};
