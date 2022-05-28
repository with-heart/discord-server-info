import type {NextPage} from 'next'
import {signIn, signOut, useSession} from 'next-auth/react'
import NextHead from 'next/head'
import {ReactNode} from 'react'

const Container = ({children}: {children: ReactNode}) => (
  <div>
    <NextHead>
      <title>discord-server-info</title>
      <meta
        name="description"
        content="Display information &amp; statistics vital for managing a complex Discord server"
      />
      <link rel="icon" href="/favicon.ico" />
    </NextHead>

    <main>
      <h1>discord-server-info</h1>

      {children}
    </main>
  </div>
)

const Home: NextPage = () => {
  const {data: session} = useSession()

  if (session) {
    const {user} = session

    return (
      <Container>
        <div>
          <p>
            Welcome{user && user.name ? ` ${user.name}` : null}! You&apos;re
            signed in!
          </p>
          <button onClick={() => signOut()}>Sign out</button>
        </div>
      </Container>
    )
  }

  return (
    <Container>
      <div>
        You&apos;re not signed in.
        <button onClick={() => signIn('discord')}>Sign in with Discord</button>
      </div>
    </Container>
  )
}

export default Home
