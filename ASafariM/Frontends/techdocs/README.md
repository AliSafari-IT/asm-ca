# DevKnowledgeBase

[View on codesandbox](https://vlt4v4-3000.csb.app/)

## Overview

DevKnowledgeBase is a comprehensive platform to explore, learn, and innovate in the field of software development. It offers a rich collection of tutorials, blogs, and resources aimed at developers of all levels.

## Project Structure

- **Documentation**: Organized and accessible through the sidebar.
- **Blog**: Regularly updated with insightful posts.
- **Code & Create**: A dedicated section for coding challenges and creative projects. [ToDo]
- **Idea Hub**: A place to share and explore new ideas. [ToDo]
- **About**: Information about the project and team.
- **Contact**: Ways to get in touch.

## Configuration

### Project Details

- **Title**: DevKnowledgeBase
- **Tagline**: Explore, Learn, Innovate
- **URL**: [https://asafarim.com](https://asafarim.com)
- **Base URL**: /
- **Organization Name**: asafarim
- **Project Name**: DevDocsCentral
- **Favicon**: `img/favicon.ico`

### Localization

- **Default Locale**: en
- **Supported Locales**: en

### Presets

The project uses the classic preset with the following customizations:

- **Docs**: Sidebar configuration in `sidebars.ts`. Pages are editable via GitHub links.
- **Blog**: Reading time displayed. Editable via GitHub links.
- **Theme**: Custom CSS located at `src/css/custom.css`.

### Theme Configuration

- **Navbar**:

  - Title: DevDocsCentral
  - Logo: `img/logo.svg`
  - Items:
    - TechTutorialVault (Documentation)
    - DevDocsCentral (Home)
    - Blog
    - Code & Create
    - Idea Hub
    - About
    - Contact
    - GitHub (External link)

- **Footer**:

  - Style: dark
  - Links:
    - TechDocsHub:
      - Tutorial Vault
    - Community:
      - Stack Overflow
      - X (formerly Twitter)
    - More:
      - Blog
      - Code & Create
      - GitHub

- **Prism**:
  - Theme: GitHub theme
  - Dark Theme: Dracula theme

## Development

### Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/AliSafari-IT/techdocs.git
   cd DevDocsCentral
   ```
