<style lang="stylus">
.todo-container {
  width: 100%;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>

<template>
    <div class="todo-container">
        <div class="todo-wrap">
            <TodoHeader />
            <TodoList />
            <TodoFooter />
        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import TodoHeader from '@/components/TodoHeader.vue';
import TodoList from '@/components/TodoList.vue';
import TodoFooter from '@/components/TodoFooter.vue';
@Component({
    components: {
        TodoHeader,
        TodoList,
        TodoFooter,
    },
})
export default class TodosPage extends Vue {
    private mounted() {
        this.$store.dispatch('requestTodos') // 模拟异步请求
    }
}
</script>
