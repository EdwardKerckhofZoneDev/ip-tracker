import { defineStore } from 'pinia'

export const useIpStore = defineStore({
  id: 'ip',
  state: () => ({
    ipaddress: ''
  }),
  getters: {
    IP() {
      return this.ipaddress
    }
  },
  actions: {
    reset() {
      this.ipaddress = ''
    }
  }
})
