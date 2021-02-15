<template>
  <div
    class="container mx-auto flex bg-white rounded-3xl py-9 justify-between shadow-xl relative z-50"
  >
    <div class="info">
      <h5 class="info-title">Ip address</h5>
      <h2 class="info-desc">{{ ipStore.IP }}</h2>
    </div>
    <div class="info">
      <h5 class="info-title">Location</h5>
      <h2 class="info-desc">Boorklyn, NY 10001</h2>
    </div>
    <div class="info">
      <h5 class="info-title">Tomezone</h5>
      <h2 class="info-desc">UTC -05:00</h2>
    </div>
    <div class="info--last">
      <h5 class="info-title">ISP</h5>
      <h2 class="info-desc">SpaceX Starlink</h2>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useIpStore } from '@/store/ip'

export default defineComponent({
  name: 'IpInfo',

  setup() {
    const ipStore = useIpStore()

    return { ipStore }
  }
})
</script>
