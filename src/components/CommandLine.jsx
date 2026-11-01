import { Reveal } from './Reveal.jsx'

export default function CommandLine({ delay = 0 }) {
  return (
    <Reveal className="command-line" delay={delay} y={0}>
      <span className="prompt">guest@terminal:~$</span>
      <span className="cursor"></span>
    </Reveal>
  )
}
