import NextAuth, {DefaultSession} from 'next-auth'
import {JWT} from 'next-auth/jwt'

declare module 'next-auth' {
  interface Session {
    user: DefaultSession['user']
    accessToken: string
    error?: string
  }
}
