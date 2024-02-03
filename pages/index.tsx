import type { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useAddress } from "@thirdweb-dev/react";

/**
 * Landing page with a simple gradient background and a hero asset.
 * Free to customize as you see fit.
 */
const Home: NextPage = () => {
  const address = useAddress();
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.hero}>
          <div className={styles.heroBackground}>
            <div className={styles.heroBackgroundInner}>

            </div>
          </div>
          <div className={styles.heroAssetFrame}>
            <br />
          </div>
          <div className={styles.heroBodyContainer}>
            <div className={styles.heroBody}>
              <h1 className={styles.heroTitle}>
                <span className={styles.heroTitleGradient}>
                  Reward open source contributions on Github
                </span>
              </h1>
              <p className={styles.heroSubtitle}>
                Clone the repo below, contribute to the code and create a pull request,
                and receive an NFT automatically!
                <br />
                Powered by {" "}
                <Link
                  className={styles.link}
                  href="https://thirdweb.com/engine"
                  target="_blank"
                >
                  thirdweb Engine
                </Link>{" "}
              </p>

              <div className={styles.heroCtaContainer}>
                <Link
                  className={styles.secondaryCta}
                  href="https://github.com/DustinTurska/github-Engine-rewards"
                  target="_blank"
                >
                  GitHub
                </Link>

                <Link className={styles.heroCta} href={`/profile/${address}`}>
                  My contributions
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
