import NextAuth from 'next-auth'
import DiscordProvider from 'next-auth/providers/discord'

const scopes = ['identify'].join(' ')

const {DISCORD_CLIENT_ID, DISCORD_CLIENT_SECRET} = process.env

if (!DISCORD_CLIENT_ID) {
  throw Error('DISCORD_CLIENT_ID is not set')
}

if (!DISCORD_CLIENT_SECRET) {
  throw Error('DISCORD_CLIENT_SECRET is not set')
}

export default NextAuth({
  providers: [
    DiscordProvider({
      clientId: process.env.DISCORD_CLIENT_ID!,
      clientSecret: process.env.DISCORD_CLIENT_SECRET!,
      authorization: {params: {scope: scopes}},
    }),
  ],
  callbacks: {
    async jwt({token, account, user}) {
      // initial sign in
      if (account && user) {
        return {
          accessToken: account.access_token,
          accessTokenExpires: account.expires_at! * 1000,
          refreshToken: account.refresh_token,
          user,
        }
      }

      return token
    },
    session({session, token}) {
      // @ts-expect-error
      session.user = token.user
      session.accessToken = token.accessToken
      session.error = token.error

      return session
    },
  },
})
