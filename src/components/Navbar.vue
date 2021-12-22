<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <router-link to="/" class="navbar-item"><img src="@/assets/images/dana_logo.png" alt="dana" /></router-link>

      <button
        :class="['navbar-burger', isActive ? 'is-active' : '']"
        @click="handleClickBurger"
        aria-label="menu"
        aria-expanded="false"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </button>

      <div :class="['navbar-dropdown', isActive ? 'is-active' : '']">
        <router-link to="/about" class="navbar-item" @click.native="handleClickBurger">About</router-link>
        <router-link to="/contact" class="navbar-item" @click.native="handleClickBurger">Contact Us</router-link>
      </div>

      <div v-show="isActive" role="presentation" class="overlay" @click="handleClickBurger" />
    </div>

    <div class="navbar-menu">
      <div class="navbar-end">
        <router-link to="/about" class="navbar-item">About</router-link>
        <router-link to="/contact" class="navbar-item">Contact Us</router-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      isActive: false
    }
  },
  methods: {
    handleClickBurger() {
      this.isActive = !this.isActive
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import '../assets/scss/base';

.navbar {
  padding: 0 2rem;
  box-shadow: 0px 6px 8px rgba(68, 64, 64, 0.2);
  height: 3.5rem;
  position: fixed;
  width: 100%;

  .navbar-brand {
    min-height: 3.5rem;

    .navbar-item img {
      max-height: 2rem;
    }

    .navbar-burger {
    height: 3.5rem;
    }

    .navbar-dropdown {
      position: absolute;
      top: 3.5rem;
      right: 0;
      width: 100%;
      background: #FFFFFF;
      box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
      visibility: hidden;
      opacity: 0;
      transition: all 0.25s linear;

      &.is-active {
        visibility: visible;
        opacity: 1;
      }
    }
    
    .overlay {
      position: fixed;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      z-index: -1;
    }
  }

  .navbar-item:hover {
    color: $primary_color;
  }
}

@media screen and (max-width: 1023px) {
  .navbar {
    padding: 0px;
  }
}
</style>
