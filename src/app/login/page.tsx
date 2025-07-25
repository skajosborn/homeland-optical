import Image from "next/image";
import styles from "./page.module.css";

export default function LoginPage() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.hero}>
          <div className={styles.heroContent}>
            <h1 className={styles.title}>
              Welcome Back to <span className={styles.highlight}>Homeland Optical Technology</span>
            </h1>
            <p className={styles.description}>
              Sign in to manage your account, view bills, and access support.
            </p>
          </div>
        </div>

        <div className={styles.formContainer}>
          <form className={styles.loginForm}>
            <div className={styles.formSection}>
              <h2 className={styles.sectionTitle}>Sign In</h2>
              
              <div className={styles.formGroup}>
                <label htmlFor="email" className={styles.label}>Email Address</label>
                <div className={styles.inputWrapper}>
                  <svg className={styles.inputIcon} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className={styles.input}
                    placeholder="john.doe@example.com"
                    required
                  />
                </div>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="password" className={styles.label}>Password</label>
                <div className={styles.inputWrapper}>
                  <svg className={styles.inputIcon} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                    <circle cx="12" cy="16" r="1"/>
                    <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                  </svg>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    className={styles.input}
                    placeholder="Enter your password"
                    required
                  />
                </div>
              </div>

              <div className={styles.formOptions}>
                <div className={styles.rememberMe}>
                  <input
                    type="checkbox"
                    id="remember"
                    name="remember"
                    className={styles.checkbox}
                  />
                  <label htmlFor="remember" className={styles.checkboxLabel}>
                    Remember me
                  </label>
                </div>
                <a href="/forgot-password" className={styles.forgotPassword}>
                  Forgot Password?
                </a>
              </div>
            </div>

            <div className={styles.formActions}>
              <button type="submit" className={styles.submitButton}>
                Sign In
              </button>
              
              <div className={styles.divider}>
                <span>or</span>
              </div>

              <div className={styles.alternativeActions}>
                <p className={styles.noAccount}>
                  Don't have an account? <a href="/signup" className={styles.link}>Sign up here</a>
                </p>
                <p className={styles.helpText}>
                  Need help? <a href="/support" className={styles.link}>Contact Support</a>
                </p>
              </div>
            </div>
          </form>
        </div>
      </main>

      <footer className={styles.footer}>
        <p>&copy; 2024 Homeland Cable. All rights reserved.</p>
      </footer>
    </div>
  );
} 