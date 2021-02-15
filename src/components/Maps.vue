<template>
  <div ref="mapRef" class="map w-full -mt-24 relative"></div>
</template>

<script lang="ts">
/* eslint-disable no-undef */
import { computed, defineComponent, onMounted, ref, watch } from 'vue'
import { Loader } from '@googlemaps/js-api-loader'
import { useIpStore } from '@/store/ip'

export default defineComponent({
  name: 'Maps',

  setup() {
    const ipStore = useIpStore()

    // Google maps loader
    const loader = new Loader({
      apiKey: 'AIzaSyAbph0kVAo3u_5dzxzNQvDCyFvoEtjDk7Q'
    })
    // Map ref
    const mapRef = ref<HTMLDivElement | null>(null)
    // Map element
    const map = ref<google.maps.Map | null>(null)
    // Map marker
    const marker = ref<google.maps.Marker | null>(null)

    const lat = computed(() => {
      return ipStore.LOCATION.lat
    })
    const lng = computed(() => {
      return ipStore.LOCATION.lng
    })

    onMounted(async () => {
      await loader.load()
      map.value = new google.maps.Map(mapRef.value as HTMLDivElement, {
        center: {
          lat: lat.value,
          lng: lng.value
        },
        zoom: 13
      })
      marker.value = new google.maps.Marker({
        position: {
          lat: lat.value,
          lng: lng.value
        },
        map: map.value
      })
    })

    watch([lat, lng], () => {
      if (map.value && marker.value) {
        map.value.setCenter({ lat: lat.value, lng: lng.value })
        marker.value = new google.maps.Marker({
          position: {
            lat: lat.value,
            lng: lng.value
          },
          map: map.value
        })
      }
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
