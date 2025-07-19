<template>
  <div class="layout-grid">
    <!-- Navbar -->
    <nav class="navbar blue darken-3">
      <div class="nav-wrapper container">
        <NuxtLink to="/" class="brand-logo">Logo</NuxtLink>
        <a href="#" data-target="mobile-nav" class="sidenav-trigger right">
          <i class="material-icons">menu</i>
        </a>
        <ul class="right hide-on-med-and-down">
          <li><NuxtLink to="/">About</NuxtLink></li>
          <li><NuxtLink to="/dashboard">Dashboard</NuxtLink></li>
          <li><NuxtLink to="/login">Login</NuxtLink></li>
        </ul>
      </div>
    </nav>

    <!-- Mobile Nav -->
    <ul class="sidenav" id="mobile-nav">
      <li><NuxtLink to="/">Home</NuxtLink></li>
      <li><NuxtLink to="/about">About</NuxtLink></li>
    </ul>

    <!-- Scrollable content area -->
    <main class="content-scrollable">
      <div class="container" style="padding-top: 20px">
        <slot />
      </div>
    </main>

    <!-- Footer -->
    <footer class="footer blue darken-3">
      <div class="container center-align white-text">
        © {{ new Date().getFullYear() }} This is a project by Cesar Soares
        Stenico
      </div>
    </footer>
  </div>
</template>

<style scoped>
.layout-grid {
  display: grid;
  grid-template-rows: auto 1fr auto;
  height: 100vh;
  overflow: hidden;
}

/* Navbar fixa no topo */
.navbar {
  position: sticky;
  top: 0;
  z-index: 10;
}

/* Conteúdo que scrolla */
.content-scrollable {
  overflow-y: auto;
  padding: 1rem 0;
}

/* Footer sempre fixo no fim */
.footer {
  position: sticky;
  bottom: 0;
}
</style>
