import { Predicate, Node } from '@imhotest/core';
import { minimatch } from 'minimatch';

export class MatchGlobPattern extends Predicate<Node> {
  private readonly matchFilter;

  constructor(globPattern: string) {
    super();
    this.matchFilter = minimatch.filter(globPattern, { matchBase: true });
  }

  test(arg: Node): boolean {
    const sourceFilePath = arg.getSourceFile().getFilePath();
    return this.matchFilter(sourceFilePath);
  }
}
