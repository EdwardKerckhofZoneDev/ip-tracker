<template>
  <form @submit.prevent="search" class="w-full flex">
    <input
      type="text"
      v-model="ipAddress"
      placeholder="127.0.0.1"
      class="px-7 py-5 rounded-l-2xl text-base flex-1 outline-none"
    />
    <button
      type="submit"
      class="bg-gray-600 w-14 rounded-r-2xl flex justify-center items-center outline-none"
    >
      <img src="~@/assets/img/icon-arrow.svg" alt="Arrow" />
    </button>
  </form>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'IpTrackerInput',

  setup() {
    const ipAddress = ref('')

    const search = () => {
      console.log(ipAddress.value)
    }

    return { search, ipAddress }
  }
})
</script>
