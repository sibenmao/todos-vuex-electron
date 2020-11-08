import { IMyState, ITodo } from '@/interface/store';
import { ADD_TODO, DELETE_TODO, SELECT_ALL_TODOS, DELETE_ALL_COMPLETED, RECEIVE_TODOS } from './mutation-types';
export default {
    [ADD_TODO](state: IMyState, { todo }: any) {
        console.log(state.todos, 'state.todos')
        state.todos.unshift(todo);
    },

    [DELETE_TODO](state: IMyState, { index }: any) {
        if (window.confirm(`确定删除${state.todos[index].title}吗?`)) {
            state.todos.splice(index, 1);
        }
    },

    [SELECT_ALL_TODOS](state: IMyState, { isCheck }: any) {
        state.todos.forEach((todo) => (todo.complete = isCheck));
    },

    [DELETE_ALL_COMPLETED](state: IMyState) {
        if (window.confirm(`确定清空已完成数据吗?`)) {
            state.todos = state.todos.filter((todo) => !todo.complete);
        }
    },

    [RECEIVE_TODOS](state: IMyState, {todos}: any) {
        state.todos = todos;
    },
};
