<style scoped lang="stylus">
.todo-main {
  margin-left: 0px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
}

.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}
</style>
<template>
    <ul class="todo-main" v-if="todos.length">
        <TodoItem v-for="(todo, index) in todos" :key="index" :todo="todo" :index="index" />
    </ul>
</template>

<script lang="ts">
import { Vue, Component, Watch } from 'vue-property-decorator';
import { State } from 'vuex-class';
import TodoItem from './TodoItem.vue';
import { ITodo } from '@/interface/store';
import { storageUtil } from '@/libs/util';

@Component({
    components: {
        TodoItem,
    },
})
export default class TodoListPage extends Vue {
    @State((state) => state.todos) private todos!: ITodo[];
    @Watch('todos', { immediate: true, deep: true })
    private handleTodosChange() {
        storageUtil.saveTodos(this.todos);
    }
}
</script>
