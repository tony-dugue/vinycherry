import type { Config } from 'tailwindcss'
import {
  animationConfig,
  colorsConfig,
  keyframesConfig,
  spacingConfig,
} from './styles/config'

const config: Config = {
  important: true,

  theme: {
    screens: {
      sm: '23.4375rem',
      md: '40rem',
      lg: '64rem',
      xl: '80rem',
      '2xl': '96rem',
      '3xl': '120rem',
    },

    colors: colorsConfig,

    fontFamily: {
      default: [
        'ui-sans-serif',
        'system-ui',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        '"Noto Sans"',
        'sans-serif',
      ],
      sans: ['var(--font)'],
    },

    fontSize: {
      xs: ['0.75rem', { lineHeight: '1rem' }],
      sm: ['0.875rem', { lineHeight: '1.25rem' }],
      base: ['1rem', { lineHeight: '1.5rem' }],
      lg: ['1.125rem', { lineHeight: '1.75rem' }],
      xl: ['1.25rem', { lineHeight: '1.75rem' }],
    },

    extend: {
      ringColor: {
        DEFAULT: colorsConfig.primary.DEFAULT,
      },
      outlineColor: {
        DEFAULT: colorsConfig.primary.DEFAULT,
      },

      borderRadius: {
        sm: '0.125rem',
        DEFAULT: '0.25rem',
        md: '0.375rem',
        lg: '0.5rem',
        xl: '0.75rem',
        full: '9999px',
      },

      spacing: spacingConfig,
      animation: animationConfig,
      keyframes: keyframesConfig,
    },
  },

  plugins: [],
}

export default config
