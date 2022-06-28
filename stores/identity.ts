import { defineStore } from 'pinia'

export interface IIdentityState {
  firstName: string
  lastName: string
}

// @ts-ignore
export const useIdentity = defineStore('identity', {
  state: (): IIdentityState => ({
    firstName: 'Mohamed Amine',
    lastName: 'Melliti',
  }),
  actions: {
    setFirstName(firstName: string) {
      this.firstName = firstName
    },
    setLastName(lastName: string) {
      this.lastName = lastName
    },
    reset() {
      this.firstName = 'Mohamed Amine'
      this.lastName = 'Melliti'
    },
  },
  getters: {
    fullName() {
      return `${this.firstName} ${this.lastName}`
    },
  },
})
