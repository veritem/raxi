import prompts, { PromptObject } from 'prompts'
import chalk from 'chalk'
import fs from 'fs'

export async function init() {
    let questions: PromptObject[] = [
        {
            type: 'text',
            name: 'name',
            message: 'Project name?',
        },
        {
            type: 'select',
            name: 'type',
            message: 'select your project type?',
            choices: [
                { title: 'cli', value: 'cli' },
                { title: 'basic typescript project', value: 'simple' },
                { title: 'react-component', value: 'react' },
            ],
        },
    ]

    const response = await prompts(questions)
    console.log({ response })
    console.log(chalk.green('creating a new project ' + response.name))

    // TODO: loop through all of our templates and create a new project based on that
    console.log(process.cwd())
    // Get all templates in starters and take one with the same value name as the one selected
    const sampleDirs = fs
        .readdirSync('./starters', { withFileTypes: true })
        .filter((item) => item.isDirectory())
        .map((item) => item.name)
    console.log(sampleDirs)
    // If it doesn't exists exists
    // If it exists copy it to the current directory
}
