import { create } from "zustand";
import { getRouteApi } from "../API/services";

export const useTodoStore = create((set, get) => ({
  // * State
  todoList: [],
  addModal: false,
  editModal: false,

  // * Functions
  getTodoData: async () => {
    const { data } = await getRouteApi("/todos");
    set({ todoList: data });
  },
  handleAddModal: (val) => set({ addModal: val }),

  handleEditModal: (val) => set({ editModal: val }),
}));
