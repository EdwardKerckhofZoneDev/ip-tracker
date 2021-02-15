<template>
  <div class="h-screen bg-gray-100 overflow-x-hidden">
    <app-header />
    <div class="-mt-24 h-3/4">
      <ip-info />
      <maps />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import AppHeader from '@/components/AppHeader.vue'
import IpInfo from './components/IpInfo.vue'
import Maps from './components/Maps.vue'

export default defineComponent({
  name: 'App',

  components: {
    AppHeader,
    IpInfo,
    Maps
  }
})
</script>
