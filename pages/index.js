import Head from "next/head";
import Link from "next/link";
import Footer from "../comps/Footer";
import Navbar from "../comps/Navabar";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas"></meta>
      </Head>
      <div className={styles.title}>
        <h1>Homepage</h1>
        <p className={styles.text}>
          loremIn sint sunt deserunt adipisicing enim magna dolor. Exercitation
          reprehenderit aute enim amet ex fugiat ea et aliquip do labore cillum
          ullamco.
        </p>
        <p className={styles.text}>
          loremIn sint sunt deserunt adipisicing enim magna dolor. Exercitation
          reprehenderit aute enim amet ex fugiat ea et aliquip do labore cillum
          ullamco.
        </p>
        <Link href="/ninjas">
          <a className={styles.btn}>See Ninja Listing</a>
        </Link>
      </div>
    </>
  );
}
