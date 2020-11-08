import { ITodo } from '@/interface/store';
import { TODOS_KEY } from '@/config/Index';
export const storageUtil =  {
  readTodos () {
    return JSON.parse(localStorage.getItem(TODOS_KEY) || '[]')
  },
  saveTodos (todos: ITodo[]) {
    localStorage.setItem(TODOS_KEY, JSON.stringify(todos))
  }
}
