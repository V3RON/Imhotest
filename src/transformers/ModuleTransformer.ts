import { SourceFile } from '@imhotest/core';

export interface ModuleTransformer<T> {
  transform(collection: SourceFile[]): T[];
}
