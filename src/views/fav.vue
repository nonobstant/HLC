<template>
    <div  class="bg-hlc2-300 w-full">
      <div v-if="favoriteItems.length >= 1" class="pt-20">
        <h1 class="mb-10 text-2xl font-bold text-center mx-auto">Your favorite items</h1>
        <div  class="mx-auto max-w-3xl px-6 md:flex md:space-x-6 xl:px-0">
          <div class="mx-auto">
            <div v-for="product in favoriteItems" :key="product.selected.id" class="grid grid-cols-2 lg:grid-cols-4 border-0 border-rose-200 p-2 mb-3">
                <img :src="product.images[0]" alt="product-image" class="w-full rounded-3xl sm:w-40"/>
                <div class="ml-4 lg:ml-0">
                    <h2 class="text-base lg:text-lg font-bold text-black my-3">{{ product.title }}</h2>
                    <span class="px-2 py-1 text-xs lg:text-sm rounded-lg bg-hlc-200 text-toastlight-900 font-bold">{{ product.selected.size }}</span>
                    <!-- <p class="text-base lg:text-lg font-bold text-black my-3 px-1">{{ product.price }} EUR</p>       -->
                </div>
                <div class="col-span-2 grid grid-rows-2">
                    <div class="text-right mt-3 mr-3">
                        <svg @click="removeFavorite(product)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="heart-svg h-8 w-8 inline cursor-pointer">
                          <path fill="currentColor" d="m12 21l-1.45-1.3q-2.525-2.275-4.175-3.925T3.75 12.812Q2.775 11.5 2.388 10.4T2 8.15Q2 5.8 3.575 4.225T7.5 2.65q1.3 0 2.475.55T12 4.75q.85-1 2.025-1.55t2.475-.55q2.35 0 3.925 1.575T22 8.15q0 1.15-.387 2.25t-1.363 2.412q-.975 1.313-2.625 2.963T13.45 19.7z"/>
                        </svg>
                    </div>
                    <div class="flex items-center justify-end">
                      <button class="px-4 text-lg bg-transparent p-3 rounded-lg text-toastlight-800 hover:bg-hlc-200 hover:text-toastlight-900 font-bold mr-2" @click="addToCart">+ Add to Cart</button>
                    </div>
                </div>
            </div>
          </div>
        </div>
        <router-link 
         to="/#shop"
         class=""
         >
         <button class="bg-black text-hlc2-300 font-semibold libreFranklin px-5 py-3 my-20 mx-auto block text-2xl uppercase border-transparent hover:border-black border-2 hover:bg-transparent hover:text-black">Explore Shop</button>
        </router-link>
              

      </div>
      <div v-else class="w-full text-center pt-10">
            <h1 class="text-2xl font-serif text-center pt-20 font-medium tracking-wide">There is no item in your favorites...</h1>
            <router-link 
                to="/#shop"
                class=""
            >
                <button class="bg-black text-hlc-100 font-semibold libreFranklin px-5 py-3 my-20 mx-auto block text-2xl uppercase border-transparent hover:border-black border-2 hover:bg-transparent hover:text-black">Explore Shop</button>
            </router-link>

            <div v-for="item in items" :key="item.id" class="m-5">
                <p>{{ item.name }}</p>
                <button @click="addToFav(item)">Add to your favorites</button> <br>
                <button @click="removeFromFav(item)">Remove from your favorites</button>
            </div>
        </div>
    </div>
    
</template>


<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
    name: "fav",
    data() {
        return {
        }
    },
    methods: {
    ...mapMutations(['addToFavorite', 'removeFromFavorite']),
      addToFav(product) {
        this.addToFavorite(product)
      },
      removeFavorite(product) {
        this.removeFromFavorite(product)
      } 
    },
     mounted() {
        
    },
    computed: {
    ...mapGetters(['favoriteItems'])
    }
}
</script>




<style>
.bgfav {
    height: 75vh;
}
@keyframes swoopy-left {
  from {
    clip-path: var(--circle-top-left-out);
  }
  to {
    clip-path: var(--circle-bottom-right-in);
  }
}

.heart-svg:hover path {
  fill: none; 
  stroke: black; 
  stroke-width: 2; 
}

[transition-style="in:custom:swoopy-left"] {
  --transition__duration: 3s;
  animation-name: swoopy-left;
}
</style>