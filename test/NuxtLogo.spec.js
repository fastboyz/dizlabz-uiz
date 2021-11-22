import { mount } from '@vue/test-utils'
import TwitchAuth from '@/components/TwitchAuth/TwitchAuth.vue'

describe('TwitchAuth', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(TwitchAuth)
    expect(wrapper.vm).toBeTruthy()
  })
})
