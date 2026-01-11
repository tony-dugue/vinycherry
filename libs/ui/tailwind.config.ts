import type { Config } from 'tailwindcss'

// Tailwind v4 minimal config
const config: Config = {
  // IMPORTANT si on veut forcer Tailwind sur des libs externes
  important: true,

  // Preset venant de la lib UI
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  presets: [require('./tailwind.preset.js')],
}

export default config
