import path from 'path';
import pathRelativeToLabs from './path-relative-to-labs.js';

describe('path-relative-to-labs', function() {
  it('should generate an absolute path relative to the labs folder', async () => {
    const relativePath = 'lab4/todo-list/index.js';
    const actualPath = pathRelativeToLabs(relativePath);

    expect(actualPath.endsWith(path.join('docs', 'labs', relativePath))).toBe(true);
  });
});
