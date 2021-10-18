<template>
  <div>
    <h1>Hi, Wake Up Now!!!</h1>
    <div>
      <div
          v-for="todo in todos"
          :key="todo.id"
          :class="{completed: todo.completed}"
          data-test="todo"
      >
        {{ todo.text }}
        <input v-model="todo.completed" type="checkbox" data-test="todo-checkbox">
      </div>
    </div>
    <form data-test="form" @submit.prevent="createTodo">
      <input v-model="newTodo" data-test="new-todo"/>
    </form>
  </div>
</template>

<script>
  export default {
    name: 'TodoApp',
    data() {
      return {
        todos: [
          {
            id: 1,
            text: 'Wake Up',
            completed: false
          }
        ],
        newTodo: ''
      }
    },
    methods: {
      createTodo() {
        this.todos.push({
          id: this.todos.length ? this.todos.at(-1).id + 1 : 1,
          text: this.newTodo,
          completed: false
        })
        this.newTodo = ''
      }
    }
  }
</script>

<style scoped>
  .completed {
    text-decoration: line-through;
  }
</style>