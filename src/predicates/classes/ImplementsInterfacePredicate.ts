import { Predicate, ClassDeclaration } from '@imhotest/core';

export class ImplementsInterfacePredicate extends Predicate<ClassDeclaration> {
  private readonly name: string;

  constructor(name: string) {
    super();
    this.name = name;
  }

  test(arg: ClassDeclaration): boolean {
    return arg
      .getImplements()
      .map((type) => type.getType().isInterface() && type.getType().getSymbol()?.getName())
      .filter((type): type is string => !!type)
      .some((name) => name === this.name);
  }
}
