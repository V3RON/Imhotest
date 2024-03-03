import type { ModuleTransformer } from '@imhotest/transformers';
import { Predicate, ClassDeclaration } from '@imhotest/model';
import type { ClassesFilterBuilder } from '../ClassesFilterBuilder';
import type { ClassesRuleBuilder } from '../ClassesRuleBuilder';
import { ClassesAssertionBuilder } from '../ClassesAssertionBuilder';
import { InternalClassesFilterBuilder } from './InternalClassesFilterBuilder';
import { InternalClassesAssertionBuilder } from './InternalClassesAssertionBuilder';

export class InternalClassesRuleBuilder implements ClassesRuleBuilder {
  private readonly moduleTransformer: ModuleTransformer<ClassDeclaration>;
  private readonly shouldExclude: boolean;

  that(): ClassesFilterBuilder {
    return new InternalClassesFilterBuilder(this.moduleTransformer, this.shouldExclude);
  }

  should(): ClassesAssertionBuilder {
    return new InternalClassesAssertionBuilder(this.moduleTransformer, Predicate.alwaysTrue());
  }

  constructor(moduleTransformer: ModuleTransformer<ClassDeclaration>, shouldExclude: boolean) {
    this.moduleTransformer = moduleTransformer;
    this.shouldExclude = shouldExclude;
  }
}
