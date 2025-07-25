import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";

export default function NewsPage() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.hero}>
          <div className={styles.heroContent}>
            <h1 className={styles.title}>
              <span className={styles.highlight}>News</span> & Updates
            </h1>
            <p className={styles.description}>
              Stay informed about the latest developments, service improvements, and company announcements from Homeland Optical Technology.
            </p>
          </div>
        </div>

        <div className={styles.content}>
          <div className={styles.newsGrid}>
            {/* Featured News Article */}
            <article className={styles.featuredArticle}>
              <div className={styles.articleImage}>
                <Image src="/newhero.svg" alt="Network Upgrade" width={400} height={250} className={styles.image} />
              </div>
              <div className={styles.articleContent}>
                <div className={styles.articleMeta}>
                  <span className={styles.category}>Featured</span>
                  <span className={styles.date}>December 15, 2024</span>
                </div>
                <h2>Major Network Upgrade Completed</h2>
                <p>We're excited to announce the completion of our major network infrastructure upgrade, bringing even faster speeds and improved reliability to all our customers. This upgrade includes new fiber optic connections and enhanced routing technology.</p>
                <Link href="#" className={styles.readMore}>Read Full Article</Link>
              </div>
            </article>

            {/* Regular News Articles */}
            <article className={styles.newsArticle}>
              <div className={styles.articleImage}>
                <Image src="/internet.svg" alt="Speed Increase" width={100} height={200} className={styles.image} />
              </div>
              <div className={styles.articleContent}>
                <div className={styles.articleMeta}>
                  <span className={styles.category}>Service Update</span>
                  <span className={styles.date}>December 10, 2024</span>
                </div>
                <h3>Speed Boost for Premium Customers</h3>
                <p>Premium internet customers will now enjoy up to 25% faster download speeds at no additional cost. This improvement is part of our ongoing commitment to providing the best possible service.</p>
                <Link href="#" className={styles.readMore}>Read More</Link>
              </div>
            </article>

            <article className={styles.newsArticle}>
              <div className={styles.articleImage}>
                <Image src="/television.svg" alt="New Channels" width={100} height={200} className={styles.image} />
              </div>
              <div className={styles.articleContent}>
                <div className={styles.articleMeta}>
                  <span className={styles.category}>TV Update</span>
                  <span className={styles.date}>December 8, 2024</span>
                </div>
                <h3>New Premium Channels Added</h3>
                <p>We've added 15 new premium channels to our TV lineup, including popular sports networks and entertainment channels. Check your package to see what's new!</p>
                <Link href="#" className={styles.readMore}>Read More</Link>
              </div>
            </article>

            <article className={styles.newsArticle}>
              <div className={styles.articleImage}>
                <Image src="/telephone.svg" alt="Customer Service" width={100} height={200} className={styles.image} />
              </div>
              <div className={styles.articleContent}>
                <div className={styles.articleMeta}>
                  <span className={styles.category}>Company News</span>
                  <span className={styles.date}>December 5, 2024</span>
                </div>
                <h3>24/7 Customer Support Now Available</h3>
                <p>We're proud to announce that our customer support team is now available 24/7. Get help whenever you need it, day or night, through phone, chat, or email.</p>
                <Link href="#" className={styles.readMore}>Read More</Link>
              </div>
            </article>

            <article className={styles.newsArticle}>
              <div className={styles.articleImage}>
                <Image src="/globe.svg" alt="App Launch" width={100} height={200} className={styles.image} />
              </div>
              <div className={styles.articleContent}>
                <div className={styles.articleMeta}>
                  <span className={styles.category}>App Update</span>
                  <span className={styles.date}>December 1, 2024</span>
                </div>
                <h3>New Mobile App Features</h3>
                <p>Our mobile app has been updated with new features including bill payment, service status monitoring, and real-time usage tracking. Download the latest version today!</p>
                <Link href="#" className={styles.readMore}>Read More</Link>
              </div>
            </article>

            <article className={styles.newsArticle}>
              <div className={styles.articleImage}>
                <Image src="/window.svg" alt="Community" width={100} height={200} className={styles.image} />
              </div>
              <div className={styles.articleContent}>
                <div className={styles.articleMeta}>
                  <span className={styles.category}>Community</span>
                  <span className={styles.date}>November 28, 2024</span>
                </div>
                <h3>Community Internet Access Program</h3>
                <p>We're launching a new program to provide free internet access to local schools and community centers. This initiative aims to bridge the digital divide in our community.</p>
                <Link href="#" className={styles.readMore}>Read More</Link>
              </div>
            </article>
          </div>

          <div className={styles.newsletter}>
            <h2>Stay Updated</h2>
            <p>Subscribe to our newsletter to receive the latest news and updates directly in your inbox.</p>
            <div className={styles.newsletterForm}>
              <input type="email" placeholder="Enter your email address" className={styles.emailInput} />
              <button className={styles.subscribeButton}>Subscribe</button>
            </div>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <p>&copy; 2024 Homeland Optical Technology. All rights reserved.</p>
      </footer>
    </div>
  );
} 