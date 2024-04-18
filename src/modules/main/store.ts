import { create } from "zustand";

const useTablesStore = create((set) => ({
  foodTable: null,
  trainingTable: null,

  setFoodTable: (table) =>
    set(() => ({
      foodTable: table,
    })),

  setTrainingTable: (table) =>
    set(() => ({
      trainingTable: table,
    })),
}));

export default useTablesStore;
