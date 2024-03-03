import type { ClassesFilterBuilderConjunction } from './ClassesFilterBuilderConjunction';

export interface ClassesFilterBuilder {
  haveNameStartingWith(prefix: string): ClassesFilterBuilderConjunction;
  haveNameEndingWith(suffix: string): ClassesFilterBuilderConjunction;
  matchGlobPattern(pattern: string): ClassesFilterBuilderConjunction;
  haveDecorator(name: string): ClassesFilterBuilderConjunction;
}
