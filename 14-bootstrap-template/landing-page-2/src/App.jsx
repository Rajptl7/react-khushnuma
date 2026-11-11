import { useEffect, useState } from 'react'

import nexusMacro from './assets/images/nexus-macro.jpg'
import nexusCore from './assets/images/nexus-core.jpg'
import nexusFlux from './assets/images/nexus-flux.jpg'
import nexusGrid from './assets/images/nexus-grid.jpg'
import nexusSync from './assets/images/nexus-sync.jpg'
import nexusTabCore from './assets/images/nexus-tab-core.jpg'
import nexusTabFluidics from './assets/images/nexus-tab-fluidics.jpg'
import nexusTabSync from './assets/images/nexus-tab-sync.jpg'

const slices = [
  { id: 'A.01', title: 'Core Array', category: 'Compute', image: nexusCore, description: 'Sixty-four hot-swappable compute blades aligned on a single coherent fabric, tuned for sustained full-load operation.' },
  { id: 'A.02', title: 'Fluidics Loop', category: 'Thermal', image: nexusFlux, description: 'A sealed dielectric loop moves heat away from silicon at the source, holding the entire rack within a two degree band.' },
  { id: 'A.03', title: 'Power Grid', category: 'Energy', image: nexusGrid, description: 'Redundant busbars and solid-state switching deliver clean power with zero transfer time when a feed drops.' },
  { id: 'A.04', title: 'Sync Layer', category: 'Network', image: nexusSync, description: 'Optical interconnects keep every node phase-locked, so distributed workloads behave like a single machine.' },
]

const matrixItems = [
  { key: 'core', number: '01.', name: 'CORE', image: nexusTabCore, caption: 'FIG. 01 / CORE FRAME', description: 'The structural heart of the Nexus. A milled aluminum frame that locates every module to within five microns.' },
  { key: 'fluidics', number: '02.', name: 'FLUIDICS', image: nexusTabFluidics, caption: 'FIG. 02 / FLUIDICS MANIFOLD', description: 'Quick-disconnect manifolds route coolant through the chassis without a single exposed line.' },
  { key: 'sync', number: '03.', name: 'SYNC', image: nexusTabSync, caption: 'FIG. 03 / SYNC TIMING PLANE', description: 'A dedicated timing plane distributes a single clock to all nodes, end to end, rack to rack.' },
]

const clamp = (value, min, max) => Math.max(min, Math.min(max, value))

