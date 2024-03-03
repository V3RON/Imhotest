import { SourceFile, Node, RuleViolation, Rule, Predicate } from '@imhotest/model';
import type { ModuleTransformer } from '@imhotest/transformers';

export class InternalRule<T extends Node> implements Rule<T> {
  private readonly moduleTransformer: ModuleTransformer<T>;
  private readonly filters: Predicate<T>;
  private readonly assertion: Predicate<T>;
  private alias?: string;

  constructor(moduleTransformer: ModuleTransformer<T>, filters: Predicate<T>, assertion: Predicate<T>) {
    this.moduleTransformer = moduleTransformer;
    this.filters = filters;
    this.assertion = assertion;
  }

  as(alias: string): Rule<T> {
    this.alias = alias;
    return this;
  }

  check(collection: SourceFile[]): RuleViolation<T>[] {
    const elements = this.moduleTransformer.transform(collection).filter((item) => this.filters.test(item));
    const ruleViolations: RuleViolation<T>[] = [];

    for (const element of elements) {
      const isValid = this.assertion.test(element);

      if (!isValid) {
        ruleViolations.push(new RuleViolation(element, this.alias));
      }
    }

    return ruleViolations;
  }
}
