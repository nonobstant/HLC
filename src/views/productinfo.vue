<template>
    <div class="container mx-auto p-4 bg-hlc-100">
        <div class="flex flex-wrap">
            <div class="w-full md:w-1/2">
                <img src="@/assets/sweater.png" alt="Product Image" class="w-full">
            </div>
            <div class="w-full md:w-1/2">
                <h1 class="text-2xl font-bold mb-2">Product Name</h1>
                <p class="text-gray-600 mb-4">Product Description</p>
                <div class="flex items-center mb-4">
                    <span class="text-lg font-bold mr-2">00.00$</span>
                    <span class="text-gray-600">In Stock</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ProductInfo',
}
</script>


