import fs from 'fs-extra'

export const appPath = fs.realpathSync(process.cwd())
