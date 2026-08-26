import { initNavigation } from "./navigation.js";
import { initHeader } from "./header.js";

document.documentElement.classList.add("js");

initNavigation();
initHeader();

// Form helpers are consumed by page-specific modules.
