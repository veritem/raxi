import { build } from 'unbuild'

export async function build_app() {
    await build(process.cwd(), false).catch((err) => {
        console.log(`Error while buding: ${err}`)
        throw err
    })
}
