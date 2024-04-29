

<template>

  <div>
      <NavbarComponent />
      <div>
        <router-view/>
      </div>
  </div>
</template>

<script>
import NavbarComponent from './components/Navbar.vue'

export default {
  name: 'App',
  components: {
    NavbarComponent
  }
}
</script>

<style>

</style>

