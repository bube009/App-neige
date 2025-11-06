import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAppStore = defineStore('app', () => {
  const driverOnline = ref(false)
  const currentJobId = ref<string | null>(null)
  const lastLocation = ref<{lat:number, lng:number} | null>(null)

  return { driverOnline, currentJobId, lastLocation }
})
