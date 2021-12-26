#!/usr/bin/env node
import sade from 'sade'
import { build_app } from './build'
import { dev } from './dev'
import { init } from './init'

const program = sade('rudi')

program.version('0.0.1')

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
