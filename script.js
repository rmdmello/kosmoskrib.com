const header = document.querySelector("[data-header]");
const menuButton = document.querySelector("[data-menu-button]");
const mobileNav = document.querySelector("[data-mobile-nav]");
const planner = document.querySelector("[data-planner]");
const plannerResult = document.querySelector("[data-planner-result]");

const plannerCopy = {
  starter: {
    calm: ["The Starter", "Retreat pod, 3 steps, scratch panel, and one display shelf."],
    active: ["The Climber", "Scratch post, 4 steps, bridge mini-route, and one top perch."],
    multi: ["The Shared Starter", "Two retreat pods, 5 steps, scratch post, and split rest zones."],
  },
  explorer: {
    calm: ["The Lounge Route", "Retreat pod, hammock, 4 steps, planter shelf, and observation perch."],
    active: ["The Explorer", "Bridge, retreat pod, scratch post, 5 steps, hammock, and planter shelf."],
    multi: ["The Double Route", "Two pods, bridge, 7 steps, scratch post, and two observation shelves."],
  },
  statement: {
    calm: ["The Statement Lounge", "Floor-to-ceiling scratch post, bridge, hammock, pod, shelves, and greenery."],
    active: ["The Vertical World", "Tall climbing route, long bridge, two pods, scratch zones, and modular steps."],
    multi: ["The Statement Home", "Multi-route wall with two bridges, three pods, rest shelves, posts, and planters."],
  },
};

function updateHeader() {
  header?.classList.toggle("is-scrolled", window.scrollY > 20);
}

function updatePlanner() {
  if (!planner || !plannerResult) return;
  const formData = new FormData(planner);
  const wall = formData.get("wall");
  const cat = formData.get("cat");
  const [title, description] = plannerCopy[wall][cat];
  plannerResult.innerHTML = `<strong>${title}</strong><span>${description}</span>`;
}

window.addEventListener("scroll", updateHeader, { passive: true });
updateHeader();

menuButton?.addEventListener("click", () => {
  const isOpen = mobileNav.classList.toggle("is-open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
});

mobileNav?.addEventListener("click", (event) => {
  if (event.target instanceof HTMLAnchorElement) {
    mobileNav.classList.remove("is-open");
    menuButton?.setAttribute("aria-expanded", "false");
  }
});

planner?.addEventListener("change", updatePlanner);
updatePlanner();
