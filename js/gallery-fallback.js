(function () {
  function initGalleryFallback() {
    var gallery = document.querySelector('[data-gallery]');
    var dialog = document.querySelector('[data-lightbox]');

    if (!gallery || !dialog || gallery.dataset.galleryReady === 'true') return;

    var items = Array.prototype.slice.call(gallery.querySelectorAll('[data-gallery-item]'));
    var media = dialog.querySelector('[data-lightbox-media]');
    var caption = dialog.querySelector('[data-lightbox-caption]');
    var counter = dialog.querySelector('[data-lightbox-counter]');
    var closeButton = dialog.querySelector('[data-lightbox-close]');
    var previousButton = dialog.querySelector('[data-lightbox-previous]');
    var nextButton = dialog.querySelector('[data-lightbox-next]');

    if (!items.length || !media || !caption || !counter || !closeButton || !previousButton || !nextButton) return;

    gallery.dataset.galleryReady = 'true';

    var currentIndex = 0;
    var returnFocusTo = null;

    function normaliseIndex(index) {
      return (index + items.length) % items.length;
    }

    function showItem(index) {
      currentIndex = normaliseIndex(index);
      var item = items[currentIndex];
      var image = item.querySelector('.gallery-item__media');
      var label = item.dataset.galleryLabel || item.getAttribute('aria-label') || ('Gallery image ' + (currentIndex + 1));
      var description = item.dataset.galleryCaption || label;

      if (image && image.tagName === 'IMG') {
        media.src = image.currentSrc || image.src;
        media.alt = image.alt || label;
      }

      caption.textContent = description;
      counter.textContent = (currentIndex + 1) + ' / ' + items.length;
    }

    function openLightbox(index) {
      currentIndex = normaliseIndex(index);
      returnFocusTo = document.activeElement;
      showItem(currentIndex);

      if (typeof dialog.showModal === 'function') {
        dialog.showModal();
      } else {
        dialog.setAttribute('open', '');
        dialog.classList.add('lightbox--fallback-open');
      }

      document.body.classList.add('lightbox-open');
      window.setTimeout(function () { closeButton.focus(); }, 0);
    }

    function closeLightbox() {
      if (typeof dialog.close === 'function' && dialog.open) {
        dialog.close();
      } else {
        dialog.removeAttribute('open');
        dialog.classList.remove('lightbox--fallback-open');
      }

      document.body.classList.remove('lightbox-open');

      if (returnFocusTo && typeof returnFocusTo.focus === 'function') {
        window.setTimeout(function () { returnFocusTo.focus(); }, 0);
      }
      returnFocusTo = null;
    }

    items.forEach(function (item, index) {
      item.addEventListener('click', function () { openLightbox(index); });
      item.addEventListener('keydown', function (event) {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          openLightbox(index);
        }
      });
    });

    closeButton.addEventListener('click', closeLightbox);
    previousButton.addEventListener('click', function () { showItem(currentIndex - 1); });
    nextButton.addEventListener('click', function () { showItem(currentIndex + 1); });

    dialog.addEventListener('cancel', function (event) {
      event.preventDefault();
      closeLightbox();
    });

    dialog.addEventListener('click', function (event) {
      if (event.target === dialog) closeLightbox();
    });

    document.addEventListener('keydown', function (event) {
      if (!dialog.hasAttribute('open')) return;

      if (event.key === 'Escape') {
        event.preventDefault();
        closeLightbox();
      } else if (event.key === 'ArrowLeft') {
        event.preventDefault();
        showItem(currentIndex - 1);
      } else if (event.key === 'ArrowRight') {
        event.preventDefault();
        showItem(currentIndex + 1);
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () {
      window.setTimeout(initGalleryFallback, 0);
    });
  } else {
    window.setTimeout(initGalleryFallback, 0);
  }
})();
