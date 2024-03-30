<template>
    <div :class="{'text-hlcgray-900 bg-hlc-100': currentTheme.home, 'text-hlcgray-900 bg-toastlight-300': currentTheme.cart, 'text-hlcg-100 bg-hlc2-300': currentTheme.fav}"  class="min-h-screen relative">
      <div class="fixed w-full z-50 mb-6 lg:mb-0 lg:top-0">
      <nav class="flex h-16 w-full justify-between px-6 pt-10 max-w-6xl mx-auto">
        <!-- fav -->
        <div class="relative group hidden lg:block">
          <svg @click='switchView("/fav")' class="w-8 h-8 m-3 transform ease-out duration-200 group-hover:text-hlc-100 cursor-pointer relative z-30" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 36 36">
            <path fill="currentColor" d="M18 32.43a1 1 0 0 1-.61-.21C11.83 27.9 8 24.18 5.32 20.51C1.9 15.82 1.12 11.49 3 7.64c1.34-2.75 5.19-5 9.69-3.69A9.87 9.87 0 0 1 18 7.72a9.87 9.87 0 0 1 5.31-3.77c4.49-1.29 8.35.94 9.69 3.69c1.88 3.85 1.1 8.18-2.32 12.87c-2.68 3.67-6.51 7.39-12.07 11.71a1 1 0 0 1-.61.21ZM10.13 5.58A5.9 5.9 0 0 0 4.8 8.51c-1.55 3.18-.85 6.72 2.14 10.81A57.13 57.13 0 0 0 18 30.16a57.13 57.13 0 0 0 11.06-10.83c3-4.1 3.69-7.64 2.14-10.81c-1-2-4-3.59-7.34-2.65a8 8 0 0 0-4.94 4.2a1 1 0 0 1-1.85 0a7.93 7.93 0 0 0-4.94-4.2a7.31 7.31 0 0 0-2-.29Z" class="clr-i-outline clr-i-outline-path-1"/><path fill="none" d="M0 0h36v36H0z"/>
          </svg>
          <div :class="{'bg-hlc-100 group-hover:bg-hlc2-300': currentTheme.home, 'bg-toastlight-300 group-hover:bg-toastlight-300': currentTheme.cart, 'text-hlc2-300 group-hover:bg-hlc2-300': currentTheme.fav}" class="absolute w-14 h-14 top-0 rounded-full ease-in-out duration-400"></div>
        </div>
        <!-- home -->
        <div class="relative group mx-auto">
          <svg @click='switchView("/")' :class="{'text-toastlight-900 group-hover:text-toastlight-600': currentTheme.home, 'group-hover:text-toastlight-300': currentTheme.cart, 'group-hover:text-hlc2-300': currentTheme.fav}" class="w-16 h-16 relative z-30 fill-current  transform group-hover:scale-110 ease-out duration-200 cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="254.78" height="201.11" viewBox="0 0 254.78 201.11">
              <path d="m164.53.05c5.55-.18,10.63.66,15.7,1.91,7.47,1.83,14.67,4.38,21.52,7.85,5.9,3,11.76,6.12,17.46,9.49,6.61,3.91,13.09,8.06,19.52,12.28,4.53,2.98,8.93,6.19,12.7,10.13,1.14,1.2,2.1,2.62,2.92,4.06.95,1.68.32,3.57-1.65,4.42-1.95.84-4.04,1.43-6.13,1.83-2.95.56-5.96.89-8.95,1.24-2.03.24-4.08.33-6.12.54-2.32.24-4.66.4-6.95.84-3.69.7-7.4,1.43-11.01,2.44-4.31,1.21-8.25,3.23-10.86,7.07-1.96,2.87-2.63,6.03-2.12,9.56.83,5.76,3.37,10.77,6.27,15.66,3.18,5.38,7.01,10.31,10.93,15.16,2.46,3.04,5.11,5.94,7.78,8.81,3.45,3.71,6.97,7.35,10.51,10.97,2.9,2.97,5.09,6.28,5.93,10.46.77,3.82.2,7.49-.9,11.09-1.79,5.83-5.01,10.9-8.94,15.51-2.45,2.86-4.93,5.71-7.64,8.31-7.26,6.97-15.35,12.87-24.1,17.86-7.52,4.3-15.3,7.99-23.6,10.54-4.07,1.25-8.19,2.31-12.43,2.68-3.13.27-6.31.5-9.42.22-5.97-.53-11.17-2.82-14.88-7.83-1.78-2.4-1.34-4.94-.66-7.49,1.42-5.34,2.99-10.64,4.34-16,.78-3.09,1.28-6.26,1.84-9.4.54-2.95,1.06-5.91,1.47-8.88.29-2.07.39-4.17.53-6.26.12-1.98.3-3.97.24-5.95-.18-5.43-.5-10.86-2.01-16.12-1.4-4.91-5.62-9.2-11.36-10.06-4.83-.73-9.06.31-12.66,3.53-2.43,2.17-3.74,5.06-4.43,8.25-1.16,5.39-1.34,10.84-1.29,16.32.03,3.15-.09,6.3-.25,9.44-.17,3.28-.36,6.57-.73,9.83-.87,7.7-2.04,15.35-4.79,22.65-1.31,3.49-3.02,6.81-5.47,9.66-4.28,4.99-9.72,6.69-16.15,5.64-4.76-.78-8.89-3-12.91-5.47-4.69-2.87-8.91-6.37-12.84-10.17-3.69-3.56-7.12-7.4-10.54-11.23-4.83-5.4-9.1-11.25-13.05-17.32-2.66-4.08-5.21-8.23-6.35-13.05-.83-3.48-.85-6.99-.43-10.53.73-6.07,3.79-11.05,7.25-15.88,3.03-4.23,5.88-8.55,7.62-13.54,1.75-5.02,2.27-10.18,1.87-15.39-.41-5.28-2.01-10.28-4.68-14.94-2.47-4.31-5.5-8.15-9.19-11.47-3.46-3.12-7.41-5.57-11.34-8.06-5.35-3.38-10.7-6.8-15.79-10.55-3.32-2.44-6.41-5.33-7.84-9.44-.91-2.61-.39-4.94,1.52-7,2.68-2.88,6.16-4.39,9.78-5.43,3.8-1.09,7.7-1.82,11.59-2.56,6.5-1.23,13.07-1.56,19.68-1.45,2.74.05,5.48.11,8.22.18,2.52.07,5.05.08,7.56.25,4.14.28,8.27.65,12.41,1,2.65.23,5.33.31,7.95.77,4.82.83,9.63,1.79,14.4,2.88,3.32.76,6.6,1.82,9.35,3.91,1.31,1,2.41,2.32,3.4,3.66.82,1.1.6,2.33-.26,3.48-3.41,4.63-6.38,9.53-8.8,14.75-2.23,4.83-4.09,9.78-4.93,15.08-.87,5.5.71,10.29,3.9,14.66,4.57,6.27,11.01,9.73,18.28,11.74,4.78,1.32,9.74,1.57,14.68,1.29,2.8-.16,5.54-.68,7.87-2.51,2.65-2.08,3.98-4.9,4.82-8.05.75-2.79,1.05-5.62.98-8.5-.06-2.25.13-4.5-.03-6.74-.18-2.43-.6-4.85-.98-7.27-.46-2.88-.83-5.8-1.52-8.63-1.28-5.25-2.73-10.47-4.18-15.67-1.28-4.57-.99-8.98.82-13.37,1.48-3.59,3.36-6.95,6.05-9.71,2.6-2.67,5.68-4.73,9.24-6.08,4.09-1.55,8.28-2.2,12.3-1.94Z"/>
          </svg>
          <div :class="{'bg-hlc-100': currentTheme.home, 'bg-toastlight-300': currentTheme.cart, 'text-hlc2-300': currentTheme.fav}" class="absolute w-24 h-24 -top-4 -left-4 group-hover:bg-hlc-100 rounded-full ease-in-out duration-400"></div>
        </div>
        <!-- cart -->
        <div class="relative group hidden lg:block">
          <svg @click='switchView("/cart")'  class="w-8 h-8 m-3 transform ease-out duration-200 group-hover:text-hlc-100 cursor-pointer relative z-30" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 36 36">
            <path fill="currentColor" d="M25 12V9.05a7 7 0 1 0-14 0v7a1 1 0 0 0 2 0V14h8v-2h-8V9.05a5 5 0 1 1 10 0V16a1 1 0 1 0 2 0v-2h5v18H6V14h3v-2H4v20.09A1.91 1.91 0 0 0 5.91 34h24.18A1.91 1.91 0 0 0 32 32.09V12Z" class="clr-i-outline clr-i-outline-path-1"/><path fill="none" d="M0 0h36v36H0z"/>
          </svg>
          <div :class="{'bg-hlc-100 group-hover:bg-toastlight-300': currentTheme.home, 'bg-toastlight-300 group-hover:bg-toastlight-300': currentTheme.cart, 'text-hlc2-300 group-hover:bg-hlc2-300': currentTheme.fav}" class="absolute w-14 h-14 top-0 rounded-full ease-in-out duration-400"></div>
          <span v-if="cartItemCount > 0" class="absolute top-0 right-0 pr-px font-mono bg-black text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">{{ cartItemCount }}</span>
        </div>
      </nav>
      </div>
      <!-- responsive sm md -->
      <div class="fixed w-full z-50 lg:hidden bottom-0 ">
      <nav class="flex w-full justify-between px-6 max-w-6xl mx-auto mb-8">
        <!-- fav -->
        <div class="relative group">
          <svg @click='switchView("/fav")' class="w-8 h-8 m-3 transform ease-out duration-200 text-hlc-100 cursor-pointer relative z-30" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 36 36">
            <path fill="currentColor" d="M18 32.43a1 1 0 0 1-.61-.21C11.83 27.9 8 24.18 5.32 20.51C1.9 15.82 1.12 11.49 3 7.64c1.34-2.75 5.19-5 9.69-3.69A9.87 9.87 0 0 1 18 7.72a9.87 9.87 0 0 1 5.31-3.77c4.49-1.29 8.35.94 9.69 3.69c1.88 3.85 1.1 8.18-2.32 12.87c-2.68 3.67-6.51 7.39-12.07 11.71a1 1 0 0 1-.61.21ZM10.13 5.58A5.9 5.9 0 0 0 4.8 8.51c-1.55 3.18-.85 6.72 2.14 10.81A57.13 57.13 0 0 0 18 30.16a57.13 57.13 0 0 0 11.06-10.83c3-4.1 3.69-7.64 2.14-10.81c-1-2-4-3.59-7.34-2.65a8 8 0 0 0-4.94 4.2a1 1 0 0 1-1.85 0a7.93 7.93 0 0 0-4.94-4.2a7.31 7.31 0 0 0-2-.29Z" class="clr-i-outline clr-i-outline-path-1"/><path fill="none" d="M0 0h36v36H0z"/>
          </svg>
          <div class="absolute w-14 h-14 top-0 rounded-full ease-in-out duration-400 bg-hlc2-300"></div>
        </div>
        <!-- cart -->
        <div class="relative group">
          <svg @click='switchView("/cart")'  class="w-8 h-8 m-3 transform ease-out duration-200 text-hlc-100 cursor-pointer relative z-30" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 36 36">
            <path fill="currentColor" d="M25 12V9.05a7 7 0 1 0-14 0v7a1 1 0 0 0 2 0V14h8v-2h-8V9.05a5 5 0 1 1 10 0V16a1 1 0 1 0 2 0v-2h5v18H6V14h3v-2H4v20.09A1.91 1.91 0 0 0 5.91 34h24.18A1.91 1.91 0 0 0 32 32.09V12Z" class="clr-i-outline clr-i-outline-path-1"/><path fill="none" d="M0 0h36v36H0z"/>
          </svg>
          <div class="absolute w-14 h-14 top-0 rounded-full ease-in-out duration-400 bg-toastlight-300"></div>
        </div>
      </nav>
      </div>
    <div class="max-w-3xl text-center mx-auto pt-36 space-x-10 text-base libreFranklin">
      <!-- <a class="hover:underline underline-offset-8 cursor-pointer relative z-30 uppercase" href="">shop</a> -->
      <router-link to="/the-club-newspaper" class="hover:underline underline-offset-8 cursor-pointer relative z-30 uppercase">newspaper</router-link>
      <router-link to="/the-lobby" class="hover:underline underline-offset-8 cursor-pointer relative z-30 uppercase">the lobby</router-link>
    </div>
    <router-view></router-view>
    <div class="h-96 mt-52"></div>
      <div class="h-96 md:h-48"></div>
      <div class="w-full bg-hlc-200 absolute bottom-0 z-40 text-hlcgray-900">
        <div class="custom-shape-divider-top-1690946430">
          <svg :class="{'text-hlc-100': currentTheme.home, 'text-toastlight-300': currentTheme.cart, 'text-hlc2-300': currentTheme.fav}" class="fill-current" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none"> 
              <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
          </svg>
        </div>
        <div class="grid grid-cols-1 p-5 lg:p-0 lg:grid-cols-3 max-w-6xl mx-auto mt-24 font-serif">
          <div class="my-3">
            <img class="mx-auto w-24 mt-3 mb-16" src="@/assets/logo.png" alt="">
            <h1 class="text-2xl mt-4">Join The Club</h1>
            <div>
              <div class="mt-2 w-full">
                <label for="UserEmail" class="sr-only"> Email </label>
                <div class="sm:flex sm:items-center sm:gap-4">
                  <input 
                  type="email" 
                  v-model="newsletter.email" 
                  placeholder="example@email.com" 
                  class=" border-none outline-none  placeholder-slate-800 bg-hlc-200 focus:border-transparent focus:ring-transparent font-serif text-black sm:text-sm"
                  />
                  <button @click="subscribe" class="mt-1 w-full rounded bg-toastlight-900 px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition-none hover:bg-toastlight-600 sm:mt-0 sm:w-auto sm:shrink-0">
                    Sign Up
                  </button>
                </div>
                <p class="font-bold mt-2" v-if="newsletter.status">{{ newsletter.message }}</p>
              </div>
            </div>
          </div>
          <div class="my-3">
            <h1 class="text-2xl mb-4">About Us</h1>
            <router-link to="/the-club-story" class="text-base text-hlcgray-600 ease-out duration-200 hover:text-hlc-700 hover:underline underline-offset-4 cursor-pointer relative z-30 ">The Club Story</router-link>
          </div>
          <div class="my-3">
            <h1 class="text-2xl mb-4">Assistance</h1>
            <router-link to="/" class="text-base text-hlcgray-600 ease-out duration-200 cursor-default underline-offset-4 relative z-30 block mb-3 opacity-80">Contact</router-link>
            <router-link to="/termes-of-sale" class="text-base text-hlcgray-600 ease-out duration-200 hover:text-hlc-700 hover:underline underline-offset-4 cursor-pointer relative z-30" >Terms of Sale</router-link>
          </div>
        </div>
        <div class="w-full text-center pt-3 pb-6">
          <p class="text-center text-xs md:text-base">© 2023, <a class="text-hlcgray-600 ease-out duration-200 hover:text-hlc-700 hover:underline underline-offset-4 cursor-pointer relative z-30">highloversclub</a>. Powered by <a class="font-bold text-hlcgray-600 ease-out duration-200 hover:text-hlc-700 hover:underline underline-offset-4 cursor-pointer relative z-30">Stripe</a> & <a class="font-bold text-hlcgray-600 ease-out duration-200 hover:text-hlc-700 hover:underline underline-offset-4 cursor-pointer relative z-30">Shopify</a></p>
        </div>
      </div>
    </div>
    
