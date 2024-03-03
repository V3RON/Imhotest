import type { ClassesAssertionBuilderConjunction } from './ClassesAssertionBuilderConjunction';

export interface ClassesAssertionBuilder {
  haveNameEndingWith(suffix: string): ClassesAssertionBuilderConjunction;
  haveNameStartingWith(prefix: string): ClassesAssertionBuilderConjunction;
  haveDecorator(decorator: string): ClassesAssertionBuilderConjunction;
  implementInterface(name: string): ClassesAssertionBuilderConjunction;
}
