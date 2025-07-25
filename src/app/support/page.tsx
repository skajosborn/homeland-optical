"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import styles from "./page.module.css";

export default function SupportPage() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const checkTheme = () => {
      const isDark = document.documentElement.getAttribute("data-theme") === "dark";
      setIsDarkMode(isDark);
    };
    checkTheme();
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });
    return () => observer.disconnect();
  }, []);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.hero}>
          <div className={styles.heroContent}>
            <h1 className={styles.title}>
              <span className={styles.highlight}>Support</span> & Troubleshooting
            </h1>
            <p className={styles.description}>
              Find answers to common questions and get help with your Homeland Optical services.
            </p>
            <div className={styles.heroImages}>
              <div className={styles.heroImage}>
                <Image
                  src={isDarkMode ? "/servicewhite.svg" : "/service.svg"}
                  alt="Customer Service"
                  width={200}
                  height={150}
                  priority
                  className={styles.image}
                />
              </div>
              {/* <div className={styles.heroImage}>
                <Image
                  src="/helpdesk.jpg"
                  alt="Field Technician"
                  width={200}
                  height={150}
                  priority
                  className={styles.image}
                />
              </div> */}
            </div>
          </div>
        </div>

        <div className={styles.content}>
          {/* Quick Actions */}
          {/* <div className={styles.quickActions}>
            <div className={styles.actionCard}>
              <div className={styles.actionIcon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                </svg>
              </div>
              <h3>Live Chat</h3>
              <p>Get instant help from our support team</p>
              <button className={styles.actionButton}>Start Chat</button>
            </div>
            <div className={styles.actionCard}>
              <div className={styles.actionIcon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
              </div>
              <h3>Call Support</h3>
              <p>Speak directly with a technician</p>
              <button className={styles.actionButton}>Call Now</button>
            </div>
            <div className={styles.actionCard}>
              <div className={styles.actionIcon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
                </svg>
              </div>
              <h3>Book Appointment</h3>
              <p>Schedule a technician visit</p>
              <Link href="/book-appointment" className={styles.actionButton}>
                Schedule Now
              </Link>
            </div>
          </div> */}

           {/* Service Features Section */}
           <div className={styles.serviceFeatures}>
             <h2 className={styles.sectionTitle}>Our Service Commitments</h2>
             <div className={styles.featuresGrid}>
               <div className={styles.featureBlock}>
                 <div className={styles.featureIcon}>
                   <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                     <circle cx="12" cy="12" r="10"/>
                     <polyline points="12,6 12,12 16,14"/>
                   </svg>
                 </div>
                 <h3>Fast Service</h3>
                 <p>Our technicians are located right in Ocala Palms and we guarantee a response within 24 hours.</p>
               </div>
               
               <div className={styles.featureBlock}>
                 <div className={styles.featureIcon}>
                   <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                     <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                     <circle cx="12" cy="7" r="4"/>
                   </svg>
                 </div>
                 <h3>Dedicated Professionals</h3>
                 <p>Our technicians are dedicated internet professionals and are trained in our technology. They're here to help.</p>
               </div>
               
               <div className={styles.featureBlock}>
                 <div className={styles.featureIcon}>
                   <Image
                     src="/plug.svg"
                     alt="Electrical Plug"
                     width={48}
                     height={48}
                     className={styles.iconImage}
                   />
                 </div>
                 <h3>Replacement Guarantee</h3>
                 <p>If you have our equipment, modem, router, etc., we will service or replace them if they malfunction.</p>
               </div>
             </div>
           </div>

