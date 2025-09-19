import Lenis from 'lenis'

// Initialize a single Lenis instance and expose it globally
const lenis = new Lenis({
  // Feel free to tweak these for preferred feel
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  smoothWheel: true,
  smoothTouch: false,
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

// Make available for imperative navigation
if (typeof window !== 'undefined') {
  window.lenis = lenis
}

export default lenis


