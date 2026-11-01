import { motion } from 'motion/react'
import TypedCommand, { typingDuration } from '../components/TypedCommand.jsx'
import { Reveal } from '../components/Reveal.jsx'
import CommandLine from '../components/CommandLine.jsx'
import useTitle from '../components/useTitle.js'

const projects = [
  {
    id: 'portfolio-web-dev',
    repo: 'https://github.com/anaclaramtn/portfolio-web-dev',
    images: [{ src: '/projectsScreenshots/web-dev.png', alt: 'portfolio-web-dev screenshot' }],
    content: (
      <p>
        This project is a{' '}
        <span className="highlight">terminal-inspired personal portfolio built entirely with HTML and CSS</span>
        , developed as part of my Web Development course. The main goal was to strengthen core web
        development fundamentals without relying on JavaScript, frameworks, or external UI
        libraries. The interface recreates the visual style of a command-line terminal, using
        familiar commands such as nano, ls, and tree to organize and present information about me,
        my projects, and my technical skills. The portfolio is divided into multiple pages,
        including a main terminal interface, a detailed README-style introduction, and a projects
        section.
      </p>
    ),
  },
  {
    id: 'enduro-atari-2600',
    repo: 'https://github.com/anaclaramtn/enduro-atari-2600',
    images: [{ src: '/projectsScreenshots/enduro-java.png', alt: 'enduro-atari-2600 screenshot' }],
    content: (
      <>
        <p>
          This project is a recreation of Enduro developed in Java, using Swing and AWT (Abstract
          Window Toolkit) for graphical rendering. Developed by: Ana Clara and Inácio Araripe
          <br />
          While inspired by the original mechanics, our version introduces a modified scoring
          system: The player loses immediately when colliding with another car and collisions with
          the track walls cause significant speed reduction The scoring system is continuous: Points
          increase proportionally to the player's speed, higher speed → faster score progression,
          lower speed → slower score accumulation and the goal is to achieve the highest possible
          score
        </p>
        <br />
        <p>
          This project was developed based on instructional material focused on building simple
          games using standard JDK libraries, especially Swing and AWT. The main technical
          references were Asteroids and Space Invaders. Asteroids served as a strong foundation due
          to: smooth rendering of multiple on-screen objects, continuous movement logic, use of game
          loops, handling multiple entities with different sizes, game loop implementation, object
          modeling, collision handling and class organization.
        </p>
      </>
    ),
  },
  {
    id: 'biblioteca-app',
    repo: 'https://github.com/anaclaramtn/biblioteca-app',
    images: [
      { src: '/projectsScreenshots/biblioteca-1.png', alt: 'biblioteca-app screenshot 1', style: { width: '250px' } },
      { src: '/projectsScreenshots/biblioteca-2.jpg', alt: 'biblioteca-app screenshot 2', style: { width: '250px' } },
    ],
    content: (
      <>
        <p>
          An Android application developed to simplify access to library services, providing a
          practical experience for both users and administrators. The app was created to streamline
          user interaction with the library collection, allowing users to browse books, manage
          loans, track returns, and receive important notifications quickly and efficiently. The app
          allows:
        </p>
        <ul style={{ marginLeft: '20px' }}>
          <li>User registration and authentication</li>
          <li>Browse and view the library collection</li>
          <li>Book loan request and management</li>
          <li>Notifications and alerts</li>
          <li>Quick book search</li>
        </ul>
      </>
    ),
  },
  {
    id: 'naval-battle-math-relations',
    repo: 'https://github.com/anaclaramtn/naval-battle-math-relations',
    images: [{ src: '/projectsScreenshots/naval-battle.png', alt: 'naval-battle-math-relations screenshot' }],
    content: (
      <>
        <p>
          An{' '}
          <a className="links-about" href="https://anaclaramtn.github.io/naval-battle-math-relations/">
            interactive educational game
          </a>{' '}
          created as part of a college-level discrete mathematics course project, designed to teach
          mathematical relations through a strategic mission inspired by naval battles.
        </p>
        <br />
        <p>
          "Batalha Naval das Relações" (Naval Battle of Relations) is a web-based game developed to
          help high school students grasp fundamental concepts of mathematical relations through a
          gamified experience. Set against the backdrop of "Operation Gordian Knot," the game
          requires players to analyze communication patterns between vessels and identify the
          mathematical properties of relations in order to progress through the mission's stages.
        </p>
      </>
    ),
  },
  {
    id: 'godot-projects',
    repo: 'https://github.com/anaclaramtn/godot-projects',
    images: [{ src: '/projectsScreenshots/martooine.png', alt: 'Matooine Protocol screenshot' }],
    content: (
      <>
        <p>
          The repository contains three game development projects built with the Godot Engine, but
          Im gonna put a screenshot of the second one, which I developed alone. Each project was
          developed to focus on learning and mastering specific game dev and OOP concepts,
          progressively increasing in complexity and architectural organization. All projects were
          built using the Godot Engine and GDScript.
        </p>
        <p>
          Matooine Protocol is a 2D platformer strongly inspired by classic Mario-style games.
          Although it is more complex than the previous projects, it was fully developed within the
          scope and technical requirements of the university course. The main goal was to design a
          complete and fully playable experience while respecting the constraints defined by the
          discipline.
        </p>
      </>
    ),
  },
]

