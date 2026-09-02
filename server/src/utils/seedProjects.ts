import dotenv from "dotenv";

import connectDB from "../config/db.js";
import Project from "../models/Project.js";

dotenv.config();

const projects = [
  {
    title: "Confidential Project - Aviation Charter Platform",

    slug: "confidential-aviation-platform",

    description:
      "Client details withheld under NDA. A full-stack private jet charter marketplace that connects operators, brokers and flyers on a single aviation management platform. It handles the entire booking lifecycle, from searching one-way legs to signing the charter contract and settling payment. Stripe powers the money movement end to end, including operator payouts and tokenized broker invoicing.",

    technologies: [
      "React",
      "TypeScript",
      "Node.js",
      "Express.js",
      "MySQL",
      "Stripe",
      "AWS",
    ],

    category: "Full-Stack",

    githubUrl: "",

    liveUrl: "",

    featured: true,

    year: 2025,

    features: [
      "Charter marketplace connecting operators, brokers and flyers",
      "Real-time flight booking and management system",
      "Authorize-then-capture Stripe checkout with SHA-256 idempotency keys",
      "Stripe Connect Express operator payouts with instant-payout auto-fallback",
      "Tokenized broker invoicing",
      "Concurrency-safe booking engine with 15-minute soft locks that prevent double-booking",
      "Six-step checkout with in-app PDF contract signing",
      "Card, wire transfer and account-balance payment methods",
      "Owner-approval payment holds before funds are captured",
    ],

    image: "/projects/confidential-aviation-platform/cover.png",

    gallery: [
      "/projects/confidential-aviation-platform/booking-search.png",
      "/projects/confidential-aviation-platform/flight-results.png",
      "/projects/confidential-aviation-platform/route-map.png",
      "/projects/confidential-aviation-platform/charter-estimate.png",
      "/projects/confidential-aviation-platform/admin-dashboard.png",
      "/projects/confidential-aviation-platform/admin-flights.png",
    ],

    order: 1,

    overview:
      "Client details are withheld under NDA. This is the aviation platform I lead end to end at TheCloudOps: a full-stack aviation management product built with React, Node.js and Express on a MySQL data layer. Operators publish one-way availability, brokers invoice their own clients, and flyers search, hold and book an aircraft in one flow. The hard parts are not the screens but the guarantees behind them, keeping a single aircraft from being sold twice while a checkout is in flight, and making sure money is only captured once the owner has approved the trip and the contract has been signed.",

    challenges: [
      "Preventing double-booking when several flyers start checkout on the same aircraft at the same time",
      "Moving money safely across three parties, flyers paying in, operators being paid out and brokers invoicing their own clients",
      "Guaranteeing that a retried or duplicated payment request never charges a customer twice",
      "Keeping a six-step checkout coherent when it mixes contract signing, multiple payment methods and an owner approval step",
      "Serving as the single technical point of contact for the client while requirements evolved during the build",
    ],

    solutions: [
      "Built a concurrency-safe booking engine around 15-minute soft locks so a leg is reserved for the duration of a checkout and released automatically if it is abandoned",
      "Implemented an authorize-then-capture Stripe flow with owner-approval holds, so funds are only captured after the trip is confirmed",
      "Derived SHA-256 idempotency keys for every payment intent so replays and network retries collapse onto a single charge",
      "Integrated Stripe Connect Express for operator payouts with an automatic fallback from instant payouts to standard transfers when instant is unavailable",
      "Split the checkout into six explicit steps with in-app PDF contract signing and card, wire and balance payment paths, each recoverable on its own",
    ],

    architecture:
      "A React and TypeScript single-page frontend talks to a Node.js and Express REST API backed by MySQL, where relational integrity matters for aircraft, legs, bookings and ledger records. Stripe handles checkout, Connect Express payouts and invoicing, with webhooks reconciling payment state back into the booking tables. The platform runs on AWS.",

    testimonials: [
      {
        quote:
          "Incredible work! I was told that when this project was previously assigned to another company, this feature would take around a month to develop and implement. You managed to get it done much more efficiently.",
        author: "Client",
        role: "Confidential aviation platform",
        image:
          "/projects/confidential-aviation-platform/route-map.png",
        imageCaption:
          "The flight route map this feedback refers to: the aircraft animates along the route from the departure airport to the arrival airport.",
      },
    ],
  },

  {
    title: "Confidential Project - Music Lyrics Platform",

    slug: "confidential-music-platform",

    description:
      "Client details withheld under NDA. An ad-supported music lyrics platform serving an 11M+ document catalog of songs, artists and albums. The public site is built for organic search, with SEO-optimized ISR and RSC pages, JSON-LD structured data and Core Web Vitals tuning, while revenue comes from Google Ad Manager targeting and PubGuru header bidding. Behind it sits an AI content pipeline and a full admin CMS.",

    technologies: [
      "Next.js",
      "TypeScript",
      "NestJS",
      "MongoDB",
      "Redis",
    ],

    category: "Full-Stack",

    githubUrl: "",

    liveUrl: "",

    featured: true,

    year: 2025,

    features: [
      "11M+ document catalog of songs, artists and albums",
      "SEO-optimized ISR and RSC pages with JSON-LD structured data",
      "Core Web Vitals tuning across the public catalog",
      "AI content pipelines for song meanings and music news using Gemini and Vertex AI batch jobs",
      "BullMQ job queues driving background generation and ingestion work",
      "AI-powered ad targeting through Google Ad Manager key-value pairs",
      "PubGuru header bidding rolled out to production in phases",
      "Admin CMS with role-based access control and AI article generation and scheduling",
      "Batch-job operations console and a UGC moderation suite",
    ],

    image: "/projects/confidential-music-platform/cover.png",

    gallery: [],

    order: 2,

    overview:
      "Client details are withheld under NDA. This is an ad-supported music lyrics platform where I drive full-stack development at TheCloudOps. The catalog is the product, more than 11 million song, artist and album documents that have to be crawlable, fast and monetized at the same time. My work spans the rendering strategy for those pages, the AI pipelines that enrich them with song meanings and news, the ad stack that pays for them, and the admin CMS the editorial team uses to run the whole thing.",

    challenges: [
      "Query times of around 300ms against a 7M+ document catalog spread across scattered staging collections",
      "Rendering millions of catalog pages in a way that is both search-friendly and fast enough to pass Core Web Vitals",
      "Generating and scheduling AI content at catalog scale without blocking request-time work",
      "Rolling out header bidding and richer ad targeting on a live revenue-generating site without disrupting existing demand",
      "Giving a non-technical editorial team safe control over publishing, batch jobs and user-generated content",
    ],

    solutions: [
      "Consolidated the 7M+ document catalog from scattered staging collections into 3 core MongoDB collections with indexed ID-based lookups, cutting API query times by 90% from 300ms to 50ms",
      "Served catalog pages through Next.js ISR and React Server Components with JSON-LD structured data, then tuned Core Web Vitals against real page weight",
      "Moved song meaning and news generation into Gemini and Vertex AI batch jobs orchestrated by BullMQ queues, with Redis backing queue state and caching",
      "Shipped Google Ad Manager key-value targeting and PubGuru header bidding to production in phases so revenue could be measured at each step",
      "Built an admin CMS with role-based access control, AI article generation and scheduling, a batch-job operations console and a UGC moderation suite",
    ],

    architecture:
      "A Next.js and TypeScript frontend renders the catalog with ISR and React Server Components, backed by a NestJS API over MongoDB. Redis provides caching and backs the BullMQ queues that run AI generation and large migration jobs, while Gemini and Vertex AI batch jobs supply generated content. Ad delivery sits in front through Google Ad Manager with PubGuru header bidding.",
  },

  {
    title: "Bike Inventory System",

    slug: "bike-inventory-system",

    description:
      "A warehouse operations system built at OIOI Group to optimize how bike stock is tracked and moved. It combines MySQL-backed inventory tracking with secure CRUD APIs and real-time transfer logging, so every movement between locations is recorded as it happens. The application was deployed on AWS for scalability and high availability.",

    technologies: [
      "Node.js",
      "Express.js",
      "MySQL",
      "React",
    ],

    category: "Full-Stack",

    githubUrl: "",

    liveUrl: "",

    featured: false,

    year: 2025,

    features: [
      "MySQL-backed inventory tracking across warehouse locations",
      "Secure CRUD APIs for stock records",
      "Real-time transfer logging for every stock movement",
      "RESTful Express.js API consumed by a React interface",
      "Relational schema modelling bikes, locations and transfers",
      "Cloud deployment on AWS for scalability and high availability",
    ],

    image: "",

    gallery: [],

    order: 3,

    overview:
      "The Bike Inventory System was built during my time as a MERN Stack Developer at OIOI Group to optimize warehouse operations. Instead of stock levels living in spreadsheets, the system keeps inventory in MySQL and records each transfer between locations as it happens, so warehouse staff and management look at the same numbers. I built the API and data layer and deployed the result on AWS.",

    challenges: [
      "Keeping stock counts accurate while units move between warehouse locations",
      "Exposing inventory operations over an API without leaving write endpoints unprotected",
      "Producing a transfer history that management can audit after the fact",
      "Running the system reliably enough for day-to-day warehouse use",
    ],

    solutions: [
      "Modelled inventory in MySQL so stock, locations and transfers stay relationally consistent",
      "Built secure CRUD APIs in Express.js with validation and authentication on every write path",
      "Added real-time transfer logging so each movement is written as an auditable record",
      "Deployed and managed the application on AWS to ensure scalability and high availability",
    ],

    architecture:
      "A React frontend consumes a REST API built with Node.js and Express, with MySQL as the system of record for inventory and transfer history. The stack is deployed on AWS, where the cloud setup provides the scalability and availability the warehouse workflow depends on.",
  },
];

const seedProjects = async (): Promise<void> => {
  try {
    await connectDB();

    await Project.deleteMany({});

    await Project.insertMany(projects);

    console.log(
      "Projects seeded successfully"
    );

    process.exit(0);
  } catch (error) {
    console.error(
      "Project seeding failed:",
      error
    );

    process.exit(1);
  }
};

seedProjects();
