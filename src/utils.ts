import fs from 'fs-extra'
import { URL } from 'url'

export const __dirname = new URL('.', import.meta.url).pathname

export const appPath = fs.realpathSync(process.cwd())