const INTRO_COMMAND = '> ls ./projects'
const outputDelay = (text, start = 0) => start + typingDuration(text) + 0.15

function ProjectSection({ project }) {
  const command = `> ls ./projects/${project.id}`
  const delay = outputDelay(command)
  const images = project.images.map((image) => (
    <motion.img
      key={image.src}
      src={`${import.meta.env.BASE_URL}${image.src.replace(/^\//, '')}`}
      alt={image.alt}
      className="portfolio-img"
      style={image.style}
      whileHover={{ scale: 1.02, y: -4 }}
      transition={{ type: 'spring', stiffness: 250, damping: 20 }}
    />
  ))

  return (
    <>
      <br />
      <TypedCommand as="a" className="prompt-link" href={project.repo} target="_blank" rel="noreferrer" text={command} />
      <div className="container-columns">
        <Reveal className="column" delay={delay}>
          {project.content}
        </Reveal>
        <Reveal className="column" delay={delay + 0.15} y={24}>
          {images.length > 1 ? <div style={{ display: 'flex' }}>{images}</div> : images}
        </Reveal>
      </div>
    </>
  )
}

export default function Projects() {
  useTitle('Portfolio/projectsDetails')

  const introDelay = 0.3

  return (
    <>
      <br />
      <TypedCommand as="a" className="prompt-link" text={INTRO_COMMAND} delay={introDelay} />
      <Reveal delay={outputDelay(INTRO_COMMAND, introDelay)}>
        <p>
          Throughout my Computer Science degree, I've worked on several academic projects across
          different areas, including{' '}
          <span className="highlight">web and mobile development</span>, game development, and
          educational software. Most of the projects listed here were developed as part of
          university courses, either individually or with classmates, and gave me the opportunity to
          explore different technologies and programming concepts.
          <br />
          Outside of university projects, I'm currently focusing my studies on{' '}
          <span className="highlight">backend development and software engineering</span>. I've
          been working mainly with{' '}
          <span className="highlight">
            Java and Spring Boot, REST APIs, API consumption and integration, SQL databases,
            application architecture, SOLID principles, design patterns, and microservices
          </span>
          .
          <br />
          My goal with personal projects is to progressively move from academic exercises toward
          building <span className="highlight">real applications</span>, focusing not only on making
          things work, but also on understanding how to design, structure, integrate, and maintain
          software in a professional environment.
          <br />
        </p>
        <p style={{ color: '#a5fde0' }}>Each project is linked to its own repo, check it out!</p>
      </Reveal>

      {projects.map((project) => (
        <ProjectSection key={project.id} project={project} />
      ))}

      <br />
      <CommandLine />
    </>
  )
}
