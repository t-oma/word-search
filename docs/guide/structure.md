# Project Structure

The project follows the Feature-Sliced Design (FSD) methodology.

```
src/
├── app/                    # Application layer
│   ├── routes/             # React Router routes
│   ├── providers.tsx       # Global providers
│   └── root.tsx            # Root component
├── pages/                  # Page components
├── features/               # Business features
│   ├── game-play/          # Game logic
│   ├── game-settings/      # Settings feature
│   ├── grid-generator/     # Grid generation
│   └── ...
├── entities/               # Business entities
│   ├── game/               # Game model
│   └── stats/              # Statistics model
├── shared/                 # Shared code
│   ├── hooks/              # Custom hooks
│   ├── lib/                # Libraries (analytics, marketing)
│   ├── types/              # TypeScript types
│   ├── ui/                 # Shared UI components
│   └── utils/              # Utility functions
└── widgets/                # Reusable UI components
    ├── CookieConsent.tsx   # Cookie consent banner
    ├── GameTimer.tsx       # Timer component
    └── ...
```

## Layer Descriptions

| Layer      | Description                                    |
| ---------- | ---------------------------------------------- |
| `app`      | Application configuration, routing, providers  |
| `pages`    | Full page components                           |
| `features` | Business logic and feature-specific components |
| `entities` | Domain models and data structures              |
| `shared`   | Reusable utilities, hooks, types               |
| `widgets`  | Reusable UI components                         |
