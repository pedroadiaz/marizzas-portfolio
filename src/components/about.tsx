"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I am a PhD Student in{" "}
        <span className="font-medium">Mathematic Education at Arizona State University</span>
        under the supervision of Dov Zazkis. My research is currently in using computational recursion {"(coding)"} as a way to help students understand proofs by induction.
        <span className="font-medium">
          I was a secondary mathematics educator for eighteen years. Prior to my career in secondary school, I was a PhD student at University of  in Pure Mathematics studying Arithmetic Geometry under the supervision of Michael Fried. Due to family obligations, I left on the year I was to advance to candidacy.
        </span>
          However, my training in pure mathematics gave me the knowledge to design and teach courses in Vector Calculus, Linear Algebra, Complex Analysis, History of Mathematics, and Introduction to Set-based Categories. My passion for teaching drove me to reflect and modify the design until the courses were accessible to high school students.
          Introducing proof-based mathematics to a diverse group of secondary students has provided me with a unique perspective. The small class numbers and daily interactions provided the opportunity to question students individually, analyze their view of the concepts, and guide them accordingly. The daily one-hour classes allowed me time to create activities, observe students' interactions during small-group work, reflect on the efficacy of the activity, and modify it accordingly.
          Throughout my career as secondary mathematics teacher, I was also hired to mentored new teachers, design and provide professional development for incoming teachers, design and lead workshops for practicing educators, and designing district-wide benchmark assessments.
      </p>
    </motion.section>
  );
}
