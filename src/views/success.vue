<template>
    <div  class="bg-hlc-100 w-full mx-auto text-center ">
        <div class="container mx-auto p-8">
            <div v-if="paymentData" class="py-10 px-4 max-w-2xl mx-auto">
                <div class="text-center">
                    <h1 class="text-xl font-bold">Payment Success</h1>
                    <p>Your payment details</p>
                </div>

                <div class="payment-details mt-8">
                    <div class="card border-toast-800 border-dashed border-2 p-4">
                        <p class="pb-3">Transaction ID: <span class="bg-toast-600 px-2 py-1 rounded-3xl text-white text-sm">{{ paymentData.id }}</span></p>
                        <p>Amount: <span class="font-bold">{{ paymentData.amount_total / 100 }} {{ paymentData.currency.toUpperCase() }}</span></p>
                        <p>Payment Status: {{ paymentData.payment_status }}</p>
                        <p>Customer Name: {{ paymentData.customer_details.name }}</p>
                        <p>Customer Email: {{ paymentData.customer_details.email }}</p>
                        <p>Date: {{ new Date(paymentData.created * 1000).toLocaleDateString() }}</p><br>
                        <button class="bg-black text-hlc-100 font-semibold libreFranklin px-5 py-3 my-3 mx-auto block text-lg uppercase border-transparent hover:border-black border-2 hover:bg-transparent hover:text-black">Contact Support</button>
                    </div>
                </div>
            </div>
            <div v-else class="py-16 px-4 max-w-3xl mx-auto">
                <p class="text-2xl font-bold">{{ errorMessage }}</p>
                <input class="mt-5 bg-toast-700 px-3 py-2 rounded-lg text-white" v-model="sessionId" type="text" placeholder="session_id"> <br>
                <button @click="fetchPaymentDetails(sessionId)" class="mt-3 px-3 py-2 bg-black text-white libreFranklin text-xl">Get payment infos</button>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';

export default {
    name: "success",
    data() {
        return {
            sessionId: null,
            paymentData: null,
            errorMessage: "No payment found !"
        }
    },
    methods: {
        getSessionIdFromUrl() {
            const hash = window.location.hash;
            const url = new URL('http://dummy.com' + hash.substring(hash.indexOf('?')));
            const sessionId = url.searchParams.get('session_id');

            if (sessionId) {
            this.fetchPaymentDetails(sessionId);
            }
        },
        // Method to fetch payment details
        async fetchPaymentDetails(sessionId) {
            try {
                const response = await axios.get(`https://n8n?session_id=${sessionId}`);
                this.paymentData = response.data;
            } catch (error) {
                console.error('Error fetching payment details:', error);
            }
        }
        // clear cart in store
    },
    created() {
        this.getSessionIdFromUrl();
    }
}
</script>