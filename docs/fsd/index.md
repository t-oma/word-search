# FSD Architecture

This project follows the Feature-Sliced Design (FSD) methodology for organizing code.

## What is FSD?

Feature-Sliced Design (FSD) is a methodology for structuring frontend applications. It helps create a scalable and maintainable codebase by dividing the application into logical layers and features.

## Why FSD?

- **Scalability** - Easy to add new features without breaking existing code
- **Maintainability** - Clear structure makes code easy to understand
- **Team Collaboration** - Well-defined layers and responsibilities
- **Testing** - Easier to test individual features in isolation

## LayersSD divides the application into several layers:

| Layer      | Purpose                                       |
| ---------- | --------------------------------------------- |
| `app`      | Application configuration, routing, providers |
| `pages`    | Page components (full pages)                  |
| `widgets`  | Reusable UI components                        |
| `features` | Business features with functionality          |
| `entities` | Business domain models                        |
| `shared`   | Reusable utilities, hooks, types              |

## Layer Dependencies

Layers can only depend on layers below them:

```
app → pages → widgets → features → entities → shared
```

## Project Structure

```
src/
├── app/                    # Application layer
├── pages/                  # Page components
├── widgets/                # Reusable UI components
├── features/               # Business features
├── entities/               # Business entities
└── shared/                 # Shared utilities
```

## Layers in This Project

- [Shared](./shared) - Reusable utilities, hooks, types
- [Entities](./entities) - Business domain models

## Learn More

- [FSD Official Documentation](https://feature-sliced.design/)
- [Introduction to FSD](https://feature-sliced.design/docs/get-started/overview)
