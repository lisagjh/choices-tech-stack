<template>
  <NuxtLink to="/login" class="login">
    <span>Inloggen</span>
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8 3L13.0001 8.0001L8 13.0002"
        stroke="#222226"
        stroke-width="1.5"
        stroke-miterlimit="4.62023"
      />
      <path
        d="M3 8L13 8"
        stroke="#222226"
        stroke-width="1.5"
        stroke-miterlimit="4.62023"
        stroke-linejoin="round"
      />
    </svg>
  </NuxtLink>
</template>

<style scoped>
a.login {
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 3rem;
  color: var(--blue);
  text-transform: uppercase;
  margin: 0 0;
}

a.login span {
  padding: 0.75rem 0.5rem;
}

.login svg path {
  stroke: var(--blue);
}

a.join:hover {
  background-color: var(--blue);
  color: var(--white);
}
</style>