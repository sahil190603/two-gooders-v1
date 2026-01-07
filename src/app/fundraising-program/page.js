"use client";

import React from "react";
import { Row, Col, Button, Typography } from "antd";
import styles from "../Styles/fundraising.module.css";
import { AnimatedSection } from "../components/AnimatedSection";

const { Title, Paragraph } = Typography;

const FundraisingPage = () => {
  return (
    <div className={styles.container}>
      <AnimatedSection
        delay={0.05}
        className={styles.topCtaBar}
        role="region"
        aria-label="Schedule a call"
      >
        <div className={styles.ctaText}>
          SCHEDULE A CALL TO LEARN MORE &amp; GET STARTED
        </div>
        <Button
          type="primary"
          className={styles.ctaButton}
          aria-label="Schedule a Call"
          onClick={() => {
            window.location.href = "/fundraising-program/Schedule-a-Call";
          }}
        >
          Schedule a Call
        </Button>
      </AnimatedSection>

      <AnimatedSection
        delay={0.1}
        className={styles.header}
        aria-label="Fundraising header"
      >
        <Title level={3} className={styles.headerTitle}>
          Fundraising Program
        </Title>

        <AnimatedSection delay={0.12} className={styles.headerIntroWrapper}>
          <Paragraph className={styles.headerIntro}>
            Are you an organization trying to raise funds?
            <br />
            Do you spend exhaustive amounts of time, energy &amp; money to reach
            your fundraising goals?
            <br />
            Let our team help you knock your goal out of the park with minimal
            time, effort and without spending a penny!
          </Paragraph>
        </AnimatedSection>

        <AnimatedSection delay={0.14} className={styles.sectionHeadingWrapper}>
          <div className={styles.sectionHeading}>
            How Our Program Benefits Your Organization
          </div>
        </AnimatedSection>
      </AnimatedSection>

      {/* Section 1: Augment Your Staff */}
      <AnimatedSection
        delay={0.18}
        className={styles.section}
        aria-label="Augment your staff"
      >
        <Row align="middle">
          <Col xs={24} md={12} className={styles.textCol}>
            <AnimatedSection delay={0.2}>
              <h4 className={styles.sectionTitle}>AUGMENT YOUR STAFF</h4>
              <Paragraph className={styles.sectionText}>
                You will have access to a team at Two Gooders who will work with
                you to understand your goals and help you exceed them.
              </Paragraph>
            </AnimatedSection>
          </Col>

          <Col xs={24} md={12} className={styles.imageCol}>
            <AnimatedSection delay={0.22}>
              <img
                // src="/images/fundraising/team_huddle.webp"
                src="/images/fundraising/BE_SUPPORTED.webp"
                alt="team huddle"
                className={styles.image}
              />
            </AnimatedSection>
          </Col>
        </Row>
      </AnimatedSection>

      {/* Section 2: Be Supported (reverse layout) */}
      <AnimatedSection
        delay={0.26}
        className={`${styles.section} ${styles.sectionReverse} ${styles.accentCard}`}
        aria-label="Be supported"
      >
        <Row align="middle">
          <Col xs={24} md={12} className={styles.imageCol}>
            <AnimatedSection delay={0.28}>
              <img
                // src="/images/fundraising/BE_SUPPORTED.webp"
                src="/images/fundraising/White shirt team.jpg"
                alt="working at laptop"
                className={styles.image}
              />
            </AnimatedSection>
          </Col>

          <Col xs={24} md={12} className={styles.textCol}>
            <AnimatedSection delay={0.3}>
              <h4 className={styles.sectionTitle}>BE SUPPORTED</h4>
              <Paragraph className={styles.sectionText}>
                Two Gooders will provide you with assistance on the following
                and beyond
              </Paragraph>

              <ul className={styles.bulletList}>
                <li>
                  Onboarding for your affiliate access to our online gift shop
                </li>
                <li>Marketing resources to drive shoppers to your store</li>
                <li>Fundraising strategy and planning</li>
              </ul>
            </AnimatedSection>
          </Col>
        </Row>
      </AnimatedSection>

      {/* Section 3: Bigger Impact */}
      <AnimatedSection
        delay={0.34}
        className={styles.section}
        aria-label="Bigger impact"
      >
        <Row align="middle">
          <Col xs={24} md={12} className={styles.textCol}>
            <AnimatedSection delay={0.36}>
              <h4 className={styles.sectionTitle}>BIGGER IMPACT</h4>
              <Paragraph className={styles.sectionText}>
                This always-on fundraising program costs you nothing and can
                significantly increase your funds raised. This results in a
                decrease to your overall “Cost To Raise” and increases your
                ability to do more for less.
              </Paragraph>
            </AnimatedSection>
          </Col>

          <Col xs={24} md={12} className={styles.imageCol}>
            <AnimatedSection delay={0.38}>
              <img
                src="/images/fundraising/Fundraising program_Bigger impact.jpg"
                alt="globe in hands"
                className={styles.image}
              />
            </AnimatedSection>
          </Col>
        </Row>
      </AnimatedSection>
    </div>
  );
};

export default FundraisingPage;
