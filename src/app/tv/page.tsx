import Link from "next/link";

import styles from "./page.module.css";

export default function TVPage() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.hero}>
          <div className={styles.heroContent}>
            <h1 className={styles.title}>
              Crystal Clear <span className={styles.highlight}>TV</span>
            </h1>
            <p className={styles.description}>
              Hundreds of channels with HD and 4K quality, plus premium content and on-demand entertainment.
            </p>
          </div>
        </div>

        <div className={styles.content}>
          <div className={styles.plansSection}>
            <h2 className={styles.sectionTitle}>TV Packages</h2>
            <div className={styles.plansGrid}>
              <div className={styles.planCard}>
                <div className={styles.planHeader}>
                  <h3>Basic</h3>
                  <div className={styles.price}>
                    <span className={styles.amount}>$39</span>
                    <span className={styles.period}>/month</span>
                  </div>
                </div>
                <div className={styles.planFeatures}>
                  <div className={styles.feature}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20,6 9,17 4,12"/>
                    </svg>
                    <span>100+ channels</span>
                  </div>
                  <div className={styles.feature}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20,6 9,17 4,12"/>
                    </svg>
                    <span>HD quality</span>
                  </div>
                  <div className={styles.feature}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20,6 9,17 4,12"/>
                    </svg>
                    <span>Local channels</span>
                  </div>
                  <div className={styles.feature}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20,6 9,17 4,12"/>
                    </svg>
                    <span>News & sports</span>
                  </div>
                  <div className={styles.feature}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20,6 9,17 4,12"/>
                    </svg>
                    <span>Free HD receiver</span>
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
                    <span className={styles.amount}>$69</span>
                    <span className={styles.period}>/month</span>
                  </div>
                </div>
                <div className={styles.planFeatures}>
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
                    <span>Premium channels</span>
                  </div>
                  <div className={styles.feature}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20,6 9,17 4,12"/>
                    </svg>
                    <span>DVR included</span>
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
                    <span className={styles.amount}>$99</span>
                    <span className={styles.period}>/month</span>
                  </div>
                </div>
                <div className={styles.planFeatures}>
                  <div className={styles.feature}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20,6 9,17 4,12"/>
                    </svg>
                    <span>300+ channels</span>
                  </div>
                  <div className={styles.feature}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20,6 9,17 4,12"/>
                    </svg>
                    <span>4K Ultra HD</span>
                  </div>
                  <div className={styles.feature}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20,6 9,17 4,12"/>
                    </svg>
                    <span>All premium channels</span>
                  </div>
                  <div className={styles.feature}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20,6 9,17 4,12"/>
                    </svg>
                    <span>Advanced DVR</span>
                  </div>
                  <div className={styles.feature}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20,6 9,17 4,12"/>
                    </svg>
                    <span>Unlimited on-demand</span>
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

          <div className={styles.channelsSection}>
            <h2 className={styles.sectionTitle}>Popular Channels</h2>
            <div className={styles.channelsGrid}>
              <div className={styles.channelCategory}>
                <h3>News & Information</h3>
                <div className={styles.channelList}>
                  <span>CNN</span>
                  <span>Fox News</span>
                  <span>MSNBC</span>
                  <span>BBC America</span>
                  <span>CNBC</span>
                  <span>Weather Channel</span>
                </div>
              </div>
              <div className={styles.channelCategory}>
                <h3>Sports</h3>
                <div className={styles.channelList}>
                  <span>ESPN</span>
                  <span>ESPN2</span>
                  <span>Fox Sports</span>
                  <span>NBC Sports</span>
                  <span>Golf Channel</span>
                  <span>NFL Network</span>
                </div>
              </div>
              <div className={styles.channelCategory}>
                <h3>Entertainment</h3>
                <div className={styles.channelList}>
                  <span>HBO</span>
                  <span>Showtime</span>
                  <span>Starz</span>
                  <span>FX</span>
                  <span>AMC</span>
                  <span>Comedy Central</span>
                </div>
              </div>
              <div className={styles.channelCategory}>
                <h3>Family & Kids</h3>
                <div className={styles.channelList}>
                  <span>Disney Channel</span>
                  <span>Nickelodeon</span>
                  <span>Cartoon Network</span>
                  <span>PBS Kids</span>
                  <span>Discovery Kids</span>
                  <span>Family Channel</span>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.featuresSection}>
            <h2 className={styles.sectionTitle}>Why Choose Our TV Service?</h2>
            <div className={styles.featuresGrid}>
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                    <line x1="8" y1="21" x2="16" y2="21"/>
                    <line x1="12" y1="17" x2="12" y2="21"/>
                  </svg>
                </div>
                <h3>Crystal Clear Picture</h3>
                <p>Experience stunning HD and 4K Ultra HD quality with advanced video processing technology.</p>
              </div>
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"/>
                    <polyline points="12,6 12,12 16,14"/>
                  </svg>
                </div>
                <h3>Never Miss a Show</h3>
                <p>Advanced DVR with hundreds of hours of storage to record your favorite shows and movies.</p>
              </div>
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <h3>Premium Content</h3>
                <p>Access to the latest movies, TV shows, and exclusive content from top networks and studios.</p>
              </div>
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                    <circle cx="12" cy="7" r="4"/>
                  </svg>
                </div>
                <h3>Expert Support</h3>
                <p>24/7 customer support and professional installation from our dedicated TV specialists.</p>
              </div>
            </div>
          </div>

          <div className={styles.ctaSection}>
            <h2>Ready for the Ultimate TV Experience?</h2>
            <p>Join thousands of satisfied customers who enjoy crystal-clear TV with Homeland Optical.</p>
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