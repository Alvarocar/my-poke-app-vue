<template>
  <article class="card">
    <section class="card-header">
      <span class="card-title">Sorry</span>
    </section>
    <section class="card-number-error">
      <span>4</span>
      <div class="pokebola">
		    <div class="pokebola-botao"></div>
	    </div>
      <span>4</span>
    </section>
    <section class="card-body">
      <p>Maybe this page moved? Got deleted? Is hiding out in quarantine? 
        Never existed in the first place?</p>
      <p>Let's go <router-link :to="{ name: 'Home' }">home</router-link> and try from there.</p>
    </section>
  </article>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import PokemonSpinner from '@src/components/common/PokemonSpinner.vue'

export default defineComponent({
  name: 'NotFound',
  components: {
    PokemonSpinner
  }
})
</script>

<style scoped>
  .card {
    width: 20rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .card-title {
    color: #d55555;
    font-size: 2rem;
  }
  .card-number-error {
    display:flex;
    width: 100%;
    padding: 2rem;
    justify-content: space-around;
    align-items: center;
    font-size: 5rem;
  }

  .card-body {
    text-align: center;
    font-size: 1rem;
    font-weight: 900;
  }

  .pokebola {
    position: relative;
    width: 7.5rem;
    height: 7.5rem;
    background-color: #FFF;
    border: 5px solid #000;
    border-radius: 50%;
    box-shadow: inset -10px 10px 0 10px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    animation: gira 4s infinite;
    margin: 20px auto;
}
*, *:before, *:after {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
.pokebola:before, .pokebola:after {
    content: "";
    position: absolute;
}
.pokebola:before {
    background-color: #EF4036;
    width: 100%;
    height: 50%;
}
.pokebola:after {
    top: calc(50% - 10px);
    width: 100%;
    height: 20px;
    background-color: #000;
}
.pokebola-botao {
    width: 50px;
    height: 50px;
    background-color: #FFF;
    border: 10px solid #000;
    border-radius: 50%;
    position: absolute;
    top: calc(50% - 25px);
    left: calc(50% - 25px);
    z-index: 10;
}
.pokebola-botao:before {
    content: "";
    position: absolute;
    top: calc(50% - 10px);
    left: calc(50% - 10px);
    width: 20px;
    height: 20px;
    background-color: #FFF;
    border: 3px solid #000;
    border-radius: 50%;
    z-index: 10;
}

@keyframes gira {
    0% { transform: rotate(-45deg); }
    50% { transform: rotate(45deg); }
    100% { transform: rotate(-45deg); }
}
</style>
