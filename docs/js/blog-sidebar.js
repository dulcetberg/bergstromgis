// Sidebar search + calendar, shared by every page. Two modes:
//
//   Live mode (blog.html only, detected via #postGrid): filters the
//   real post cards in place, and reads ?q=/?date= from the URL on
//   load so links from other pages' sidebars land pre-filtered.
//
//   Redirect mode (every other page): there's no local post grid to
//   filter, so search submits and calendar clicks hand off to Blog
//   with ?q=/?date= set, instead of a widget that visibly does nothing.
(function () {
  var ROOT = location.pathname.indexOf('/work/') !== -1 ? '../' : '';
  var BLOG_URL = ROOT + 'blog.html';

  var postGrid = document.getElementById('postGrid');
  var isLive = !!postGrid;

  var searchForm = document.getElementById('sidebarSearchForm');
  var searchInput = document.getElementById('blogSearch');
  var searchStatus = document.getElementById('searchStatus');
  var noResults = document.getElementById('noResults');
  var calLabel = document.getElementById('calLabel');
  var calGrid = document.getElementById('calGrid');
  var calPrev = document.getElementById('calPrev');
  var calNext = document.getElementById('calNext');
  var calClear = document.getElementById('calClear');
  var clearFromEmpty = document.getElementById('clearFromEmpty');

  if (!searchInput || !calGrid) return; // sidebar markup not present on this page

  var MONTH_NAMES = ['January','February','March','April','May','June','July','August','September','October','November','December'];
  var DOW = ['S','M','T','W','T','F','S'];

  function isoDate(y, m, d) {
    return y + '-' + String(m + 1).padStart(2, '0') + '-' + String(d).padStart(2, '0');
  }

  var params = new URLSearchParams(location.search);
  var cards = isLive ? Array.prototype.slice.call(postGrid.querySelectorAll('.project-card')) : [];

  // Calendar dots always come from the full site-wide archive (BLOG_POST_DATES),
  // not just whatever's rendered on the current page -- true on blog.html itself
  // (every card + a global source-of-truth line up anyway) and essential on every
  // other page (which has no local dates at all).
  var postDates = {}; // 'YYYY-MM-DD' -> count
  (window.BLOG_POST_DATES || []).forEach(function (d) {
    postDates[d] = (postDates[d] || 0) + 1;
  });

  var latestDate = (window.BLOG_POST_DATES || []).reduce(function (max, d) {
    return d > max ? d : max;
  }, (window.BLOG_POST_DATES || [])[0] || isoDate(new Date().getFullYear(), new Date().getMonth(), 1));

  var initialDate = params.get('date');
  var initialQuery = params.get('q') || '';
  var anchorDate = (isLive && initialDate) ? initialDate : latestDate;
  var anchor = new Date(anchorDate + 'T00:00:00');
  var viewYear = anchor.getFullYear();
  var viewMonth = anchor.getMonth(); // 0-indexed
  var selectedDate = isLive ? initialDate : null;
  var query = isLive ? initialQuery : '';

  if (isLive && initialQuery) searchInput.value = initialQuery;

  function renderCalendar() {
    calLabel.textContent = MONTH_NAMES[viewMonth] + ' ' + viewYear;
    calGrid.innerHTML = '';
    DOW.forEach(function (d) {
      var el = document.createElement('div');
      el.className = 'cal-dow';
      el.textContent = d;
      calGrid.appendChild(el);
    });
    var firstDow = new Date(viewYear, viewMonth, 1).getDay();
    var daysInMonth = new Date(viewYear, viewMonth + 1, 0).getDate();
    for (var i = 0; i < firstDow; i++) {
      calGrid.appendChild(document.createElement('div'));
    }
    for (var day = 1; day <= daysInMonth; day++) {
      var iso = isoDate(viewYear, viewMonth, day);
      var hasPost = !!postDates[iso];
      var btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'cal-day' + (hasPost ? ' has-post' : '') + (selectedDate === iso ? ' is-selected' : '');
      btn.textContent = day;
      btn.setAttribute('role', 'gridcell');
      if (hasPost) {
        btn.setAttribute('aria-label', MONTH_NAMES[viewMonth] + ' ' + day + ', ' + viewYear + ' (' + postDates[iso] + ' post' + (postDates[iso] > 1 ? 's' : '') + ')');
        btn.addEventListener('click', function (targetIso) {
          return function () { onDayClick(targetIso); };
        }(iso));
      } else {
        btn.disabled = true;
        btn.setAttribute('aria-hidden', 'true');
        btn.tabIndex = -1;
      }
      calGrid.appendChild(btn);
    }
    if (calClear) calClear.hidden = !selectedDate;
  }

  function onDayClick(iso) {
    if (isLive) {
      selectedDate = (selectedDate === iso) ? null : iso;
      renderCalendar();
      applyFilters();
    } else {
      window.location.href = BLOG_URL + '?date=' + encodeURIComponent(iso);
    }
  }

  function applyFilters() {
    if (!isLive) return;
    var q = query.trim().toLowerCase();
    var visibleCount = 0;
    cards.forEach(function (card) {
      var matchesDate = !selectedDate || card.dataset.date === selectedDate;
      var matchesQuery = !q || card.textContent.toLowerCase().indexOf(q) !== -1;
      var visible = matchesDate && matchesQuery;
      card.hidden = !visible;
      if (visible) visibleCount++;
    });
    if (noResults) noResults.hidden = visibleCount > 0;

    if (searchStatus) {
      if (q) {
        searchStatus.hidden = false;
        searchStatus.textContent = visibleCount + ' post' + (visibleCount === 1 ? '' : 's') + ' match "' + query.trim() + '"';
      } else {
        searchStatus.hidden = true;
      }
    }
  }

  if (isLive) {
    searchInput.addEventListener('input', function () {
      query = searchInput.value;
      applyFilters();
    });
  }

  if (searchForm) {
    searchForm.addEventListener('submit', function (e) {
      e.preventDefault();
      if (isLive) {
        query = searchInput.value;
        applyFilters();
      } else if (searchInput.value.trim()) {
        window.location.href = BLOG_URL + '?q=' + encodeURIComponent(searchInput.value.trim());
      } else {
        window.location.href = BLOG_URL;
      }
    });
  }

  calPrev.addEventListener('click', function () {
    viewMonth--;
    if (viewMonth < 0) { viewMonth = 11; viewYear--; }
    renderCalendar();
  });
  calNext.addEventListener('click', function () {
    viewMonth++;
    if (viewMonth > 11) { viewMonth = 0; viewYear++; }
    renderCalendar();
  });
  if (calClear) {
    calClear.addEventListener('click', function () {
      selectedDate = null;
      renderCalendar();
      applyFilters();
    });
  }
  if (clearFromEmpty) {
    clearFromEmpty.addEventListener('click', function () {
      selectedDate = null;
      query = '';
      searchInput.value = '';
      renderCalendar();
      applyFilters();
    });
  }

  renderCalendar();
  applyFilters();
})();
