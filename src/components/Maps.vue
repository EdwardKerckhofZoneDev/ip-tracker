<template>
  <div ref="mapRef" class="map w-full -mt-24 relative"></div>
</template>

<script lang="ts">
/* eslint-disable no-undef */
import { defineComponent, onMounted, ref } from 'vue'
import { Loader } from '@googlemaps/js-api-loader'

// Center of the world
const center = {
  lat: 40.712743,
  lng: -74.013379
}

export default defineComponent({
  name: 'Maps',

  setup() {
    // Google maps loader
    const loader = new Loader({
      apiKey: process.env.VUE_APP_MAPS_API_KEY || ''
    })
    // Map ref
    const mapRef = ref<HTMLDivElement | null>(null)
    // Map element
    const map = ref<google.maps.Map | null>(null)
    // Map marker
    const marker = ref<google.maps.Marker | null>(null)

    onMounted(async () => {
      await loader.load()
      map.value = new google.maps.Map(mapRef.value as HTMLDivElement, {
        center,
        zoom: 13
      })
      marker.value = new google.maps.Marker({
        position: center,
        map: map.value
      })
    })

    return { mapRef }
  }
})
</script>

<style lang="scss" scoped>
.map {
  height: calc(100vh - 17rem);
}
</style>
