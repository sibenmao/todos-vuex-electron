<style scoped lang="stylus">
.todo-header {
    input {
    width: calc(100% - 15px);
    height: 28px;
    font-size: 14px;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 4px 7px;
    }
}

.todo-header input:focus {
  outline: none;
  border-color: rgba(82, 168, 236, 0.8);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);
}
</style>

<template>
    <div class="todo-header">
        <input type="text" placeholder="请输入你的任务名称，按回车键确认" v-model="inputTodo" @keyup.enter="add" />
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
@Component
export default class TodoHeaderPage extends Vue {
    private inputTodo = '';
    private add() {
        const inputTodo = this.inputTodo.trim();
        if (!inputTodo) {
            alert('必须输入');
            return;
        }
        const todo = {
            title: inputTodo,
            complete: false,
        };
        this.$store.dispatch('addTodo', todo);
        this.inputTodo = '';
    }
}
</script>
