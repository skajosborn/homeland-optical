import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";

export default function BundlesPage() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.hero}>
          <div className={styles.heroContent}>
            <h1 className={styles.title}>
              Best <span className={styles.highlight}>Bundles</span>
            </h1>
            <p className={styles.description}>
              Save big with our internet, TV, and phone packages. Get more for less with our exclusive bundles.
            </p>
          </div>
        </div>

        <div className={styles.content}>
          <div className={styles.plansSection}>
            <h2 className={styles.sectionTitle}>Bundle Packages</h2>
            <div className={styles.plansGrid}>
              <div className={styles.planCard}>
                <div className={styles.planHeader}>
                  <h3>Starter Bundle</h3>
                  <div className={styles.price}>
                    <span className={styles.amount}>$89</span>
                    <span className={styles.period}>/month</span>
                  </div>
                  <div className={styles.savings}>Save $20/month</div>
                </div>
                <div className={styles.bundleServices}>
                  <div className={styles.service}>
                    <div className={styles.serviceIcon}>
                      <Image
                        src="/internet.svg"
                        alt="Internet"
                        width={24}
                        height={24}
                        className={styles.iconImage}
                      />
                    </div>
                    <span>100 Mbps Internet</span>
                  </div>
                  <div className={styles.service}>
                    <div className={styles.serviceIcon}>
                      <Image
                        src="/television.svg"
                        alt="TV"
                        width={24}
                        height={24}
                        className={styles.iconImage}
                      />
                    </div>
                    <span>100+ TV Channels</span>
                  </div>
                  <div className={styles.service}>
                    <div className={styles.serviceIcon}>
                      <Image
                        src="/telephone.svg"
                        alt="Phone"
                        width={24}
                        height={24}
                        className={styles.iconImage}
                      />
                    </div>
                    <span>Unlimited Phone</span>
                  </div>
                </div>
                <div className={styles.planFeatures}>
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
                    <span>HD TV receiver</span>
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
                    <span>No contracts</span>
                  </div>
                </div>
                <Link href="/signup" className={styles.planButton}>
                  Get Started
                </Link>
              </div>

              <div className={`${styles.planCard} ${styles.popular}`}>
                <div className={styles.popularBadge}>Most Popular</div>
                <div className={styles.planHeader}>
                  <h3>Family Bundle</h3>
                  <div className={styles.price}>
                    <span className={styles.amount}>$129</span>
                    <span className={styles.period}>/month</span>
                  </div>
                  <div className={styles.savings}>Save $40/month</div>
                </div>
                <div className={styles.bundleServices}>
                  <div className={styles.service}>
                    <div className={styles.serviceIcon}>
                      <Image
                        src="/internet.svg"
                        alt="Internet"
                        width={24}
                        height={24}
                        className={styles.iconImage}
                      />
                    </div>
                    <span>500 Mbps Internet</span>
                  </div>
                  <div className={styles.service}>
                    <div className={styles.serviceIcon}>
                      <Image
                        src="/television.svg"
                        alt="TV"
                        width={24}
                        height={24}
                        className={styles.iconImage}
                      />
                    </div>
                    <span>200+ TV Channels</span>
                  </div>
                  <div className={styles.service}>
                    <div className={styles.serviceIcon}>
                      <Image
                        src="/telephone.svg"
                        alt="Phone"
                        width={24}
                        height={24}
                        className={styles.iconImage}
                      />
                    </div>
                    <span>Unlimited Phone</span>
                  </div>
                </div>
                <div className={styles.planFeatures}>
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
                    <span>DVR included</span>
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
                    <span>Free installation</span>
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

              <div className={styles.planCard}>
                <div className={styles.planHeader}>
                  <h3>Ultimate Bundle</h3>
                  <div className={styles.price}>
                    <span className={styles.amount}>$179</span>
                    <span className={styles.period}>/month</span>
                  </div>
                  <div className={styles.savings}>Save $60/month</div>
                </div>
                <div className={styles.bundleServices}>
                  <div className={styles.service}>
                    <div className={styles.serviceIcon}>
                      <Image
                        src="/internet.svg"
                        alt="Internet"
                        width={24}
                        height={24}
                        className={styles.iconImage}
                      />
                    </div>
                    <span>1 Gbps Internet</span>
                  </div>
                  <div className={styles.service}>
                    <div className={styles.serviceIcon}>
                      <Image
                        src="/television.svg"
                        alt="TV"
                        width={24}
                        height={24}
                        className={styles.iconImage}
                      />
                    </div>
                    <span>300+ TV Channels</span>
                  </div>
                  <div className={styles.service}>
                    <div className={styles.serviceIcon}>
                      <Image
                        src="/telephone.svg"
                        alt="Phone"
                        width={24}
                        height={24}
                        className={styles.iconImage}
                      />
                    </div>
                    <span>Unlimited Phone</span>
                  </div>
                </div>
                <div className={styles.planFeatures}>
                  <div className={styles.feature}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20,6 9,17 4,12"/>
                    </svg>
                    <span>Premium WiFi router</span>
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
                    <span>All premium channels</span>
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
                    <span>Priority support</span>
                  </div>
                </div>
                <Link href="/signup" className={styles.planButton}>
                  Get Started
                </Link>
              </div>
            </div>
          </div>

          <div className={styles.benefitsSection}>
            <h2 className={styles.sectionTitle}>Bundle Benefits</h2>
            <div className={styles.benefitsGrid}>
              <div className={styles.benefitCard}>
                <div className={styles.benefitIcon}>
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <h3>Big Savings</h3>
                <p>Save up to $60 per month compared to purchasing services separately.</p>
              </div>
              <div className={styles.benefitCard}>
                <div className={styles.benefitIcon}>
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                    <circle cx="8.5" cy="8.5" r="1.5"/>
                    <polyline points="21,15 16,10 5,21"/>
                  </svg>
                </div>
                <h3>One Bill</h3>
                <p>Simplify your life with a single monthly bill for all your services.</p>
              </div>
              <div className={styles.benefitCard}>
                <div className={styles.benefitIcon}>
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                    <circle cx="12" cy="7" r="4"/>
                  </svg>
                </div>
                <h3>One Support Team</h3>
                <p>Get help for all your services from our dedicated customer support team.</p>
              </div>
              <div className={styles.benefitCard}>
                <div className={styles.benefitIcon}>
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"/>
                    <polyline points="12,6 12,12 16,14"/>
                  </svg>
                </div>
                <h3>Easy Setup</h3>
                <p>Professional installation of all services in one convenient appointment.</p>
              </div>
            </div>
          </div>

          <div className={styles.comparisonSection}>
            <h2 className={styles.sectionTitle}>Bundle vs. Individual Services</h2>
            <div className={styles.comparisonTable}>
              <div className={styles.tableHeader}>
                <div className={styles.serviceColumn}>Service</div>
                <div className={styles.individualColumn}>Individual</div>
                <div className={styles.bundleColumn}>Bundle</div>
                <div className={styles.savingsColumn}>Savings</div>
              </div>
              <div className={styles.tableRow}>
                <div className={styles.serviceColumn}>Internet (500 Mbps)</div>
                <div className={styles.individualColumn}>$79</div>
                <div className={styles.bundleColumn}>$129</div>
                <div className={styles.savingsColumn}>$40</div>
              </div>
              <div className={styles.tableRow}>
                <div className={styles.serviceColumn}>TV (200+ channels)</div>
                <div className={styles.individualColumn}>$69</div>
                <div className={styles.bundleColumn}>$129</div>
                <div className={styles.savingsColumn}>$40</div>
              </div>
              <div className={styles.tableRow}>
                <div className={styles.serviceColumn}>Phone (Unlimited)</div>
                <div className={styles.individualColumn}>$29</div>
                <div className={styles.bundleColumn}>$129</div>
                <div className={styles.savingsColumn}>$29</div>
              </div>
              <div className={`${styles.tableRow} ${styles.totalRow}`}>
                <div className={styles.serviceColumn}>Total</div>
                <div className={styles.individualColumn}>$177</div>
                <div className={styles.bundleColumn}>$129</div>
                <div className={styles.savingsColumn}>$48</div>
              </div>
            </div>
          </div>

          <div className={styles.ctaSection}>
            <h2>Ready to Start Saving?</h2>
            <p>Choose the bundle that&apos;s right for your family and start enjoying the savings today.</p>
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