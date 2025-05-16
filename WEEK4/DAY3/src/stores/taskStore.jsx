import { persist } from 'zustand/middleware';
import { shallow } from 'zustand/shallow';

export const useTaskStore = create(
  persist(
    (set, get) => {
      let history = [];
      let future = [];

      const saveToHistory = () => {
        history.push([...get().tasks]);
        if (history.length > 50) history.shift();
      };

      return {
        tasks: [],
        addTask: (task) => {
          saveToHistory();
          set((state) => ({ tasks: [...state.tasks, task] }));
        },
        editTask: (id, updates) => {
          saveToHistory();
          set((state) => ({
            tasks: state.tasks.map(t => t.id === id ? { ...t, ...updates } : t)
          }));
        },
        deleteTask: (id) => {
          saveToHistory();
          set((state) => ({ tasks: state.tasks.filter(t => t.id !== id) }));
        },
        toggleComplete: (id) => {
          saveToHistory();
          set((state) => ({
            tasks: state.tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t)
          }));
        },
        undo: () => {
          if (history.length === 0) return;
          future.push(get().tasks);
          set({ tasks: history.pop() });
        },
        redo: () => {
          if (future.length === 0) return;
          history.push(get().tasks);
          set({ tasks: future.pop() });
        },
        completedCount: () => get().tasks.filter(t => t.completed).length
      };
    },
    { name: 'task-storage' }
  )
);
