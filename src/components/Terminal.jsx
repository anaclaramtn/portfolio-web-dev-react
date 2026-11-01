import { useRef, useState } from 'react'
import { Link, useLocation, useOutlet } from 'react-router-dom'
import { AnimatePresence, motion } from 'motion/react'
import { ScrollRootContext } from './scrollRoot.js'

const pageVariants = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.3, ease: 'easeOut' } },
  exit: { opacity: 0, y: -12, transition: { duration: 0.2, ease: 'easeIn' } },
}

export default function Terminal() {
  const { pathname } = useLocation()
  const outlet = useOutlet()
  const bodyRef = useRef(null)
  const [minimized, setMinimized] = useState(false)
  const [maximized, setMaximized] = useState(false)

  const isHome = pathname === '/'

  const className = ['terminal', minimized && 'minimized', maximized && 'maximized']
    .filter(Boolean)
    .join(' ')

  return (
    <motion.main
      className={className}
      initial={{ opacity: 0, scale: 0.96, y: 24 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
    >
      <header className="terminal-header" onDoubleClick={() => setMaximized((m) => !m)}>
        <div className="buttons">
          {isHome ? (
            <a className="btn close" href="https://github.com/anaclaramtn" aria-label="close"></a>
          ) : (
            <Link className="btn close" to="/" aria-label="close"></Link>
          )}
          <button
            type="button"
            className="btn minimize"
            aria-label="minimize"
            onClick={() => setMinimized((m) => !m)}
          ></button>
          <button
            type="button"
            className="btn maximize"
            aria-label="maximize"
            onClick={() => {
              setMinimized(false)
              setMaximized((m) => !m)
            }}
          ></button>
        </div>
        <span className="title">guest@terminal.dev:~</span>
      </header>

      <ScrollRootContext.Provider value={bodyRef}>
        <section className="terminal-body" ref={bodyRef}>
          <AnimatePresence mode="wait" onExitComplete={() => bodyRef.current?.scrollTo({ top: 0 })}>
            <motion.div
              key={pathname}
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              {outlet}
            </motion.div>
          </AnimatePresence>
        </section>
      </ScrollRootContext.Provider>
    </motion.main>
  )
}
