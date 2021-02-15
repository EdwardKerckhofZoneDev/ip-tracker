<template>
  <div class="header h-80 bg-header-pattern bg-cover bg-no-repeat bg-center">
    <ip-tracker />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import IpTracker from '@/components/IpTracker.vue'

export default defineComponent({
  name: 'AppHeader',

  components: { IpTracker }
})
</script>
