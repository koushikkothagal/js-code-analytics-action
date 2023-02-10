import {FindCriteria} from './types'
import {Finder} from './finder'
import {Occurence} from '../occurence'
import sh from 'shellsync'

export const textFinder: Finder = (criteria: FindCriteria) => {
  try {
    const {pattern} = criteria
    const occurences: string[] = sh.array`git grep -I ${pattern}`
    return occurences
      .filter(line => line.includes(':'))
      .map(o => Occurence.from(o, pattern))
  } catch (e) {
    return []
  }
}
