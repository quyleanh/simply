/* global prismJs */

import './main'

import mediumZoom from 'medium-zoom'

import loadScript from './util/load-script'
import docSelectorAll from './util/document-query-selector-all'

const simplyPost = () => {
  /* All Video Responsive
  /* ---------------------------------------------------------- */
  const videoResponsive = () => {
    const selectors = [
      'iframe[src*="player.vimeo.com"]',
      'iframe[src*="dailymotion.com"]',
      'iframe[src*="youtube.com"]',
      'iframe[src*="youtube-nocookie.com"]',
      'iframe[src*="player.twitch.tv"]',
      'iframe[src*="kickstarter.com"][src*="video.html"]'
    ]

    const $iframes = docSelectorAll(selectors.join(','))

    if (!$iframes.length) return

    $iframes.forEach(el => {
      el.classList.add('aspect-video', 'w-full')
      // const parentForVideo = document.createElement('div')
      // parentForVideo.className = 'video-responsive'
      // el.parentNode.insertBefore(parentForVideo, el)
      // parentForVideo.appendChild(el)
      el.removeAttribute('height')
      el.removeAttribute('width')
    })
  }

  videoResponsive()

  /* medium-zoom
  /* ---------------------------------------------------------- */
  const mediumZoomImg = () => {
    docSelectorAll('.post-body img').forEach(el => !el.closest('a') && el.classList.add('simply-zoom'))

    mediumZoom('.simply-zoom', {
      margin: 20,
      background: 'hsla(0,0%,100%,.85)'
    })
  }

  mediumZoomImg()

  /* Gallery Card
  /* ---------------------------------------------------------- */
  // const resizeImagesInGalleries = () => {
  //   const $galleryImg = docSelectorAll('.kg-gallery-image > img')

  //   if (!$galleryImg.length) return

  //   $galleryImg.forEach(image => {
  //     const container = image.closest('.kg-gallery-image')
  //     const width = image.attributes.width.value
  //     const height = image.attributes.height.value
  //     const ratio = width / height
  //     container.style.flex = ratio + ' 1 0%'
  //   })
  // }

  // resizeImagesInGalleries()

  /* highlight prismjs
  /* ---------------------------------------------------------- */
  if (docSelectorAll('code[class*=language-]').length && typeof prismJs !== 'undefined') {
    loadScript(prismJs)
  }

  /* Reading Progress Fallback
  /* ---------------------------------------------------------- */
  const initReadingProgressFallback = () => {
    const progressBar = document.querySelector('#reading-progress')
    if (!progressBar) return

    if (CSS.supports('animation-timeline', 'scroll()')) return

    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight
      const currentScroll = window.scrollY
      const progressPercent = scrollHeight > 0 ? (currentScroll / scrollHeight) : 0
      progressBar.style.transform = `scaleX(${progressPercent})`
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
  }

  initReadingProgressFallback()

  /* Scroll Spy & TOC Active Highlighting
  /* ---------------------------------------------------------- */
  const initScrollSpy = () => {
    const postBody = document.querySelector('.post-body')
    if (!postBody) return

    const headings = postBody.querySelectorAll('h2[id], h3[id]')
    if (!headings.length) return

    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -60% 0px',
      threshold: 0
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id')
          const tocLinks = document.querySelectorAll('.js-tocbot a, .js-table-content a')
          const activeLink = document.querySelector(`.js-tocbot a[href="#${id}"], .js-table-content a[href="#${id}"]`)

          if (activeLink) {
            tocLinks.forEach(link => {
              link.classList.remove('text-primary', 'font-semibold', 'font-medium')
              if (link.closest('.js-tocbot')) {
                link.classList.add('text-gray-500')
              }
            })
            activeLink.classList.add('text-primary', 'font-medium')
            activeLink.classList.remove('text-gray-500')
          }
        }
      })
    }, observerOptions)

    headings.forEach(heading => observer.observe(heading))
  }

  setTimeout(initScrollSpy, 150)
}

document.addEventListener('DOMContentLoaded', simplyPost)
