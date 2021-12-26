import chalk from 'chalk'
import fs from 'fs'
import fse from 'fs-extra'
import path from 'path'
import prompts, { PromptObject } from 'prompts'

type StarterPrompts = {
    title: string
    value: string
}

function get_starters(): StarterPrompts[] {
    let directories: string[] = fs.readdirSync(
        path.join(process.cwd(), 'starters')
    )

    return directories
        .filter((item) => item != 'shared')
        .sort()
        .map((item) => {
            return { title: item, value: item }
        })
}

export async function init() {
    console.log('\n\n\n')
    console.log('Rudi - Better typescript development workflow')
    console.log('\n')

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
            choices: [...get_starters()],
        },
    ]

    const response = await prompts(questions)

    const project_path: string = path.join(process.cwd(), response.name)
    const template_path: string = path.join(
        process.cwd(),
        'starters',
        response.type
    )
    const shared_path: string = path.resolve(
        process.cwd(),
        'starters',
        'shared'
    )

    if (fs.existsSync(project_path)) {
        console.log(chalk.red(`project ${response.name} already exsits`))
        //TODO: Support overriding in future
        return
    }

    await fse.copySync(template_path, project_path)

    // copy shared files
    await fse.copy(shared_path, project_path)

    //rename dotsfiles
    await fse.move(
        path.join(project_path, 'gitignore'),
        path.join(project_path, '.gitignore')
    )

    console.log('\n')

    console.log(chalk.yellowBright(`${response.name} project created`))
}
