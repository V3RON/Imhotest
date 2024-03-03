import { SourceFile, MethodDeclaration } from '@imhotest/core';
import { ModuleTransformer } from './ModuleTransformer';
import { ClassesModuleTransformer } from './ClassesModuleTransformer';

export class MethodsModuleTransformer implements ModuleTransformer<MethodDeclaration> {
  private readonly classesTransformer = new ClassesModuleTransformer();

  transform(collection: SourceFile[]): MethodDeclaration[] {
    return this.classesTransformer.transform(collection).flatMap((classDeclaration) => classDeclaration.getMethods());
  }
}
