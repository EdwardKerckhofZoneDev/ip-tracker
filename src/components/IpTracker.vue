<template>
  <div class="max-w-screen-sm mx-auto pt-12 text-center ">
    <h1 class="text-white text-4xl font-medium mb-6">
      IP Address Tracker
    </h1>
    <ip-tracker-input />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import IpTrackerInput from './IpTrackerInput.vue'

export default defineComponent({
  name: 'IpTracker',

  components: { IpTrackerInput }
})
</script>
