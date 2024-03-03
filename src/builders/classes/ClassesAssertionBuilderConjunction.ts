import type { ClassesAssertionBuilder } from './ClassesAssertionBuilder';
import type { Rule, ClassDeclaration } from '@imhotest/model';

export interface ClassesAssertionBuilderConjunction {
  and(): ClassesAssertionBuilder;
  or(): ClassesAssertionBuilder;
  build(): Rule<ClassDeclaration>;
}
