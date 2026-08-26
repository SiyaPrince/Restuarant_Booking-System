import { initNavigation } from "./navigation.js";
import { initHeader } from "./header.js";
import { initReservations } from "./reservations.js";
import { initContact } from "./contact.js";
import { initGallery } from "./gallery.js";
import { initMenu } from "./menu.js";
import { initRevealMotion } from "./animations.js";

document.documentElement.classList.add("js");

initNavigation();
initHeader();
initReservations();
initContact();
initGallery();
initMenu();
initRevealMotion();

// Form helpers are consumed by page-specific modules.
