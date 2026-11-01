import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import TypedCommand, { timeline } from '../components/TypedCommand.jsx'
import { Reveal, Stagger, StaggerItem } from '../components/Reveal.jsx'
import CommandLine from '../components/CommandLine.jsx'
import useTitle from '../components/useTitle.js'

const projects = [
  {
    name: '/portfolio-web-dev/',
    url: 'https://github.com/anaclaramtn/portfolio-web-dev',
    desc: '# This portfolio! Using HTML and CSS only',
  },
  {
    name: '/enduro-atari-2600/',
    url: 'https://github.com/anaclaramtn/enduro-atari-2600',
    desc: "# Atari 2600's Enduro using Java Swing",
  },
  {
    name: '/biblioteca-app/',
    url: 'https://github.com/anaclaramtn/biblioteca-app',
    desc: "# Mobile app to the university's library",
  },
]

// [tree prefix, label, is a leaf (highlightable item)]
const skillsTree = [
  ['├── ', 'langs', false],
  ['│   ├── ', 'Java', true],
  ['│   ├── ', 'JavaScript', true],
  ['│   ├── ', 'Python', true],
  ['│   └── ', 'SQL', true],
  ['├── ', 'frameworks-and-libs', false],
  ['│   ├── ', 'Spring Boot', true],
  ['│   ├── ', 'React', true],
  ['│   ├── ', 'Pandas, matplotlib, networkx, osmnx, rasterio', true],
  ['│   └── ', 'Tailwind', true],
  ['└── ', 'more-tools', false],
  ['    ├── ', 'Git, GitHub e GitLab', true],
  ['    ├── ', 'Postman', true],
  ['    └── ', 'HTML5 / CSS3', true],
]

const contacts = [
  { key: 'github', label: '@anaclaramtn', href: 'https://github.com/anaclaramtn' },
  { key: 'linkedin', label: '/in/anaclaramtn', href: 'https://www.linkedin.com/in/anaclaramtn' },
  { key: 'instagram', label: '@mtnanaclara_', href: 'https://instagram.com/mtnanaclara_' },
  { key: 'email', label: 'anaclaramtn@gmail.com', href: 'mailto:anaclaramtn@gmail.com' },
]

const COMMANDS = {
  readme: '> nano ./README.md',
  projects: '> ls ./projects',
  skills: '> tree ./skills',
  contacts: '> cat ./contacts.json',
}

export default function Home() {
  useTitle('Portfolio')

  const t = timeline(0.9)
  const readme = t.command(COMMANDS.readme)
  const projectsCmd = t.command(COMMANDS.projects)
  const skills = t.command(COMMANDS.skills)
  const contactsCmd = t.command(COMMANDS.contacts)

  return (
    <>
      <Reveal as="p" className="welcome-text" delay={0.1}>
        Welcome to my <span className="highlight">portfolio</span> !
      </Reveal>
      <Reveal as="p" delay={0.4}>
        Click on any command to open a more detailed page. You can close it anytime by pressing the
        red button above.
      </Reveal>
      <br />

      <TypedCommand as={Link} to="/readme" className="prompt projects" text={COMMANDS.readme} delay={readme.delay} />
      <Reveal className="readme-box" delay={readme.output}>
        <div className="readme-header">[ File: README.md | Lines: 5 ]</div>
        <Stagger className="readme-body" delay={readme.output + 0.15} stagger={0.1}>
          <StaggerItem as="p"># Hi, I'm Ana!</StaggerItem>
          <StaggerItem as="p">
            CS student at Unifor, systems analyst at SME and research assistant at NCDIA.
          </StaggerItem>
          <StaggerItem as="p">
            I work mostly with Java, React and SQL, and spend part of my time on graphs and
            geospatial data.
          </StaggerItem>
          <StaggerItem as="p">
            Feel free to say hi on my{' '}
            <a className="links-about" href="https://github.com/anaclaramtn" target="_blank" rel="noreferrer">
              'github'
            </a>
{' '}
            or{' '}
            <a className="links-about" href="https://www.linkedin.com/in/anaclaramtn" target="_blank" rel="noreferrer">
              'linkedin'
            </a>
            !
          </StaggerItem>
        </Stagger>
      </Reveal>

      <br />
      <TypedCommand as={Link} to="/projects" className="prompt projects" text={COMMANDS.projects} delay={projectsCmd.delay} />
      <Stagger as="ul" className="project-list" delay={projectsCmd.output} stagger={0.12}>
        {projects.map((project) => (
          <StaggerItem as="li" key={project.name}>
            <span className="file-perm"></span>{' '}
            <motion.a
              href={project.url}
              target="_blank"
              rel="noreferrer"
              className="file-name"
              whileHover={{ x: 4 }}
              style={{ display: 'inline-block' }}
            >
              {project.name}
            </motion.a>{' '}
            <span className="file-desc">{project.desc}</span>
          </StaggerItem>
        ))}
      </Stagger>

      <br />
      <TypedCommand className="prompt" text={COMMANDS.skills} delay={skills.delay} />
      <Stagger as="pre" className="tree-output" delay={skills.output} stagger={0.04}>
        {skillsTree.map(([prefix, label, leaf]) => (
          <StaggerItem as="span" className="tree-line" key={prefix + label}>
            {prefix}
            {leaf ? <span className="text-tree">{label}</span> : label}
          </StaggerItem>
        ))}
      </Stagger>

      <br />
      <TypedCommand className="prompt" text={COMMANDS.contacts} delay={contactsCmd.delay} />
      <Stagger as="pre" className="json-output" delay={contactsCmd.output} stagger={0.08}>
        <StaggerItem as="span" className="tree-line">{'{'}</StaggerItem>
        {contacts.map((contact, i) => (
          <StaggerItem as="span" className="tree-line" key={contact.key}>
            <span className="highlight-2">"{contact.key}"</span>: "
            <a
              href={contact.href}
              className="links-about"
              {...(contact.href.startsWith('http') && { target: '_blank', rel: 'noreferrer' })}
            >
              {contact.label}
            </a>
            "{i < contacts.length - 1 && ','}
          </StaggerItem>
        ))}
        <StaggerItem as="span" className="tree-line">{'}'}</StaggerItem>
      </Stagger>

      <br />
      <CommandLine delay={t.end()} />
    </>
  )
}
