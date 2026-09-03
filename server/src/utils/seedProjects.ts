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
      "/projects/confidential-aviation-platform/route-map-video.webm",
      "/projects/confidential-aviation-platform/charter-estimate.png",
      "/projects/confidential-aviation-platform/admin-dashboard.png",
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
          "Incredible work! I expected this feature to take around 2 weeks to develop and implement, but you delivered it in just 3 days. Truly impressive work!",
        author: "Client",
        role: "Confidential aviation platform",
        image:
          "/projects/confidential-aviation-platform/route-map-video.webm",
        imageCaption:
          "The flight route map this feedback refers to: Designed and developed a custom, visually engaging flight route map based on client requirements, featuring an animated aircraft that dynamically travels along the route from the departure airport to the arrival airport.",
      },
    ],
  },

  {
    title: "Confidential AI Platform",

    slug: "confidential-ai-platform",

    description:
      "Client details withheld under NDA. A production-oriented AI platform, grown capability by capability from rule-based intent detection into a full retrieval-augmented system with streaming responses, controlled tool calling and bounded agents. Every layer is engineered for control rather than raw generation: grounded answers with citations, authorization gates before any tool runs, token budgets and step-level observability.",

    technologies: [
      "TypeScript",
      "Node.js",
      "Express.js",
      "Gemini",
      "RAG",
      "MySQL",
      "SSE",
      "AWS",
    ],

    category: "AI Engineering",

    githubUrl: "",

    liveUrl: "",

    featured: false,

    year: 2026,

    features: [
      "Rule-based intent detection layered with Gemini responses",
      "Structured LLM output schemas with layered prompts",
      "End-to-end RAG pipeline with citations",
      "Relevance threshold and heading-aware document chunking",
      "Streaming AI responses over Server-Sent Events",
      "Controlled tool registry with authorization gates",
      "Bounded multi-step agent loop with step tracing",
      "Token budgets and usage monitoring guardrails",
      "Non-generative recommendation system",
    ],

    image: "",

    gallery: [],

    order: 2,

    overview:
      "Client details are withheld under NDA. I developed and contributed to a production-oriented AI platform, adding one AI capability at a time rather than shipping a single chatbot: keyword-based intent detection with Gemini responses first, then structured output schemas, an end-to-end Retrieval-Augmented Generation pipeline, streaming over Server-Sent Events, a controlled tool-calling registry, a bounded agent loop, and finally guardrails, cost monitoring and a non-generative recommendation system. The focus throughout was reliability, controlled AI behavior, security, observability and practical production use cases, treating the model as one component inside an engineered system rather than an API call that is trusted to do the right thing.",

    capabilities: [
      {
        title: "Rule-Based AI & LLM Integration",

        summary:
          "Built the initial AI layer combining deterministic rules with Gemini-based responses.",

        points: [
          "Implemented keyword-based intent detection.",
          "Added conversation history using MySQL.",
          "Kept LLM API keys securely on the backend.",
          "Created multiple AI interaction flows.",
        ],
      },

      {
        title: "Structured LLM Output",

        summary:
          "Introduced structured model responses to make AI output predictable and easier for the application to consume.",

        points: [
          "Implemented structured response schemas.",
          "Designed multiple prompt layers.",
          "Established a trust boundary between model output and application logic.",
          "Reduced dependence on free-form LLM responses.",
        ],
      },

      {
        title: "Retrieval-Augmented Generation (RAG)",

        summary:
          "Built an end-to-end RAG pipeline to ground AI responses in application knowledge: Document → Chunking → Embeddings → Storage → Retrieval → Generation.",

        points: [
          "Implemented document chunking and embedding.",
          "Stored embeddings and metadata in MySQL.",
          "Retrieved relevant knowledge based on semantic similarity.",
          "Generated grounded responses using retrieved context.",
          "Added citations to AI responses.",
        ],
      },

      {
        title: "Production-Oriented RAG Improvements",

        summary:
          "Went beyond basic RAG by measuring and improving retrieval quality.",

        points: [
          "Implemented a relevance threshold to avoid blindly using irrelevant chunks.",
          "Added query rewriting and retrieval memory.",
          "Built heading-aware document chunking.",
          "Worked with real knowledge-base content and 77 indexed chunks.",
          "Implemented lazy query rewriting to avoid unnecessary processing.",
        ],
      },

      {
        title: "Streaming AI Responses",

        summary:
          "Implemented end-to-end streaming, Gemini → Backend → Browser → User, so users can start seeing the AI response while generation is still in progress.",

        points: [
          "Implemented Server-Sent Events (SSE).",
          "Streamed model output through the backend.",
          "Prevented response buffering where required.",
          "Implemented browser-side streaming consumption.",
        ],
      },

      {
        title: "LLM Tool Calling",

        summary:
          "Built a controlled tool-calling architecture instead of allowing the model to directly execute application functionality.",

        points: [
          "Created a hand-written tool registry.",
          "Implemented five registered tools.",
          "Added validation and authorization gates.",
          "Separated \"valid\" tool requests from \"allowed\" actions.",
          "Controlled which tools the model could access.",
        ],
      },

      {
        title: "AI Agent Architecture",

        summary:
          "Extended tool calling into a bounded AI agent loop.",

        points: [
          "Implemented multi-step agent execution.",
          "Added bounded execution limits.",
          "Added no-progress detection.",
          "Added step tracing for debugging and observability.",
          "Allowed the model to determine when additional steps were necessary.",
        ],
      },

      {
        title: "Guardrails, Cost & Monitoring",

        summary:
          "Added controls around AI behavior, usage, and cost.",

        points: [
          "Treated retrieved documents as untrusted input.",
          "Added token/usage monitoring.",
          "Implemented token budgets.",
          "Added controls to prevent uncontrolled AI execution.",
          "Designed the system with production safety and cost awareness in mind.",
        ],
      },

      {
        title: "Recommendation System",

        summary:
          "Implemented a recommendation system as a non-generative AI component.",

        points: [
          "Built recommendation logic without an LLM.",
          "Separated deterministic recommendation logic from generative AI.",
          "Demonstrated that AI-powered products do not need to use an LLM for every decision.",
        ],
      },
    ],

    challenges: [
      "Hallucinated, ungrounded answers when the model has no verified source to draw on",
      "A model being able to trigger application functionality directly, with no validation or authorization in between",
      "Unbounded agent loops that keep stepping and drive runaway token cost",
      "Retrieved documents arriving as untrusted input that can influence model behavior",
      "No visibility into what the AI actually did between a question and its answer",
    ],

    solutions: [
      "Grounded answers in retrieved knowledge with citations and a relevance threshold, so irrelevant chunks are never used blindly",
      "Put validation and authorization gates in front of every tool, separating a valid tool request from an allowed action",
      "Bounded agent execution with step limits, no-progress detection and step tracing that makes each run observable",
      "Added token budgets and usage monitoring so AI execution stays cost-aware and cannot run uncontrolled",
      "Kept deterministic logic wherever an LLM is unnecessary, including the recommendation system, and kept AI credentials on the backend",
    ],

    architecture:
      "The AI layer is built as a progression, Rules → LLM → Structured Output → RAG → Streaming → Tools → Agents → Guardrails → Recommendations, where each stage builds on the previous one, so retrieval grounds generation, structured output feeds tool calling, and tool calling becomes the bounded agent loop that the guardrails then constrain. A Node.js and Express backend on AWS holds the orchestration, prompt layers and API credentials, with MySQL storing conversation history, embeddings and chunk metadata. Server-Sent Events stream model output through the backend to the browser without buffering.",
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

    featured: false,

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

    order: 3,

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

    order: 4,

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
