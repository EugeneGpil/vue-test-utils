import { mount } from '@vue/test-utils'
import Message from '@/components/Message'

describe('Message.vue', () => {
  it('renders props.msg when passed', () => {
    const message = 'Hello buddy'
    const wrapper = mount(Message, {
      props: {
        msg: message
      }
    })
    expect(wrapper.text()).toContain(message)
  })
})