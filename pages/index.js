import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>NextFoodie</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">NextFoodie</a>
        </h1>

        <p className={styles.description}>
          Get started with NextFoodie
        </p>

        <div className={styles.grid}>
          <a href="/foods" className={styles.card}>
            <h3>All Foods &rarr;</h3>
            <p>See all Foods here</p>
          </a>

          <a href="/food" className={styles.card}>
            <h3>Add a Food &rarr;</h3>
            <p>Add a Food</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by NextFoodie
          
        </a>
      </footer>
    </div>
  )
}
