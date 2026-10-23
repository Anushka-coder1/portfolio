# Data Science Portfolio

A responsive personal portfolio for presenting data science, machine learning,
data-analysis, and visualization projects. It includes project filtering, a
skills overview, dark-mode styling, and a contact form backed by a Vercel
serverless function.

## Tech stack

- React 19
- Vite
- Tailwind CSS 4
- React Router
- Lucide React icons
- Nodemailer (contact-form email delivery)
- Vercel (deployment and serverless API)

## Run locally

**Prerequisite:** Node.js 20.19+ or 22.12+ is recommended for Vite 7.

```bash
npm install
npm run dev
```

Open the local address printed by Vite (normally `http://localhost:5173`).

## Available commands

```bash
npm run dev      # Start the development server
npm run build    # Create a production build in dist/
npm run preview  # Preview the production build locally
npm run lint     # Run ESLint
```

## Customize the portfolio

- Update personal details and the introduction in `src/components/`.
- Add, remove, or edit project cards in `src/data/projects.js`.
- Update skills and proficiency levels in `src/data/skills.js`.
- Place static images and other public assets in `public/`.

## Contact-form configuration

The contact form is handled by `api/contact.js`. For email delivery, configure
these environment variables in your local environment and deployment platform:

```env
EMAIL_USER=your-gmail-address@gmail.com
EMAIL_PASS=your-gmail-app-password
CONTACT_RECIPIENT=your-inbox@example.com
```

`EMAIL_PASS` should be a Gmail App Password, not your usual Gmail password.
Never commit these values to source control.

For a deployed site, also update `allowedOrigins` in `api/contact.js` with your
production domain so that the form can make requests successfully.

## Deploy

This project is configured for Vercel. Import the repository into Vercel, add
the contact-form environment variables, and deploy. The `vercel.json` rewrite
keeps client-side routes working when a visitor refreshes the page.

## License

This project is intended as a personal portfolio template. Add a license file
if you plan to distribute or reuse it publicly.

## Future changes

- Insert a video resume
- embedded normal resume
- change the meteors to neural network
- add "more projects" under project section so that only 3 projects are shown 
- On clicking "more projects another page gets open of "/MoreProjects"
- under my skills, in "all" tab shown only important or major works rather than showing all at once.
- Add "/MyJourney" page to show academics 

### Build portfolio that can tell you are actual capable like 3-5 experiance

1. One deployed AI system with real users 
2. Add evaluations , guardrails , monitorings , loggings and cost/latency tracking.
3. Write up what broke and how you fixed it.
4. Use stacking postings actually cite: python , RAG , LangGraph/CrewAI , vector DBs , MCP , Docker , one Cloud
