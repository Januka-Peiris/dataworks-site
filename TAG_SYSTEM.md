# Color-Coded Tag System - Implementation Guide

## Overview

We've implemented a comprehensive color-coded tag system that threads a consistent visual story throughout the entire DataWorks website. This creates a memorable brand identity and helps users instantly understand what value each feature delivers.

## The Six Pillars

### 1. **Trust** (Blue - #3b82f6)
- **Focus**: Data quality, governance, single source of truth
- **Examples**: Data Quality, Governance, Reconciliation, Certified KPIs
- **Icon**: Shield

### 2. **Insight** (Emerald/Green - #10b981)
- **Focus**: Analytics, understanding, business intelligence
- **Examples**: Analytics, Reporting, Driver Models, Forecasting  
- **Icon**: Eye

### 3. **Intelligence** (Yellow - #fbbf24)
- **Focus**: AI, automation, predictive capabilities
- **Examples**: AI/ML, Automation, Predictions, Smart Workflows
- **Icon**: Sparkles

### 4. **Security** (Purple - #a855f7)
- **Focus**: Compliance, audit-ready, access controls
- **Examples**: Compliance, Audit Trails, Encryption, SOC 2
- **Icon**: Lock

### 5. **Speed** (Orange - #f97316)
- **Focus**: Fast deployment, time to value, efficiency
- **Examples**: 100 Day Delivery, Quick Setup, Fast Queries, Rapid ROI
- **Icon**: Zap

### 6. **Control** (Slate/Gray - #64748b)
- **Focus**: Access management, permissions, oversight
- **Examples**: Access Control, Permissions, Data Lineage, Monitoring
- **Icon**: Settings

## Components

### Tag Component
**File**: `src/components/Tag.tsx`

Reusable badge component with three sizes (sm, md, lg) and six themes.

```tsx
import Tag from '../components/Tag';

<Tag theme="trust" size="sm" />
<Tag theme="insight" size="md" />
```

### Pillar Legend
**File**: `src/components/PillarLegend.tsx`

Full explanation section showing all six pillars with descriptions and examples. Included on the Products page.

## Where Tags Are Used

### 1. **Home Page** (`src/pages/Home.tsx`)
- Problem/Solution section features tagged
- Quick pillar intro section with all six tags
- Links to full pillar legend

### 2. **Products Page** (`src/pages/Products.tsx`)
- ProductTiers component: Each capability tagged
- Full PillarLegend section
- Use cases section: All use cases tagged (BI, MI, AI)
- Shows how features map to pillars

### 3. **ProductTiers Component** (`src/components/ProductTiers.tsx`)
- Each tier's capabilities have 1-3 relevant tags
- Example: "AI guardrails" → Intelligence, Security, Control
- Visual mapping of features to value

## Feature-to-Tag Mapping Examples

### DataWorks: BI
- Single source of truth → **Trust**
- Certified KPIs → **Trust**, **Control**
- Automated quality checks → **Trust**, **Speed**
- Reconciliations & lineage → **Trust**, **Control**

### DataWorks: MI
- Driver modelling → **Insight**
- Scenario simulation → **Insight**, **Intelligence**
- Predictive re-forecasting → **Insight**, **Intelligence**

### DataWorks: AI
- AI guardrails → **Intelligence**, **Security**, **Control**
- Governed prompts → **Intelligence**, **Security**
- ML-ready data products → **Intelligence**, **Speed**

## Benefits of This System

1. **Visual Consistency**: Users learn your "language" across all pages
2. **Instant Understanding**: Tags show what each feature delivers at a glance
3. **Professional Polish**: Matches approach used by top SaaS companies
4. **Memorable Branding**: Creates unique visual identity
5. **Easy Expansion**: Simple to add tags to new features/pages

## How to Add Tags to New Content

1. Import the Tag component:
```tsx
import Tag from '../components/Tag';
```

2. Add tags below feature descriptions:
```tsx
<div>
  <div className="font-semibold">Feature Name</div>
  <div className="text-sm text-slate-600 mb-2">Description</div>
  <div className="flex flex-wrap gap-1">
    <Tag theme="trust" size="sm" />
    <Tag theme="speed" size="sm" />
  </div>
</div>
```

3. Consider which pillars the feature supports (usually 1-3 tags max)

## Future Enhancements

- Add tags to Case Studies highlighting which pillars each company benefited from
- Add tags to Blog posts to categorize content
- Create filtering by pillar on Products/Use Cases
- Add pillar-based navigation
- Analytics tracking on which pillars users engage with most

## Notes

- Keep tags to 1-3 per feature for clarity
- Multiple features can have the same tags
- Tags create visual patterns that help users navigate
- The pillar legend on Products page educates users on the system
- Homepage has quick intro that links to full legend

This system elevates the entire site and creates a cohesive, professional experience that helps users understand how DataWorks delivers value.

