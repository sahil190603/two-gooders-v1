"use client";

import React, { useState } from "react";
import styles from "./about.module.css";
import { AnimatedSection } from "../components/AnimatedSection";

export default function About() {
  const [sigError, setSigError] = useState(false);

  return (
    <main className={styles.page}>
      <AnimatedSection
        delay={0.1}
        className={styles.hero}
        aria-label="Our story hero"
      >
        <div className={styles.heroInner}>
          <h1>OUR STORY</h1>
          <p className={styles.heroSubtitle}>
            Two Gooders was born from a desire to see a gift shop, paired with a
            multifaceted approach to fundraising, that vastly expands the amount
            of good being done in our local and global communities.
          </p>
        </div>
      </AnimatedSection>

      {/* MISSION BLOCK */}
      <AnimatedSection
        delay={0.2}
        className={styles.missionWrap}
        aria-label="Our mission"
      >
        <div className={styles.missionRow}>
          <AnimatedSection delay={0.3} className={styles.missionText}>
            <h3>Our Mission</h3>
            <p>
              At Two Gooders, our mission is to drive a societal shift toward
              beneficial consumerism that transforms gift shopping into a
              powerful force for good. We believe every purchase should make a
              positive impact on the world. By supporting multiple charitable
              causes with each gift given, we create a community of do-gooders
              joined in a united movement of giving.
            </p>
          </AnimatedSection>

          <AnimatedSection
            delay={0.3}
            className={styles.missionImage}
            aria-hidden
          >
            <img
              src="/images/about/black gift white sweater.jpg"
              alt="Why we do it"
            />
          </AnimatedSection>
        </div>
      </AnimatedSection>

      {/* TEAM / FOUNDERS */}
      <section className={styles.teamSection} aria-label="Team and founders">
        <div className={styles.container}>
          <AnimatedSection delay={0.3} className={styles.founderBlock}>
            <h2 className={styles.sectionTitle}>Meet the Founder</h2>
            <div className={styles.founderCard}>
              <AnimatedSection delay={0.3}>
                <img
                  src="/images/about/Amy%20Myton.jpg"
                  alt="Amy Myton — Founder and CEO"
                  className={styles.founderPhoto}
                  loading="eager"
                />
              </AnimatedSection>

              <AnimatedSection delay={0.3} className={styles.founderContent}>
                <h3>“Born to Give”</h3>
                <h4 className={styles.foundername}>Amy Myton</h4>
                <h5 className={styles.founderTitle}>Founder and CEO</h5>

                <div className={styles.founderBio}>
                  <p>
                    Amy Myton is the passionate Founder and CEO of Two Gooders.
                    Known for her energy and generosity, she has cultivated a
                    community that deeply respects her passion for helping
                    others. Her family often says, "Amy was born to give,"
                    highlighting her empathy and compassion, traits she
                    inherited from her grandmother and father.
                  </p>

                  <p>
                    Her giving nature started early. As a child, it was common
                    for Amy to bring home stray animals and at age 14, she
                    started helping people by bringing home a coworker she
                    realized was experiencing homelessness. During these
                    formative years, Amy also developed a love for the ocean,
                    sparking her lifelong commitment to its protection.
                  </p>

                  <p>
                    In her twenties, after the loss of her beloved dog, Amy
                    devoted extensive resources to organizing adoption events,
                    fostering dogs and raising funds for a non-profit Labrador
                    rescue organization. Her focus shifted to helping children
                    after becoming a mom in her thirties. She raised funds for
                    the YMCA after-school program and encouraged her children to
                    ask for charitable donations instead of birthday gifts,
                    instilling a spirit of giving in them.
                  </p>
                  <p>
                    After personally experiencing the challenges fundraisers
                    face, Amy realized she could use her professional experience
                    to create an approach to fundraising that amplifies
                    everyones ability to give. There was also a deep desire to
                    help drive a societal shift toward beneficial consumerism.
                    Alas, Two Gooders was born to give.{" "}
                  </p>
                  <p>
                    There is a special village working with Two Gooders to raise
                    significant funds to extend the reach of her interests, and
                    so many more. Amy is immensely grateful for her team, the
                    suppliers, the shoppers, and most of all, the charitable
                    organizations doing so much for so many amazing causes.{" "}
                  </p>
                  <p>
                    Two Gooders is the embodiment of Amy's innate desire to
                    give, a legacy that began two generations ago. A legacy she
                    looks to pass to future generations, inspiring them to be
                    "born to give."{" "}
                  </p>

                  <p className={styles.quote}>
                    "I invite everyone, in any capacity, to contribute to the
                    collective success of Two Gooders. In doing so, it will
                    become part of the legacy you leave as well."
                    <br />
                    {!sigError ? (
                      <img
                        src="/images/about/sign.png"
                        alt="Amy Myton signature"
                        className={styles.signature}
                        onError={() => setSigError(true)}
                        loading="eager"
                      />
                    ) : (
                      <em>- Amy</em>
                    )}
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </AnimatedSection>

          <div className={styles.foundingGridBlock}>
            <AnimatedSection delay={0.3} className={styles.foundingIntro}>
              <p>
                Amy is grateful to her personal village who contributed in many
                ways to the formation of Two Gooders. She would like to formally
                introduce you to a handful of specific people she affectionately
                refers to as "the founding team". Those who joined in an
                official capacity, sometimes with the only compensation being
                food, love &amp; thanks, working tireless hours to selflessly
                dedicate themselves to the mission.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.3} className={styles.foundingGrid}>
              <article className={styles.teamCardLarge}>
                <AnimatedSection delay={0.3}>
                  <div>
                    <h4>Liz Jones</h4>
                    <p className={styles.cardRole}>COO</p>

                    <p>
                      Liz is the Chief Operating Officer of Two Gooders,
                      blending a passion for philanthropy with a background in
                      sales, relationship-building and process development. A
                      close friend of Amy for many years, Liz was immediately
                      drawn to her vision of an online gift store that gives
                      back to philanthropic partners.
                    </p>

                    <p>
                      With extensive experience in process development, Liz
                      works with vendors and multiple stakeholders to ensure
                      high-quality project execution. Her strong networking and
                      relationship-building skills have fostered trust-based,
                      long-term client retention, while her dependable
                      follow-through and problem-solving abilities have led to
                      exceptional partnerships. Liz thrives on aligning
                      solutions to business goals, and ensuring impactful,
                      measurable results.
                    </p>

                    <p>
                      Committed to community service, as a gift to a family
                      member, Liz organized a shoe drive that collected over
                      2,000 pairs for underserved communities. She also has
                      twice participated in the Make A Wish Foundation
                      Trailblaze Challenge, hiking 20-30 miles in a single day.
                      Alongside her children, Liz regularly volunteers with
                      organizations in San Diego, including but not limited to
                      Burrito Boyz, the San Diego Food Bank, Feeding San Diego,
                      Ronald McDonald House and regularly participates in Beach
                      Clean ups.
                    </p>

                    <p>
                      Joining Two Gooders was a natural next step for Liz,
                      combining a personal passion for giving with an
                      opportunity to support a business with purpose. With Amy's
                      career experience and a shared dedication to philanthropy,
                      Liz is excited about the journey ahead and the positive
                      impact Two Gooders creates.
                    </p>
                  </div>
                </AnimatedSection>
                <AnimatedSection delay={0.3}>
                  <img
                    src="/images/about/Liz%20Jones.jpg"
                    alt="Liz Jones — COO"
                    className={styles.teamLargePhoto}
                  />
                </AnimatedSection>
              </article>
            </AnimatedSection>

            {/* Intern Team */}
            <AnimatedSection delay={0.3} className={styles.internSection}>
              <AnimatedSection delay={0.3}>
                <h3 className={styles.sectionSubtitle}>The Intern Team</h3>
              </AnimatedSection>

              <AnimatedSection delay={0.3}>
                <p className={styles.sectionIntro}>
                  With Amy's son being on summer leave from the University of
                  Oregon, a mutually beneficial opportunity presented itself and
                  the Two Gooders internship program was born. Meet some of the
                  future's best and brightest humans who joined the team with
                  passion and tenacity after learning about the mission……
                </p>
              </AnimatedSection>

              <AnimatedSection delay={0.3} className={styles.profileRow}>
                <AnimatedSection delay={0.3}>
                  <img
                    src="/images/about/Cooper Myton.jpg"
                    alt="Cooper Myton"
                    className={styles.profileImage}
                  />
                </AnimatedSection>

                <AnimatedSection delay={0.3} className={styles.profileContent}>
                  <h2 className={styles.profileName}>Cooper Myton</h2>
                  <p className={styles.profileRole}>
                    Technical Specialist & Business Strategist
                  </p>

                  <p className={styles.profileText}>
                    Cooper is proud to be a Duck at the University of Oregon,
                    where he is pursuing a master's degree in Computer Science &
                    Mathematics and a minor in Spanish. He is immersed in the
                    world of technology in his classes and everyday life. His
                    role at Two Gooders supports the company's IT needs, the
                    development of the website & store, as well as input into
                    company strategy.
                  </p>

                  <p className={styles.profileText}>
                    Through sports, including his role as the President of the
                    UO men's club volleyball team, Cooper has learned valuable
                    skills in leadership, business, fundraising and successfully
                    contributing to a team. As confirmed by many people who
                    witnessed Cooper's journey from childhood to now, he is
                    known for his hysterical, sarcastic sense of humor, a deep
                    level of compassion and his desire to always do the right
                    thing.
                  </p>

                  <div className={styles.quoteBlock}>
                    <div className={styles.quoteIcon}>❝</div>
                    <p className={styles.quoteText}>
                      "I have always felt uneasy seeing so many people in need
                      and not being able to do much to help them. It is a
                      terrible feeling. When I was young and seeing vast
                      homelessness for the first time, I told my mom how sad it
                      made me and asked what we could do to help the people. She
                      said we would help as many people as we could, but there
                      was only so much we could do as one family. It is very
                      fulfilling to be part of Two Gooders, a much bigger family
                      that can help so much more."
                    </p>
                    <p className={styles.quoteAuthor}>– Cooper</p>
                  </div>
                  <h4 className={styles.whereHeading}>
                    WHERE DOES COOPER WANT TO DO THE MOST GOOD?
                  </h4>
                  <p className={styles.whereText}>
                    He is especially passionate about helping children and
                    preserving our planet.
                  </p>
                </AnimatedSection>
              </AnimatedSection>

              <div className={styles.sectionDivider}></div>

              <AnimatedSection delay={0.3} className={styles.seanWrapper}>
                <AnimatedSection delay={0.3} className={styles.seanContent}>
                  <h2 className={styles.profileName}>Sean Hoffmeister</h2>
                  <p className={styles.profileRole}>
                    Technical Specialist & Business Strategist
                  </p>

                  <p className={styles.profileText}>
                    Sean has enjoyed his time at UCLA where he is pursuing a
                    master's degree in Computer Science. He has a wide range of
                    experience and interests that allow him to contribute in
                    many ways at Two Gooders. Sean's previous internships took
                    him into the world of IT and website and application design.
                    His experience in business strategy through a management
                    tech-breadth course led him to recognizing his love of
                    business. As the social coordinator of his UCLA men's club
                    volleyball team, Sean has also delved into marketing aspects
                    around social media.
                  </p>

                  <div className={styles.quoteBlock}>
                    <div className={styles.quoteIcon}>❝</div>
                    <p className={styles.quoteText}>
                      "I have always wanted to find a way to bridge my career
                      with the ability to give back and create something to make
                      the world a better place. I am grateful to be part of the
                      team at Two Gooders to fulfill that goal. I enjoy
                      contributing to changing gift shopping to an experience
                      customers can feel good about, rather than contributing to
                      the greed commonly found in large corporations."
                    </p>
                    <p className={styles.quoteAuthor}>– Sean</p>
                  </div>

                  <h4 className={styles.whereHeading}>
                    WHERE DOES SEAN WANT TO DO THE MOST GOOD?
                  </h4>
                  <p className={styles.whereText}>
                    As an avid surfer catching waves all over the world, Sean is
                    passionate about protecting our oceans.
                  </p>
                </AnimatedSection>

                <AnimatedSection delay={0.3} className={styles.seanImage}>
                  <img
                    src="/images/about/Sean Hoffmeister.jpg"
                    alt="Sean Hoffmeister"
                  />
                </AnimatedSection>
              </AnimatedSection>

              <div className={styles.sectionDivider}></div>

              <AnimatedSection delay={0.3} className={styles.profileRow}>
                <AnimatedSection delay={0.3}>
                  <img
                    src="/images/about/Kolbe Fink.jpeg"
                    alt="Cooper Myton"
                    className={styles.profileImage}
                  />
                </AnimatedSection>

                <AnimatedSection delay={0.3} className={styles.profileContent}>
                  <h2 className={styles.profileName}>Kolbe Fink</h2>
                  <p className={styles.profileRole}>Marketing Specialist</p>

                  <p className={styles.profileText}>
                    Kolbe joined the team in her senior year at UCLA and has
                    since earned a degree in Economics, with a minor in Film.
                    Kolbe spent extensive time with the UCLA Athletics marketing
                    team, where she honed her graphic design skills—an
                    experience that significantly contributes to her work at Two
                    Gooders.
                  </p>

                  <p className={styles.profileText}>
                    Her passion for creative marketing drives her career
                    ambitions and she's eager to pursue a path combining her
                    analytical background with her artistic interests. Kolbe is
                    known for her integrity, drive, and strong time management
                    skills, consistently handling multiple tasks efficiently and
                    effectively. She is thrilled to join a company that gives
                    back to those in need and to work alongside a team that
                    shares her passion for making a positive impact.
                  </p>

                  <div className={styles.quoteBlock}>
                    <div className={styles.quoteIcon}>❝</div>
                    <p className={styles.quoteText}>
                      "Athletics have been a vital part of my life, shaping who
                      I am and opening doors for me and those around me. I truly
                      believe I wouldn't be where I am today without the
                      opportunities I was given at a young age. That's why I'm
                      so passionate about supporting nonprofit organizations
                      that focus on youth sports. I want to help ensure young
                      children can experience the same joy and growth I did.
                      Being part of the team at Two Gooders allows me to do the
                      work I love knowing it supports causes that help more kids
                      experience youth sports."
                    </p>
                    <p className={styles.quoteAuthor}>– Kolbe</p>
                  </div>
                  <h4 className={styles.whereHeading}>
                    WHERE DOES KOLBE WANT TO DO THE MOST GOOD?
                  </h4>
                  <p className={styles.whereText}>
                    She is passionate about helping less fortunate children and
                    families living the fullest lives they possibly can.
                  </p>
                </AnimatedSection>
              </AnimatedSection>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CULTURE / CTA */}
      <AnimatedSection delay={0.3} className={styles.culture}>
        <div className={styles.containerCulture}>
          {/* LEFT SIDE — IMAGE */}
          <AnimatedSection delay={0.3}>
            <img
              src="/images/about/Company Culture.webp"
              alt="Company Culture"
              className={styles.cultureImage}
            />
          </AnimatedSection>

          {/* RIGHT SIDE — TEXT */}
          <AnimatedSection delay={0.3} className={styles.cultureText}>
            <h3>Company Culture</h3>
            <p>
              The company culture at Two Gooders fosters equality and rewards
              efforts of kindness, compassion, inclusion, community service and
              philanthropic endeavors. A culture where everyone on the team
              places a high priority on being and doing good. We treat each
              other with respect and appreciation regardless of race, ethnicity,
              gender, lifestyle, age, experience, or title.
            </p>
          </AnimatedSection>
        </div>
      </AnimatedSection>
    </main>
  );
}
