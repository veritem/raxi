#!/usr/bin/env node

import fs from 'fs-extra'
import path from 'path'
import sade from 'sade'
import { build_app } from './build'
import { dev } from './dev'
import { init } from './init'
import { appPath } from './utils'

const program = sade('raxi')

let packageJSON = fs.readJSONSync(path.join(appPath, 'package.json'))

program.version(packageJSON.version)

program
    .command('build')
    .describe('build the project')
    .action(async () => {
        await build_app().catch((err) => {
            console.error(err)
            process.exit(1)
        })
    })
    .command('init')
    .describe('scafold new project')
    .action(async () => {
        await init()
    })
    .command('dev')
    .describe('start development')
    .action(async () => {
        await dev()
    })

program.parse(process.argv)
