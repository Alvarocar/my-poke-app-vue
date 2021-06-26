<template>
  <section class="card">
    <figure class="card-img-section">
      <img :src="srcImage" :alt="name" />
      <figcaption class="card-info-pokemon">
        <span class="card-pokemon-name">{{name}}</span>
        <span class="card-pokemon-exp">{{exp}} exp</span>
      </figcaption>
    </figure>
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
    width: 15rem;
    height: 15rem;
    border-radius: 10px;
    box-shadow: 5px 2px 5px 0px grey;
    text-align: center;
    padding-top: 1rem;
  }
  .card-img-section {
    margin: 0;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }

  .card-info-pokemon {
    font-family: monospace;
    color: white;
    background-color: #ff0000;
    align-self: stretch;
    padding: 1rem .8rem;
  }
  .card-img-section > img {
    width: 8rem;
    height: auto;
    /* background-color: white; */
    border-radius: 50%;
  }

  .card-pokemon-name {
    font-size: 2rem;
    display: block;
  }

  .card-pokemon-exp {
    opacity: 0.6;
  }

</style>
