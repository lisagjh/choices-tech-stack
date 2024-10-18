<!-- components/Header.vue -->
<template>
  <header>
    <a to="/">
      <img src="/dda-logo.svg" alt="DDA logo" width="60" height="45" />
    </a>

    <button @click="toggleNav" aria-label="navigation menu">
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <mask
          id="mask0_1_121"
          style="mask-type: alpha"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="32"
          height="32"
        >
          <rect width="32" height="32" fill="#D9D9D9" />
        </mask>
        <g mask="url(#mask0_1_121)">
          <path
            d="M4 24V21.3333H28V24H4ZM4 17.3333V14.6667H28V17.3333H4ZM4 10.6667V8H28V10.6667H4Z"
            fill="#222226"
          />
        </g>
      </svg>
    </button>

    <nav
      class="menu"
      :class="{ show: isNavVisible }"
    >
      <ul>
        <li><NuxtLink to="/over">Over ons</NuxtLink></li>
        <li><NuxtLink to="/events">Events</NuxtLink></li>
        <li><NuxtLink to="/publicaties">Publicaties</NuxtLink></li>
        <li><NuxtLink to="/members">Leden</NuxtLink></li>
        <li><NuxtLink to="/vacatures">Vacatures</NuxtLink></li>
      </ul>

      <ul class="nav-cta">
        <Login />
        <Join />
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      isNavVisible: false,
    };
  },
  methods: {
    toggleNav() {
      this.isNavVisible = !this.isNavVisible;
    },
  },
};
</script>

<style>
/* ingebouwde Nuxt active class */
.router-link-active {
  background: var(--blue);
  color: var(--white);
}

/* Ensure the active class doesn't affect the img */
.router-link-active img {
  background: none;
  color: inherit;
}

/* when i apply the font-family to the header, it doesnt work, but this way does for some reason? */
header * {
  font-family: var(--martian-mono);
}

header {
  width: 100%;
  display: flex;
  flex-direction: row;
}

header {
  backdrop-filter: blur(5px);
  background: rgba(255, 255, 255, 0.7);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1rem;
  width: 100%;
  position: sticky;
  top: 0;
  z-index: 100;
}

button {
  background-color: var(--white);
  border: 1px solid var(--black);
  height: 2.5rem;
  width: 2.5rem;
  transition: 0.25s ease-in-out;
}

button:hover {
  box-shadow: 2px 2px 0px var(--blue);
  scale: 1.01;
}

button:active {
  box-shadow: 1px 1px 0px var(--blue);
  scale: 0.99;
}

nav {
  background-color: var(--white);
  position: absolute;
  top: 4.5rem;
  width: 100%;
  max-width: 19.5rem;
  padding: 0.5rem 0;
  z-index: 2;
  visibility: hidden;
  opacity: 0;
  scale: 0.5;
  transform: translateX(50px) translateY(-100px);
  transition: 0.25s ease-in-out;
}

.show {
  visibility: visible;
  opacity: 1;
  scale: 1;
  transform: translateX(0) translateY(0);
}

ul {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  height: 100%;
}

li {
  height: 100%;
  align-self: center;
}

.menu ul li a {
  display: inline-block;
  width: 8rem;
  padding: 0.25rem 0 0.25rem 0.1rem;
}

.show {
  visibility: visible;
  opacity: 1;
  scale: 1;
  transform: translateX(0) translateY(0);
}
</style>