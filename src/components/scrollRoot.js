import { createContext, useContext } from 'react'

// ref to the scrollable .terminal-body, used as the root for "in view" animations
export const ScrollRootContext = createContext(null)
export const useScrollRoot = () => useContext(ScrollRootContext)
