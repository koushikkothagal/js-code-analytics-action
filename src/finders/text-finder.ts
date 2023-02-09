import {FindCriteria} from './types'
import {Finder} from './finder'
import {Occurence} from '../occurence'
import sh from 'shellsync'

export const textFinder: Finder = (criteria: FindCriteria) => {
  try {
    const occurences: string[] = sh.array`git grep -I ${criteria.pattern}`
    return occurences
      .filter(line => line.includes(':'))
      .map(o => Occurence.from(o))
  } catch (e) {
    return []
  }
}
