import styles from "./page.module.css";

export default function SignupPage() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.hero}>
          <div className={styles.heroContent}>
            <h1 className={styles.title}>
              Sign Up for <span className={styles.highlight}>Homeland Optical</span>
            </h1>
            <p className={styles.description}>
              Get started with lightning-fast internet, crystal-clear TV, and unbeatable bundles.
            </p>
          </div>
        </div>

        <div className={styles.formContainer}>
          <form className={styles.signupForm}>
            <div className={styles.formSection}>
              <h2 className={styles.sectionTitle}>Personal Information</h2>
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="firstName" className={styles.label}>First Name</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    className={styles.input}
                    required
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="lastName" className={styles.label}>Last Name</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    className={styles.input}
                    required
                  />
                </div>
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="email" className={styles.label}>Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className={styles.input}
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="phone" className={styles.label}>Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className={styles.input}
                  required
                />
              </div>
            </div>

            <div className={styles.formSection}>
              <h2 className={styles.sectionTitle}>Service Address</h2>
              <div className={styles.formGroup}>
                <label htmlFor="address" className={styles.label}>Street Address</label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  className={styles.input}
                  required
                />
              </div>
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="city" className={styles.label}>City</label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    className={styles.input}
                    required
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="state" className={styles.label}>State</label>
                  <select id="state" name="state" className={styles.select} required>
                    <option value="">Select State</option>
                    <option value="AL">Alabama</option>
                    <option value="AK">Alaska</option>
                    <option value="AZ">Arizona</option>
                    <option value="AR">Arkansas</option>
                    <option value="CA">California</option>
                    <option value="CO">Colorado</option>
                    <option value="CT">Connecticut</option>
                    <option value="DE">Delaware</option>
                    <option value="FL">Florida</option>
                    <option value="GA">Georgia</option>
                    <option value="HI">Hawaii</option>
                    <option value="ID">Idaho</option>
                    <option value="IL">Illinois</option>
                    <option value="IN">Indiana</option>
                    <option value="IA">Iowa</option>
                    <option value="KS">Kansas</option>
                    <option value="KY">Kentucky</option>
                    <option value="LA">Louisiana</option>
                    <option value="ME">Maine</option>
                    <option value="MD">Maryland</option>
                    <option value="MA">Massachusetts</option>
                    <option value="MI">Michigan</option>
                    <option value="MN">Minnesota</option>
                    <option value="MS">Mississippi</option>
                    <option value="MO">Missouri</option>
                    <option value="MT">Montana</option>
                    <option value="NE">Nebraska</option>
                    <option value="NV">Nevada</option>
                    <option value="NH">New Hampshire</option>
                    <option value="NJ">New Jersey</option>
                    <option value="NM">New Mexico</option>
                    <option value="NY">New York</option>
                    <option value="NC">North Carolina</option>
                    <option value="ND">North Dakota</option>
                    <option value="OH">Ohio</option>
                    <option value="OK">Oklahoma</option>
                    <option value="OR">Oregon</option>
                    <option value="PA">Pennsylvania</option>
                    <option value="RI">Rhode Island</option>
                    <option value="SC">South Carolina</option>
                    <option value="SD">South Dakota</option>
                    <option value="TN">Tennessee</option>
                    <option value="TX">Texas</option>
                    <option value="UT">Utah</option>
                    <option value="VT">Vermont</option>
                    <option value="VA">Virginia</option>
                    <option value="WA">Washington</option>
                    <option value="WV">West Virginia</option>
                    <option value="WI">Wisconsin</option>
                    <option value="WY">Wyoming</option>
                  </select>
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="zipCode" className={styles.label}>ZIP Code</label>
                  <input
                    type="text"
                    id="zipCode"
                    name="zipCode"
                    className={styles.input}
                    required
                  />
                </div>
              </div>
            </div>

            <div className={styles.formSection}>
              <h2 className={styles.sectionTitle}>Service Selection</h2>
              <div className={styles.serviceOptions}>
                <div className={styles.serviceOption}>
                  <input
                    type="checkbox"
                    id="internet"
                    name="services"
                    value="internet"
                    className={styles.checkbox}
                  />
                  <label htmlFor="internet" className={styles.checkboxLabel}>
                    <span className={styles.serviceName}>High-Speed Internet</span>
                    <span className={styles.servicePrice}>Starting at $49.99/month</span>
                  </label>
                </div>
                <div className={styles.serviceOption}>
                  <input
                    type="checkbox"
                    id="tv"
                    name="services"
                    value="tv"
                    className={styles.checkbox}
                  />
                  <label htmlFor="tv" className={styles.checkboxLabel}>
                    <span className={styles.serviceName}>Crystal Clear TV</span>
                    <span className={styles.servicePrice}>Starting at $39.99/month</span>
                  </label>
                </div>
                <div className={styles.serviceOption}>
                  <input
                    type="checkbox"
                    id="phone"
                    name="services"
                    value="phone"
                    className={styles.checkbox}
                  />
                  <label htmlFor="phone" className={styles.checkboxLabel}>
                    <span className={styles.serviceName}>Home Phone</span>
                    <span className={styles.servicePrice}>Starting at $19.99/month</span>
                  </label>
                </div>
              </div>
            </div>

            <div className={styles.formActions}>
              <button type="submit" className={styles.submitButton}>
                Complete Sign Up
              </button>
              <p className={styles.disclaimer}>
                By signing up, you agree to our Terms of Service and Privacy Policy.
              </p>
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