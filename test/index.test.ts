import childProcess from 'child_process'
import fs from 'fs-extra'
import path from 'path'
import util from 'util'
import { describe, expect, test } from 'vitest'

const execFile = util.promisify(childProcess.execFile)
const spawn = childProcess.spawn
const raxi = path.normalize('dist/index.mjs')
const packageJSON = fs.readJSONSync(path.join(__dirname, '../package.json'))

const keys = {
    up: '\x1B\x5B\x41',
    down: '\x1B\x5B\x42',
    enter: '\x0D',
    space: '\x20',
}

//describe('Should create a new project', () => {
//     beforeAll(() => {
//         if (!fs.existsSync(raxi)) {
//             throw new Error('raxi not found')
//         }
//     }, 100)

//     test('It should gude user through the process', (done) => {
//         let cli = spawn('node', [raxi, 'init'], {})
//         let promptCount = 0
//         let previousPrompt: string

//         cli.stdout.on('data', (data) => {
//             let prompt = cleanPrompt(data)
//             if (!prompt) return

//             promptCount++

//             switch (promptCount) {
//                 case 1:
//                     expect(prompt).toEqual(
//                         '\nraxi - Better typescript development workflow'
//                     )
//                 case 2:
//                     expect(prompt).toContain('Project name?')
//                     cli.stdin.write('test_app\n')
//                     break
//                 case 3:
//                     expect(prompt).toContain('select your project type?')
//                     let choices = getPromptChoices(prompt)
//                     expect(choices).toContain('cli')
//                     expect(choices).toContain('monorepo')
//                     expect(choices).toContain('simple')
//                     cli.stdin.write(keys.enter)
//                     break
//             }
//             previousPrompt = prompt
//             console.log(data.toString())
//         })

//         cli.on('exit', () => {
//             done()
//         })
//     })
// })

describe('the -v flag', () => {
    test('Prints the current version', async () => {
        let { stdout } = await execFile('node', [raxi, '-v'])
        expect(stdout.trim()).toBe(`raxi, ${packageJSON.version}`)
    })
})

// Test utils
function cleanPrompt<T extends { toString(): string }>(data: T): string {
    return data
        .toString()
        .trim()
        .split('\n')
        .map((s) => s.replace(/\s+/g, ' '))
        .join('\n')
}

// function getPromptChoices(prompt: string) {
//     return prompt
//         .slice(prompt.indexOf('>') + 2)
//         .split('\n')
//         .map((s) => s.trim())
// }

function isSamePrompt(
    currentPrompt: string,
    previousPrompt: string | undefined
) {
    if (previousPrompt === undefined) {
        return false
    }

    let promptStart = previousPrompt.split('\n')[0]
    promptStart = promptStart.slice(0, promptStart.lastIndexOf('('))
    return currentPrompt.startsWith(promptStart)
}
