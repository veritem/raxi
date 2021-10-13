import prompts from 'prompts'

export async function init() {
    let questions = [
        {
            type: 'text',
            name: 'name',
            message: 'your project name?',
        },
        {
            type: 'multiselect',
            name: 'type',
            message: 'select your project type?',
            choices: [
                { title: 'cli' },
                { title: 'basic typescript project' },
                { title: 'react-component' },
            ],
        },
        {
            type: 'confirm',
            name: 'lint',
            message: 'setup eslint?',
        },
        {
            type: 'confirm',
            name: 'format',
            message: 'setup prettier?',
        },
    ]

    const response = await prompts(questions)
    console.log({ response })
}
