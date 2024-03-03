import { Node } from './index';

export class RuleViolation<T extends Node> {
  readonly message: string;

  constructor(
    private readonly element: T,
    message?: string,
  ) {
    this.message = message ?? `Rule violation detected for ${this.elementName}.`;
  }

  get elementName(): string {
    return Node.hasName(this.element) ? this.element.getName() : '';
  }

  get location(): string {
    return `${this.element.getStartLineNumber()}:${this.element.getStartLinePos()}`;
  }

  get filePath(): string {
    return this.element.getSourceFile().getFilePath();
  }
}
