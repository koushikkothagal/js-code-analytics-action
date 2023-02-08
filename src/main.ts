import * as core from '@actions/core'
import sh from 'shellsync'
// import {wait} from './wait'

async function run(): Promise<void> {
  try {
    core.debug(sh`echo "Hello World"`)
    core.debug(sh`echo "The time is: $(date)"`)
    // eslint-disable-next-line no-console
    console.log(sh`echo "The time is: $(date)"`)

    // const ms: string = core.getInput('milliseconds')
    // core.debug(`Waiting ${ms} milliseconds ...`) // debug is only output if you set the secret `ACTIONS_STEP_DEBUG` to true

    // core.debug(new Date().toTimeString())
    // await wait(parseInt(ms, 10))
    // core.debug(new Date().toTimeString())

    // core.setOutput('time', new Date().toTimeString())
  } catch (error) {
    if (error instanceof Error) core.setFailed(error.message)
  }
}

run()
