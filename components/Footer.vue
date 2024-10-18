<template>
  <footer>
    <div class="top-content">
      <a href="/" class="logo">
        <img src="/dda-logo.svg" alt="DDA logo" width="106" height="80" />
      </a>
      <Login />
    </div>

    <div class="middle-content">
      <ul>
        <li>
          <a href="/over">Over ons</a>
        </li>
        <li>
          <a href="/events">Events</a>
        </li>
        <li>
          <a href="/publicaties">Publicaties</a>
        </li>
        <li>
          <a href="/members">Leden</a>
        </li>
        <li>
          <a href="/vacatures">Vacatures</a>
        </li>
      </ul>

      <ul class="address">
        <li>
          <strong> Dutch Digital Agencies</strong>
        </li>
        <li>Overhoeksplein 1</li>
        <li>1031 KS Amsterdam</li>
        <li>
          <a href="tel:0854010391">(0)85 4010391</a>
        </li>
        <li>
          <a href="mailto:info@dutchdigitalagencies.com"
            >info@dutchdigitalagencies.com</a
          >
        </li>
      </ul>
    </div>

    <div class="bottom-content">
      <ul class="social">
        <li><a href="/#">Instagram</a></li>
        <li><a href="/#">Facebook</a></li>
        <li><a href="/#">LinkedIn</a></li>
      </ul>
      <p>Copyright © 2023 Dutch Digital Agencies</p>
    </div>
  </footer>
</template>

<style scoped>
footer {
  display: flex;
  flex-direction: column;
  width: 100%;
}

footer > *,
a.login {
  padding: 0 2.5rem;
}

.top-content {
  display: flex;
  flex-direction: column;
  padding-top: 2.5rem;
}

footer ul {
  display: flex;
  flex-direction: column;
  margin: 2.5rem 0;
}

footer li {
  display: flex;
  padding-bottom: 0.5rem;
  transition: 0.25s ease-in-out;
}

footer a:hover {
  color: var(--blue);
}

footer a {
  color: var(--black);
  width: fit-content;
  text-underline-offset: 0.2rem;
}

footer a.login {
  color: var(--blue);
  text-decoration: none;
  padding: 0.5rem;
  width: fit-content;
}

.middle-content {
  gap: 2.5rem;
}

.address li:nth-of-type(1),
.address li:nth-of-type(2) {
  margin: 0;
}

footer ul:last-of-type li {
  margin-right: 1rem;
}

@media (min-width: 35rem) {
  .middle-content {
    display: flex;
    flex-direction: row;
  }

  .address {
    flex-direction: column;
    margin-top: 2.5rem;
    border: none;
  }

  .social {
    flex-direction: row;
    margin: 0;
  }
}

@media (min-width: 43rem) {
  footer {
    display: grid;
    grid-template-areas:
      "top middle"
      "top middle"
      "bottom bottom";
  }

  .top-content {
    grid-area: top;
    border: solid var(--black);
    border-width: 0px 1px 1px 0px;
    padding-top: 2.5rem;
  }

  .middle-content {
    grid-area: middle;
    gap: 2rem;
    margin: 0;
    padding: 1rem 2.5rem;
    border: solid var(--black);
    border-width: 0px 0px 1px 0px;
  }

  footer .social li {
    padding: 0;
    margin: 0;
  }

  .bottom-content {
    grid-area: bottom;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0.5rem 1rem;
    margin: 0;
  }
}

@media (min-width: 67rem) {
  .top-content {
    align-items: flex-end;
    padding-right: 2.5rem;
  }

  .bottom-content {
    justify-content: space-evenly;
  }
}
</style>