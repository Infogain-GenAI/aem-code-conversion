import fs from 'fs';
import { parse } from '@babel/parser'; // For Java syntax parsing
import traverse from '@babel/traverse';
import * as t from '@babel/types';

// Type to hold metadata for methods
type MethodMetadata = {
    methodName: string;
    start: number;
    end: number;
};

// Function to generate metadata
async function generateMetadata(filePath: string): Promise<MethodMetadata[]> {
    const fileContent = fs.readFileSync(filePath, 'utf-8');
  const methods: MethodMetadata[] = [];

  // Parse the file into an AST
  const ast = parse(fileContent, {
    sourceType: 'module',
    plugins: ['typescript', 'jsx'],
  });

  // Traverse the AST and extract method details
  traverse(ast, {
    ClassMethod(path) { // Handles methods in a class
      const methodName = (path.node.key as t.Identifier)?.name;
      const start = path.node.loc?.start.line ?? 0;
      const end = path.node.loc?.end.line ?? 0;

      if (methodName) {
        methods.push({ methodName, start, end });
      }
    },
    ObjectMethod(path) { // Handles methods in an object
      const methodName = (path.node.key as t.Identifier)?.name;
      const start = path.node.loc?.start.line ?? 0;
      const end = path.node.loc?.end.line ?? 0;

      if (methodName) {
        methods.push({ methodName, start, end });
      }
    },
  });

  return methods;
}
