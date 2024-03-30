<template>
    <div class="min-h-screen bg-toastlight-300 w-full">
        <div v-if="cartItems.length >= 1" class="h-screen pt-20">
            <h1 class="mb-10 text-2xl font-bold text-center lg:text-left lg:max-w-4xl mx-auto">Your cart items</h1>
            <div  class="mx-auto max-w-5xl px-6 md:flex md:space-x-6 xl:px-0">
                <div class="rounded-lg md:w-2/3">
                    <div v-for="item in cartItems" :key="item.id" class="grid grid-cols-4 border-2 border-toast-600 p-2">
                        <img src="@/assets/hoodie.png" alt="product-image" class="w-full rounded-lg sm:w-40"/>
                        <div>
                            <h2 class="text-2xl font-bold text-black my-3">{{ item.name }}</h2>
                            <span class="px-2 py-1 text-sm rounded-lg bg-hlc-200 text-toastlight-900 font-bold">XS</span>
                            <p class="text-lg font-bold text-black my-3 px-1">0.00 EUR</p>      
                        </div>
                        <div class="col-span-2 grid grid-rows-2">
                            <div class="text-right mt-3 mr-3">
                                <svg @click="removeFromCart(item)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-8 w-8 inline cursor-pointer duration-150 hover:text-red-500">
                                    <path fill-rule="evenodd" d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z" clip-rule="evenodd" />
                                </svg>
                            </div>
                            <div class="flex items-center justify-end">
                                <span @click="decrementQuantity(item)" class="cursor-pointer select-none text-4xl lg:text-xl font-bold py-1 px-3.5 duration-100 hover:bg-toastlight-200 rounded-lg mx-2"> - </span>
                                    <input class="h-8 w-8 text-center text-2xl lg:text-lg font-bold bg-toastlight-300 outline-none select-none" type="text" v-model="item.quantity" min="1" />
                                <span @click="incrementQuantity(item)" class="cursor-pointer select-none text-4xl lg:text-xl font-bold py-1 px-3 duration-100 hover:bg-toastlight-200 rounded-lg mx-2"> + </span>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Sub total -->
                <div class="mt-6 rounded-lg p-6 md:mt-0 md:w-1/3">
                    <div class="mb-2 flex justify-between">
                    <p class="text-black">Subtotal</p>
                    <p class="text-black">0.00 EUR</p>
                    </div>
                    <div class="flex justify-between">
                    <p class="text-black">VAT</p>
                    <p class="text-black">0.00 EUR</p>
                    </div>
                    <hr class="my-4 border-black" />
                    <div class="flex justify-between">
                    <p class="text-lg font-bold text-black">Total</p>
                    <div class="text-black">
                        <p class="mb-1 text-lg font-bold">0.00 EUR</p>
                        <p class="text-sm text-black">including VAT</p>
                    </div>
                    </div>
                    <!-- <button @click="createPaymentLink" class="mt-6 w-full rounded-md py-1.5 font-bold text-black border-toast-600 border-2 hover:bg-toast-600">Check out</button> -->
                    <button class="bg-black w-full text-toastlight-300 font-semibold libreFranklin px-5 py-3 my-6 mx-auto block text-2xl uppercase border-transparent hover:border-black border-2 hover:bg-transparent hover:text-black">Check out</button>
                </div>
            </div>
        </div>
        <div v-else class="w-full text-center pt-10">
            <h1 class="text-2xl font-serif text-center pt-20 font-medium tracking-wide">There is no item in your cart...</h1>
            <router-link 
                to="/#shop"
                class=""
            >
                <button class="bg-black text-hlc-100 font-semibold libreFranklin px-5 py-3 my-20 mx-auto block text-2xl uppercase border-transparent hover:border-black border-2 hover:bg-transparent hover:text-black">Explore Shop</button>
            </router-link>

            <div v-for="item in items" :key="item.id" class="m-5">
                <p>{{ item.name }}</p>
                <button @click="addToCart(item)">Add to cart</button> <br>
                <button @click="removeFromCart(item)">Remove from cart</button>
            </div>
        </div>
    </div>
</template>


<script>
import axios from 'axios';
import { mapMutations, mapGetters } from 'vuex'

export default {
    name: "cart",
    data() {
        return {
            items: [
                {
                    name: "Sweat",
                    id: "prod_OXuEqUSqxZz7b8",
                    quantity: 1
                },
                {
                    name: "Hoodie",
                    id: "prod_OXuCPv8YFE73Qm",
                    quantity: 2
                }
            ],
            errorMessage: '', // Add an error message property,
            resData: {}
        }
    },
    methods: {
        incrementQuantity(item) {
            item.quantity++;
        },
        decrementQuantity(item) {
            if (item.quantity > 1) {
                item.quantity--;
            }
        },
        async createPaymentLink() {
            try {
                // Replace with your actual API endpoint
                const response = await axios.post('https://n8n', {
                    items: this.items // cart items
                });

                if (response.data) {
                    // Redirect user to Stripe's payment page
                    window.location.href = response.data.url;
                } else {
                    // Handle any errors or missing payment link
                    this.errorMessage = 'Error: Bas response';
                }

            } catch (error) {
                // Handle errors in the API call
                console.error('API call error: ', error);
                this.errorMessage = 'Error: Bad request';
            }
        },
        ...mapMutations(['addToCart', 'removeFromCart'])
    },
    computed: {
        ...mapGetters(['cartItems'])
    },
    mounted() {
        //console.log(this.items)
    }
}
</script>
