import { profile } from '../data/profile';

export type GitHubRepository = {
  name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  pushed_at: string;
  homepage: string | null;
};

const fallbackRepositories: GitHubRepository[] = [
  {
    name: 'spdx3_viz',
    html_url: 'https://github.com/kartben/spdx3_viz',
    description: 'A fully interactive visualizer for rich SPDX 3 software bills of materials.',
    language: 'TypeScript',
    stargazers_count: 0,
    forks_count: 0,
    pushed_at: '2026-07-01T00:00:00Z',
    homepage: 'https://kartben.github.io/spdx3_viz/',
  },
  {
    name: 'meshtastic-zephyr',
    html_url: 'https://github.com/kartben/meshtastic-zephyr',
    description: 'Meshtastic for Zephyr. Natively.',
    language: 'C',
    stargazers_count: 0,
    forks_count: 0,
    pushed_at: '2026-06-01T00:00:00Z',
    homepage: null,
  },
  {
    name: 'wokwi-zephyr-projects',
    html_url: 'https://github.com/kartben/wokwi-zephyr-projects',
    description: 'Zephyr projects and examples running in the Wokwi simulator.',
    language: 'C',
    stargazers_count: 0,
    forks_count: 0,
    pushed_at: '2025-01-01T00:00:00Z',
    homepage: null,
  },
  {
    name: 'artificial-nose-zephyr',
    html_url: 'https://github.com/kartben/artificial-nose-zephyr',
    description: 'An embedded artificial nose project built with Zephyr.',
    language: 'C',
    stargazers_count: 0,
    forks_count: 0,
    pushed_at: '2025-01-01T00:00:00Z',
    homepage: null,
  },
  {
    name: 'lorawan-node-simulator',
    html_url: 'https://github.com/kartben/lorawan-node-simulator',
    description: 'A lightweight simulator for LoRaWAN end devices.',
    language: 'JavaScript',
    stargazers_count: 0,
    forks_count: 0,
    pushed_at: '2025-01-01T00:00:00Z',
    homepage: null,
  },
  {
    name: 'artificial-nose',
    html_url: 'https://github.com/kartben/artificial-nose',
    description: 'Experiments in machine learning and gas sensing for an artificial nose.',
    language: 'Jupyter Notebook',
    stargazers_count: 0,
    forks_count: 0,
    pushed_at: '2025-01-01T00:00:00Z',
    homepage: null,
  },
];

function headers(): HeadersInit {
  return {
    Accept: 'application/vnd.github+json',
    'X-GitHub-Api-Version': '2022-11-28',
    'User-Agent': 'kartben.github.io',
    ...(process.env.GITHUB_TOKEN
      ? { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` }
      : {}),
  };
}

export async function getFeaturedRepositories(): Promise<GitHubRepository[]> {
  try {
    const repositories = await Promise.all(
      profile.featuredProjectNames.map(async (name) => {
        const response = await fetch(`https://api.github.com/repos/${profile.handle}/${name}`, {
          headers: headers(),
        });

        if (!response.ok) {
          throw new Error(`GitHub API returned ${response.status} for ${name}`);
        }

        return (await response.json()) as GitHubRepository;
      }),
    );

    return repositories;
  } catch (error) {
    console.warn('Falling back to bundled repository metadata:', error);
    return fallbackRepositories;
  }
}
