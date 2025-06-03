# MCP Testing App

## Overview

This project is designed to test the Figma MCP server by creating ReactJS components based on a Figma design. It uses React, TypeScript, and Vite for fast development and testing.

## Features

- **React Components**: Pixel-perfect components created from Figma designs.
- **MCP Server Integration**: Testing the Model Context Protocol (MCP) server for seamless design-to-code workflows.
- **Asset Management**: Images and icons are directly integrated from the Figma design.
- **Responsive Design**: Components are validated for responsiveness across mobile and desktop views.

## Technologies Used

- **React**: For building user interfaces.
- **TypeScript**: For type safety and better developer experience.
- **Vite**: For fast development and hot module replacement.
- **CSS Modules**: For scoped and maintainable styles.
- **Testing Library**: For component testing.

## Getting Started

### Prerequisites

- Node.js and npm installed.

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```bash
   cd mcp-testing-app
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

### Running the Project

Start the development server:

```bash
npm run dev
```

Open the app in your browser at `http://localhost:3000`.

### Building for Production

Build the project:

```bash
npm run build
```

### Testing

Run tests:

```bash
npm test
```

## Project Structure

```
src/
  assets/
    icons/       # Icons from Figma design
    images/      # Coffee-related images
  components/
    Button/      # Button component
    Cart/        # Cart component
    CoffeeCard/  # CoffeeCard component
    Counter/     # Counter component
    Input/       # Input component
    Select/      # Select component
  styles/        # Global styles
```

## Best Practices

- **Component Design**:
  - Ensure all components match the Figma design pixel-perfect.
  - Use assets (images and icons) from the `src/assets` directory.
- **Code Quality**:
  - Use TypeScript for type safety.
  - Follow ESLint rules for consistent code style.
- **Testing**:
  - Validate components with visual regression tests.
  - Ensure responsiveness matches Figma's mobile and desktop views.

## License

This project is licensed under the MIT License.

## Contact

For questions or feedback, please contact [Daniel Carneiro].
