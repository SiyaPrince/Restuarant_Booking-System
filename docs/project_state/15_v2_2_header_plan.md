# The Table — V2.2 Sticky / Scrolled Header

## Objective

Enhance the shared site header without redesigning the Version 1 navigation system.

## Implemented

- Shared `data-site-header` JavaScript hook.
- `header.js` module.
- Passive scroll listener.
- Small scroll threshold.
- `.site-header--scrolled` state.
- Home-only overlay state before scrolling.
- Warm Ivory / Charcoal scrolled state.
- Deep Olive Reserve action restored after scroll.
- Subtle lower border.
- Lightweight blur treatment.
- Reduced-motion-safe transition removal.

## Behaviour

### Home

Initial:

- transparent header over hero
- light text
- light Reserve treatment

After scrolling:

- sticky Warm Ivory header
- Charcoal navigation
- Deep Olive Reserve action
- subtle lower divider

### Internal Pages

- remain solid from the start
- become explicitly marked as scrolled after the threshold
- no dramatic visual shift

## Explicitly Excluded

- shrinking logo
- disappearing header
- scroll direction detection
- heavy drop shadow
- animated height changes
- JavaScript layout measurements

## Next Planned Interaction

Shared form-validation architecture.