</template>

<script>
import axios from 'axios';

export default {
  name: "app",
  components: {},
  data() {
    return {
      // data
      newsletter: {
        email: '',
        status: false,
        message: 'Thank you for subscribing !'
      }
    };
  },
  computed: {
    currentTheme() {
      const path = this.$route.path;
      return {
        home: path !== '/fav' && path !== '/cart',
        fav: path === '/fav',
        cart: path === '/cart'
      };
    },
    cartItemCount() {
        return this.$store.state.cart.length;
    }
  },
  methods: {
    switchView(view) {
      // Change router view
      this.$router.push(view);
    },
    subscribe() {
      // Get the current date and format it
      let currentDate = new Date();
      let formattedDate = currentDate.toISOString();

      // Subscribe to the newsletter
      // Send the email and the current date to the backend
      axios.post("https://n8n", {
        email: this.newsletter.email,
        date: formattedDate
      })
      .then(response => {
        this.newsletter.status = true;
      })
      .catch(error => {
        console.error(error);
      });

      // Clear the email field
      this.newsletter.email = '';
    }
  }
}
</script>

<style>
@import "transition-style";
@import url('https://fonts.googleapis.com/css2?family=Libre+Franklin&display=swap');

.libreFranklin {
  font-family: 'Libre Franklin', sans-serif;
}

.borderCustom {
  border-bottom: 1px solid;
}
.borderCustom2 {
  border: 3px solid;
}


.wave-shape-divider {
    top: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
}

.wave-shape-divider svg {
    position: relative;
    display: block;
    width: calc(127% + 1.3px);
    height: 76px;
}
</style>
