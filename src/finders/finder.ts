import {FindCriteria} from './types'
import {Occurence} from '../occurence'

export type Finder = (criteria: FindCriteria) => Occurence[]
