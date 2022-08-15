import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import AppNav from "../components/app-nav";
import { LandingPage } from "../components/home";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Rose::Blog Home</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.homeMain}>
        <AppNav />
        <LandingPage />
      </main>
    </div>
  );
};

export default Home;
