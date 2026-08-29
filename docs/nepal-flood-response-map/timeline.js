// Real, dated events in the response to the August 2026 Rasuwa flood.
// The toll figures are separate snapshots in time, not one live number --
// each is exactly what the cited source reported as of that date/time, not
// backfilled or smoothed. They kept changing daily as search and rescue
// continued; showing them this way is more honest than picking one.
const RESPONSE_TIMELINE = [
  {
    date: "August 26, 2026",
    title: "Glacier collapse triggers flash flood",
    desc: "A large mass of ice and rock from Langtang Lirung collapses into the Lende Khola river valley, triggering a debris flow and flash flood that travels nearly 100 km down the Trishuli and Bhote Koshi corridor, hitting Timure, Syabru Besi, and Trishuli Bazar among other settlements.",
    source: "Wikipedia: 2026 Nepal floods; EarthSky",
  },
  {
    date: "August 27, 2026",
    title: "HOT and NAXA launch the mapping response",
    desc: "The Humanitarian OpenStreetMap Team, NAXA, and Open Mapping Hub Asia-Pacific launch a Tasking Manager campaign to remotely map buildings and roads across the affected corridor, working from pre-flood satellite imagery to build a baseline for damage assessment once post-flood imagery arrives.",
    source: "OpenStreetMap Wiki: Organised Editing/Activities/Nepal Floods 2026",
  },
  {
    date: "August 27, 2026",
    title: "Copernicus EMS activates rapid mapping (EMSR927)",
    desc: "The EU's Copernicus Emergency Management Service activates its rapid mapping service for the flood, tasked with flood extent and damage assessment across four areas of interest. Early analysis finds over 240 buildings destroyed and 32 damaged in the area assessed so far.",
    source: "Copernicus EMS; EU Space Support Office",
  },
  {
    date: "August 28-29, 2026",
    title: "Volunteer mapping reaches 100%, validation continues",
    desc: "Both Tasking Manager projects reach 100% of tasks mapped within about two days of launch. Validation, the second review pass that checks mapped work for accuracy, lags well behind: 18% complete on the building project, 8% on the roads project, as the initial wave of contributors moves on and fewer people remain to review.",
    source: "HOT Tasking Manager, live project data",
  },
];

// Each entry is exactly what was reported at that date/time, sourced
// directly, not interpolated. Multiple same-day updates on 8/26 are
// collapsed to that day's last confirmed figure.
const TOLL_TIMELINE = [
  { date: "2026-08-26", label: "Aug 26 (end of day)", dead: 95, missing: null, source: "Kathmandu Post" },
  { date: "2026-08-27", label: "Aug 27 (evening)", dead: 270, missing: 800, source: "Nepal Police, via HOT Tasking Manager project description" },
  { date: "2026-08-28", label: "Aug 28 (3pm NPT)", dead: 538, missing: 977, source: "Nepal NDRRMA, via ANI News" },
];
