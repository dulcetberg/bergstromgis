// Real, dated federal vaccine-policy actions under HHS Secretary Robert F.
// Kennedy Jr., each independently verifiable. "status" reflects whether the
// action is actually in effect or was blocked by a court, since several of
// the more aggressive changes were stayed by litigation, not implemented.
const POLICY_TIMELINE = [
  {
    date: "February 13, 2025",
    title: "Robert F. Kennedy Jr. sworn in as HHS Secretary",
    desc: "Confirmed by the Senate, Kennedy takes charge of the department overseeing the CDC, FDA, and federal vaccine policy.",
    status: "in-effect",
  },
  {
    date: "June 9, 2025",
    title: "All 17 sitting ACIP members removed",
    desc: "Kennedy removes every member of the CDC's Advisory Committee on Immunization Practices, the panel that reviews evidence and recommends the vaccine schedule, and appoints new members.",
    status: "in-effect",
  },
  {
    date: "June–December 2025",
    title: "Reconstituted ACIP votes on new recommendations",
    desc: "The new committee meets in June, September, and December 2025 and votes on changes to vaccine recommendations, which CDC and HHS adopt.",
    status: "in-effect",
  },
  {
    date: "Mid-2025",
    title: "Federal court stays most schedule changes",
    desc: "A district court blocks CDC from implementing changed vaccine recommendations issued after June 11, 2025, reverting most of the childhood and adult immunization schedule to the version published in January 2025, before Kennedy's tenure began.",
    status: "blocked",
  },
  {
    date: "January 2026",
    title: "Childhood immunization schedule changed without ACIP",
    desc: "HHS and CDC change the full childhood immunization schedule directly, without routing the changes through ACIP review at all.",
    status: "in-effect",
  },
  {
    date: "April 2026",
    title: "ACIP's own charter rewritten",
    desc: "Kennedy approves changes to the rules governing ACIP itself. Critics say the new charter reframes the committee around risk alone, rather than the traditional balance of risk and benefit.",
    status: "in-effect",
  },
  {
    date: "April 2026",
    title: "DOJ appeals the court stay",
    desc: "The Department of Justice appeals the ruling that blocked most of the June 2025 schedule changes, seeking to let the more aggressive changes take effect.",
    status: "in-effect",
  },
];
