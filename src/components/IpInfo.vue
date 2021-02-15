<template>
  <div
    class="container mx-auto flex bg-white rounded-3xl py-9 justify-between shadow-xl relative z-50"
  >
    <div class="info">
      <h5 class="info-title">Ip address</h5>
      <h2 class="info-desc" v-if="!ipStore.LOADING">{{ ipStore.IP }}</h2>
      <Circle v-else></Circle>
    </div>
    <div class="info">
      <h5 class="info-title">Location</h5>
      <h2 class="info-desc" v-if="!ipStore.LOADING">
        {{ ipStore.LOCATION.city }}, {{ ipStore.LOCATION.region }}
        {{ ipStore.LOCATION.postalCode }}
      </h2>
      <Circle v-else></Circle>
    </div>
    <div class="info">
      <h5 class="info-title">Timezone</h5>
      <h2 class="info-desc" v-if="!ipStore.LOADING">
        UTC {{ ipStore.LOCATION.timezone }}
      </h2>
      <Circle v-else></Circle>
    </div>
    <div class="info--last">
      <h5 class="info-title">ISP</h5>
      <h2 class="info-desc" v-if="!ipStore.LOADING">
        {{ ipStore.LOCATION.isp }}
      </h2>
      <Circle v-else></Circle>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useIpStore } from '@/store/ip'

import Circle from 'vue-loading-spinner/src/components/Circle4.vue'

export default defineComponent({
  name: 'IpInfo',

  components: { Circle },

  setup() {
    const ipStore = useIpStore()

    return { ipStore }
  }
})
</script>
