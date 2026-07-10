# Composio AI Product Ops Internship Assignment

## Overview

This project researches 100 SaaS applications across multiple categories to evaluate their developer readiness for AI agent integrations.

For each application, the project captures:

- Category
- Description
- Authentication Method
- Self-Serve or Gated Access
- API Surface
- MCP Support
- Buildability
- Main Blocker
- Evidence (Official Documentation)

The collected research is analyzed to identify trends and displayed through an interactive HTML dashboard.

---

## Project Structure

```
composio-assignment/

├── apps.json
├── research.js
├── research.json
├── analysis.js
├── analysis.json
├── index.html
├── style.css
├── script.js
├── package.json
└── README.md
```

---

## Workflow

```
apps.json
      │
      ▼
research.js
      │
      ▼
research.json
      │
      ▼
analysis.js
      │
      ▼
analysis.json
      │
      ▼
HTML Dashboard
```

---

## How to Run

### Install Dependencies

```bash
npm install
```

### Generate Research Template

```bash
npm run research
```

### Generate Analysis

```bash
npm run analyze
```

### Open Dashboard

Open `index.html` in your browser.

---

## Dataset

The project includes research for **100 SaaS applications** across:

- CRM & Sales
- Support & Helpdesk
- Communications
- Marketing
- Ecommerce
- Data & SEO
- Developer Platforms
- Productivity
- Finance
- AI & Research

---

## Analysis

The dashboard automatically summarizes:

- Total Applications
- Authentication Methods
- Category Distribution
- Self-Serve vs Gated
- Buildability
- MCP Support

---

## Verification

To improve reliability:

- Official developer documentation was used as the primary evidence.
- Research fields were reviewed for consistency.
- A sample of applications was manually cross-checked against official documentation.

---

## Key Insights

Some common patterns observed:

- OAuth 2.0 is the most common authentication method.
- REST APIs dominate across SaaS platforms.
- Most developer platforms provide self-service onboarding.
- Enterprise products are more likely to require gated access.
- MCP support is still limited but increasing in AI-focused tools.

---

## Technologies Used

- JavaScript (Node.js)
- HTML5
- CSS3
- Chart.js

---

## Author

Vaibhav Singh
