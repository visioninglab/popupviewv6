# PopupView v6

**PopupView** is an augmented reality platform by [Visioning Lab](https://www.popupview.com/) — a "YouTube for AR experiences." It lets cultural venues, cities, publishers, and public spaces deliver immersive AR content to visitors through their mobile devices.

Users point their phone at a real-world image (a poster, artwork, printed page, etc.) and PopupView overlays interactive 3D content, animations, and audio on top of it.

## How It Works

1. **Image Recognition** — The app detects printed images in the real world using AR image tracking.
2. **Content Loading** — Matching 3D prefabs are loaded on demand (via Unity Addressables) so the app stays lightweight.
3. **AR Overlay** — The content is spawned, scaled to match the physical image size, and anchored in place.
4. **Modular Behaviours** — Each piece of content can have its own mix of behaviours: scaling, rotation, audio playback, UI overlays, and more.

## Campaigns

PopupView content is organised into **campaigns** — themed AR experiences deployed to specific locations or publications. Past campaigns include:

- **ExploreDeansgate** — city exploration
- **SpekeHall** — heritage site experience
- **Folklore / Tales of These Isles** — storytelling
- **StrongWomen** — public art
- **Birdsong** — nature / soundscape
- **ARGraffiti** — street art
- **AstroJacks** — interactive play
- And many more

## Tech Stack

- **Unity** with **ARFoundation** for cross-platform AR (iOS & Android)
- **C#** for all application logic
- **Unity Addressables** for async content loading
- **DOTween** for smooth animations
- **ShaderLab / HLSL** for custom visual effects

## Architecture

| Component | Role |
|---|---|
| `ARImageScanLogic` | Listens for ARFoundation tracked-image events and triggers content spawning |
| `AddressableManager` | Loads prefabs asynchronously via Unity Addressables |
| `ActivationEventManager` | Manages modular behaviours (`IActivationEvent`) on each prefab |
| `ScaleToImageEvent` | Scales content to match the physical tracked image size |
| `RotateOnUpdateEvent` | Continuous rotation animation via DOTween |
| `AudioSourceSingleton` | Global audio manager with crossfade support |
| `PlayAudioOnActive` | Triggers audio playback when content is activated |
| `TrackedImageDataSO` | ScriptableObject storing per-image metadata and settings |
| `TrackedImageRegistry` | Maps image names to their data, prevents duplicates |
| `TrackedImageObjectManager` | Ensures one prefab per tracked image, handles parenting and transforms |

## Previous Versions

| Version | Repository |
|---|---|
| v5 | [visioninglab/popupview_v5](https://github.com/visioninglab/popupview_v5) |
| v4 | [visioninglab/popupview_v4](https://github.com/visioninglab/popupview_v4) |
| Campaigns | [visioninglab/Campaigns](https://github.com/visioninglab/Campaigns) |

## Getting Started

> v6 is under active development. Setup instructions will be added as the project takes shape.

## Contact

Visioning Lab — [hello@visioninglab.com](mailto:hello@visioninglab.com)
Website — [popupview.com](https://www.popupview.com/)
