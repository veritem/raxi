import prompts, { PromptObject } from 'prompts'

export async function init () {
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
}
