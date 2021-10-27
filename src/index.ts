#!/usr/bin/env node

import sade from 'sade'
import { init } from './init.js'

const program = sade('rudi')

program.version('0.0.1')

program
    .command('build')
    .describe('Build the project')
    .action((src, dest, opts) => {
        console.log({ src })
        console.log({ dest })
        console.log({ opts })
    })
    .command('init')
    .describe('Scafold new project')
    .action(async () => {
        await init()
    })
    .command('lint')
    .describe('lint your project')
    .action(() => {
        console.log('lint your project')
    })
    .command('test')
    .describe('Run tests for your project')
    .action(() => {
        console.log('testing your application')
    })

program.parse(process.argv)
