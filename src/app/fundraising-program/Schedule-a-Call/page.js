"use client";

import React from "react";
import ContactForm from "@/app/components/Forms/ContactForm";
import { AnimatedSection } from "@/app/components/AnimatedSection";

const page = () => {
  return (
    <div>
      <AnimatedSection delay={0.08}>
        <h2 style={{ textAlign: "center" , marginTop: "100px"}} id="page-title">
          Schedule a Call
        </h2>
      </AnimatedSection>
      <ContactForm />
    </div>
  );
};

export default page;
