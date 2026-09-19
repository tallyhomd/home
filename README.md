# Daily SAT · Craft and Structure

60 days of original digital-SAT-style Reading and Writing drill. Each day is 10 questions:

- 6 Words in Context
- 3 Text Structure and Purpose
- 1 Cross-Text Connections

Day 1 = September 19, 2026. Day 60 = November 17, 2026. The site uses **America/New_York** to decide which day is unlocked. A 12-minute timer, scoring, skill breakdown, and explanations are built in. Progress is stored in the browser (`localStorage`).

These are original practice items for family SAT prep. They are not College Board material and are not an adaptive Bluebook test.

## Upload to GitHub Pages

You need these 8 files in the **root** of a repository (same folder, no extra directories):

- `index.html`
- `questions-01-10.js`
- `questions-11-20.js`
- `questions-21-30.js`
- `questions-31-40.js`
- `questions-41-50.js`
- `questions-51-60.js`
- `README.md` (optional)

### Steps

1. On GitHub, click **New repository**. Name it something like `sat-daily`. You can choose Public (free Pages) or Private (Pages on a private repo needs GitHub Pro).
2. Click **uploading an existing file**. Drag in the 8 files. Commit.
3. Open **Settings → Pages**. Under **Build and deployment**, set Source to **Deploy from a branch**, branch **main**, folder **/ (root)**. Save.
4. After a minute, the site URL will look like `https://YOUR-USERNAME.github.io/sat-daily/`.

Do not open `index.html` by double-clicking it as a `file://` page if scripts fail to load. Use GitHub Pages, or a local static server.

## Privacy

If the repository is **public**, anyone with the URL can read every future day’s questions in the `.js` files. The page locks future days in the menu, but that is not real security.

For Evan, either:

- Keep the repo **private** (GitHub Pro for private Pages), or
- Share only the Pages URL and ask him not to open the `.js` files, or
- Upload 10-day batches as you go and hold the later files back.

Do not put student emails in this repo.

## Using the site

- **Start 12-minute set** — timed; answers hidden until the end.
- **Review with answers** — untimed explanations.
- Past days stay available after they unlock. After November 17, 2026, every loaded day is available.

Official Bluebook practice should stay on a separate track from this drill.
