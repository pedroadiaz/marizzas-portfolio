import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Courses",
    hash: "#courses",
  },
  {
    name: "Research",
    hash: "#research",
  },
  {
    name: "Achievements",
    hash: "#achievements",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "UCI",
    location: "Senior Software Developer",
    description:
      "Wrote an ETL tool to grab data from APIs, transform it, and insert it into our database. Used .Net Core, C#, Entity Framework and SQL Server.",
    icon: React.createElement(CgWorkAlt),
    date: "2017 - 2019",
  },
  {
    title: "Global Logic",
    location: "Senior Software Developer",
    description:
      "Was the acting backend lead. Writing APIs using .Net Core, C#, Entity Framework and SQL Server.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2020",
  },
  {
    title: "Onica/Rackspace",
    location: "AWS Developer",
    description:
      "Worked with Node.js/Typescript and C#/.Net 3.1 to build  AWS Lambdas using API Gateway. Worked with different AWS Services, such as DynamoDB, SQS, S3, MQTT, IoT, RDS, Aurora Serverless, etc.",
    icon: React.createElement(LuGraduationCap),
    date: "2020 - 2021",
  },
  {
    title: "CBS Interactive",
    location: "Senior Software Developer",
    description:
      "Wrote severla ETL tools to grab data from APIs, transform it, and insert it into our database. Also wrote some Lambdas and updated a legacy system from on prem SQL Server to a cloud based MySQL instance. Used .Net Core, C#, Entity Framework and SQL Server.",
    icon: React.createElement(LuGraduationCap),
    date: "2020 - 2022",
  },
  {
    title: "Apprentice.io",
    location: "Backend Developer",
    description:
      "Worked as a freelance software developer for a medical startup. Tech stack included Node.js, Express, MongoDB, Mongoose, and Docker. We supported the front end and mobile teams that developed in Angular and iOS with No Code integrations.",
    icon: React.createElement(CgWorkAlt),
    date: "2021 - 2022",
  },
  {
    title: "Kixie.com",
    location: "Full-Stack Developer",
    description:
      "Workd as a full-stack developer for a startup. My stack included React, Node.js, TypeScript, with everything deployed on AWS. Also used EventBridge, SQS, S3, RDS, API Gateway and Lambda.",
    icon: React.createElement(CgWorkAlt),
    date: "2022 - 2023",
  },
  {
    title: "GDIT",
    location: "Full-Stack Developer",
    description:
      "I'm a full-stack developer working as a . My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2023 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Museums with Kids",
    description:
      "A public website that allows adults relate museums and other cultural centers to children.",
    tags: ["React", "Node.js", "SQL", "AWS Lambda", "DynamoDB", "OpenAI GPT-4"],
    imageUrl: corpcommentImg,
  },
  {
    title: "Ask My Files Now",
    description:
      "A public web app for semantic search on PDF files. It can also be used to do conversations with your PDFs amd other file types.",
    tags: [
      "React",
      "Node.js",
      "AWS Lambda",
      "DynamoDB",
      "Pinecone",
      "LangChain",
    ],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "TypeORM",
  "MongoDB",
  "DynamoDB",
  "SQL Server",
  "MySQL",
  "AWS",
  "AWS Lambda",
  "API Gateway",
  "PostgreSQL",
  "SQS",
  "RDS",
  "S3",
  "CloudFront",
  "CloudWatch",
  "Route 53",
  "AWS Bedrock",
  "Sagemaker",
  "AWS CDK",
  "Serverless Framework",
  "GraphQL",
  "Apollo",
  "Express",
  "Nest.js",
  "Python",
  "LangChain",
  "Pinecone",
  "Vector Search",
  "OpenAI GPT-3",
  "Llama2",
  "Claude2",
  "LLM Agents",
  "Prompt Engineering",
  "Framer Motion",
  "C#",
  "ASP.NET",
  "Entity Framework",
  ".NET Core",
] as const;
