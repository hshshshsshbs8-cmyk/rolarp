# RoLARP

RoLARP is an independently implemented Roblox browser-extension toolkit for local UI simulation, prototyping, and roleplay.

## Included architecture

- Profile simulation: display name, username, Robux display, Premium/verification presentation
- Catalog tools: local item cards and simulated purchases
- Inventory/ownership model: persistent local inventory and equip state
- Avatar module: local avatar/equipment state
- Friends module: local friend/activity model
- Server/region helpers: presentation-only region data
- Settings module: persistent configuration
- Trade module: preview-only trade UI data
- Home-friends module
- Background worker and local service placeholder
- MutationObserver-powered page refresh

## Important

RoLARP's simulated wallet, inventory, avatar, profile and purchase state live in extension storage. They do **not** grant Roblox assets, alter server-side ownership, perform real purchases, modify account credentials, or bypass Roblox authorization.

## Install

1. Clone/download this repository.
2. Open `chrome://extensions` or your Chromium browser's extensions page.
3. Enable Developer Mode.
4. Choose **Load unpacked** and select the repository directory.
5. Open Roblox and open the RoLARP popup.

## Project structure

```text
manifest.json
background.js
content.js
utils.js
catalog.js
friend.js
worker.js
cloudflare-worker.js
analytics.js
modules/
  avatar.js
  catalog.js
  catalog-owned.js
  friend.js
  home-friends.js
  profile.js
  server.js
  settings-page.js
  trade.js
  lib/server-regions.js
```

RoLARP is not affiliated with or endorsed by Roblox Corporation.
