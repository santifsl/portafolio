import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function App() {
  const root = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.scaffold-title', { opacity: 0, y: 24, duration: 0.8, ease: 'power2.out' })
    }, root)
    return () => ctx.revert()
  }, [])

  return (
    <div
      ref={root}
      className="flex min-h-dvh items-center justify-center bg-neutral-950 text-neutral-100"
    >
      <h1 className="scaffold-title text-2xl font-medium tracking-tight">Portafolio</h1>
    </div>
  )
}

export default App
