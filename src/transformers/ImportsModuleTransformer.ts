import { SourceFile, ImportDeclaration } from '@imhotest/core';
import { ModuleTransformer } from './ModuleTransformer';

export class ImportsModuleTransformer implements ModuleTransformer<ImportDeclaration> {
  transform(collection: SourceFile[]): ImportDeclaration[] {
    return collection.flatMap((mod) => mod.getImportDeclarations());
  }
}
