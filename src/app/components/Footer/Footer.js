'use client';

import React, { useState } from "react";
import { AnimatedSection } from "../AnimatedSection";
import styles from "../../Styles/footer.module.css";
import {
  FacebookOutlined,
  InstagramOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";

export default function Footer() {
  const [email, setEmail] = useState("");

  function handleSubscribe(e) {
    e.preventDefault();
    if (!email) return alert("Please enter an email address");
    alert(`Thanks! We'll send updates to ${email}`);
    setEmail("");
  }

  return (
    <footer className={styles.footer}>
      
      {/* top CTA / social */}
      <AnimatedSection delay={0.2} className={styles.top}>
        <div className={styles.topInner}>
          <h3 className={styles.topTitle}>Let's Get Social To Do Some Good!</h3>
          <div className={styles.social}>
            <a
              href="https://www.instagram.com/two.gooders/"
              aria-label="Instagram"
              className={styles.socialLink}
              rel="noreferrer"
              target="_blank"
            >
              <InstagramOutlined />
            </a>
            <a
              href="https://www.facebook.com/people/Two-Gooders/61562893083757/"
              aria-label="Facebook"
              className={styles.socialLink}
              rel="noreferrer"
              target="_blank"
            >
              <FacebookOutlined />
            </a>
            <a
              href="https://www.linkedin.com/company/two-gooders/about/"
              aria-label="LinkedIn"
              className={styles.socialLink}
              rel="noreferrer"
              target="_blank"
            >
              <LinkedinOutlined />
            </a>
          </div>
        </div>
      </AnimatedSection>

      {/* middle columns */}
      <AnimatedSection delay={0.3} className={styles.middle}>
        <div className={styles.column}>
          <h4>Our Website</h4>
          <ul>
            <li><a href="#">Shop Here</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Charities</a></li>
            <li><a href="#">Fundraising Program</a></li>
          </ul>
        </div>

        <div className={styles.column}>
          <h4>Get More Info</h4>
          <ul>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Customer Service</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
        </div>

        <div className={styles.column}>
          <h4>Subscribe</h4>
          <p className={styles.subscribeText}>Get fun updates from Two Gooders!</p>
          <form className={styles.subscribeForm} onSubmit={handleSubscribe}>
            <input
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              aria-label="Email address"
              className={styles.emailInput}
            />
            <button type="submit" className={styles.signUpBtn}>
              Sign up
            </button>
          </form>
        </div>
      </AnimatedSection>

      {/* bottom row */}
      <AnimatedSection delay={0.4} className={styles.bottom}>
        <div className={styles.leftBottom}>
          <div className={styles.smallLinks}>
            <a href="#">Search</a>
            <span className={styles.dot}>|</span>
            <a href="#">Privacy Policy</a>
            <span className={styles.dot}>|</span>
            <a href="#">Customer Service</a>
            <div className={styles.copyright}>
              Copyright © {new Date().getFullYear()} Two Gooders.
            </div>
          </div>
        </div>

        <div className={styles.payments}>
          <img
            src="/images/Footer/AMEX.jpg"
            alt="Amex"
            className={styles.paymentIcon}
            onError={(e) => { e.currentTarget.style.opacity = 0.35; }}
          />
          <img
            src="/images/Footer/MasterCard_Logo.svg"
            alt="Mastercard"
            className={styles.paymentIcon}
            onError={(e) => { e.currentTarget.style.opacity = 0.35; }}
          />
          <img
            src="/images/Footer/PayPal.svg"
            alt="PayPal"
            className={styles.paymentIcon}
            onError={(e) => { e.currentTarget.style.opacity = 0.35; }}
          />
        </div>
      </AnimatedSection>

    </footer>
  );
}
