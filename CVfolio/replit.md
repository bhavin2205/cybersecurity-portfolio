# Portfolio Website

## Overview

This is a modern, responsive portfolio website built for a cybersecurity professional. The site showcases skills, experience, projects, education, and provides a contact form for potential employers or collaborators. The application is built as a full-stack TypeScript application with a React frontend and Express.js backend, featuring a cybersecurity-themed design with smooth animations and professional styling.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development
- **Routing**: Wouter for lightweight client-side routing
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **UI Components**: Radix UI primitives with shadcn/ui component library for consistent, accessible design
- **State Management**: TanStack Query (React Query) for server state management
- **Build Tool**: Vite for fast development and optimized production builds

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript for full-stack type safety
- **API Design**: RESTful API endpoints for contact form submission and resume download
- **Storage**: In-memory storage implementation with interface for easy database migration
- **Validation**: Zod schemas for runtime type validation and error handling

### Database Architecture
- **ORM**: Drizzle ORM configured for PostgreSQL with type-safe database operations
- **Schema**: Contact messages and user tables defined in shared schema
- **Migration Strategy**: Drizzle Kit for database schema migrations
- **Current Implementation**: In-memory storage for development, ready for PostgreSQL deployment

### Authentication & Security
- **Input Validation**: Zod schemas with custom error formatting using zod-validation-error
- **CORS**: Express configuration for cross-origin requests
- **Error Handling**: Centralized error handling middleware with structured responses

### External Dependencies
- **Database**: Neon Database (PostgreSQL) configured via DATABASE_URL environment variable
- **Email Service**: Placeholder for email service integration in contact form
- **File Storage**: Local file system for resume downloads (placeholder for cloud storage)
- **Fonts**: Google Fonts integration for Inter, Architects Daughter, DM Sans, Fira Code, and Geist Mono
- **Development Tools**: 
  - Replit integration with runtime error overlay and cartographer plugin
  - Hot module replacement (HMR) via Vite
  - TypeScript compilation and type checking

### Design System
- **Theme**: Dark cybersecurity theme with custom color palette
- **Typography**: Multiple font families for different content types
- **Components**: Modular component architecture with consistent styling
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints
- **Animations**: Custom CSS animations and Radix UI transitions

### Build & Deployment
- **Development**: Vite dev server with Express backend proxy
- **Production**: Optimized Vite build with static file serving
- **TypeScript**: Strict configuration with path mapping for clean imports
- **Asset Management**: Attached assets directory for static files like resumes