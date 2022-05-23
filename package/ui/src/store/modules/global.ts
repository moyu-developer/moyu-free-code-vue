import { defineStore } from 'pinia'
import { store } from '@/store'

export const useGlobalStore = defineStore({
  id: 'app-global',
  state: () => ({
    spinning: false,
    netWorkIsReady: true
  }),
  actions: {
    setSpinning (spinning: boolean) {
      this.spinning = spinning
    },
    setNetWorkIsReady (netWorkIsReady: boolean) {
      this.netWorkIsReady = netWorkIsReady
    }
  }
})

export function useGlobalStoreWidthOut () {
  return useGlobalStore(store)
}
