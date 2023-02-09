import * as core from '@actions/core'
import {textFinder} from './finders/text-finder'

async function run(): Promise<void> {
  const scanType: string = core.getInput('type') || 'text'
  if (scanType === 'text') {
    const pattern = core.getInput('pattern') || 'file'
    // eslint-disable-next-line no-console
    console.log(textFinder({pattern, type: scanType}))
  }
}

run()
