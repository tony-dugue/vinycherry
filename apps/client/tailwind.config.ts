import path from 'path'
import type { Config } from 'tailwindcss'

const config: Config = {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  presets: [require('../../libs/ui/tailwind.preset.js')],

  content: [
    path.join(__dirname, './app/**/*.{ts,tsx}'),
    path.join(__dirname, './components/**/*.{ts,tsx}'),
    path.join(__dirname, '../../libs/ui/**/*.{ts,tsx}'),
  ],
}

export default config
