import { ActionContext } from 'vuex';
import { IMyState } from '@/interface/store';
import { ADD_TODO, DELETE_TODO, SELECT_ALL_TODOS, DELETE_ALL_COMPLETED, RECEIVE_TODOS } from './mutation-types';
import { storageUtil } from '@/libs/util';
export default {
    addTodo(context: ActionContext<IMyState, any>, todo: any) {
        const { state, dispatch, commit } = context;
        commit(ADD_TODO, {todo});
    },

    deleteTodo(context: ActionContext<IMyState, any>, index: number) {
        const { state, dispatch, commit } = context;
        commit(DELETE_TODO, { index });
    },

    selectAllTodos(context: ActionContext<IMyState, any>, isCheck: boolean) {
        const { state, dispatch, commit } = context;
        commit(SELECT_ALL_TODOS, { isCheck });
    },

    deleteAllCompleted(context: ActionContext<IMyState, any>, isCheck: boolean) {
        const { commit } = context;
        commit(DELETE_ALL_COMPLETED);
    },

    requestTodos(context: ActionContext<IMyState, any>) {
        const { commit } = context;
        // 模拟异步获取todos
        setTimeout(() => {
            const todos = storageUtil.readTodos();
            console.log(todos, 'todos read')
            commit(RECEIVE_TODOS, { todos });
        }, 1000);
    },
};
