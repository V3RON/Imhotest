import { SourceFile, ExportDeclaration } from '@imhotest/core';
import { ModuleTransformer } from './ModuleTransformer';

export class ExportsModuleTransformer implements ModuleTransformer<ExportDeclaration> {
  transform(collection: SourceFile[]): ExportDeclaration[] {
    return collection.flatMap((mod) => mod.getExportDeclarations());
  }
}
