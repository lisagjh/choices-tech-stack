<template>
  <NuxtLink to="/join" class="join">
    <span> Word Lid </span>
    <div>
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8 3L13.0001 8.0001L8 13.0002"
          stroke="#364BF7"
          stroke-width="1.5"
          stroke-miterlimit="4.62023"
        />
        <path
          d="M3 8L13 8"
          stroke="#364BF7"
          stroke-width="1.5"
          stroke-miterlimit="4.62023"
          stroke-linejoin="round"
        />
      </svg>
    </div>
  </NuxtLink>
</template>

<script>
</script>

<style scoped>
a.join {
  display: flex;
  flex-direction: row;
  border: 1px solid var(--black);
  text-decoration: none;
  text-transform: uppercase;
}

a.join span {
  padding: 0.75rem 0.5rem;
}

a.join div {
  /* background-color: red; */
  min-height: 100%;
  padding: 0.75rem 0.5rem;
  border-left: 1px solid var(--black);
}

a.join:hover {
  color: var(--white);
  border-color: var(--blue);
}

a.join:hover div {
  border-color: var(--blue);
}

a.join:hover svg path {
  stroke: var(--white);
}
</style>