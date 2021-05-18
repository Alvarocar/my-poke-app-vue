<template>
  <section class="card">
    <figure class="card-img-section">
      <img :src="srcImage" :alt="name">
      <figcaption>
        <span class="card-pokemon-name">{{name}}</span>
        <span class="card-pokemon-exp">{{exp}} exp</span>
      </figcaption>
    </figure>
    <hr/>
    <footer class="card-footer">
      <button class="card-button">Details</button>
    </footer>
  </section>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'PokemonCard',
  props: { 
    name: {
      type: String,
      required: true
    },
    srcImage: {
      type: String,
      required: true
    },
    exp: {
      type: Number,
      required: true
    }
  }
})
</script>

<style scoped>
  .card {
    background-color: #f5f7ea;
    width: 20rem;
    height: 25rem;
    border-radius: 10px;
    box-shadow: 5px 2px 5px 0px grey;
  }

   .card-img-section {
    margin-block-start: 0;
    margin-block-end: 0;
    margin-inline-start: 0;
    margin-inline-end: 0;
    padding-top: 2rem;
    border-radius: 10px;
    height: 6rem;
    margin-bottom: 13rem;
    background-color: var(--color-red-card)
  }

  .card-img-section > img {
    width: 12rem;
    height: 12rem;
    background-color: white;
    border-radius: 50%;
  }

  .card-pokemon-name {
    font-family: pokemon;
    font-size: 2rem;
    display: block;
  }

  .card-pokemon-exp {
    opacity: 0.6;
  }
  
  .card-button {
    padding: 0.2rem 0.5rem;
    font-family: pokemon;
    width: 8rem;
    border: none;
    cursor: pointer;
    border-radius: 5px;
    background-color: #FFDE00;
    transition: background-color 0.5s;
  }

  .card-button:hover {
    background-color: #d4c033;
  }

  .card-footer {
    padding: 0.5rem 2rem;
  }
</style>
