import Image from "next/image";
import styles from "./page.module.css";

const experience = [
  {
    role: "Software Engineer",
    note: "Incoming",
    company: "Capital One",
    location: "",
    period: "2026",
    detail:
      "Joining Capital One full-time as a software engineer after graduation.",
  },
  {
    role: "Software Engineer I",
    company: "Ziff Davis Shopping",
    location: "Austin, TX",
    period: "Jan 2026 — Jun 2026",
    detail:
      "Built loyalty and rewards services in TypeScript, Node.js, and GraphQL for a portfolio of e-commerce brands.",
  },
  {
    role: "Software Lead",
    company: "TAMU Formula Electric",
    location: "College Station, TX",
    period: "Jan 2024 — June 2026",
    detail:
      "Led a software subteam of 8 building the systems behind a competition race car. Architected an IoT telemetry pipeline ingesting 3,500+ sensor readings/sec from STM32 CAN nodes over LTE into Grafana, and shipped the microservices platforms for recruitment and project management that keep the team running.",
  },
  {
    role: "Software Engineering Intern",
    company: "Ziff Davis Shopping",
    location: "Austin, TX",
    period: "May 2025 — Aug 2025",
    detail:
      "Built an authentication orchestration layer in GraphQL and TypeScript to enable a zero-downtime Okta to Ory migration for millions of users, and shipped an AI support chatbot that cut response time by 60%.",
  },
  {
    role: "Technical Co-founder",
    note: "AI Startup",
    company: "Preptify",
    location: "Austin, TX",
    period: "Jun 2023 — Dec 2023",
    detail:
      "AI interview-prep platform. Owned product, strategy, and growth from zero to launch.",
  },
  {
    role: "Software Engineering Intern",
    company: "RetailMeNot",
    location: "Austin, TX",
    period: "May 2021 — Aug 2021",
    detail:
      "Engineered a high-performance RESTful API in TypeScript and Node.js for real-time product tracking, reducing data retrieval time by 70% while I was in high school.",
  },
];

const projects = [
  {
    name: "Constellation",
    note: "TAMUHack ’26 Winner",
    detail:
      "An AI-native IDE for high-performance computing that replaces terminal-heavy HPC workflows with a visual execution graph and an agentic AI interface.",
    stack: "Next.js · AWS Batch · Gemini",
  },
  {
    name: "Hermes",
    note: "AI Call Center",
    detail:
      "A scalable AI call center on OpenAI’s Realtime Voice API that automates thousands of customer conversations with sub-750ms transcription and live analytics.",
    stack: "Next.js · OpenAI · Twilio · PostgreSQL",
  },
];

export default function Home() {
  return (
    <div className={styles.page}>
      <section className={styles.screen}>
        <header className={styles.masthead}>
          <h1>ATHUL SURESH</h1>
        </header>

        <div className={styles.hero}>
          <div className={styles.heroImage}>
            <Image
              src="/pillars.webp"
              alt="The Pillars of Creation"
              width={800}
              height={800}
              priority
            />
          </div>
          <p className={styles.heroText}>
            I am a computer programmer who specializes in building systems that
            solve hard problems for lots of people.
          </p>
        </div>

        <a
          className={styles.scrollHint}
          href="#experience"
          aria-label="Scroll to résumé"
        >
          <span className={styles.chevron} />
        </a>
      </section>

      <main className={styles.main}>
        <section className={styles.section} id="experience">
          <h2 className={styles.sectionTitle}>Experience</h2>
          <ul className={styles.list}>
            {experience.map((job) => (
              <li key={`${job.company}-${job.period}`} className={styles.entry}>
                <div className={styles.entryHead}>
                  <span className={styles.role}>
                    {job.role}
                    {job.note ? (
                      <span className={styles.note}> — {job.note}</span>
                    ) : null}
                  </span>
                  <span className={styles.period}>{job.period}</span>
                </div>
                <div className={styles.entrySub}>
                  <span className={styles.company}>{job.company}</span>
                  {job.location ? (
                    <span className={styles.location}>{job.location}</span>
                  ) : null}
                </div>
                <p className={styles.detail}>{job.detail}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className={styles.section} id="projects">
          <h2 className={styles.sectionTitle}>Selected Projects</h2>
          <ul className={styles.list}>
            {projects.map((project) => (
              <li key={project.name} className={styles.entry}>
                <div className={styles.entryHead}>
                  <span className={styles.role}>
                    {project.name}
                    <span className={styles.note}> — {project.note}</span>
                  </span>
                </div>
                <p className={styles.detail}>{project.detail}</p>
                <p className={styles.stack}>{project.stack}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className={styles.section} id="education">
          <h2 className={styles.sectionTitle}>Education</h2>
          <ul className={styles.list}>
            <li className={styles.entry}>
              <div className={styles.entryHead}>
                <span className={styles.role}>Texas A&amp;M University</span>
                <span className={styles.period}>Aug 2022 — May 2026</span>
              </div>
              <div className={styles.entrySub}>
                <span className={styles.company}>
                  B.S. Applied Mathematics &amp; Computer Science
                </span>
                <span className={styles.location}>College Station, TX</span>
              </div>
            </li>
          </ul>
        </section>

        <section className={styles.section} id="skills">
          <h2 className={styles.sectionTitle}>Skills</h2>
          <dl className={styles.skills}>
            <div className={styles.skillRow}>
              <dt>Languages</dt>
              <dd>
                Python, TypeScript, JavaScript, C/C++, Rust, SQL, PHP, R, Java
              </dd>
            </div>
            <div className={styles.skillRow}>
              <dt>Frameworks</dt>
              <dd>React, Next.js, Node.js, PyTorch, TensorFlow, Laravel</dd>
            </div>
            <div className={styles.skillRow}>
              <dt>Tools</dt>
              <dd>Git, Docker, AWS, GraphQL, PostgreSQL, MQTT, Grafana</dd>
            </div>
          </dl>
          <div className={styles.docLinks}>
            <div className={styles.docItem}>
              <a
                className={styles.resumeLink}
                href="https://drive.google.com/file/d/13EDf4o7hG0PKb0C7nA0pKIAoppO_Dbre/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download full résumé (PDF) →
              </a>
            </div>
            <div className={styles.docItem}>
              <a
                className={styles.resumeLink}
                href="https://drive.google.com/file/d/1IuyFQJjW_HXr5k0g1dxO6wszc_fLCnM3/view"
                target="_blank"
                rel="noopener noreferrer"
              >
                Read a letter of recommendation →
              </a>
              <span className={styles.docNote}>
                Written by the former Director of Engineering at Ziff Davis
                Shopping.
              </span>
            </div>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <nav className={styles.social}>
          <a href="https://github.com/aathul-raj">GitHub</a>
          <span aria-hidden="true">·</span>
          <a href="https://www.linkedin.com/in/athul-suresh/">LinkedIn</a>
          <span aria-hidden="true">·</span>
          <a href="mailto:athulrsuresh@gmail.com">Email</a>
        </nav>
        <p className={styles.copyright}>© {new Date().getFullYear()} Athul Suresh</p>
      </footer>
    </div>
  );
}
