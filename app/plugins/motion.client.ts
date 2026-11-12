// Scroll reveal + parallax leve, sem dependência externa.
// Marque elementos com data-reveal (ou data-reveal="left|right|zoom|mask")
// e data-parallax="0.08" (fator de deslocamento).
export default defineNuxtPlugin((nuxtApp) => {
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  const init = () => {
    const targets = document.querySelectorAll<HTMLElement>('[data-reveal], [data-reveal-group]')

    if (reduce || !('IntersectionObserver' in window)) {
      targets.forEach((el) => el.classList.add('is-in'))
      return
    }

    // Elementos com máscara (clip-path 100%) têm área visível zero pro IntersectionObserver,
    // então observamos o pai e aplicamos a classe no elemento mascarado.
    const proxies = new Map<Element, HTMLElement[]>()
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue
          const watched = entry.target
          const list = proxies.get(watched) ?? [watched as HTMLElement]
          list.forEach((el) => el.classList.add('is-in'))
          io.unobserve(watched)
        }
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.05 },
    )
    targets.forEach((el) => {
      if (el.dataset.reveal === 'mask' && el.parentElement) {
        const parent = el.parentElement
        if (!proxies.has(parent)) proxies.set(parent, parent.hasAttribute('data-reveal') ? [parent] : [])
        proxies.get(parent)!.push(el)
        io.observe(parent)
      } else {
        io.observe(el)
      }
    })

    // Parallax
    const layers = Array.from(document.querySelectorAll<HTMLElement>('[data-parallax]'))
    if (!layers.length) return
    let ticking = false
    const update = () => {
      const vh = window.innerHeight
      for (const el of layers) {
        const rect = el.getBoundingClientRect()
        if (rect.bottom < -200 || rect.top > vh + 200) continue
        const factor = Number(el.dataset.parallax || 0.08)
        const offset = (rect.top + rect.height / 2 - vh / 2) * factor * -1
        el.style.transform = `translate3d(0, ${offset.toFixed(1)}px, 0)`
      }
      ticking = false
    }
    window.addEventListener(
      'scroll',
      () => {
        if (!ticking) {
          ticking = true
          requestAnimationFrame(update)
        }
      },
      { passive: true },
    )
    update()
  }

  nuxtApp.hook('app:mounted', () => requestAnimationFrame(init))
})
