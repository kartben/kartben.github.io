export const profile = {
  name: 'Benjamin Cabé',
  handle: 'kartben',
  headline: 'Developer advocate, open-source builder, and embedded systems enthusiast.',
  intro:
    'I help make complex technology easier to understand, build, and explore — with a current focus on Zephyr RTOS, software supply chains, and developer tooling.',
  avatarUrl: 'https://avatars.githubusercontent.com/u/128251?v=4',
  location: 'Toulouse, France',
  email: 'benjamin@zephyrproject.org',
  socialLinks: [
    { label: 'GitHub', href: 'https://github.com/kartben' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/benjamincabe/' },
    { label: 'YouTube', href: 'https://www.youtube.com/@kartben' },
    { label: 'Blog', href: 'https://blog.benjamin-cabe.com' },
  ],
  focusAreas: [
    {
      eyebrow: 'Open source',
      title: 'Zephyr Project',
      description:
        'Developer advocacy, documentation, community, demos, talks, and the weekly pulse of a fast-moving RTOS ecosystem.',
      href: 'https://www.zephyrproject.org/',
    },
    {
      eyebrow: 'Software supply chain',
      title: 'SPDX & SBOMs',
      description:
        'Exploring how rich, build-aware software bills of materials can make embedded products easier to understand and trust.',
      href: 'https://github.com/kartben/spdx3_viz',
    },
    {
      eyebrow: 'On the mic',
      title: 'The Zephyr Podcast',
      description:
        'A regular tour of embedded systems, open source, odd bugs, new hardware, and what just landed in Zephyr.',
      href: 'https://www.youtube.com/@ZephyrProject',
    },
  ],
  featuredProjectNames: [
    'spdx3_viz',
    'meshtastic-zephyr',
    'wokwi-zephyr-projects',
    'artificial-nose-zephyr',
    'lorawan-node-simulator',
    'artificial-nose',
  ],
} as const;
