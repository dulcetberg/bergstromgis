// Positions the hero's ambient street sparkles. Replicates CSS
// background-size:cover + background-position:center 45% in JS so the
// sparkle overlay always matches the actual rendered crop of the hero
// image, at whatever width the container really ends up -- not just the
// width this was originally built at. Runs on load and on every resize.
// A no-op on any page without a .hero-sparkles element.
(function () {
  var SRC_W = 2200, SRC_H = 1300;
  var BG_POS_Y = 0.45;

  function positionSparkles() {
    var svg = document.querySelector('.hero-sparkles');
    if (!svg) return;
    var rect = svg.getBoundingClientRect();
    var w = rect.width, h = rect.height;

    svg.setAttribute('viewBox', '0 0 ' + w + ' ' + h);

    var scale = Math.max(w / SRC_W, h / SRC_H);
    var scaledW = SRC_W * scale, scaledH = SRC_H * scale;
    var offsetX = (scaledW - w) * 0.5;
    var offsetY = (scaledH - h) * BG_POS_Y;

    document.querySelectorAll('.sparkle').forEach(function (circle) {
      var sx = parseFloat(circle.dataset.sx);
      var sy = parseFloat(circle.dataset.sy);
      circle.setAttribute('cx', (sx * scale - offsetX).toFixed(1));
      circle.setAttribute('cy', (sy * scale - offsetY).toFixed(1));
    });
  }

  positionSparkles();
  window.addEventListener('resize', positionSparkles);
})();
