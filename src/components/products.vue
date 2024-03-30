<template>
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mx-auto max-w-5xl">
    <div class="mt-8" v-for="(product, pIndex) in listedProducts" :key="product.id">
      <div class="group cursor-pointer border-transparent border-2 hover:border-black">
        <div
          class="mx-auto text-center px-10 pb-10 pt-3"
          @mouseover="setHoveredProductImage(pIndex, 1)"
          @mouseleave="setHoveredProductImage(pIndex, 0)"
        >
          <div class="z-20">
            <img
              :src="product.images[product.hoveredImageIndex]"
              class=""
              alt="product image"
            />
          </div>

          <h1 class="text-left text-lg libreFranklin">{{ product.title }}</h1>
          <a
            class="block uppercase w-full border-transparent border-2 p-3 text-lg mt-6 bg-black text-hlc-100 font-bold group-hover:bg-transparent group-hover:text-black group-hover:border-black"
          >
            Choose Options
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Client from 'shopify-buy';

export default {
  name: "products",
  data() {
    return {
      products: [],
      listedProducts: [],
    };
  },
  methods: {
    setHoveredProductImage(productIndex, imageIndex) {
      this.listedProducts[productIndex].hoveredImageIndex = imageIndex;
    },
  },
  mounted() {
    // initialize shopify buy
    const client = Client.buildClient({
      domain: '',
      storefrontAccessToken: ''
    });
    // graphql query product
    client.product.fetchAll().then((products) => {
      // map product data
      this.products = products.map((product) => {
        // get product image src [temp lock]
        const imageSrc = [];
        product.images.forEach((element) => {
          imageSrc.push(element.src);
        });

        return {
          id: product.id,
          title: product.title,
          handle: product.handle,
          description: product.description,
          images: imageSrc,
          variants: product.variants,
          price: product.variants[0].price,
          available: product.variants[0].available,
          hoveredImageIndex: 0,
        };
      });
      // create an array with all products
      this.listedProducts = this.products;
    });
  },
};
</script>
