import chalk from 'chalk'
import { build } from 'unbuild'

export async function dev() {
    console.log('\n')
    console.log(chalk.yellowBright('\tDevelopment server started!'))
    await build(process.cwd(), true)
    console.log('\t')
}
