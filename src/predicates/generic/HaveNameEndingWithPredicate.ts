import { Node } from 'ts-morph';
import { Predicate } from '@imhotest/core';

export class HaveNameEndingWithPredicate extends Predicate<Node> {
  private readonly suffix: string;

  constructor(suffix: string) {
    super();
    this.suffix = suffix;
  }

  test(arg: Node): boolean {
    return Node.hasName(arg) ? arg.getName().startsWith(this.suffix) : false;
  }
}
