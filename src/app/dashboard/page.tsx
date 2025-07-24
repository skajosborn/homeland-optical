import Image from "next/image";
import styles from "./page.module.css";

export default function DashboardPage() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        {/* Header Section */}
        <div className={styles.header}>
          <div className={styles.welcomeSection}>
            <h1 className={styles.welcomeTitle}>Welcome back, John!</h1>
            <p className={styles.welcomeSubtitle}>Here's your account overview</p>
          </div>
          <div className={styles.accountActions}>
            <button className={styles.actionButton}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
              </svg>
              Edit Profile
            </button>
            <button className={styles.actionButton}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              Support
            </button>
          </div>
        </div>

        {/* Quick Stats */}
        <div className={styles.statsGrid}>
          <div className={styles.statCard}>
            <div className={styles.statIcon}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
              </svg>
            </div>
            <div className={styles.statContent}>
              <h3 className={styles.statValue}>1.2 GB</h3>
              <p className={styles.statLabel}>Data Used Today</p>
            </div>
          </div>

          <div className={styles.statCard}>
            <div className={styles.statIcon}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/>
              </svg>
            </div>
            <div className={styles.statContent}>
              <h3 className={styles.statValue}>$89.99</h3>
              <p className={styles.statLabel}>Current Bill</p>
            </div>
          </div>

          <div className={styles.statCard}>
            <div className={styles.statIcon}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
              </svg>
            </div>
            <div className={styles.statContent}>
              <h3 className={styles.statValue}>150 Mbps</h3>
              <p className={styles.statLabel}>Current Speed</p>
            </div>
          </div>

          <div className={styles.statCard}>
            <div className={styles.statIcon}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"/>
                <polyline points="12,6 12,12 16,14"/>
              </svg>
            </div>
            <div className={styles.statContent}>
              <h3 className={styles.statValue}>Dec 15</h3>
              <p className={styles.statLabel}>Due Date</p>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className={styles.dashboardGrid}>
          {/* Current Plan */}
          <div className={styles.dashboardCard}>
            <div className={styles.cardHeader}>
              <h2 className={styles.cardTitle}>Current Plan</h2>
              <button className={styles.upgradeButton}>Upgrade</button>
            </div>
            <div className={styles.planDetails}>
              <div className={styles.planInfo}>
                <h3 className={styles.planName}>Premium Bundle</h3>
                <p className={styles.planDescription}>Internet + TV + Phone</p>
                <div className={styles.planFeatures}>
                  <span className={styles.feature}>150 Mbps Internet</span>
                  <span className={styles.feature}>200+ TV Channels</span>
                  <span className={styles.feature}>Unlimited Calling</span>
                </div>
              </div>
              <div className={styles.planPrice}>
                <span className={styles.price}>$89.99</span>
                <span className={styles.period}>/month</span>
              </div>
            </div>
          </div>

          {/* Usage Analytics */}
          <div className={styles.dashboardCard}>
            <div className={styles.cardHeader}>
              <h2 className={styles.cardTitle}>Usage Analytics</h2>
              <select className={styles.timeSelect}>
                <option>Last 7 days</option>
                <option>Last 30 days</option>
                <option>Last 3 months</option>
              </select>
            </div>
            <div className={styles.usageChart}>
              <div className={styles.chartPlaceholder}>
                <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                  <path d="M3 3v18h18"/>
                  <path d="M18 17V9"/>
                  <path d="M13 17V5"/>
                  <path d="M8 17v-3"/>
                </svg>
                <p>Usage Chart</p>
              </div>
            </div>
            <div className={styles.usageStats}>
              <div className={styles.usageStat}>
                <span className={styles.usageLabel}>Data Used</span>
                <span className={styles.usageValue}>45.2 GB / 100 GB</span>
              </div>
              <div className={styles.usageStat}>
                <span className={styles.usageLabel}>Peak Hours</span>
                <span className={styles.usageValue}>7-9 PM</span>
              </div>
            </div>
          </div>

          {/* Recent Bills */}
          <div className={styles.dashboardCard}>
            <div className={styles.cardHeader}>
              <h2 className={styles.cardTitle}>Recent Bills</h2>
              <a href="/billing" className={styles.viewAllLink}>View All</a>
            </div>
            <div className={styles.billsList}>
              <div className={styles.billItem}>
                <div className={styles.billInfo}>
                  <h4 className={styles.billMonth}>December 2024</h4>
                  <p className={styles.billDate}>Due: Dec 15, 2024</p>
                </div>
                <div className={styles.billAmount}>
                  <span className={styles.amount}>$89.99</span>
                  <span className={`${styles.status} ${styles.unpaid}`}>Unpaid</span>
                </div>
              </div>
              <div className={styles.billItem}>
                <div className={styles.billInfo}>
                  <h4 className={styles.billMonth}>November 2024</h4>
                  <p className={styles.billDate}>Paid: Nov 15, 2024</p>
                </div>
                <div className={styles.billAmount}>
                  <span className={styles.amount}>$89.99</span>
                  <span className={`${styles.status} ${styles.paid}`}>Paid</span>
                </div>
              </div>
              <div className={styles.billItem}>
                <div className={styles.billInfo}>
                  <h4 className={styles.billMonth}>October 2024</h4>
                  <p className={styles.billDate}>Paid: Oct 15, 2024</p>
                </div>
                <div className={styles.billAmount}>
                  <span className={styles.amount}>$89.99</span>
                  <span className={`${styles.status} ${styles.paid}`}>Paid</span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className={styles.dashboardCard}>
            <div className={styles.cardHeader}>
              <h2 className={styles.cardTitle}>Quick Actions</h2>
            </div>
            <div className={styles.quickActions}>
              <a href="/pay-bill" className={styles.quickAction}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/>
                </svg>
                Pay Bill
              </a>
              <button className={styles.quickAction}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                Get Support
              </button>
              <button className={styles.quickAction}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
                </svg>
                Update Plan
              </button>
              <button className={styles.quickAction}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4M10 17l5-5-5-5M13.8 12H3"/>
                </svg>
                Download Bill
              </button>
            </div>
          </div>

          {/* Service Status */}
          <div className={styles.dashboardCard}>
            <div className={styles.cardHeader}>
              <h2 className={styles.cardTitle}>Service Status</h2>
            </div>
            <div className={styles.serviceStatus}>
              <div className={styles.serviceItem}>
                <div className={styles.serviceIcon}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
                  </svg>
                </div>
                <div className={styles.serviceInfo}>
                  <h4 className={styles.serviceName}>Internet</h4>
                  <span className={`${styles.status} ${styles.online}`}>Online</span>
                </div>
              </div>
              <div className={styles.serviceItem}>
                <div className={styles.serviceIcon}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                    <line x1="8" y1="21" x2="16" y2="21"/>
                    <line x1="12" y1="17" x2="12" y2="21"/>
                  </svg>
                </div>
                <div className={styles.serviceInfo}>
                  <h4 className={styles.serviceName}>TV</h4>
                  <span className={`${styles.status} ${styles.online}`}>Online</span>
                </div>
              </div>
              <div className={styles.serviceItem}>
                <div className={styles.serviceIcon}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                </div>
                <div className={styles.serviceInfo}>
                  <h4 className={styles.serviceName}>Phone</h4>
                  <span className={`${styles.status} ${styles.online}`}>Online</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 