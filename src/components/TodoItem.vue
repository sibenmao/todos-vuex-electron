<style scoped lang="stylus">
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}
</style>

<template>
    <li :style="{ background: bgColor }" @mouseenter="handleEnter(true)" @mouseleave="handleEnter(false)">
        <label>
            <input type="checkbox" v-model="todo.complete" autofocus />
            <span>{{ todo.title }}</span>
        </label>
        <button class="btn btn-danger" v-show="isShow" @click="deleteItem">删除</button>
    </li>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { ITodo } from '@/interface/store';
@Component
export default class TodoItemPage extends Vue {
    @Prop({ default: {} }) private todo!: ITodo;
    @Prop({ default: 0 }) private index!: number;
    private bgColor = 'white';
    private isShow = false;

    private handleEnter(isEnter: boolean) {
        if (isEnter) {
            // 进入
            this.bgColor = '#cccccc';
            this.isShow = true;
        } else {
            // 离开
            this.bgColor = '#ffffff';
            this.isShow = false;
        }
    }
    private deleteItem() {
        this.$store.dispatch('deleteTodo', this.index);
    }
}
</script>
