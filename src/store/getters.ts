import { IMyState } from '@/interface/store';
export default {
    totalCount(state: IMyState) {
        return state.todos.length;
    },

    completeCount(state: IMyState) {
        return state.todos.reduce((preTotal, todo) => {
            return preTotal + (todo.complete ? 1 : 0);
        }, 0);
    },

    isAllChecked(state: IMyState, getters: any) {
        return getters.totalCount === getters.completeCount && state.todos.length > 0;
    },
};
