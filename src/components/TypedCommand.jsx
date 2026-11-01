import { useEffect, useRef, useState } from 'react'
import { useInView, useReducedMotion } from 'motion/react'
import { useScrollRoot } from './scrollRoot.js'

// seconds per typed character
export const TYPE_SPEED = 0.03

export const typingDuration = (text) => text.length * TYPE_SPEED

/**
 * Builds a sequence of "command -> output" delays so that each command
 * starts typing after the previous output has shown up.
 */
export function timeline(start = 0.2) {
  let t = start
  return {
    command(text) {
      const delay = t
      const output = delay + typingDuration(text) + 0.15
      t = output + 0.45
      return { delay, output }
    },
    end() {
      return t
    },
  }
}

/**
 * Types `text` like a terminal command once it scrolls into view.
 * `as` can be any element or component (e.g. 'p', 'a', Link).
 */
export default function TypedCommand({ text, as: Tag = 'p', delay = 0, ...props }) {
  const ref = useRef(null)
  const root = useScrollRoot()
  const inView = useInView(ref, { root, once: true })
  const reduceMotion = useReducedMotion()
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!inView || reduceMotion) return
    let interval
    const timeout = setTimeout(() => {
      interval = setInterval(() => {
        setCount((c) => Math.min(c + 1, text.length))
      }, TYPE_SPEED * 1000)
    }, delay * 1000)
    return () => {
      clearTimeout(timeout)
      clearInterval(interval)
    }
  }, [inView, reduceMotion, delay, text])

  const shown = reduceMotion ? text.length : count
  const typing = shown < text.length

  return (
    <Tag ref={ref} aria-label={text} {...props}>
      <span aria-hidden="true">{text.slice(0, shown)}</span>
      {typing && inView && <span className="typing-caret" aria-hidden="true" />}
      <span className="typing-ghost" aria-hidden="true">
        {text.slice(shown)}
      </span>
    </Tag>
  )
}
