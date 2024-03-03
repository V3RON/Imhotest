import { SourceFile, SetAccessorDeclaration } from '@imhotest/core';
import { ModuleTransformer } from './ModuleTransformer';
import { ClassesModuleTransformer } from './ClassesModuleTransformer';

export class SetAccessorsModuleTransformer implements ModuleTransformer<SetAccessorDeclaration> {
  private readonly classesTransformer = new ClassesModuleTransformer();

  transform(collection: SourceFile[]): SetAccessorDeclaration[] {
    return this.classesTransformer
      .transform(collection)
      .flatMap((classDeclaration) => classDeclaration.getSetAccessors());
  }
}
