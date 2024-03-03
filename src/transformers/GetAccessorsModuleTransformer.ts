import { SourceFile, GetAccessorDeclaration } from '@imhotest/core';
import { ModuleTransformer } from './ModuleTransformer';
import { ClassesModuleTransformer } from './ClassesModuleTransformer';

export class GetAccessorsModuleTransformer implements ModuleTransformer<GetAccessorDeclaration> {
  private readonly classesTransformer = new ClassesModuleTransformer();

  transform(collection: SourceFile[]): GetAccessorDeclaration[] {
    return this.classesTransformer
      .transform(collection)
      .flatMap((classDeclaration) => classDeclaration.getGetAccessors());
  }
}
