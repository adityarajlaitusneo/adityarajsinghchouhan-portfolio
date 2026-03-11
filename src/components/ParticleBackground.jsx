import { useCallback, useMemo } from 'react'
import Particles from '@tsparticles/react'
import { loadSlim } from '@tsparticles/slim'
import { useTheme } from '../context/ThemeContext'

const ParticleBackground = () => {
  const { isDark } = useTheme()
  
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine)
  }, [])

  const options = useMemo(() => ({
    background: {
      color: { value: 'transparent' },
    },
    fpsLimit: 60,
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: 'grab',
        },
        onClick: {
          enable: true,
          mode: 'push',
        },
      },
      modes: {
        grab: {
          distance: 140,
          links: { opacity: 0.5 },
        },
        push: { quantity: 4 },
      },
    },
    particles: {
      color: { value: isDark ? ['#6366f1', '#8b5cf6', '#06b6d4'] : ['#6366f1', '#8b5cf6', '#06b6d4'] },
      links: {
        color: isDark ? '#6366f1' : '#6366f1',
        distance: 150,
        enable: true,
        opacity: isDark ? 0.2 : 0.15,
        width: 1,
      },
      move: {
        enable: true,
        speed: 1,
        direction: 'none',
        random: true,
        straight: false,
        outModes: { default: 'bounce' },
      },
      number: {
        density: { enable: true, area: 800 },
        value: isDark ? 80 : 50,
      },
      opacity: {
        value: { min: 0.1, max: isDark ? 0.5 : 0.3 },
        animation: {
          enable: true,
          speed: 1,
          minimumValue: 0.1,
        },
      },
      shape: { type: 'circle' },
      size: {
        value: { min: 1, max: 3 },
      },
    },
    detectRetina: true,
  }), [isDark])

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={options}
      className="fixed inset-0 -z-10"
    />
  )
}

export default ParticleBackground
