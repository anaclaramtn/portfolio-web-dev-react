import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import TypedCommand, { timeline } from '../components/TypedCommand.jsx'
import { Reveal, Stagger, StaggerItem } from '../components/Reveal.jsx'
import CommandLine from '../components/CommandLine.jsx'
import useTitle from '../components/useTitle.js'

const COMMAND = '> nano ./README.md'

export default function Readme() {
  useTitle('Portfolio/readmeDetails')

  const t = timeline(0.3)
  const cmd = t.command(COMMAND)

  return (
    <>
      <br />
      <TypedCommand className="prompt" text={COMMAND} delay={cmd.delay} />

      <div className="container-columns">
        <Stagger className="column" delay={cmd.output} stagger={0.15}>
          <StaggerItem as="p">
            Hey! Thanks for stopping by, I'm glad you want to get to know me a little better.
          </StaggerItem>
          <br />
          <StaggerItem as="p">
            I'm <span className="highlight-2">Ana Clara</span>, 22, from Brazil 🇧🇷. I'm studying{' '}
            <span className="highlight-2">Computer Science at the University of Fortaleza</span>. I
            started in early 2025, and now I'm right about{' '}
            <span className="highlight-2">halfway through</span> the degree.
          </StaggerItem>
          <br />
          <StaggerItem as="p">
            In 2026, one of my professors recommended me for an{' '}
            <span className="highlight-2">Undergraduate Research Program</span> at{' '}
            <a className="links-about" href="https://unifor.br/web/pesquisa-inovacao/ncdia" target="_blank" rel="noreferrer">
              NCDIA
            </a>
            . There, I work with geospatial data and graph-based analysis for urban mobility: using{' '}
            <span className="highlight-2">Python</span>, GeoPandas, Shapely, NetworkX and Rasterio, I
            bring together{' '}
            <span className="highlight-2">
              pedestrian networks, public transportation, population data, points of interest and
              other spatial datasets
            </span>
            .
          </StaggerItem>
          <br />
          <StaggerItem as="p">
            A few weeks later, I also joined SME, Fortaleza's{' '}
            <a className="links-about" href="https://educacao.sme.fortaleza.ce.gov.br/" target="_blank" rel="noreferrer">
              Municipal Secretariat of Education
            </a>
            . My job there is to understand what the business needs and turn those{' '}
            <span className="highlight-2">requirements into system improvements</span>, bug fixes and
            new features. I also write <span className="highlight-2">SQL reports</span> and work with
            a mix of enterprise and legacy tech: <span className="highlight-2">Java</span>,{' '}
            <span className="highlight-2">Spring</span>, Hibernate, JSF, Oracle SQL,{' '}
            <span className="highlight-2">React</span>, <span className="highlight-2">Git</span> and
            GitLab.
          </StaggerItem>
          <br />
          <StaggerItem as="p">
            At university, I'm lucky to have a small but amazing group of friends, and we're always
            helping each other out. You can find the projects we built together, along with my solo
            ones, on the{' '}
            <Link to="/projects" className="links-about">
              projects page
            </Link>
            .
          </StaggerItem>
          <br />
          <StaggerItem as="p">
            Outside of class, I've been focusing on{' '}
            <span className="highlight-2">backend development and software engineering</span>, building
            the skills I need to work on real-world software. Right now that mostly means{' '}
            <span className="highlight-2">
              the Java ecosystem, especially Spring Boot, while I dig into API design and integration,
              databases, application architecture, design patterns, SOLID and microservices
            </span>
            . More than learning specific tools, I want to understand how applications are designed,
            structured and maintained, and how different systems talk to each other.
          </StaggerItem>
        </Stagger>

        <div className="column" style={{ alignItems: 'center', display: 'flex' }}>
          <Reveal y={24} delay={cmd.output + 0.3}>
            <motion.img
              src="/me.jpg"
              alt="Ana Clara"
              className="me-img"
              whileHover={{ scale: 1.03, rotate: 1 }}
              transition={{ type: 'spring', stiffness: 250, damping: 18 }}
            />
          </Reveal>
        </div>
      </div>

      <br />
      <CommandLine delay={t.end()} />
    </>
  )
}
