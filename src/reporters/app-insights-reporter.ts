import {TelemetryClient, defaultClient, setup} from 'applicationinsights'
import {Occurence} from '../occurence'
import {Reporter} from './reporter'

let client: TelemetryClient

export const initializeAppInsights = (key: string): void => {
  setup(key).start()
  client = defaultClient
}

export const appInsightsReporter: Reporter = (occurences: Occurence[]) => {
  for (const occurence of occurences) {
    client.trackEvent({
      name: 'TEXT_MATCH',
      properties: {
        file: occurence.file,
        line: occurence.line
      }
    })
  }
}