export default function App() {
  const [activeSlice, setActiveSlice] = useState(null)
  const [activeMatrix, setActiveMatrix] = useState('core')
  const [progress, setProgress] = useState(0)
  const [activeCard, setActiveCard] = useState(0)

  useEffect(() => {
    const cards = Array.from(document.querySelectorAll('.zcard'))
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let frame = 0

    const render = () => {
      frame = 0
      const viewportHeight = window.innerHeight || 1
      const scrollY = window.scrollY || window.pageYOffset || 0
      const maxScroll = Math.max(1, document.documentElement.scrollHeight - viewportHeight)
      const percentage = clamp(scrollY / maxScroll, 0, 1)

      cards.forEach((card, index) => {
        const entry = index === 0 ? 1 : clamp((scrollY - (index - 1) * viewportHeight) / viewportHeight, 0, 1)
        const recede = index === cards.length - 1 ? 0 : clamp((scrollY - index * viewportHeight) / viewportHeight, 0, 1)
        if (!reduceMotion) {
          card.style.transform = `translateY(${(1 - entry) * 100}%) scale(${1 - 0.1 * recede})`
          card.style.opacity = String(1 - 0.6 * recede)
        }
      })

      setProgress(percentage)
      setActiveCard(clamp(Math.floor((scrollY + viewportHeight * 0.5) / viewportHeight), 0, cards.length - 1))
    }

    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(render)
    }

    render()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (frame) window.cancelAnimationFrame(frame)
    }
  }, [])

  const goToCard = (index) => {
    const target = clamp(index, 0, 3)
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    window.scrollTo({
      top: target * window.innerHeight,
      behavior: reduceMotion ? 'auto' : 'smooth',
    })
  }

  const chooseSlice = (index) => {
    setActiveSlice(current => current === index ? null : index)
  }

  return (
    <>
      <div className="scroll-spacer" aria-hidden="true" />

      <section className="zcard card-hero" data-card="1">
        <div className="hero-grid" aria-hidden="true" />
        <div className="glass-shape glass-a" aria-hidden="true" />
        <div className="glass-shape glass-b" aria-hidden="true" />
        <div className="glass-shape glass-c" aria-hidden="true" />
        <div className="hero-stage">
          <p className="hero-eyebrow">Modular Compute Systems</p>
          <h1 className="hero-title">THE NEXUS</h1>
          <p className="hero-sub">One chassis. Infinite configurations. Precision-engineered infrastructure for teams that build at the edge of what hardware allows.</p>
        </div>
        <div className="hero-scroll-hint">Scroll to descend</div>
      </section>

      <section className="zcard card-macro" data-card="2">
        <img className="macro-img" src={nexusMacro} alt="Macro view of the Nexus core module" />
        <div className="macro-shade" aria-hidden="true" />
        <div className="crosshair-v" aria-hidden="true" />
        <div className="crosshair-h" aria-hidden="true" />
        <div className="node-dot" aria-hidden="true" />
        <div className="node-box">
          <p className="node-box-tag">NODE / NX-07 TELEMETRY</p>
          <div className="node-stat"><span>EFFICIENCY</span><span>98.4%</span></div>
          <div className="node-stat"><span>THERMAL DELTA</span><span>-12.6 C</span></div>
          <div className="node-stat"><span>SYNC LATENCY</span><span>0.8 ms</span></div>
        </div>
        <div className="macro-caption">
          <span className="mono">02 / Engineered in the open</span>
          <h2>Every micron is accounted for.</h2>
        </div>
      </section>

      <section className="zcard card-fold" data-card="3">
        <div className="fold-head">
          <h2>Four systems. One spine.</h2>
          <span className="mono">03 / Hover or tap a column</span>
        </div>
        <div className="accordion" id="accordion">
          {slices.map((slice, index) => (
            <button
              className={`slice${activeSlice === index ? ' active' : ''}`}
              type="button"
              key={slice.id}
              aria-expanded={activeSlice === index}
              onMouseEnter={() => {
                if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) setActiveSlice(index)
              }}
              onFocus={() => setActiveSlice(index)}
              onClick={() => chooseSlice(index)}
            >
              <img className="slice-img" src={slice.image} alt={slice.title} />
              <div className="slice-shade" aria-hidden="true" />
              <div className="slice-idle">
                <span className="slice-num">{slice.id}</span>
                <span className="slice-idle-title">{slice.title}</span>
                <span className="slice-num" aria-hidden="true">+</span>
              </div>
              <div className="slice-reveal">
                <span className="mono">{slice.id} / {slice.category}</span>
                <h3>{slice.title}</h3>
                <p>{slice.description}</p>
              </div>
            </button>
          ))}
        </div>
      </section>

      <section className="zcard card-matrix" data-card="4">
        <div className="matrix-left">
          <p className="mono-tag">04 / Inside the platform</p>
          <h2>Built as a matrix, not a stack.</h2>
          <div className="matrix-tabs">
            {matrixItems.map(item => (
              <button
                className={`matrix-tab${activeMatrix === item.key ? ' active' : ''}`}
                type="button"
                key={item.key}
                data-goto={item.key}
                aria-selected={activeMatrix === item.key}
                onClick={() => setActiveMatrix(item.key)}
              >
                <span className="tab-line">
                  <span className="tab-num">{item.number}</span>
                  <span className="tab-name">{item.name}</span>
                </span>
                <p>{item.description}</p>
              </button>
            ))}
          </div>
        </div>
        <div className="matrix-right">
          {matrixItems.map(item => (
            <img
              key={item.key}
              className={`matrix-img${activeMatrix === item.key ? ' active' : ''}`}
              data-panel={item.key}
              src={item.image}
              alt={`The Nexus ${item.name.toLowerCase()}`}
            />
          ))}
          <div className="matrix-img-shade" aria-hidden="true" />
          <div className="matrix-caption">
            {matrixItems.find(item => item.key === activeMatrix).caption}
          </div>
        </div>
      </section>

      <footer className="hud">
        <a className="hud-brand" href="https://www.templatemo.com/tm-629-nexus-system" target="_blank" rel="nofollow noopener">
          <span className="dot" aria-hidden="true" />Nexus System
        </a>
        <span className="hud-credit">FREE CSS TEMPLATES / <a href="https://templatemo.com" target="_blank" rel="nofollow noopener">TEMPLATEMO</a></span>
        <div className="hud-progress">
          <div className="hud-track"><div className="hud-fill" style={{ width: `${progress * 100}%` }} /></div>
          <span className="hud-pct">{String(Math.round(progress * 100)).padStart(3, '0')}%</span>
        </div>
        <div className="hud-nav">
          <button className="hud-arrow" type="button" aria-label="Previous section" disabled={activeCard <= 0} onClick={() => goToCard(activeCard - 1)}>
            <svg viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M2 9L7 4L12 9" stroke="currentColor" strokeWidth="1.5" /></svg>
          </button>
          <button className="hud-arrow" type="button" aria-label="Next section" disabled={activeCard >= 3} onClick={() => goToCard(activeCard + 1)}>
            <svg viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M2 5L7 10L12 5" stroke="currentColor" strokeWidth="1.5" /></svg>
          </button>
        </div>
      </footer>
    </>
  )
}
