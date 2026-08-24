import dotenv from "dotenv";

import connectDB from "../config/db.js";
import Project from "../models/Project.js";

dotenv.config();

const projects = [
  {
    title: "Ecommerce Store (Cartify)",

    slug: "cartify",

    description:
      "A modern full-stack e-commerce platform built with the MERN stack, featuring product browsing, search and filters, authentication, shopping cart, wishlist, coupons, checkout, order management, payments, and a comprehensive admin dashboard for managing products, users, categories, orders, and sales analytics.",

    technologies: [
      "MongoDB",
      "Express.js",
      "React",
      "Node.js",
      "TypeScript",
    ],

    category: "MERN",

    githubUrl:
      "https://github.com/UmarHashir/Ecommerce-mern-app",

    liveUrl:
      "https://ecommerce-mern-app-liard.vercel.app/",

    featured: true,

    year: 2026,

    features: [
  "JWT authentication and protected routes",
  "Product search, filtering and category browsing",
  "Shopping cart and wishlist",
  "Coupon and discount system",
  "Checkout and payment integration",
  "Order creation and order management",
  "Admin product and category management",
  "User management",
  "Sales analytics dashboard",
],

    image: "/projects/cartify/cover.png",

    order: 1,
    overview:
  "Cartify is a full-stack e-commerce platform designed to provide a complete online shopping experience. The application includes customer-facing shopping functionality together with an administrative dashboard for managing the business.",

challenges: [
  "Managing complex shopping cart and order state",
  "Implementing secure authentication and protected resources",
  "Building an admin dashboard with multiple management modules",
  "Handling checkout and payment workflows",
],

solutions: [
  "Designed reusable React components and structured application state",
  "Implemented JWT-based authentication and protected API routes",
  "Created separate admin management modules for products, users, categories and orders",
  "Integrated checkout and payment processing into the order workflow",
],

architecture:
  "React frontend communicates with an Express.js REST API. The Node.js backend handles authentication, business logic and database operations through Mongoose and MongoDB.",
  },

  {
    title: "Expense Tracker",

    slug: "expense-tracker",

    description:
      "A modern full-stack Expense Tracker built with the MERN stack, featuring expense and income management, monthly budgets, savings goals, analytics, spending insights, authentication, Cloudinary image uploads, and a responsive dark-mode dashboard.",

    technologies: [
      "MongoDB",
      "Express.js",
      "React",
      "Node.js",
      "Cloudinary",
    ],

    category: "MERN",

    githubUrl:
      "https://github.com/UmarHashir/Expense-Tracker-mern-app",

    liveUrl:
      "https://expense-tracker-mern-app-ten.vercel.app/",

    featured: true,

    year: 2026,

    features: [
  "JWT authentication",
  "Income and expense management",
  "Monthly budgets",
  "Savings goals",
  "Financial analytics",
  "Spending insights",
  "Cloudinary image uploads",
  "Responsive dark-mode dashboard",
],

    image: "",

    order: 2,
    overview:
  "Expense Tracker is a full-stack personal finance application designed to help users manage income, expenses, budgets and savings goals while providing visual insights into their spending.",

challenges: [
  "Designing useful financial summaries",
  "Managing monthly budgets and savings goals",
  "Presenting financial information clearly",
  "Handling image uploads",
],

solutions: [
  "Created reusable dashboard components for financial summaries",
  "Structured financial records around categories and time periods",
  "Added analytics and spending insights",
  "Integrated Cloudinary for image upload functionality",
],

architecture:
  "The React frontend consumes a REST API built with Node.js and Express. MongoDB stores users and financial records while Cloudinary handles uploaded media.",
  },

  {
    title: "Notes App",

    slug: "notes-app",

    description:
      "A modern full-stack Notes App built with the MERN stack, featuring JWT authentication, protected routes, user-specific notes, complete CRUD operations, search, responsive dashboard, and a polished UI with Tailwind CSS and Framer Motion.",

    technologies: [
      "MongoDB",
      "Express.js",
      "React",
      "Node.js",
      "JWT",
      "Tailwind CSS",
      "Framer Motion",
    ],

    category: "MERN",

    githubUrl:
      "https://github.com/UmarHashir/Notes-app-MERN",

    liveUrl:
      "https://notes-app-mern-three.vercel.app/",

    featured: true,

    year: 2026,

    features: [
  "JWT authentication",
  "Protected routes",
  "User-specific notes",
  "Create, update and delete notes",
  "Search functionality",
  "Responsive dashboard",
  "Tailwind CSS UI",
  "Framer Motion animations",
],

    image: "",

    order: 3,
    overview:
  "Notes App is a secure full-stack productivity application that allows authenticated users to create, manage and search their personal notes.",

challenges: [
  "Protecting user-specific data",
  "Implementing authentication and protected routes",
  "Creating a responsive notes dashboard",
],

solutions: [
  "Implemented JWT authentication",
  "Added protected frontend and backend routes",
  "Created complete CRUD operations for notes",
  "Built a responsive interface with Tailwind CSS and Framer Motion",
],

architecture:
  "React communicates with an Express REST API. JWT authentication protects resources and MongoDB stores user-specific notes.",
  },

  {
    title: "Todo App",

    slug: "todo-app",

    description:
      "A full-stack Todo application built with MongoDB, Express.js, React, and Node.js. Features include creating, updating, completing, and deleting tasks, with a responsive UI, RESTful APIs, Axios integration, MongoDB persistence, error handling, and live deployment.",

    technologies: [
      "MongoDB",
      "Express.js",
      "React",
      "Node.js",
      "Axios",
      "REST API",
    ],

    category: "MERN",

    githubUrl:
      "https://github.com/UmarHashir/todo-mern-app",

    liveUrl:
      "https://todo-mern-app-theta.vercel.app/",

    featured: false,

    year: 2026,

    features: [
  "Create tasks",
  "Update tasks",
  "Complete tasks",
  "Delete tasks",
  "RESTful API",
  "Axios API integration",
  "MongoDB persistence",
  "Error handling",
  "Responsive interface",
],

    image: "",

    order: 4,
    overview:
  "Expense Tracker is a full-stack personal finance application designed to help users manage income, expenses, budgets and savings goals while providing visual insights into their spending.",

challenges: [
  "Designing useful financial summaries",
  "Managing monthly budgets and savings goals",
  "Presenting financial information clearly",
  "Handling image uploads",
],

solutions: [
  "Created reusable dashboard components for financial summaries",
  "Structured financial records around categories and time periods",
  "Added analytics and spending insights",
  "Integrated Cloudinary for image upload functionality",
],

architecture:
  "The React frontend consumes a REST API built with Node.js and Express. MongoDB stores users and financial records while Cloudinary handles uploaded media.",
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