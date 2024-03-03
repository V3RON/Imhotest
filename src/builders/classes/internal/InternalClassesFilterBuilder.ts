import type { ClassDeclaration } from '@imhotest/model';
import type { ModuleTransformer } from '@imhotest/transformers';
import {
  HaveNameEndingWithPredicate,
  HaveNameStartingWithPredicate,
  MatchGlobPattern,
  HasDecoratorPredicate,
} from '@imhotest/predicates';
import type { ClassesAssertionBuilder } from '../ClassesAssertionBuilder';
import type { ClassesFilterBuilderConjunction } from '../ClassesFilterBuilderConjunction';
import type { ClassesFilterBuilder } from '../ClassesFilterBuilder';
import { PredicateAggregator } from '../../PredicateAggregator';
import { InternalClassesAssertionBuilder } from './InternalClassesAssertionBuilder';

export class InternalClassesFilterBuilder implements ClassesFilterBuilder, ClassesFilterBuilderConjunction {
  private readonly moduleTransformer: ModuleTransformer<ClassDeclaration>;
  private readonly filters: PredicateAggregator<ClassDeclaration>;
  private readonly shouldExclude: boolean;

  constructor(moduleTransformer: ModuleTransformer<ClassDeclaration>, shouldExclude: boolean) {
    this.moduleTransformer = moduleTransformer;
    this.filters = new PredicateAggregator<ClassDeclaration>();
    this.shouldExclude = shouldExclude;
  }

  or(): ClassesFilterBuilder {
    this.filters.thatORs();
    return this;
  }

  and(): ClassesFilterBuilder {
    this.filters.thatANDs();
    return this;
  }

  should(): ClassesAssertionBuilder {
    const finalFilterPredicate = this.shouldExclude ? this.filters.get().not() : this.filters.get();
    return new InternalClassesAssertionBuilder(this.moduleTransformer, finalFilterPredicate);
  }

  haveNameStartingWith(name: string): ClassesFilterBuilderConjunction {
    this.filters.add(new HaveNameStartingWithPredicate(name));

    return this;
  }

  haveNameEndingWith(name: string): ClassesFilterBuilderConjunction {
    this.filters.add(new HaveNameEndingWithPredicate(name));

    return this;
  }

  matchGlobPattern(pattern: string): ClassesFilterBuilderConjunction {
    this.filters.add(new MatchGlobPattern(pattern));
    return this;
  }

  haveDecorator(expectedDecorator: string): ClassesFilterBuilderConjunction {
    this.filters.add(new HasDecoratorPredicate(expectedDecorator));
    return this;
  }
}
