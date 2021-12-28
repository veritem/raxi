import chalk from 'chalk'
import { build } from 'unbuild'
import { appPath } from './utils'

export async function dev() {
    console.log('\n')
    console.log(chalk.yellowBright('\tDevelopment server started!'))
    await build(appPath, true)
    console.log('\t')
}
