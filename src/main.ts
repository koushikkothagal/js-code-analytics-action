import * as core from '@actions/core'
import {
  appInsightsReporter,
  initializeAppInsights
} from './reporters/app-insights-reporter'
import {textFinder} from './finders/text-finder'

async function run(): Promise<void> {
  const scanType: string = core.getInput('type') || 'text'
  if (scanType === 'text') {
    const pattern = core.getInput('pattern') || 'occurences'

    const occurences = textFinder({pattern, type: scanType})
    const appInsightsKey = core.getInput('appInsightsKey')
    if (appInsightsKey) {
      initializeAppInsights(appInsightsKey)
      appInsightsReporter(occurences)
    } else {
      // eslint-disable-next-line no-console
      console.log(occurences)
    }
  }
}

run()
