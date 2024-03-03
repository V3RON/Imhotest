import { SourceFile, Project } from 'ts-morph';

export class TestSourceLoader {
  static loadFromString(str: string): SourceFile[] {
    const project = new Project();
    project.createSourceFile('file.ts', str);
    return project.getSourceFiles();
  }

  static loadMany(files: { path: string; content: string }[]): SourceFile[] {
    const project = new Project();

    files.forEach((file) => {
      project.createSourceFile(file.path, file.content);
    });

    return project.getSourceFiles();
  }
}
