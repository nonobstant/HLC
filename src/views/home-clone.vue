<template>
  <div transition-style="in:circle:center" class="w-full mx-auto bg-hlc-100 font-sans text-black">
    <!-- <Carousel :autoplay="10000" :wrap-around="true">
      <Slide v-for="slide in 3" :key="slide">
        <div class="w-full customHV bg-hlc2-300 mt-5 lg:w-11/12 mx-auto relative"></div>
      </Slide>

      <template #addons>
        <Pagination />
      </template>
    </Carousel> -->
    <div id="shop" class="w-full mt-16">
      <h1 class="text-center text-4xl font-serif italic">
        <img class="w-72 mx-auto mb-3" src="@/assets/icetruck.png" alt=""><br>
        <span class="">Drop Summer Mood</span><br>
        <span class="text-lg italic">Bringing some summer vibes in this cold winter !</span>
      </h1>
      <div class="grid grid-cols-1 lg:grid-cols-3 mx-auto gap-4 max-w-5xl mt-6 p-6 lg:p-0">
        <div @click="showModal(products.find(product => product.id === '4'))" class="p-6 hover:bg-hlc-50 border-2 border-hlc-50 hover:bg-transparent cursor-crosshair">
          <img class="transform hover:scale-125" src="@/assets/hat.png" alt="">
        </div>
        <div @click="showModal(products.find(product => product.id === '6'))" class="p-6 hover:bg-hlc-50 border-2 border-hlc-50 hover:bg-transparent cursor-crosshair">
          <img class="transform hover:scale-125" src="@/assets/tshirt.png" alt="">
        </div>
        <div @click="showModal(products.find(product => product.id === '7'))" class="p-6 hover:bg-hlc-50 border-2 border-hlc-50 hover:bg-transparent cursor-crosshair">
          <img class="transform hover:scale-125" src="@/assets/sweatervest.png" alt="">
        </div>
      </div>
    </div>
    <div class="w-full mt-16">
      <h1 class="text-center font-serif text-4xl mt-3">The "Hoodie du Club"</h1>
      <p class="text-lg text-center font-serif italic">Our popular warm hoodie !</p>
    </div>
    <div class="">
      <div @click="showModal(products.find(product => product.id === '2'))" class="grid grid-cols-1 lg:grid-cols-2 mx-auto gap-4 max-w-5xl mt-6 p-6 lg:p-0">
        <div class="p-6 hover:bg-hlc-50 border-2 border-hlc-50 hover:bg-transparent cursor-crosshair">
          <img class="transform hover:scale-125" src="@/assets/hoodie.png" alt="">
        </div>
        <div @click="showModal(products.find(product => product.id === '1'))" class="p-6 hover:bg-hlc-50 border-2 border-hlc-50 hover:bg-transparent cursor-crosshair">
          <img class="transform hover:scale-125" src="@/assets/sweater.png" alt="">
        </div>
      </div>
    </div>
    <product :product="selectedProduct" :showModal="showProductModal" @update:showModal="showProductModal = $event"></product>
    <div class="mt-32">
      <h1 class="text-center font-serif text-4xl">The Club Story</h1>
      <p class="text-center text-lg libreFranklin mt-3 px-3">Discover the history of the High Lovers Club.</p>
    </div>
    <router-link 
        to="/the-club-story"
        class=""
      >
        <button class="bg-black text-hlc-100 font-semibold libreFranklin px-5 py-3 my-12 mx-auto block text-2xl uppercase border-transparent hover:border-black border-2 hover:bg-transparent hover:text-black">Read More</button>
      </router-link>
  </div>
</template>

<script>
import axios from 'axios'

import Product from '@/components/product.vue'

export default {
  name: "clone",
  components: {
    Product
  },
  data() {
    return {
      showProductModal: false,
      selectedProduct: null,
      products: [
      {
        name: "HL1SWE",
        id: "1",
        size: "ONE SIZE",
        qty: 1
      },
      {
        name: "HL1HOO",
        id: "2",
        size: "ONE SIZE",
        qty: 1
      },
      {
        name: "SM1CAPW",
        id: "3",
        size: "ONE SIZE",
        qty: 1
      },
      {
        name: "SM1CAPB",
        id: "4",
        size: "ONE SIZE",
        qty: 1
      },
      {
        name: "SM1CAPP",
        id: "5",
        size: "ONE SIZE",
        qty: 1
      },
      {
        name: "SM1ICET",
        id: "6",
        size: "M",
        qty: 1
      },
      {
        name: "SM1SWEC",
        id: "7",
        size: "M",
        qty: 1
      },
      {
        name: "SM1SWEV",
        id: "8",
        size: "M",
        qty: 1
      },{
        name: "SM1SWES",
        id: "9",
        size: "M",
        qty: 1
      }
    ]
    }
  },
  methods : {
    showModal(product) {
      axios.get(`https://n8n?id=${product.id}&size=${product.size}&qty=${product.qty}`)
        .then(response => {
          this.selectedProduct = response.data;
          this.showProductModal = true;
        })
        .catch(error => {
          console.error(error);
        });
    },
    hideModal() {
      this.showProductModal = false;
    },
  }
}
</script>

<style>
.customHV {
  height: 60vh
}

</style>
