import CredentialsProvider from "next-auth/providers/credentials";
import type { NextAuthOptions } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      email: string;
      isAdmin: boolean;
    };
  }
  interface User {
    isAdmin: boolean;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    isAdmin?: boolean;
  }
}

export const authOptions: NextAuthOptions = {
  session: { strategy: "jwt" },
  providers: [
    CredentialsProvider({
      name: "Admin",
      credentials: {
        email: { label: "Email", type: "email" },
        code: { label: "Access Code", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.code) return null;

        const adminEmails = (process.env.ADMIN_EMAILS ?? "")
          .split(",")
          .map((e) => e.trim())
          .filter(Boolean);

        if (!adminEmails.includes(credentials.email)) return null;
        if (credentials.code !== process.env.ADMIN_CODE) return null;

        return { id: credentials.email, email: credentials.email, isAdmin: true };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) token.isAdmin = user.isAdmin;
      return token;
    },
    async session({ session, token }) {
      session.user = {
        email: token.email as string,
        isAdmin: token.isAdmin ?? false,
      };
      return session;
    },
  },
  pages: {
    signIn: "/admin",
  },
  secret: process.env.NEXTAUTH_SECRET,
};
