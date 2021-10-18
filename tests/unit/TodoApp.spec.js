import { mount } from '@vue/test-utils'
import TodoApp from '@/components/TodoApp'

describe('TodoApp.vue', () => {

  let wrapper

  beforeEach(() => {
    wrapper = mount(TodoApp)
  })

  it('should render todo text', () => {
    const todo = wrapper.get('[data-test="todo"]:nth-child(1)')
    expect(todo.text()).toEqual('Wake Up')
  })

  it('should add new todo', async () => {
    expect(wrapper.findAll('[data-test="todo"]')).toHaveLength(1);
    await wrapper.get('[data-test="new-todo"]').setValue('New Todo')
    await wrapper.get('[data-test="form"]').trigger('submit')
    expect(wrapper.findAll('[data-test="todo"]')).toHaveLength(2);
    expect(wrapper.get('[data-test="new-todo"]').element.value).toEqual('')
  })

  it('shold be able to complete todo', async () => {
    await wrapper.get(['[data-test="todo-checkbox"]']).setValue(true)
    expect(wrapper.get('[data-test="todo"]').classes()).toContain('completed')
  })
})