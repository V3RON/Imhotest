import { SourceFile, PropertyDeclaration } from '@imhotest/core';
import { ModuleTransformer } from './ModuleTransformer';
import { ClassesModuleTransformer } from './ClassesModuleTransformer';

export class PropertiesModuleTransformer implements ModuleTransformer<PropertyDeclaration> {
  private readonly classesTransformer = new ClassesModuleTransformer();

  transform(collection: SourceFile[]): PropertyDeclaration[] {
    return this.classesTransformer
      .transform(collection)
      .flatMap((classDeclaration) => classDeclaration.getProperties());
  }
}
