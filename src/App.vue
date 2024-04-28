

<template>
  <div class="justify-content-center">
      <h1 class="m-3">RPG BANK</h1>
      <div>
        <h2>Bem vindo ao Cadeira Central!</h2>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-6 col-sm-12 mt-3">
            <button class="btn btn-primary">
              Calculadora
            </button>
          </div>
          <div class="col-6 col-sm-12 mt-3">
            <button class="btn btn-secondary">
              Conta
            </button>
          </div>
        </div>
      </div>
      <CalculadoraComponent />
    </div>
</template>

<script>
import CalculadoraComponent from './components/CalculadoraComponent.vue';

export default {
  name: 'App',
  components: {
    CalculadoraComponent

  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

