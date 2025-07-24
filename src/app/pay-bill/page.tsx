import Image from "next/image";
import styles from "./page.module.css";

export default function PayBillPage() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        {/* Header Section */}
        <div className={styles.header}>
          <div className={styles.headerContent}>
            <h1 className={styles.title}>Pay Your Bill</h1>
            <p className={styles.subtitle}>Secure and convenient payment options</p>
          </div>
        </div>

        <div className={styles.contentGrid}>
          {/* Bill Summary */}
          <div className={styles.billSummary}>
            <div className={styles.summaryCard}>
              <h2 className={styles.cardTitle}>Bill Summary</h2>
              
              <div className={styles.billDetails}>
                <div className={styles.billRow}>
                  <span className={styles.billLabel}>Account Number</span>
                  <span className={styles.billValue}>123456789</span>
                </div>
                <div className={styles.billRow}>
                  <span className={styles.billLabel}>Service Address</span>
                  <span className={styles.billValue}>123 Main St, Anytown, ST 12345</span>
                </div>
                <div className={styles.billRow}>
                  <span className={styles.billLabel}>Billing Period</span>
                  <span className={styles.billValue}>Dec 1 - Dec 31, 2024</span>
                </div>
                <div className={styles.billRow}>
                  <span className={styles.billLabel}>Due Date</span>
                  <span className={styles.billValue}>Dec 15, 2024</span>
                </div>
              </div>

              <div className={styles.billBreakdown}>
                <h3 className={styles.breakdownTitle}>Bill Breakdown</h3>
                <div className={styles.breakdownItem}>
                  <span>Premium Bundle (Internet + TV + Phone)</span>
                  <span>$89.99</span>
                </div>
                <div className={styles.breakdownItem}>
                  <span>Equipment Rental</span>
                  <span>$12.99</span>
                </div>
                <div className={styles.breakdownItem}>
                  <span>Taxes & Fees</span>
                  <span>$8.45</span>
                </div>
                <div className={styles.breakdownTotal}>
                  <span>Total Amount Due</span>
                  <span>$111.43</span>
                </div>
              </div>

              {/* Pay Now Button */}
              <div className={styles.payNowSection}>
                <button type="submit" className={styles.payNowButton}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/>
                  </svg>
                  Pay $111.43
                </button>
              </div>
            </div>
          </div>

          {/* Payment Form */}
          <div className={styles.paymentSection}>
            <div className={styles.paymentCard}>
              <h2 className={styles.cardTitle}>Payment Information</h2>
              
              <form className={styles.paymentForm}>
                {/* Payment Method Selection */}
                <div className={styles.formSection}>
                  <h3 className={styles.sectionTitle}>Payment Method</h3>
                  <div className={styles.paymentMethods}>
                    <label className={styles.paymentMethod}>
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="card"
                        defaultChecked
                        className={styles.radio}
                      />
                      <div className={styles.methodContent}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <rect x="1" y="4" width="22" height="16" rx="2" ry="2"/>
                          <line x1="1" y1="10" x2="23" y2="10"/>
                        </svg>
                        <span>Credit/Debit Card</span>
                      </div>
                    </label>
                    <label className={styles.paymentMethod}>
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="bank"
                        className={styles.radio}
                      />
                      <div className={styles.methodContent}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M3 21h18M3 10h18M5 6l5-3 5 3M4 10v11M20 10v11M10 6v15"/>
                        </svg>
                        <span>Bank Account</span>
                      </div>
                    </label>
                  </div>
                </div>

                {/* Card Information */}
                <div className={styles.formSection}>
                  <h3 className={styles.sectionTitle}>Card Information</h3>
                  <div className={styles.formGroup}>
                    <label htmlFor="cardNumber" className={styles.label}>Card Number</label>
                    <input
                      type="text"
                      id="cardNumber"
                      name="cardNumber"
                      placeholder="1234 5678 9012 3456"
                      className={styles.input}
                      required
                    />
                  </div>
                  <div className={styles.cardRow}>
                    <div className={styles.formGroup}>
                      <label htmlFor="expiry" className={styles.label}>Expiry Date</label>
                      <input
                        type="text"
                        id="expiry"
                        name="expiry"
                        placeholder="MM/YY"
                        className={styles.input}
                        required
                      />
                    </div>
                    <div className={styles.formGroup}>
                      <label htmlFor="cvv" className={styles.label}>CVV</label>
                      <input
                        type="text"
                        id="cvv"
                        name="cvv"
                        placeholder="123"
                        className={styles.input}
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Billing Address */}
                <div className={styles.formSection}>
                  <h3 className={styles.sectionTitle}>Billing Address</h3>
                  <div className={styles.formGroup}>
                    <label htmlFor="billingName" className={styles.label}>Name on Card</label>
                    <input
                      type="text"
                      id="billingName"
                      name="billingName"
                      placeholder="John Doe"
                      className={styles.input}
                      required
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="billingAddress" className={styles.label}>Address</label>
                    <input
                      type="text"
                      id="billingAddress"
                      name="billingAddress"
                      placeholder="123 Main Street"
                      className={styles.input}
                      required
                    />
                  </div>
                  <div className={styles.addressRow}>
                    <div className={styles.formGroup}>
                      <label htmlFor="billingCity" className={styles.label}>City</label>
                      <input
                        type="text"
                        id="billingCity"
                        name="billingCity"
                        placeholder="Anytown"
                        className={styles.input}
                        required
                      />
                    </div>
                    <div className={styles.formGroup}>
                      <label htmlFor="billingState" className={styles.label}>State</label>
                      <input
                        type="text"
                        id="billingState"
                        name="billingState"
                        placeholder="ST"
                        className={styles.input}
                        required
                      />
                    </div>
                    <div className={styles.formGroup}>
                      <label htmlFor="billingZip" className={styles.label}>ZIP Code</label>
                      <input
                        type="text"
                        id="billingZip"
                        name="billingZip"
                        placeholder="12345"
                        className={styles.input}
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Payment Amount */}
                <div className={styles.formSection}>
                  <h3 className={styles.sectionTitle}>Payment Amount</h3>
                  <div className={styles.amountOptions}>
                    <label className={styles.amountOption}>
                      <input
                        type="radio"
                        name="paymentAmount"
                        value="current"
                        defaultChecked
                        className={styles.radio}
                      />
                      <div className={styles.amountContent}>
                        <span className={styles.amountLabel}>Current Balance</span>
                        <span className={styles.amountValue}>$111.43</span>
                      </div>
                    </label>
                    <label className={styles.amountOption}>
                      <input
                        type="radio"
                        name="paymentAmount"
                        value="custom"
                        className={styles.radio}
                      />
                      <div className={styles.amountContent}>
                        <span className={styles.amountLabel}>Custom Amount</span>
                        <input
                          type="number"
                          placeholder="0.00"
                          className={styles.customAmount}
                          min="0"
                          step="0.01"
                        />
                      </div>
                    </label>
                  </div>
                </div>

                {/* Terms and Submit */}
                <div className={styles.formSection}>
                  <div className={styles.termsCheckbox}>
                    <input
                      type="checkbox"
                      id="terms"
                      name="terms"
                      className={styles.checkbox}
                      required
                    />
                    <label htmlFor="terms" className={styles.termsLabel}>
                      I agree to the <a href="/terms" className={styles.link}>Terms of Service</a> and authorize this payment
                    </label>
                  </div>
                  
                  
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Security Notice */}
        <div className={styles.securityNotice}>
          <div className={styles.securityContent}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
            </svg>
            <div>
              <h3>Secure Payment</h3>
              <p>Your payment information is encrypted and secure. We use industry-standard SSL encryption to protect your data.</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 