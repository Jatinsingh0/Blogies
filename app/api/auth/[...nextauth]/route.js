import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.Google_ClientID,
      clientSecret: process.env.Google_ClientSecret,
    }),
  ],
})

export {handler as GET, handler as POST};