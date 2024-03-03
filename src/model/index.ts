import {
  ClassDeclaration,
  MethodDeclaration,
  PropertyDeclaration,
  FunctionDeclaration,
  ParameterDeclaration,
  GetAccessorDeclaration,
  SetAccessorDeclaration,
} from 'ts-morph';

export {
  SourceFile,
  ClassDeclaration,
  MethodDeclaration,
  PropertyDeclaration,
  FunctionDeclaration,
  ImportDeclaration,
  ExportDeclaration,
  GetAccessorDeclaration,
  SetAccessorDeclaration,
  Node,
} from 'ts-morph';

export type DecoratableDeclaration =
  | ClassDeclaration
  | MethodDeclaration
  | PropertyDeclaration
  | FunctionDeclaration
  | ParameterDeclaration
  | GetAccessorDeclaration
  | SetAccessorDeclaration;

export { Predicate } from './Predicate';
export { Rule } from './Rule';
export { RuleViolation } from './RuleViolation';
export { RuleViolationError } from './RuleViolationError';
