import styles from "./page.module.css";

export default function LoginPage() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.hero}>
          <div className={styles.heroContent}>
            <h1 className={styles.title}>
              Welcome Back to <span className={styles.highlight}>Homeland Optical</span>
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
                <input
                  type="email"
                  id="email"
                  name="email"
                  className={styles.input}
                  placeholder="Enter your email address"
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="password" className={styles.label}>Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className={styles.input}
                  placeholder="Enter your password"
                  required
                />
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