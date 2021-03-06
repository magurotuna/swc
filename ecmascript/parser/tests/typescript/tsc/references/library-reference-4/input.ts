// @noImplicitReferences: true
// @traceResolution: true
// @typeRoots: /src
// @currentDirectory: test

// Secondary references may be duplicated if they agree in content

// @filename: /node_modules/foo/index.d.ts
/// <reference types="alpha" />
declare var foo: any;

// @filename: /node_modules/foo/node_modules/alpha/index.d.ts
declare var alpha: any;

// @filename: /node_modules/bar/index.d.ts
/// <reference types="alpha" />
declare var bar: any;

// @filename: /node_modules/bar/node_modules/alpha/index.d.ts
declare var alpha: any;

// @filename: /src/root.ts
/// <reference types="foo" />
/// <reference types="bar" />
