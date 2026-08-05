Fonts used on this site (Space Grotesk, Inter, JetBrains Mono) are loaded
from Google Fonts via a CDN link in the <head> of each HTML page — that's
why this folder is currently empty.

If you'd rather self-host the fonts (works offline, one less external
request), download the .woff2 files from https://fonts.google.com for:
  - Space Grotesk (weights 500, 600, 700)
  - Inter (weights 400, 500, 600, 700)
  - JetBrains Mono (weights 400, 500, 700)
place them in this folder, and swap the Google Fonts <link> tags in each
HTML file for local @font-face rules pointing here instead.
