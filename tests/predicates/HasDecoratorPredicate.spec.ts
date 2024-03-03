import { describe, expect, it } from 'vitest';
import { TestSourceLoader } from '../TestSourceLoader';
import { HasDecoratorPredicate } from '../../src/predicates';
import { ClassesModuleTransformer } from '../../src/transformers';

describe('HasDecoratorPredicate', () => {
  it('should detect presence of a decorator', () => {
    const predicate = new HasDecoratorPredicate('SomeDecorator');
    const sourceFiles = TestSourceLoader.loadFromString(`
      const SomeDecorator: ClassDecorator = () => {};
      
      @SomeDecorator
      class SomeClass {}
    `);
    const classDeclaration = new ClassesModuleTransformer().transform(sourceFiles)[0];

    expect(predicate.test(classDeclaration)).toBeTruthy();
  });

  it('should detect missing decorator', () => {
    const predicate = new HasDecoratorPredicate('SomeDecorator');
    const sourceFiles = TestSourceLoader.loadFromString(`
      const SomeDecorator: ClassDecorator = () => {};

      class SomeClass {}
    `);
    const classDeclaration = new ClassesModuleTransformer().transform(sourceFiles)[0];

    expect(predicate.test(classDeclaration)).toBeFalsy();
  });
});
