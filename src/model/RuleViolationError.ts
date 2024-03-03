import type { Node } from './index';
import type { RuleViolation } from './RuleViolation';

export class RuleViolationError<T extends Node> extends Error {
  public readonly violations: RuleViolation<T>[];

  constructor(violations: RuleViolation<T>[]) {
    super(`There were ${violations.length} violations found in the code.`);
    this.violations = violations;
  }
}
