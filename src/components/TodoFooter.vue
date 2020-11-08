<style scoped lang="stylus">
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>

<template>
    <div class="todo-footer" v-if="totalCount">
        <label><input type="checkbox" v-model="isAllComplete"/></label>
        <span
            ><span>已完成{{ completeCount }}</span> / 全部{{ totalCount }}</span
        >
        <button class="btn btn-danger" v-show="completeCount" @click="deleteAllCompleted">清除已完成任务</button>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { State, Getter, Action } from 'vuex-class';
@Component
export default class TodoFooterPage extends Vue {
    @Getter public isAllChecked!: boolean;
    @Getter public totalCount!: number;
    @Getter public completeCount!: number;
    @Action('deleteAllCompleted') public deleteAllCompleted!: Function;
    get isAllComplete() {
        return this.isAllChecked;
    }
    set isAllComplete(isCheck: boolean) {
        this.$store.dispatch('selectAllTodos', isCheck);
    }
}
</script>
