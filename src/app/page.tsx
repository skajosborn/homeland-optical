import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.hero}>
          <div className={styles.heroContent}>
            <h1 className={styles.title}>
              Welcome to <span className={styles.highlight}>Homeland Optical Technology</span>
            </h1>
            <p className={styles.description}>
              Lightning-fast internet, crystal-clear TV, and unbeatable bundles for your home.
            </p>
          </div>
          <div className={styles.heroImage}>
            <Image
              src="/wifi.png"
              alt="Homeland Cable Hero"
              width={600}
              height={400}
              priority
              className={styles.image}
            />
          </div>
        </div>

        <div className={styles.features}>
          <div className={styles.feature}>
          <div className={styles.featureIcon}>
              <Image
                src="/internet.svg"
                alt="Television Icon"
                width={48}
                height={48}
                className={styles.image}
              />
            </div>
            <h3>High-Speed Internet</h3>
            <p>Up to 1Gbps speeds for streaming, gaming, and work</p>
          </div>
          <div className={styles.feature}>
            <div className={styles.featureIcon}>
              <Image
                src="/telephone.svg"
                alt="Television Icon"
                width={48}
                height={48}
                className={styles.image}
              />
            </div>
            <h3>Crystal Clear TV</h3>
            <p>Hundreds of channels with HD and 4K quality</p>
          </div>
          <div className={styles.feature}>
          <div className={styles.featureIcon}>
              <Image
                src="/television.svg"
                alt="Television Icon"
                width={48}
                height={48}
                className={styles.image}
              />
            </div>
            <h3>Best Bundles</h3>
            <p>Save big with our internet, TV, and phone packages</p>
          </div>
        </div>

        <div className={styles.cta}>
          <a href="/bundles" className={styles.primaryButton}>
            View Plans
          </a>
          <a href="/support" className={styles.secondaryButton}>
            Get Support
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <p>&copy; 2024 Homeland Cable. All rights reserved.</p>
      </footer>
    </div>
  );
}
