<template>
    <div id="navbar" class="d-flex justify-content-between align-items-center">
        <div class="text-nowrap">
            <router-link id="logo-url" to="/">RPG BANK</router-link>
        </div>
        <div class="align-self-end">
            <router-link class="m-3" to="/calculator">Calculator</router-link>
            <router-link class="m-3" to="/">Account</router-link>
        </div>
    </div>
    
</template>

<script>
 export default {
    name: 'NavbarComponent',
}
</script>

<style scoped>
  #navbar {
    background-color: #222;
    border-bottom: 4px solid #111;
    padding: 15px 50px;
  }

  #navbar a {
    color: #fcba03;
    text-decoration: none;
    transition: .5s;
  }

  #navbar a:hover {
    color: #FFF;
  }
</style>