# TypeScript Demo Project

A TypeScript project demonstrating API integration with proper module configuration and type safety.

## Features

- ✅ Full TypeScript configuration with strict mode
- ✅ ES Modules support
- ✅ Type-safe HTTP service
- ✅ Product API integration (FakeStore API)
- ✅ Source maps and declaration files
- ✅ Development and production builds

## Project Structure

```
ts-demo/
├── index.ts                    # Main entry point
├── services/
│   ├── http-service.ts        # Generic HTTP client
│   └── product-service.ts     # Product-specific API service
├── types/
│   └── product.ts             # Product type definitions
├── dist/                      # Compiled JavaScript output
├── tsconfig.json              # TypeScript configuration
└── package.json               # Project dependencies and scripts
```

## Installation

```bash
npm install
```

## Available Scripts

- **`npm run dev`** - Run the project in development mode with tsx (no build required)
- **`npm run build`** - Compile TypeScript to JavaScript in the `dist/` folder
- **`npm start`** - Run the compiled JavaScript from `dist/`
- **`npm run type-check`** - Check for TypeScript errors without emitting files
- **`npm run clean`** - Remove the `dist/` folder
- **`npm run rebuild`** - Clean and rebuild the project

## Development

### Running in Development Mode

```bash
npm run dev
```

This uses `tsx` to run TypeScript files directly without compilation.

### Building for Production

```bash
npm run build
npm start
```

## TypeScript Configuration

The project uses modern TypeScript settings:

- **Module System**: ES Modules with `nodenext` resolution
- **Target**: ESNext
- **Strict Mode**: Enabled with additional strict checks
- **Output**: Source maps and declaration files included

## Dependencies

### Dev Dependencies

- **typescript** (^5.9.3) - TypeScript compiler
- **tsx** (^4.19.0) - TypeScript execution engine for development
- **@types/node** (^22.0.0) - Node.js type definitions

## API Integration

The project integrates with the [FakeStore API](https://fakestoreapi.com) to demonstrate:

- Fetching all products
- Fetching individual products by ID
- Type-safe HTTP requests
- Error handling

## Notes

- Import paths must include `.js` extensions (TypeScript requirement for ES modules)
- The `Rating` interface is exported for reusability
- All HTTP responses are properly typed
