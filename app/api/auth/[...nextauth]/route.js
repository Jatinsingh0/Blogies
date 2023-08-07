import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider  from "next-auth/providers/credentials";
import connectDB from "@/app/utils/db";
import User from "@/app/modals/User";
import bcrypt from "bcryptjs";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    CredentialsProvider({
      id: "Credentials",
      name: "credentials",
      async authorize(credentials) {
        await connectDB();
        try {
          const user = await User.findOne({ email: credentials.email });
          if (user) {
            const checkPassword = await bcrypt.compare(
              credentials.password,
              user.password
            );
            if (checkPassword) {
              return user;
            } else {
              throw new Error("Wrong Password!");
            }
          } else {
            throw new Error("User not found!");
          }
        } catch (error) {
          throw new Error(err);
        }
      },
    }),
  ],
  pages: {
    error: "/dashboard/login"
  }
});

export { handler as GET, handler as POST };
