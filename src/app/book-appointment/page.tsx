import styles from "./page.module.css";

export default function BookAppointmentPage() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.hero}>
          <div className={styles.heroContent}>
            <h1 className={styles.title}>
              Book a <span className={styles.highlight}>Service Appointment</span>
            </h1>
            <p className={styles.description}>
              Schedule installation, repair, or maintenance services with our expert technicians.
            </p>
          </div>
        </div>

        <div className={styles.formContainer}>
          <form className={styles.appointmentForm}>
            <div className={styles.formSection}>
              <h2 className={styles.sectionTitle}>Customer Information</h2>
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="firstName" className={styles.label}>First Name</label>
                  <div className={styles.inputWrapper}>
                    <svg className={styles.inputIcon} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                      <circle cx="12" cy="7" r="4"/>
                    </svg>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      className={styles.input}
                      placeholder="John"
                      required
                    />
                  </div>
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="lastName" className={styles.label}>Last Name</label>
                  <div className={styles.inputWrapper}>
                    <svg className={styles.inputIcon} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                      <circle cx="12" cy="7" r="4"/>
                    </svg>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      className={styles.input}
                      placeholder="Doe"
                      required
                    />
                  </div>
                </div>
              </div>
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
                <label htmlFor="phone" className={styles.label}>Phone Number</label>
                <div className={styles.inputWrapper}>
                  <svg className={styles.inputIcon} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className={styles.input}
                    placeholder="(555) 123-4567"
                    required
                  />
                </div>
              </div>
            </div>

            <div className={styles.formSection}>
              <h2 className={styles.sectionTitle}>Service Address</h2>
              <div className={styles.formGroup}>
                <label htmlFor="address" className={styles.label}>Street Address</label>
                <div className={styles.inputWrapper}>
                  <svg className={styles.inputIcon} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    className={styles.input}
                    placeholder="123 Main Street"
                    required
                  />
                </div>
              </div>
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="city" className={styles.label}>City</label>
                  <div className={styles.inputWrapper}>
                    <svg className={styles.inputIcon} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                      <circle cx="12" cy="10" r="3"/>
                    </svg>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      className={styles.input}
                      placeholder="New York"
                      required
                    />
                  </div>
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="state" className={styles.label}>State</label>
                  <div className={styles.inputWrapper}>
                    <svg className={styles.inputIcon} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                      <circle cx="12" cy="10" r="3"/>
                    </svg>
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
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="zipCode" className={styles.label}>ZIP Code</label>
                  <div className={styles.inputWrapper}>
                    <svg className={styles.inputIcon} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                      <circle cx="12" cy="10" r="3"/>
                    </svg>
                    <input
                      type="text"
                      id="zipCode"
                      name="zipCode"
                      className={styles.input}
                      placeholder="10001"
                      required
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.formSection}>
              <h2 className={styles.sectionTitle}>Service Details</h2>
              <div className={styles.formGroup}>
                <label htmlFor="serviceType" className={styles.label}>Service Type</label>
                <div className={styles.inputWrapper}>
                  <svg className={styles.inputIcon} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
                  </svg>
                  <select id="serviceType" name="serviceType" className={styles.select} required>
                    <option value="">Select Service Type</option>
                    <option value="installation">New Installation</option>
                    <option value="repair">Repair Service</option>
                    <option value="maintenance">Maintenance</option>
                    <option value="upgrade">Service Upgrade</option>
                    <option value="troubleshooting">Troubleshooting</option>
                    <option value="relocation">Service Relocation</option>
                  </select>
                </div>
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="serviceCategory" className={styles.label}>Service Category</label>
                <div className={styles.inputWrapper}>
                  <svg className={styles.inputIcon} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                    <line x1="8" y1="21" x2="16" y2="21"/>
                    <line x1="12" y1="17" x2="12" y2="21"/>
                  </svg>
                  <select id="serviceCategory" name="serviceCategory" className={styles.select} required>
                    <option value="">Select Service Category</option>
                    <option value="internet">Internet Service</option>
                    <option value="tv">TV Service</option>
                    <option value="phone">Phone Service</option>
                    <option value="bundle">Bundle Service</option>
                    <option value="equipment">Equipment</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="description" className={styles.label}>Service Description</label>
                <textarea
                  id="description"
                  name="description"
                  className={styles.textarea}
                  placeholder="Please describe the issue or service you need..."
                  rows={4}
                  required
                ></textarea>
              </div>
            </div>

            <div className={styles.formSection}>
              <h2 className={styles.sectionTitle}>Appointment Scheduling</h2>
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="preferredDate" className={styles.label}>Preferred Date</label>
                  <div className={styles.inputWrapper}>
                    <svg className={styles.inputIcon} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                      <line x1="16" y1="2" x2="16" y2="6"/>
                      <line x1="8" y1="2" x2="8" y2="6"/>
                      <line x1="3" y1="10" x2="21" y2="10"/>
                    </svg>
                    <input
                      type="date"
                      id="preferredDate"
                      name="preferredDate"
                      className={styles.input}
                      required
                    />
                  </div>
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="preferredTime" className={styles.label}>Preferred Time</label>
                  <div className={styles.inputWrapper}>
                    <svg className={styles.inputIcon} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10"/>
                      <polyline points="12,6 12,12 16,14"/>
                    </svg>
                    <select id="preferredTime" name="preferredTime" className={styles.select} required>
                      <option value="">Select Time</option>
                      <option value="morning">Morning (8:00 AM - 12:00 PM)</option>
                      <option value="afternoon">Afternoon (12:00 PM - 4:00 PM)</option>
                      <option value="evening">Evening (4:00 PM - 8:00 PM)</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="urgency" className={styles.label}>Urgency Level</label>
                <div className={styles.urgencyOptions}>
                  <div className={styles.urgencyOption}>
                    <input
                      type="radio"
                      id="low"
                      name="urgency"
                      value="low"
                      className={styles.radio}
                    />
                    <label htmlFor="low" className={styles.radioLabel}>
                      <span className={styles.urgencyName}>Low Priority</span>
                      <span className={styles.urgencyDescription}>General maintenance or non-urgent issues</span>
                    </label>
                  </div>
                  <div className={styles.urgencyOption}>
                    <input
                      type="radio"
                      id="medium"
                      name="urgency"
                      value="medium"
                      className={styles.radio}
                    />
                    <label htmlFor="medium" className={styles.radioLabel}>
                      <span className={styles.urgencyName}>Medium Priority</span>
                      <span className={styles.urgencyDescription}>Service issues affecting daily use</span>
                    </label>
                  </div>
                  <div className={styles.urgencyOption}>
                    <input
                      type="radio"
                      id="high"
                      name="urgency"
                      value="high"
                      className={styles.radio}
                    />
                    <label htmlFor="high" className={styles.radioLabel}>
                      <span className={styles.urgencyName}>High Priority</span>
                      <span className={styles.urgencyDescription}>Complete service outage or critical issues</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.formSection}>
              <h2 className={styles.sectionTitle}>Additional Information</h2>
              <div className={styles.formGroup}>
                <label htmlFor="accessNotes" className={styles.label}>Access Notes</label>
                <textarea
                  id="accessNotes"
                  name="accessNotes"
                  className={styles.textarea}
                  placeholder="Any special access instructions, gate codes, or notes for the technician..."
                  rows={3}
                ></textarea>
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="contactPreference" className={styles.label}>Contact Preference</label>
                <div className={styles.contactOptions}>
                  <div className={styles.contactOption}>
                    <input
                      type="checkbox"
                      id="emailContact"
                      name="contactPreference"
                      value="email"
                      className={styles.checkbox}
                    />
                    <label htmlFor="emailContact" className={styles.checkboxLabel}>
                      Email updates
                    </label>
                  </div>
                  <div className={styles.contactOption}>
                    <input
                      type="checkbox"
                      id="phoneContact"
                      name="contactPreference"
                      value="phone"
                      className={styles.checkbox}
                    />
                    <label htmlFor="phoneContact" className={styles.checkboxLabel}>
                      Phone calls
                    </label>
                  </div>
                  <div className={styles.contactOption}>
                    <input
                      type="checkbox"
                      id="textContact"
                      name="contactPreference"
                      value="text"
                      className={styles.checkbox}
                    />
                    <label htmlFor="textContact" className={styles.checkboxLabel}>
                      Text messages
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.formActions}>
              <button type="submit" className={styles.submitButton}>
                Schedule Appointment
              </button>
              <p className={styles.disclaimer}>
                By scheduling this appointment, you agree to our Terms of Service and Privacy Policy. 
                A confirmation will be sent to your email address.
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