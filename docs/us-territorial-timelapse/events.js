// Real historical events with their actual years. Displayed when the
// timeline reaches the nearest benchmark snapshot AT OR AFTER the event's
// real year (a snapshot represents "by this point, this had happened"),
// since events rarely land on one of the 22 benchmark years exactly.
// displayYear is computed once at load time in index.html.
const EVENTS = [
  { year: 1492, title: "Columbus reaches the Caribbean", desc: "The first sustained contact between Europe and the Americas, opening a century of Spanish claims across the Caribbean and Florida." },
  { year: 1565, title: "St. Augustine founded", desc: "Spain establishes the oldest continuously occupied European settlement in what is now the continental United States." },
  { year: 1607, title: "Jamestown founded", desc: "The first permanent English settlement in North America, in present-day Virginia." },
  { year: 1620, title: "Plymouth Colony founded", desc: "English Separatists establish a second English foothold in New England." },
  { year: 1625, title: "New Amsterdam founded", desc: "The Dutch establish a trading post at the mouth of the Hudson River, later renamed New York." },
  { year: 1682, title: "La Salle claims Louisiana for France", desc: "France claims the entire Mississippi River basin, an enormous territory named for Louis XIV." },
  { year: 1754, title: "French and Indian War begins", desc: "The North American front of a global war between Britain and France, fought largely over control of the Ohio Valley." },
  { year: 1763, title: "Treaty of Paris ends French colonial North America", desc: "France cedes nearly all its North American territory; Britain gains Canada and land east of the Mississippi, Spain gains Louisiana." },
  { year: 1776, title: "Declaration of Independence", desc: "Thirteen British colonies declare independence, beginning the Revolutionary War." },
  { year: 1783, title: "Treaty of Paris recognizes the United States", desc: "Britain formally recognizes American independence and cedes territory east of the Mississippi River." },
  { year: 1803, title: "Louisiana Purchase", desc: "The United States buys France's Louisiana territory for roughly $15 million, doubling the country's size overnight." },
  { year: 1819, title: "Adams-Onis Treaty", desc: "Spain cedes Florida to the United States and formally defines the western border of the Louisiana Purchase." },
  { year: 1830, title: "Indian Removal Act", desc: "Congress authorizes the forced relocation of Native nations from the Southeast, leading to the Trail of Tears." },
  { year: 1845, title: "Texas annexed", desc: "The Republic of Texas, independent since 1836, joins the United States as a state." },
  { year: 1846, title: "Oregon Treaty", desc: "The U.S. and Britain divide the Pacific Northwest at the 49th parallel, settling the Oregon boundary dispute." },
  { year: 1848, title: "Mexican Cession", desc: "The Treaty of Guadalupe Hidalgo ends the Mexican-American War; Mexico cedes what becomes California, Nevada, Utah, and parts of four other states." },
  { year: 1853, title: "Gadsden Purchase", desc: "The U.S. buys a strip of southern Arizona and New Mexico from Mexico, completing the continental U.S. borders." },
  { year: 1861, title: "Civil War begins", desc: "Eleven Southern states secede to form the Confederate States of America; the war ends in 1865 with the Union preserved and slavery abolished." },
  { year: 1867, title: "Alaska Purchase", desc: "The United States buys Alaska from Russia for $7.2 million, ending Russian America." },
  { year: 1890, title: "Wounded Knee Massacre", desc: "U.S. troops kill several hundred Lakota, marking the end of large-scale armed conflict on the Plains and the closing of the frontier era." },
  { year: 1898, title: "Spanish-American War and Hawaii annexation", desc: "The U.S. gains Puerto Rico, Guam, and the Philippines from Spain, and formally annexes the independent Kingdom of Hawaii the same year." },
  { year: 1917, title: "United States enters World War I", desc: "The U.S. also purchases the Danish West Indies this year, renamed the U.S. Virgin Islands." },
  { year: 1941, title: "United States enters World War II", desc: "Following the attack on Pearl Harbor, Hawaii, the U.S. formally enters the war." },
  { year: 1959, title: "Alaska and Hawaii become states", desc: "The 49th and 50th states join the Union, the last states admitted to date." },
  { year: 1975, title: "Indian Self-Determination Act", desc: "Federal policy shifts toward tribal sovereignty and self-governance after decades of assimilation-era policy." },
];

function computeDisplayYears(benchmarkYears) {
  for (const e of EVENTS) {
    e.displayYear = benchmarkYears.find(y => y >= e.year);
  }
}
