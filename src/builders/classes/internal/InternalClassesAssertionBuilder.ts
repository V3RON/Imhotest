import { Predicate, Rule, ClassDeclaration } from '@imhotest/model';
import type { ModuleTransformer } from '@imhotest/transformers';
import {
  ImplementsInterfacePredicate,
  HasDecoratorPredicate,
  HaveNameEndingWithPredicate,
  HaveNameStartingWithPredicate,
} from '@imhotest/predicates';
import type { ClassesAssertionBuilder } from '../ClassesAssertionBuilder';
import type { ClassesAssertionBuilderConjunction } from '../ClassesAssertionBuilderConjunction';
import { PredicateAggregator } from '../../PredicateAggregator';
import { InternalRule } from '../../InternalRule';

export class InternalClassesAssertionBuilder implements ClassesAssertionBuilder, ClassesAssertionBuilderConjunction {
  private readonly moduleTransformer: ModuleTransformer<ClassDeclaration>;
  private readonly filters: Predicate<ClassDeclaration>;
  private readonly assertions: PredicateAggregator<ClassDeclaration>;

  constructor(moduleTransformer: ModuleTransformer<ClassDeclaration>, filters: Predicate<ClassDeclaration>) {
    this.moduleTransformer = moduleTransformer;
    this.filters = filters;
    this.assertions = new PredicateAggregator<ClassDeclaration>();
  }

  and(): ClassesAssertionBuilder {
    this.assertions.thatANDs();
    return this;
  }
  or(): ClassesAssertionBuilder {
    this.assertions.thatORs();
    return this;
  }

  build(): Rule<ClassDeclaration> {
    return new InternalRule<ClassDeclaration>(this.moduleTransformer, this.filters, this.assertions.get());
  }

  haveNameEndingWith(suffix: string): ClassesAssertionBuilderConjunction {
    this.assertions.add(new HaveNameEndingWithPredicate(suffix));
    return this;
  }

  haveNameStartingWith(prefix: string): ClassesAssertionBuilderConjunction {
    this.assertions.add(new HaveNameStartingWithPredicate(prefix));
    return this;
  }

  implementInterface(name: string): ClassesAssertionBuilderConjunction {
    this.assertions.add(new ImplementsInterfacePredicate(name));
    return this;
  }

  haveDecorator(decorator: string): ClassesAssertionBuilderConjunction {
    this.assertions.add(new HasDecoratorPredicate(decorator));
    return this;
  }
}
