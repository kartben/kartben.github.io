# kartben.github.io

Personal landing page for Benjamin Cabé, built with [Astro](https://astro.build/) and deployed to GitHub Pages.

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

Featured project metadata is refreshed from the GitHub API during the build. Set `GITHUB_TOKEN` to avoid unauthenticated rate limits; the site falls back to bundled metadata if GitHub is unavailable.

## Deployment

The workflow in `.github/workflows/deploy.yml` builds the static site and deploys it to GitHub Pages. The repository's Pages source must be set to **GitHub Actions**.
