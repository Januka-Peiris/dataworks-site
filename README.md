# DataWorks Website

A modern, multi-page website for DataWorks by Assured Insights - a complete, governed data platform for reporting, planning & AI.

## Overview

This is a full-featured website built with React, TypeScript, Vite, and Tailwind CSS. The site focuses 80% on the DataWorks product (BI/MI/AI tiers) and 20% on data engineering services.

## Key Features

- **Multi-page routing** with React Router
- **Responsive design** optimized for mobile, tablet, and desktop
- **Modern UI** with clean aesthetics and professional styling
- **Full navigation** with active page indicators
- **Product showcase** with detailed comparison tables
- **Case studies** for 5 companies (RedArc, Frazer-Nash, Ryalto, Vernon, MOJO-CX)
- **Contact form** for lead generation
- **Blog scaffold** ready for content

## Pages

1. **Home** (`/`) - Hero, Why It Matters, Product Overview, Stakeholder Benefits, Stats, CTA
2. **Products** (`/products`) - Detailed tiers, comparison table, journey, technical foundation
3. **Pricing** (`/pricing`) - Pricing tiers, FAQ, flexible plans
4. **Case Studies** (`/case-studies`) - Success stories with metrics
5. **Case Study Detail** (`/case-studies/:id`) - Individual case study pages
6. **About** (`/about`) - Company story, values, team, data engineering services (20% focus)
7. **Contact** (`/contact`) - Contact form, company details, FAQ
8. **Blog** (`/blog`) - Blog post grid (scaffold)

## Tech Stack

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **React Router** - Client-side routing
- **Lucide React** - Icons

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Design Philosophy

- **Clean & Professional**: Removed heavy grid backgrounds, using clean white/slate color palette
- **Modern Corporate**: Balanced use of dark sections for contrast
- **Accessible**: High contrast ratios, readable typography
- **Fast**: Optimized components, minimal dependencies
- **Modular**: Reusable components (PageHeader, CTABanner, CaseStudyCard, BlogPostCard)

## Color Palette

- **Primary**: Emerald (#10b981) - CTAs, accents
- **Blue**: (#3b82f6) - BI tier
- **Emerald**: (#10b981) - MI tier  
- **Yellow**: (#fbbf24) - AI tier
- **Slate**: (#1e293b, #475569, #64748b) - Text, backgrounds

## Key Components

### Reusable
- `PageHeader` - Consistent page titles
- `CTABanner` - Call-to-action sections
- `CaseStudyCard` - Case study preview cards
- `BlogPostCard` - Blog post preview cards

### Sections
- `Hero` - Homepage hero with tagline
- `WhyItMatters` - Value proposition
- `ProductTiers` - Product comparison
- `ComparisonTable` - Detailed feature comparison
- `StakeholderBenefits` - Businesses Love, IT Trust, Auditors Approve
- `Journey` - BI → MI → AI progression
- `Navigation` - Fixed header with routing
- `Footer` - Links and contact info

## Content Strategy

- **80% DataWorks Product Focus**: Homepage, Products, Pricing, most Case Studies
- **20% Service Offering**: About page section, small mentions

## Next Steps

1. Add real images to case studies and blog posts
2. Connect contact form to backend/API
3. Add analytics tracking
4. Implement blog content management
5. Add team member profiles to About page
6. Set up email newsletter subscription
7. Add privacy policy and terms of service pages

## License

© 2024 Assured Insights. All rights reserved.

