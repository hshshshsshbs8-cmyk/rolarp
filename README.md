# RoLARP

A from-scratch Chromium extension for local Roblox UI roleplay, prototyping, and visual testing.

## Included
- Local simulated Robux balance
- Local username/display-name presentation
- Local Premium/verification toggles
- Simulated follower count
- Local inventory and equip presets
- Avatar preview state
- Persistent `chrome.storage.local` data
- MutationObserver-based SPA reapplication
- MV3 service worker

## Important
RoLARP keeps its simulation browser-side. It does not grant Robux, create ownership, submit purchases, modify account credentials, forge server state, bypass authorization, or collect session cookies.

The project was inspired by the feature categories of other Roblox LARP tools, but this implementation uses its own UI, state model, naming, and code rather than copying their source files.

## Install
1. Download this repository.
2. Open `chrome://extensions/`.
3. Enable Developer mode.
4. Choose **Load unpacked** and select this folder.
5. Open Roblox and use the RoLARP popup.
