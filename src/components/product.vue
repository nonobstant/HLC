<template>
  <div v-if="showModal" class="fixed inset-0 overflow-y-auto w-full z-50">
    <div class="relative top-0 lg:top-48 mx-auto px-5 w-full lg:w-5/12 border-2 border-hlc-50 bg-hlc-100 py-32 lg:py-5">
      <div class="">
        <div class="grid cols-1 lg:grid-cols-2">
          <!-- left -->
          <div class="relative">
            <div @click="nextSlide" class="cursor-crosshair" v-for="(image, index) in product.images" :key="index">
              <!-- <div v-if="currentSlide == index" class=" w-full h-64 bg-contain bg-no-repeat bg-center" :style="{ backgroundImage: `url(${image})` }"></div> -->
              <img v-if="currentSlide == index" :src="image" class="h-full mx-auto max-h-96" alt="">
            </div>
            <div class="absolute bottom-0 text-center w-full pt-2 bg-hlc-100">
                <span v-for="(image, index) in product.images" :key="index" @click="goToSlide(index)" :class="[index === currentSlide ? 'bg-black' : 'bg-toast-700']" class="w-3 h-3 inline-block rounded-full m-2 hover:bg-black cursor-pointer"></span>
            </div>
          </div>
          <!-- right -->
          <div class="mt-1">
              <div class="flex justify-between items-center pb-3">
                  <p class="text-2xl font-semibold font-serif"></p>
                  <svg class="cursor-pointer " @click="closeModal" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 21 21"><path fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m15.5 15.5l-10-10zm0-10l-10 10"/>
                  </svg>
              </div>
              <h1 class="text-2xl font-bold m-3">{{ product.title }}</h1>
              <!-- <p class="font-serif text-lg m-3">Description</p> -->
              
              <span class="w-5 h-5 inline-block rounded-full bg-black m-4 border-transparent border-4 hover:border-white/40 cursor-pointer"></span> <br>
              <div class="grid grid-cols-6">
                <button v-if="product.sizes.length > 1" v-for="size in product.sizes" class="px-4 py-2 block text-lg bg-transparent rounded-lg text-toastlight-800 hover:bg-hlc-200 hover:text-toastlight-900 font-bold">{{ size }}</button>
                <button v-else v-for="size in product.sizes" class="px-4 py-2 block col-span-2 text-lg bg-transparent rounded-lg text-toastlight-800 hover:bg-hlc-200 hover:text-toastlight-900 font-bold">{{ size }}</button>
              </div>
              <p class="font-serif hover:underline cursor-pointer text-hlc-900 pt-2 ml-3 font-semibold">Description of product</p>
              <p class="text-2xl font-bold m-3 font-mono">{{ product.price }} EUR</p>
              <button class="px-4 font-serif font-bold text-base bg-transparent p-3 rounded-lg text-toastlight-800 hover:bg-hlc2-100 hover:text-toastlight-900" @click="toggleFavorite(product)">
                {{ isFavorite ? '💔 Remove from Favorite' : '❤️ Add to Favorite' }}
              </button>
              <div v-if="product.inventory != 0" class="flex justify-end pt-2 font-serif font-bold">
                <button class="px-4 text-lg bg-transparent p-3 rounded-lg text-toastlight-800 hover:bg-hlc-200 hover:text-toastlight-900 font-bold mr-2" @click="addToCart">+ Add to Cart</button>
                <button class="bg-black text-hlc-100 font-semibold libreFranklin px-5 py-3 block text-2xl uppercase border-transparent hover:border-black border-2 hover:bg-transparent hover:text-black">Buy Now</button>
              </div>
              <div v-else>
                <p class="bg-transparent text-black font-semibold font-serif px-5 py-3 block text-2xl uppercase border-2 border-black text-center">Out of stock</p>
              </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapMutations } from 'vuex'
//import axios from 'axios'

export default {
    name: "product",
    props: ['showModal', 'product'],
    data() {
      return {
        currentSlide: 0,
      }
    },
    computed: {
      ...mapGetters(['favoriteItems']),
      isFavorite() {
        return this.favoriteItems.some(product => product.selected.id === this.product.selected.id)
      }
    },
    methods: {
      // Carousel
      nextSlide() {
      this.currentSlide = (this.currentSlide + 1) % this.product.images.length;
      },
      prevSlide() {
        this.currentSlide = (this.currentSlide + this.product.images.length - 1) % this.product.images.length;
      },
      goToSlide(index) {
        this.currentSlide = index;
      },
      // Modal
      closeModal() {
      this.$emit('update:showModal', false);
      this.currentSlide = 0;
      },
      addToCart() {
      // Logic to add the product to the cart
      this.closeModal();
      },
      ...mapMutations(['addToFavorite', 'removeFromFavorite']),
      toggleFavorite(item) {
        if (this.isFavorite) {
          this.removeFromFavorite(item)
        } else {
          this.addToFavorite(item)
        }
      }
    },
}
</script>
<style>
.heart-svg:hover path {
  fill: black; 
  stroke: black; 
  stroke-width: 2;
}
</style>