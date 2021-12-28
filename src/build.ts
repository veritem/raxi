import { build } from 'unbuild'
import { appPath } from './utils'

export async function build_app() {
    await build(appPath, false).catch((err) => {
        console.log(`Error while buding: ${err}`)
        throw err
    })
}
