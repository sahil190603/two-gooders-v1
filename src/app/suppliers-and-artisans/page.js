"use client";

import React from "react";
import ContactForm from "../components/Forms/ContactForm";
import { AnimatedSection } from "../components/AnimatedSection";
import styles from "../Styles/suppliersandartisans.module.css";


const page = () => {
  return (
    <div className={styles.container}>
      <AnimatedSection delay={0.08}>
        <h2
          style={{ textAlign: "center", marginTop: "100px", fontWeight:800 }}
          id="page-title"
        >
          Become a Supplier
        </h2>
      </AnimatedSection>

      <AnimatedSection delay={0.12} className={styles.introSection}>
        <div className={styles.intro} aria-live="polite">
          <p>We look for quality products that appeal to all audiences.</p>

          <p>
            We strive to find unique products you can’t find anywhere else, this
            includes art and handmade products from local artisans. In some
            cases, they are one of a kind!
          </p>

          <p>
            We ask our suppliers to commit to certain efforts to provide the
            best customer experience & generous pricing to contribute to
            increased contributions to the charities.
          </p>

          <p>
            Submit the following info and one of our Do-Gooders will contact you
            with more information on becoming a supplier.
          </p>
        </div>
      </AnimatedSection>

      <ContactForm />
    </div>
  );
};

export default page;
