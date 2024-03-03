import { describe, it, expect } from 'vitest';
import { TestSourceLoader } from './TestSourceLoader';
import { RuleBuilder } from '../src/builders/RuleBuilder';

describe('E2E', () => {
  it('should throw RuleViolationError', () => {
    const sourceFiles = TestSourceLoader.loadFromString(`
      const SomeDecorator: ClassDecorator = () => {};
      
      @SomeDecorator
      class SomeClass {}
    `);

    const violations = RuleBuilder.classes()
      .that()
      .haveNameStartingWith('Some')
      .should()
      .implementInterface('Lorem')
      .build()
      .check(sourceFiles);

    expect(violations).toHaveLength(1);
    expect(violations[0].elementName).toStrictEqual('SomeClass');
    expect(violations[0].filePath).toStrictEqual(sourceFiles[0].getFilePath());
    expect(violations[0].location).toStrictEqual('4:62');
  });

  it('should return violation', () => {
    const sourceFiles = TestSourceLoader.loadMany([
      { path: '/directory/test.ts', content: 'class SomeClass {}' },
      { path: '/directory/a/test.ts', content: 'class OtherClass {}' },
    ]);

    const violations = RuleBuilder.classes()
      .that()
      .matchGlobPattern('/directory/**/test.ts')
      .should()
      .haveNameStartingWith('Other')
      .build()
      .check(sourceFiles);

    expect(violations).toHaveLength(1);
    expect(violations[0].filePath).toStrictEqual('/directory/test.ts');
    expect(violations[0].elementName).toStrictEqual('SomeClass');
    expect(violations[0].location).toStrictEqual('1:0');
  });
});
