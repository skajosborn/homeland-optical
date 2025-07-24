import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";

export default function InternetPage() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.hero}>
          <div className={styles.heroContent}>
            <h1 className={styles.title}>
              High-Speed <span className={styles.highlight}>Internet</span>
            </h1>
            <p className={styles.description}>
              Lightning-fast internet speeds up to 1Gbps for streaming, gaming, work, and everything in between.
            </p>
          </div>
        </div>

        <div className={styles.content}>
          <div className={styles.plansSection}>
            <h2 className={styles.sectionTitle}>Internet Plans</h2>
            <div className={styles.plansGrid}>
              <div className={styles.planCard}>
                <div className={styles.planHeader}>
                  <h3>Basic</h3>
                  <div className={styles.price}>
                    <span className={styles.amount}>$49</span>
                    <span className={styles.period}>/month</span>
                  </div>
                </div>
                <div className={styles.planFeatures}>
                  <div className={styles.feature}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20,6 9,17 4,12"/>
                    </svg>
                    <span>100 Mbps download speed</span>
                  </div>
                  <div className={styles.feature}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20,6 9,17 4,12"/>
                    </svg>
                    <span>10 Mbps upload speed</span>
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
                    <span>No data caps</span>
                  </div>
                  <div className={styles.feature}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20,6 9,17 4,12"/>
                    </svg>
                    <span>24/7 support</span>
                  </div>
                </div>
                <Link href="/signup" className={styles.planButton}>
                  Get Started
                </Link>
              </div>

              <div className={`${styles.planCard} ${styles.popular}`}>
                <div className={styles.popularBadge}>Most Popular</div>
                <div className={styles.planHeader}>
                  <h3>Standard</h3>
                  <div className={styles.price}>
                    <span className={styles.amount}>$79</span>
                    <span className={styles.period}>/month</span>
                  </div>
                </div>
                <div className={styles.planFeatures}>
                  <div className={styles.feature}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20,6 9,17 4,12"/>
                    </svg>
                    <span>500 Mbps download speed</span>
                  </div>
                  <div className={styles.feature}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20,6 9,17 4,12"/>
                    </svg>
                    <span>50 Mbps upload speed</span>
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
                    <span>No data caps</span>
                  </div>
                  <div className={styles.feature}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20,6 9,17 4,12"/>
                    </svg>
                    <span>24/7 support</span>
                  </div>
                  <div className={styles.feature}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20,6 9,17 4,12"/>
                    </svg>
                    <span>Free installation</span>
                  </div>
                </div>
                <Link href="/signup" className={styles.planButton}>
                  Get Started
                </Link>
              </div>

              <div className={styles.planCard}>
                <div className={styles.planHeader}>
                  <h3>Premium</h3>
                  <div className={styles.price}>
                    <span className={styles.amount}>$129</span>
                    <span className={styles.period}>/month</span>
                  </div>
                </div>
                <div className={styles.planFeatures}>
                  <div className={styles.feature}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20,6 9,17 4,12"/>
                    </svg>
                    <span>1 Gbps download speed</span>
                  </div>
                  <div className={styles.feature}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20,6 9,17 4,12"/>
                    </svg>
                    <span>100 Mbps upload speed</span>
                  </div>
                  <div className={styles.feature}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20,6 9,17 4,12"/>
                    </svg>
                    <span>Advanced WiFi router</span>
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
                    <span>24/7 priority support</span>
                  </div>
                  <div className={styles.feature}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20,6 9,17 4,12"/>
                    </svg>
                    <span>Free installation</span>
                  </div>
                </div>
                <Link href="/signup" className={styles.planButton}>
                  Get Started
                </Link>
              </div>
            </div>
          </div>

          <div className={styles.featuresSection}>
            <h2 className={styles.sectionTitle}>Why Choose Our Internet?</h2>
            <div className={styles.featuresGrid}>
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"/>
                    <polyline points="12,6 12,12 16,14"/>
                  </svg>
                </div>
                <h3>Lightning Fast</h3>
                <p>Experience blazing-fast speeds up to 1Gbps for seamless streaming, gaming, and work.</p>
              </div>
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <h3>Reliable Connection</h3>
                <p>99.9% uptime guarantee with advanced network infrastructure and redundancy.</p>
              </div>
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                    <circle cx="12" cy="7" r="4"/>
                  </svg>
                </div>
                <h3>Expert Support</h3>
                <p>24/7 customer support from our dedicated team of internet professionals.</p>
              </div>
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                    <circle cx="8.5" cy="8.5" r="1.5"/>
                    <polyline points="21,15 16,10 5,21"/>
                  </svg>
                </div>
                <h3>No Hidden Fees</h3>
                <p>Transparent pricing with no data caps, overage charges, or surprise fees.</p>
              </div>
            </div>
          </div>

          <div className={styles.ctaSection}>
            <h2>Ready to Experience Lightning-Fast Internet?</h2>
            <p>Join thousands of satisfied customers who trust Homeland Optical for their internet needs.</p>
            <div className={styles.ctaButtons}>
              <Link href="/signup" className={styles.ctaPrimaryButton}>
                Get Started Today
              </Link>
              <Link href="/support" className={styles.ctaSecondaryButton}>
                Learn More
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