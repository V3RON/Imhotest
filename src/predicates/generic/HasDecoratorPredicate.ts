import { Predicate, ClassDeclaration, FunctionDeclaration, PropertyDeclaration } from '@imhotest/core';

export class HasDecoratorPredicate extends Predicate<ClassDeclaration | PropertyDeclaration | FunctionDeclaration> {
  private readonly name: string;

  constructor(name: string) {
    super();
    this.name = name;
  }

  test(arg: ClassDeclaration): boolean {
    return !!arg.getDecorator(this.name);
  }
}
