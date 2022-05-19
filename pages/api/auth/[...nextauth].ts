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
})