<div className={styles.troubleshootingSection}>
            <h2 className={styles.sectionTitle}>Common Issues & Solutions</h2>
            
            <div className={styles.troubleshootingGrid}>
              <div className={styles.troubleshootingCard}>
                <div className={styles.issueIcon}>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"/>
                    <line x1="12" y1="8" x2="12" y2="12"/>
                    <line x1="12" y1="16" x2="12.01" y2="16"/>
                  </svg>
                </div>
                <h3>No Internet Connection</h3>
                <div className={styles.solutionSteps}>
                  <ol>
                    <li>Check if your modem and router are powered on</li>
                    <li>Restart both devices (unplug for 30 seconds)</li>
                    <li>Check all cable connections</li>
                    <li>Try connecting directly to the modem</li>
                  </ol>
                </div>
                <div className={styles.issueActions}>
                  <button className={styles.trySolutionButton}>Try These Steps</button>
                  <Link href="/book-appointment" className={styles.bookAppointmentButton}>
                    Book Technician
                  </Link>
                </div>
              </div>

              <div className={styles.troubleshootingCard}>
                <div className={styles.issueIcon}>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                    <line x1="8" y1="21" x2="16" y2="21"/>
                    <line x1="12" y1="17" x2="12" y2="21"/>
                  </svg>
                </div>
                <h3>TV Signal Issues</h3>
                <div className={styles.solutionSteps}>
                  <ol>
                    <li>Check if your TV is on the correct input</li>
                    <li>Restart your cable box</li>
                    <li>Check cable connections</li>
                    <li>Run a signal test from your cable box menu</li>
                  </ol>
                </div>
                <div className={styles.issueActions}>
                  <button className={styles.trySolutionButton}>Try These Steps</button>
                  <Link href="/book-appointment" className={styles.bookAppointmentButton}>
                    Book Technician
                  </Link>
                </div>
              </div>

              <div className={styles.troubleshootingCard}>
                <div className={styles.issueIcon}>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                </div>
                <h3>Phone Service Problems</h3>
                <div className={styles.solutionSteps}>
                  <ol>
                    <li>Check if your phone is properly connected</li>
                    <li>Test with a different phone</li>
                    <li>Check for dial tone</li>
                    <li>Restart your phone modem</li>
                  </ol>
                </div>
                <div className={styles.issueActions}>
                  <button className={styles.trySolutionButton}>Try These Steps</button>
                  <Link href="/book-appointment" className={styles.bookAppointmentButton}>
                    Book Technician
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className={styles.faqSection}>
            <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
            
            <div className={styles.faqCategory}>
              <h3 className={styles.categoryTitle}>Billing & Account</h3>
              <div className={styles.faqList}>
                <div className={`${styles.faqItem} ${activeFaq === 0 ? styles.active : ''}`}>
                  <button className={styles.faqQuestion} onClick={() => toggleFaq(0)}>
                    How do I pay my bill online?
                    <svg className={styles.chevron} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="6,9 12,15 18,9"/>
                    </svg>
                  </button>
                  <div className={styles.faqAnswer}>
                    <p>You can pay your bill online through your customer dashboard. Simply log in to your account, navigate to the "Pay My Bill" section, and follow the payment instructions. We accept all major credit cards and bank transfers.</p>
                  </div>
                </div>
                
                <div className={`${styles.faqItem} ${activeFaq === 1 ? styles.active : ''}`}>
                  <button className={styles.faqQuestion} onClick={() => toggleFaq(1)}>
                    How can I change my billing address?
                    <svg className={styles.chevron} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="6,9 12,15 18,9"/>
                    </svg>
                  </button>
                  <div className={styles.faqAnswer}>
                    <p>To update your billing address, log into your customer dashboard and go to "Account Settings." You can also call our customer service team at 1-800-HOMELAND to make this change over the phone.</p>
                  </div>
                </div>
                
                <div className={`${styles.faqItem} ${activeFaq === 2 ? styles.active : ''}`}>
                  <button className={styles.faqQuestion} onClick={() => toggleFaq(2)}>
                    What payment methods do you accept?
                    <svg className={styles.chevron} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="6,9 12,15 18,9"/>
                    </svg>
                  </button>
                  <div className={styles.faqAnswer}>
                    <p>We accept Visa, MasterCard, American Express, Discover, bank transfers, and automatic bank drafts. You can also pay by check or money order by mail.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.faqCategory}>
              <h3 className={styles.categoryTitle}>Internet Service</h3>
              <div className={styles.faqList}>
                <div className={`${styles.faqItem} ${activeFaq === 3 ? styles.active : ''}`}>
                  <button className={styles.faqQuestion} onClick={() => toggleFaq(3)}>
                    My internet is slow. What should I do?
                    <svg className={styles.chevron} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="6,9 12,15 18,9"/>
                    </svg>
                  </button>
                  <div className={styles.faqAnswer}>
                    <p>First, try restarting your modem and router. Unplug both devices for 30 seconds, then plug them back in. If the issue persists, check if other devices are experiencing the same problem. You can also run a speed test on our website to verify your connection speed.</p>
                  </div>
                </div>
                
                <div className={`${styles.faqItem} ${activeFaq === 4 ? styles.active : ''}`}>
                  <button className={styles.faqQuestion} onClick={() => toggleFaq(4)}>
                    How do I set up my WiFi password?
                    <svg className={styles.chevron} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="6,9 12,15 18,9"/>
                    </svg>
                  </button>
                  <div className={styles.faqAnswer}>
                    <p>To change your WiFi password, access your router's admin panel (usually at 192.168.1.1 or 192.168.0.1). The default login credentials are typically found on a sticker on your router. If you need help, our technical support team can guide you through the process.</p>
                  </div>
                </div>
                
                <div className={`${styles.faqItem} ${activeFaq === 5 ? styles.active : ''}`}>
                  <button className={styles.faqQuestion} onClick={() => toggleFaq(5)}>
                    What speeds should I expect?
                    <svg className={styles.chevron} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="6,9 12,15 18,9"/>
                    </svg>
                  </button>
                  <div className={styles.faqAnswer}>
                    <p>Actual speeds may vary based on your plan and network conditions. Our plans offer speeds from 100 Mbps to 1 Gbps. You can check your current speed by running a speed test on our website or through your customer dashboard.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.faqCategory}>
              <h3 className={styles.categoryTitle}>TV Service</h3>
              <div className={styles.faqList}>
                <div className={`${styles.faqItem} ${activeFaq === 6 ? styles.active : ''}`}>
                  <button className={styles.faqQuestion} onClick={() => toggleFaq(6)}>
                    Some channels are missing. How do I get them back?
                    <svg className={styles.chevron} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="6,9 12,15 18,9"/>
                    </svg>
                  </button>
                  <div className={styles.faqAnswer}>
                    <p>Try resetting your cable box by unplugging it for 30 seconds and plugging it back in. If channels are still missing, check your channel guide to ensure you're on the correct input. If the problem continues, contact our support team.</p>
                  </div>
                </div>
                
                <div className={`${styles.faqItem} ${activeFaq === 7 ? styles.active : ''}`}>
                  <button className={styles.faqQuestion} onClick={() => toggleFaq(7)}>
                    How do I program my remote control?
                    <svg className={styles.chevron} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="6,9 12,15 18,9"/>
                    </svg>
                  </button>
                  <div className={styles.faqAnswer}>
                    <p>To program your remote, press and hold the "Setup" button until the LED blinks twice. Enter the 3-digit code for your TV brand, then press "Power" to test. If it doesn't work, try the next code for your brand. You can find the codes in your remote's manual or on our website.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          

          {/* Contact Section */}
          <div className={styles.contactSection}>
            <h2 className={styles.sectionTitle}>Still Need Help?</h2>
            <p className={styles.contactDescription}>
              If you couldn't find the answer you're looking for, our support team is here to help.
            </p>
            <div className={styles.contactOptions}>
              <div className={styles.contactOption}>
                <div className={styles.contactIcon}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                </div>
                <h3>Call Us</h3>
                <p>1-352-484-0200</p>
                <p>M-F 9AM-5PM</p>
              </div>
              <div className={styles.contactOption}>
                <div className={styles.contactIcon}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                </div>
                <h3>Email Support</h3>
                <p>support@homelandoptical.com</p>
                <p>Response within 24 hours</p>
              </div>
              <div className={styles.contactOption}>
                <div className={styles.contactIcon}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
                  </svg>
                </div>
                <h3>Book Appointment</h3>
                <p>Schedule a technician visit</p>
                <Link href="/book-appointment" className={styles.contactButton}>
                  Schedule Now
                </Link>
              </div>
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