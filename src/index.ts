#!/usr/bin/env node

import sade from 'sade'
import { version } from "../package.json"
import { init } from './init'



const program = sade('raxi')

// let packageJSON = fs.readJSONSync(path.join(appPath, 'package.json'))

// program.version(packageJSON.version)

program
    // .command('build')
    // .describe('build the project')
    // .action(async () => {
    //     await build_app().catch((err) => {
    //         console.error(err)
    //         process.exit(1)
    //     })
    // })
    .version(version)
    .command('init')
    .describe('scafold new project')
    .action(async () => {
        await init()
    })
// .command('dev')
// .describe('start development')
// .action(async () => {
//     await dev()
// })

program.parse(process.argv)
