import { Predicate, Node } from '@imhotest/core';

export class HaveNameStartingWithPredicate extends Predicate<Node> {
  private readonly prefix: string;

  constructor(prefix: string) {
    super();
    this.prefix = prefix;
  }

  test(arg: Node): boolean {
    return Node.hasName(arg) ? arg.getName().startsWith(this.prefix) : false;
  }
}
