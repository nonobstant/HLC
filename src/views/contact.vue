<template>
    <div  class=" max-w-5xl mx-auto bg-hlc-100 w-full">
        <h1 class="pt-20 font-medium text-6xl font-serif">Contact</h1>
        <form class="">
            <div class="flex flex-col">
                <div class="flex flex-row gap-4">
                <input type="text" class="mt-20 bg-hlc-100 border-4 border-gray-600 text-gray-900 text-sm block w-1/2 p-2.5" placeholder="name">
                
                <input type="text" class=" mt-20 bg-hlc-100 border-4 border-gray-600 text-gray-900 text-sm block w-1/2 p-2.5" placeholder="email">
            </div>
                <input type="text" class="mt-8  bg-hlc-100 border-4 border-gray-600 text-gray-900 text-sm block w-full p-2.5" placeholder="phone number">

                <textarea class="mt-8  bg-hlc-100 border-4 border-gray-600 text-gray-900 text-sm block w-full p-2.5" placeholder="message"></textarea>
                <button class="mt-10 bg-black  text-gray-50 text-sm block w-1/4 p-2.5">Submit</button>
            </div>
   
      </form>
    </div>

</template>
<script>
export default {
    name: "Contact"
}
</script>