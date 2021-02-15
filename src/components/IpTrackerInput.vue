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
import { useIpStore } from '@/store/ip'

export default defineComponent({
  name: 'IpTrackerInput',

  setup() {
    const ipAddress = ref('')
    const ipStore = useIpStore()

    const search = () => {
      if (!ipAddress.value) {
        alert('Not a valid input')
        return
      }

      if (!/^(?:[0-9]{1,3}\.){3}[0-9]{1,3}$/.test(ipAddress.value)) {
        alert('Not a valid input')
        ipAddress.value = ''
        return
      }

      ipStore.setIpAddress(ipAddress.value)
    }

    return { search, ipAddress }
  }
})
</script>
