# Copilot Custom Instructions

## React Best Practices

- **Functional Components**: Use functional components.
- **Hooks**: Utilize `useState`, `useEffect`, and `useMemo`.
- **Accessibility**:
  - Include `aria-*` attributes.
  - Define roles.
  - Ensure proper contrast.
- **Styling**:
  - Prefer CSS Modules.
  - Avoid styled-components.
- **Performance**:
  - Implement lazy loading.
  - Use memoization.
- **Code Conventions**:
  - Name components using PascalCase.
  - Enforce ESLint and Prettier.
- **Typography Rules**:
  - **Font Family**: Use `Roboto Condensed` or `Baloo 2` as defined in `src/styles/typography.ts`.
  - **Font Sizes and Weights**: Follow the sizes and weights specified in `typography.sizes`.
  - **Line Heights**: Ensure line heights match the design specifications.

## MCP Integration

### Figma

- **Authentication**: Use environment variables or MCP for authentication.
- **Design Mapping**:
  - Colors: `src/styles/colors.ts`
  - Fonts: Roboto
  - Spacing: Padding and margin
- **Component Generation**:
  - **Directory Structure**:
    - Base: `src/components/<ComponentName>`
    - Files: `index.tsx`, `styles.module.css`, `types.ts`, `__tests__/<ComponentName>.test.tsx`
  - **JSX Structure**:
    - Containers
    - Text
    - Images
    - Icons
  - **Styling**: CSS Modules
  - **Props**: Typed
  - **Tests**: React Testing Library

## Figma Design Precision

- **Strict Adherence**: Ensure components match the Figma design pixel-perfect.
- **Color Accuracy**: Use colors defined in `src/styles/colors.ts`.
- **Font Consistency**: Apply Roboto font with specified weights and sizes.
- **Spacing and Layout**:
  - Follow padding and margin values from Figma.
  - Use Flexbox or Grid for layout as per design.
- **Component Structure**:
  - Maintain hierarchy and nesting as shown in Figma.
  - Include all interactive elements with proper states (e.g., hover, active).
- **Testing**:
  - Validate design accuracy with visual regression tests.
  - Ensure responsiveness matches Figma's mobile and desktop views.

## Update Behavior

- **Update on Every Prompt**: Ensure custom instructions are updated with every prompt.
