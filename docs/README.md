# 🔐 EverCodes Auth Frontend

## Description
Angular 20+ frontend application for authentication and user management, built with PrimeNG as the UI component library.

## Technologies
- **Angular**: 20.3+
- **PrimeNG**: 20.1.2 
- **PrimeIcons**: 7.0.0
- **TypeScript**: 5.9.2

## Quick Installation

```bash
# Clone and install
git clone <repo-url>
cd EverCodes.Frontend.Auth
npm install

# Run in development
npm start
# http://localhost:4200
```

## Project Structure

```
src/app/
├── core/           # Global services, guards, interceptors
├── features/       # Feature modules
│   └── users/      # User management
├── shared/         # Shared components
├── app.config.ts   # Main configuration
├── app.routes.ts   # Application routes
└── app.ts          # Root component
```

## Main Scripts

| Command | Description |
|---------|-------------|
| `npm start` | Development server |
| `npm run build` | Production build |
| `npm test` | Unit tests |

## PrimeNG Setup

### Configuration (already implemented)
- Theme: Aura Light configured programmatically
- Available components: Button, Card, InputText, Toast
- Icons: PrimeIcons included

### Basic Usage
```typescript
// Import required modules
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';

@Component({
  imports: [ButtonModule, CardModule],
  template: `
    <p-card header="Title">
      <p-button label="Action" icon="pi pi-check"></p-button>
    </p-card>
  `
})
```

## Current Features
- ✅ Angular 20+ with standalone components
- ✅ PrimeNG 20.1.2 fully configured
- ✅ Programmatic theme system
- ✅ Functional component demo
- ✅ Scalable modular structure
- ✅ Lazy loading routes configuration

## Next Steps
- [ ] Implement JWT authentication
- [ ] Create complete user management
- [ ] Add roles and permissions system
- [ ] Develop administrative dashboard

## Useful Commands

```bash
# Generate component
ng generate component features/users/components/user-list

# Generate service  
ng generate service features/users/services/user

# Optimized build
ng build --configuration production
```

---

**Version**: 0.0.0 | **Last updated**: September 2025
