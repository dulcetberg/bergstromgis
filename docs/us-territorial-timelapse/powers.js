// Classifies each named territory into a controlling power for coloring.
// Checked in order; first regex match wins. Anything matching no entry here
// falls through to "Indigenous nation" (see powerFor() in index.html) --
// that catch-all is accurate specifically because every non-Indigenous
// entity actually present in the data (colonial powers, modern nations)
// is enumerated explicitly below, based on inspecting the real distinct
// names across every year in web_timeline.geojson.
const POWERS = {
  "Spain": {
    color: "#c9a227",
    match: /spain|hispaniola|santo domingo|vice.?royalty of (new spain|peru|new granada)/i,
  },
  "France": {
    color: "#2e5fa3",
    match: /france|new france|louisiana|luisiana|cayenne|martinique|guadeloupe|french guiana/i,
  },
  "Great Britain": {
    color: "#a3283f",
    match: /united kingdom|great britain|^england|british|massachusetts bay|^virginia$|south carolina|rupert's land|acadian peninsula|^quebec$|dominion of newfoundland|barbados \(uk\)|jamaica \(uk\)|saint kitts and nevis \(uk\)|virgin islands \(uk\)|florida \(spain\)/i,
  },
  "Netherlands": {
    color: "#d97b1f",
    match: /netherlands|dutch|new amsterdam|guyana \(netherlands\)|surinam|essequibo/i,
  },
  "Russia": {
    color: "#1f8f6f",
    match: /russia/i,
  },
  "Denmark": {
    color: "#b0558c",
    match: /denmark|danemark/i,
  },
  "United States": {
    color: "#1d4d5c",
    match: /united states/i,
  },
  "Mexico": {
    color: "#5a9e3a",
    match: /^mexico$/i,
  },
  "Canada": {
    color: "#6f9bc9",
    match: /^canada$/i,
  },
  "Hawaii": {
    color: "#8a4fb8",
    match: /hawai/i,
  },
  "Other nation": {
    color: "#9a958c",
    match: /belize|guatemala|honduras|nicaragua|costa rica|el salvador|colombia|venezuela|dominican republic|^haiti$|greenland|anguilla|antigua|dominica|grenada|montserrat|saint kitts|saint lucia|saint vincent|saint barthelemy|saint martin|trinidad|turks and caicos|bahamas|brazil/i,
  },
  "Indigenous nation": {
    color: "#a0522d",
    match: null, // fallback only, matched last in powerFor()
  },
};
