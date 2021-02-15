<template>
  <form @submit.prevent="search" class="w-full flex">
    <input
      type="text"
      v-model="ipAddress"
      placeholder="8.8.8.8"
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
import { Location, useIpStore } from '@/store/ip'
import axios from 'axios'

export default defineComponent({
  name: 'IpTrackerInput',

  setup() {
    const ipAddress = ref('')
    const ipStore = useIpStore()

    const search = async () => {
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
      ipStore.setLoading(true)

      const { data } = await axios.get(
        `https://geo.ipify.org/api/v1?apiKey=at_DUYNdic3iCfeYojLoxikPVQ4uXmpb&ipAddress=${ipAddress.value}`
      )

      const ipLocation: Location = {
        city: data.location.city,
        region: data.location.region,
        postalCode: data.location.postalCode,
        timezone: data.location.timezone,
        isp: data.isp,
        lat: data.location.lat,
        lng: data.location.lng
      }

      ipStore.setLocation(ipLocation)

      ipStore.setLoading(false)
    }

    return { search, ipAddress }
  }
})
</script>
