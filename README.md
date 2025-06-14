# Sample Corporate Site

This project uses **Gulp** to build a corporate website.

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm start
   ```

The `npm start` command runs `gulp serve`, which compiles source files, writes them to the `dist/` directory and launches BrowserSync for live reload.

## Folder structure

```
├── dist/             # Built output
│   ├── company/
│   ├── css/
│   ├── img/
│   ├── js/
│   └── index.html
├── src/              # Source files
│   ├── ejs/
│   ├── sass/
│   └── ts/
```

- `src/` holds EJS templates, Sass stylesheets and TypeScript files.
- `dist/` is generated after running `npm start`.
