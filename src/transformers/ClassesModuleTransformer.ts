import { ClassDeclaration, SourceFile } from '@imhotest/core';
import { ModuleTransformer } from './ModuleTransformer';

export class ClassesModuleTransformer implements ModuleTransformer<ClassDeclaration> {
  transform(collection: SourceFile[]): ClassDeclaration[] {
    return collection.flatMap((mod) => mod.getClasses());
  }
}
