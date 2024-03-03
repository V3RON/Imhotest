import { Project } from 'ts-morph';
import { SourceFile } from '@imhotest/model';

export class SourceLoader {
  private readonly project: Project;
  private readonly tsConfigFilePath: string;

  private constructor(tsConfigFilePath: string) {
    this.tsConfigFilePath = tsConfigFilePath;
    this.project = new Project({
      tsConfigFilePath,
      skipAddingFilesFromTsConfig: true,
    });
  }

  loadAll(): SourceFile[] {
    this.project.addSourceFilesFromTsConfig(this.tsConfigFilePath);
    return this.project.getSourceFiles();
  }

  loadMatching(globs: string | string[]): SourceFile[] {
    this.project.addSourceFilesAtPaths(globs);
    return this.project.getSourceFiles();
  }

  static fromTsConfig(tsConfigFilePath: string): SourceLoader {
    return new SourceLoader(tsConfigFilePath);
  }
}
