import { defineStore } from 'pinia'

export type Location = {
  city: string
  region: string
  postalCode: string
  timezone: string
  isp: string
  lat: number
  lng: number
}

export const useIpStore = defineStore({
  id: 'ip',
  state: () => ({
    ipaddress: '8.8.8.8',
    location: {
      city: 'Mountain View',
      region: 'California',
      postalCode: '94035',
      timezone: '-08:00',
      isp: 'Google LLC',
      lat: 37.38605,
      lng: -122.08385
    } as Location,
    loading: false
  }),
  getters: {
    IP() {
      return this.ipaddress
    },
    LOCATION() {
      return this.location
    },
    LOADING() {
      return this.loading
    }
  },
  actions: {
    setIpAddress(newIP: string) {
      this.ipaddress = newIP
    },
    setLocation(location: Location) {
      this.location = location
    },
    setLoading(loading: boolean) {
      this.loading = loading
    },
    reset() {
      this.ipaddress = ''
    }
  }
})
