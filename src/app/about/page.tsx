import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";

export default function AboutPage() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.hero}>
          <div className={styles.heroContent}>
            <h1 className={styles.title}>
              About <span className={styles.highlight}>Homeland Optical Technology</span>
            </h1>
            <p className={styles.description}>
              Connecting communities with cutting-edge technology and exceptional service since 2017.
            </p>
          </div>
        </div>

        <div className={styles.content}>
          {/* Our Story Section */}
          <section className={styles.section}>
            <div className={styles.sectionHeader}>
              <h2>Our Story</h2>
              <p>From humble beginnings to becoming a leading provider of internet, TV, and telecommunications services.</p>
            </div>
            <div className={styles.storyGrid}>
              <div className={styles.storyContent}>
                <h3>A Vision for Connection</h3>
                <p>Founded in 2017, Homeland Optical Technology began with a simple mission: to bridge the digital divide and provide reliable, high-speed internet access to communities that were underserved by traditional providers.</p>
                <p>What started as a small local operation has grown into a trusted name in telecommunications, serving thousands of customers across multiple regions with cutting-edge technology and personalized service.</p>
              </div>
              <div className={styles.storyImage}>
                <Image src="/newhero.svg" alt="Our Journey" width={400} height={300} className={styles.image} />
              </div>
            </div>
          </section>

          {/* Mission & Values Section */}
          <section className={styles.section}>
            <div className={styles.sectionHeader}>
              <h2>Our Mission & Values</h2>
              <p>The principles that guide everything we do.</p>
            </div>
            <div className={styles.valuesGrid}>
              <div className={styles.valueCard}>
                <div className={styles.valueIcon}>
                  <Image src="/internet.svg" alt="Innovation" width={48} height={48} className={styles.image} />
                </div>
                <h3>Innovation</h3>
                <p>We continuously invest in the latest technology to provide our customers with the fastest, most reliable service possible.</p>
              </div>
              <div className={styles.valueCard}>
                <div className={styles.valueIcon}>
                  <Image src="/telephone.svg" alt="Reliability" width={48} height={48} className={styles.image} />
                </div>
                <h3>Reliability</h3>
                <p>Our customers depend on us to stay connected. We maintain 99.9% uptime and provide 24/7 support to ensure uninterrupted service.</p>
              </div>
              <div className={styles.valueCard}>
                <div className={styles.valueIcon}>
                  <Image src="/television.svg" alt="Community" width={48} height={48} className={styles.image} />
                </div>
                <h3>Community</h3>
                <p>We&apos;re not just a service provider&mdash;we&apos;re part of the community. We give back through local initiatives and support programs.</p>
              </div>
              <div className={styles.valueCard}>
                <div className={styles.valueIcon}>
                  <Image src="/globe.svg" alt="Excellence" width={48} height={48} className={styles.image} />
                </div>
                <h3>Excellence</h3>
                <p>We strive for excellence in everything we do, from customer service to network performance to community involvement.</p>
              </div>
            </div>
          </section>

          {/* Stats Section */}
          <section className={styles.section}>
            <div className={styles.statsGrid}>
              <div className={styles.statCard}>
                <div className={styles.statNumber}>7+</div>
                <div className={styles.statLabel}>Years of Service</div>
              </div>
              <div className={styles.statCard}>
                <div className={styles.statNumber}>10,000+</div>
                <div className={styles.statLabel}>Happy Customers</div>
              </div>
              <div className={styles.statCard}>
                <div className={styles.statNumber}>99.9%</div>
                <div className={styles.statLabel}>Uptime Guarantee</div>
              </div>
              <div className={styles.statCard}>
                <div className={styles.statNumber}>24/7</div>
                <div className={styles.statLabel}>Customer Support</div>
              </div>
            </div>
          </section>

          {/* Team Section */}
          <section className={styles.section}>
            <div className={styles.sectionHeader}>
              <h2>Our Leadership Team</h2>
              <p>The dedicated professionals who drive our success.</p>
            </div>
            <div className={styles.teamGrid}>
              <div className={styles.teamMember}>
                <div className={styles.memberAvatar}>
                  <div className={styles.avatarPlaceholder}>JD</div>
                </div>
                <h3>John Doe</h3>
                <p className={styles.memberTitle}>Chief Executive Officer</p>
                <p className={styles.memberBio}>With over 15 years of experience in telecommunications, John leads our company with vision and innovation.</p>
              </div>
              <div className={styles.teamMember}>
                <div className={styles.memberAvatar}>
                  <div className={styles.avatarPlaceholder}>JS</div>
                </div>
                <h3>Jane Smith</h3>
                <p className={styles.memberTitle}>Chief Technology Officer</p>
                <p className={styles.memberBio}>Jane oversees our technical infrastructure and ensures we stay ahead of industry trends and technology.</p>
              </div>
              <div className={styles.teamMember}>
                <div className={styles.memberAvatar}>
                  <div className={styles.avatarPlaceholder}>MJ</div>
                </div>
                <h3>Mike Johnson</h3>
                <p className={styles.memberTitle}>Chief Operations Officer</p>
                <p className={styles.memberBio}>Mike manages our day-to-day operations and ensures smooth service delivery to all our customers.</p>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className={styles.ctaSection}>
            <h2>Ready to Experience the Difference?</h2>
            <p>Join thousands of satisfied customers who trust Homeland Optical Technology for their internet, TV, and telecommunications needs.</p>
            <div className={styles.ctaButtons}>
              <Link href="/signup" className={styles.primaryButton}>Get Started Today</Link>
              <Link href="/contact" className={styles.secondaryButton}>Contact Us</Link>
            </div>
          </section>
        </div>
      </main>

      <footer className={styles.footer}>
        <p>&copy; 2024 Homeland Optical Technology. All rights reserved.</p>
      </footer>
    </div>
  );
} 