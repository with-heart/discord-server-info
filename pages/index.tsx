import type {NextPage} from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>discord-server-info</title>
        <meta
          name="description"
          content="Display information &amp; statistics vital for managing a complex Discord server"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>discord-server-info</h1>
      </main>
    </div>
  )
}

export default Home
