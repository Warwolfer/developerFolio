# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- **Start development server**: `p`npm` start` (runs fetch.js then react-scripts start)
- **Build for production**: `pnpm run build` (runs fetch.js then react-scripts build)
- **Run tests**: `pnpm test`
- **Format code**: `pnpm run format` (prettier)
- **Check formatting**: `pnpm run check-format`
- **Deploy to GitHub Pages**: `pnpm run deploy`

Note: Both start and build commands automatically run `node fetch.js` first to fetch GitHub profile and Medium blog data.

## Environment Setup

1. Copy `env.example` to `.env`: `cp env.example .env`
2. Set required environment variables in `.env`:
   - `REACT_APP_GITHUB_TOKEN`: GitHub personal access token (classic, no scopes needed)
   - `GITHUB_USERNAME`: Your GitHub username
   - `USE_GITHUB_DATA`: Set to "true" to fetch GitHub data
   - `MEDIUM_USERNAME`: Your Medium username (optional)

## Project Architecture

This is a React-based developer portfolio application with the following key structure:

### Core Configuration
- **`src/portfolio.js`**: Main configuration file containing all personal data, sections, and settings
- **`fetch.js`**: Pre-build script that fetches GitHub profile/repos and Medium blogs via APIs

### Component Architecture
- **`src/containers/Main.js`**: Root component that orchestrates all portfolio sections
- **`src/components/`**: Reusable UI components (Header, Footer, cards, etc.)
- **`src/containers/`**: Page sections (Greeting, Skills, Education, WorkExperience, etc.)

### Key Features
- **Dark/Light Theme**: Managed via StyleContext with localStorage persistence
- **Splash Screen**: Configurable Lottie animation on load
- **Responsive Design**: SCSS-based styling with global color theming
- **GitHub Integration**: Fetches pinned repositories and profile data
- **Medium Integration**: Fetches blog posts from Medium RSS
- **PWA Support**: Service worker and manifest included

### Data Flow
1. `fetch.js` runs during build/start to populate `public/profile.json` and `public/blogs.json`
2. Components consume this data alongside static configuration from `portfolio.js`
3. Theme state managed through React Context with localStorage persistence

### Customization Points
- **Personal Data**: Edit `src/portfolio.js` for all content and settings
- **Global Colors**: Modify `src/_globalColor.scss` for theme colors
- **Lottie Animations**: Replace JSON files in `src/assets/lottie/`
- **Images/Assets**: Add to `src/assets/images/`

### Section Control
Each section in `portfolio.js` has a `display` boolean to show/hide sections:
- greeting, skillsSection, educationInfo, workExperiences
- openSource, bigProjects, achievementSection, blogSection
- talkSection, podcastSection, contactInfo, twitterDetails

The application automatically handles responsive design and maintains consistent styling across all sections.