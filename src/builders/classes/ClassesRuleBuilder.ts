import type { ClassesFilterBuilder } from './ClassesFilterBuilder';

export interface ClassesRuleBuilder {
  that(): ClassesFilterBuilder;
}
