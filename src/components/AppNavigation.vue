<template>
    <nav class="navigation mt-4">
      <nav class="navbar navbar-expand-lg navbar-light">
  <div class="turndigital-container">
    <router-link :to="{ name: 'home'}">
      <img class="navbar-brand" src="/logo.webp" alt="logo">
    </router-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav m-auto mb-2">
        <li class="nav-item">
          <a class="" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="" href="#">Blog</a>
        </li>
        <li class="nav-item">
          <a class="" href="#">Single Post</a>
        </li>
        <li class="nav-item">
          <a class="" href="#">Pages</a>
        </li>
        <li class="nav-item">
          <a class="" href="#">Contact</a>
        </li>
      </ul>
      <form class="d-flex align-items-center gap-4">
        <!-- <input class="form-control bg-lightgray border-0" type="search" placeholder="Search" aria-label="Search"> -->
        <div class="bg-light p-input rounded d-none d-sm-flex align-items-center gap-2">
  <input type="text" class="border-0 bg-light" placeholder="Search">
  <div>
    <svg class="cursor-pointer" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6.90906 2C5.93814 2 4.98903 2.28791 4.18174 2.82733C3.37444 3.36674 2.74524 4.13343 2.37368 5.03045C2.00213 5.92746 1.90491 6.91451 2.09433 7.86677C2.28375 8.81904 2.75129 9.69375 3.43783 10.3803C4.12438 11.0668 4.99909 11.5344 5.95135 11.7238C6.90362 11.9132 7.89067 11.816 8.78768 11.4444C9.6847 11.0729 10.4514 10.4437 10.9908 9.63639C11.5302 8.8291 11.8181 7.87998 11.8181 6.90906C11.818 5.60712 11.3008 4.35853 10.3802 3.43792C9.45959 2.51731 8.211 2.00008 6.90906 2Z" stroke="#52525B" stroke-width="1.5" stroke-miterlimit="10"></path>
      <path d="M10.5715 10.5716L14 14" stroke="#52525B" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"></path>
    </svg>
  </div>
</div>

        <div class="theme-toggle">
          <input type="checkbox" id="theme-switch" @change="toggleTheme" />
          <label for="theme-switch" class="toggle-label bg-lightgray">
            <span class="toggle-inner"><img src="/sunny.webp" alt="sunny"></span>
            <span class="toggle-switch"></span>
          </label>
        </div>
      </form>
    </div>
  </div>
</nav>
</nav>
</template>

<script>
  export default {
    name: 'AppNavigation'
  }
</script>

<style scoped>

input.form-control{
  padding: 0.375rem 0rem 0.375rem 0.75rem;
}
input.form-control::placeholder {
    color: #A1A1AA;
}

li.nav-item a {
  color: #3B3C4A;
  font-weight: 400;
  font-size: 1rem;
  padding: 0;
  text-decoration: none;
}

ul.navbar-nav {
  gap: 2rem;
}

/* Basic styling for the toggle switch */
.theme-toggle {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

input[type="checkbox"] {
  height: 0;
  width: 0;
  visibility: hidden;
}

/* The toggle switch */
.toggle-label {
  display: flex;
  align-items: center;
  cursor: pointer;
  width: 3rem;
  height: 1.8rem;
  border-radius: 6.25rem;
  position: relative;
  transition: background-color 0.2s;
}

.toggle-label .toggle-inner {
  position: absolute;
  top: 3px;
  left: 3px;
  width: 1.5rem;
  height: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: white;
  transition: left 0.2s;
}

/* When the checkbox is checked */
input[type="checkbox"]:checked + .toggle-label .toggle-inner {
  left: calc(100% - 3px);
  transform: translateX(-100%);
}

input[type="checkbox"]:checked + .toggle-label {
  background-color: #66bb6a;
}

input[type="text"]{
  max-width: 8.2rem;
}

input[type="text"],
input[type="text"]:focus {
  border: 0;
  outline: none;
  box-shadow: none;
}

.p-input{
  padding: 0.5rem 0.5rem 0.5rem 0.8rem !important;
}

</style>
  