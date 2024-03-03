import type { ClassesFilterBuilder } from './ClassesFilterBuilder';
import type { ClassesAssertionBuilder } from './ClassesAssertionBuilder';

export interface ClassesFilterBuilderConjunction {
  or(): ClassesFilterBuilder;
  and(): ClassesFilterBuilder;
  should(): ClassesAssertionBuilder;
}
