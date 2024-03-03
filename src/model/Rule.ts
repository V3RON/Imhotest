import type { SourceFile, Node } from './index';
import type { RuleViolation } from './RuleViolation';

export interface Rule<T extends Node> {
  check(collection: SourceFile[]): RuleViolation<T>[];
}
