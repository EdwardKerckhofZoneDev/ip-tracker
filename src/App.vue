<template>
  <div class="h-screen bg-gray-100">
    <app-header />
    <ip-info />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import AppHeader from '@/components/AppHeader.vue'
import IpInfo from './components/IpInfo.vue'

export default defineComponent({
  name: 'App',

  components: {
    AppHeader,
    IpInfo
  }
})
</script>
