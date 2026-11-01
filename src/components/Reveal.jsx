import { motion } from 'motion/react'
import { useScrollRoot } from './scrollRoot.js'

const EASE = [0.16, 1, 0.3, 1]

/** Fades + slides its content in when it enters the terminal viewport. */
export function Reveal({ as = 'div', delay = 0, x = 0, y = 10, children, ...props }) {
  const root = useScrollRoot()
  const Component = motion[as]
  return (
    <Component
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ root, once: true, amount: 0.15 }}
      transition={{ duration: 0.5, delay, ease: EASE }}
      {...props}
    >
      {children}
    </Component>
  )
}

/** Container whose <StaggerItem> children appear one after another. */
export function Stagger({ as = 'div', delay = 0, stagger = 0.06, children, ...props }) {
  const root = useScrollRoot()
  const Component = motion[as]
  return (
    <Component
      initial="hidden"
      whileInView="show"
      viewport={{ root, once: true, amount: 0.1 }}
      variants={{
        hidden: {},
        show: { transition: { delayChildren: delay, staggerChildren: stagger } },
      }}
      {...props}
    >
      {children}
    </Component>
  )
}

const itemVariants = {
  hidden: { opacity: 0, x: -10 },
  show: { opacity: 1, x: 0, transition: { duration: 0.35, ease: EASE } },
}

export function StaggerItem({ as = 'div', children, ...props }) {
  const Component = motion[as]
  return (
    <Component variants={itemVariants} {...props}>
      {children}
    </Component>
  )
}
