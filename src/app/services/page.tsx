import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";

export default function ServicesPage() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.hero}>
          <div className={styles.heroContent}>
            <h1 className={styles.title}>
              Our <span className={styles.highlight}>Services</span>
            </h1>
            <p className={styles.description}>
              Discover our comprehensive range of internet, TV, and bundle services designed for your home.
            </p>
          </div>
        </div>

        <div className={styles.content}>
          <div className={styles.servicesGrid}>
            <div className={styles.serviceCard}>
              <div className={styles.serviceIcon}>
                <Image
                  src="/internet.svg"
                  alt="Internet Service"
                  width={64}
                  height={64}
                  className={styles.iconImage}
                />
              </div>
              <h2>High-Speed Internet</h2>
              <p className={styles.serviceDescription}>
                Lightning-fast internet speeds up to 1Gbps for streaming, gaming, work, and everything in between.
              </p>
              <div className={styles.serviceFeatures}>
                <div className={styles.feature}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="20,6 9,17 4,12"/>
                  </svg>
                  <span>Speeds up to 1Gbps</span>
                </div>
                <div className={styles.feature}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="20,6 9,17 4,12"/>
                  </svg>
                  <span>No data caps</span>
                </div>
                <div className={styles.feature}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="20,6 9,17 4,12"/>
                  </svg>
                  <span>Free WiFi router</span>
                </div>
                <div className={styles.feature}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="20,6 9,17 4,12"/>
                  </svg>
                  <span>24/7 support</span>
                </div>
              </div>
              <div className={styles.serviceActions}>
                <Link href="/internet" className={styles.primaryButton}>
                  View Internet Plans
                </Link>
                <Link href="/signup" className={styles.secondaryButton}>
                  Get Started
                </Link>
              </div>
            </div>

            <div className={styles.serviceCard}>
              <div className={styles.serviceIcon}>
                <Image
                  src="/television.svg"
                  alt="TV Service"
                  width={64}
                  height={64}
                  className={styles.iconImage}
                />
              </div>
              <h2>Crystal Clear TV</h2>
              <p className={styles.serviceDescription}>
                Hundreds of channels with HD and 4K quality, plus premium content and on-demand entertainment.
              </p>
              <div className={styles.serviceFeatures}>
                <div className={styles.feature}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="20,6 9,17 4,12"/>
                  </svg>
                  <span>200+ channels</span>
                </div>
                <div className={styles.feature}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="20,6 9,17 4,12"/>
                  </svg>
                  <span>HD & 4K quality</span>
                </div>
                <div className={styles.feature}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="20,6 9,17 4,12"/>
                  </svg>
                  <span>On-demand content</span>
                </div>
                <div className={styles.feature}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="20,6 9,17 4,12"/>
                  </svg>
                  <span>DVR included</span>
                </div>
              </div>
              <div className={styles.serviceActions}>
                <Link href="/tv" className={styles.primaryButton}>
                  View TV Plans
                </Link>
                <Link href="/signup" className={styles.secondaryButton}>
                  Get Started
                </Link>
              </div>
            </div>

            <div className={styles.serviceCard}>
              <div className={styles.serviceIcon}>
                <Image
                  src="/telephone.svg"
                  alt="Bundle Service"
                  width={64}
                  height={64}
                  className={styles.iconImage}
                />
              </div>
              <h2>Best Bundles</h2>
              <p className={styles.serviceDescription}>
                Save big with our internet, TV, and phone packages. Get more for less with our exclusive bundles.
              </p>
              <div className={styles.serviceFeatures}>
                <div className={styles.feature}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="20,6 9,17 4,12"/>
                  </svg>
                  <span>Save up to 40%</span>
                </div>
                <div className={styles.feature}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="20,6 9,17 4,12"/>
                  </svg>
                  <span>One monthly bill</span>
                </div>
                <div className={styles.feature}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="20,6 9,17 4,12"/>
                  </svg>
                  <span>Free installation</span>
                </div>
                <div className={styles.feature}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="20,6 9,17 4,12"/>
                  </svg>
                  <span>No contracts</span>
                </div>
              </div>
              <div className={styles.serviceActions}>
                <Link href="/bundles" className={styles.primaryButton}>
                  View Bundle Plans
                </Link>
                <Link href="/signup" className={styles.secondaryButton}>
                  Get Started
                </Link>
              </div>
            </div>
          </div>

          <div className={styles.ctaSection}>
            <h2>Ready to Get Started?</h2>
            <p>Choose the service that's right for you and start enjoying lightning-fast internet, crystal-clear TV, and unbeatable savings.</p>
            <div className={styles.ctaButtons}>
              <Link href="/signup" className={styles.ctaPrimaryButton}>
                Sign Up Now
              </Link>
              <Link href="/support" className={styles.ctaSecondaryButton}>
                Get Support
              </Link>
            </div>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <p>&copy; 2024 Homeland Cable. All rights reserved.</p>
      </footer>
    </div>
  );
} 