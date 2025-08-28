# Kha & Linh Wedding

## Project Overview

This repository contains the source code for the wedding website of Kha & Linh. It is a static website built with VitePress.

## Project Structure

- **Framework**: [Vitepress](https://vitepress.dev/) (Markdown and Vue)
- **Styling**: Vitepress default with Catppuccin theme
- **Package Manager**: bun

## Building and Running

- **Install dependencies**:
  ```bash
  bun install
  ```
- **Run the development server**:
  ```bash
  bun run docs:dev
  ```
- **Build the website**:
  ```bash
  bun run docs:build
  ```
- **Preview the production build**:
  ```bash
  bun run docs:preview
  ```

## Architecture Notes

- The default language is English, and the markdown files are mostly created in the root directory.
- The second language is Vietnamese, and the markdown files are in the `/vi/` directory.

## Development Guidelines

- There are 2 languages being used: English, and Vietnamese, so always consider this when creating contents.
- Markdown files should have a frontmatter section at the top.
- The website supports both light and dark themes. Please ensure any new component or style works well in both modes.
- You can add pending changes to git, but **DO NOT** try to call git commit unless I explicitly tell you to do so.
