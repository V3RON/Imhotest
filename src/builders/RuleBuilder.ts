import type { ClassesRuleBuilder } from './classes/ClassesRuleBuilder';
import { InternalClassesRuleBuilder } from './classes/internal/InternalClassesRuleBuilder';
import { ClassesModuleTransformer } from '@imhotest/transformers';

export class RuleBuilder {
  static classes(): ClassesRuleBuilder {
    return new InternalClassesRuleBuilder(new ClassesModuleTransformer(), false);
  }

  static noClasses(): ClassesRuleBuilder {
    return new InternalClassesRuleBuilder(new ClassesModuleTransformer(), true);
  }
}
