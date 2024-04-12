import { create } from "zustand";
import { TableTrainingColumn } from "../../../constant/table";

const useTrainingStore = create((set) => ({
  trainingData: [
    { id: 1, make: "Tesla", model: "Model Y", price: 64950, electric: 4 },
    {
      id: 2,
      make: "Ford",
      model: "F-Series",
      price: 33850,
    },
    {
      id: 3,
      make: "Toyota",
      model: "Corolla",
      price: 29600,
    },
    { id: 41, make: "Tesla", model: "Model Y", price: 64950, electric: 4 },
    {
      id: 42,
      make: "Ford",
      model: "F-Series",
      price: 33850,
      electric: 4,
    },
    {
      id: 43,
      make: "Toyota",
      model: "Corolla",
      price: 29600,
    },
  ],
  tableTrainingColumn: TableTrainingColumn,

  addTrainingData: () =>
    set((state) => ({
      trainingData: [
        ...state.trainingData,
        { make: "", model: "", price: null, electric: null },
      ],
    })),

  deleteTrainingData: (id: number) =>
    set((state) => ({
      trainingData: state.trainingData.filter((item) => item.id !== id),
    })),
}));

export default useTrainingStore;
