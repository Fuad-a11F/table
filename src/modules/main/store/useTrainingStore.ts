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
      electric: "-",
    },
    {
      id: 3,
      make: "Toyota",
      model: "Corolla",
      price: 29600,
      electric: "-",
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
      electric: "-",
    },
  ],
  tableTrainingColumn: TableTrainingColumn,

  isButtonDisabled: false,

  selectedTrainingData: [],

  addTrainingData: () =>
    set((state) => ({
      trainingData: [
        ...state.trainingData,
        { make: null, model: null, price: null, electric: null },
      ],
      isButtonDisabled: true,
    })),

  updateSelectedTrainingData: (data) =>
    set(() => ({
      selectedTrainingData: data,
    })),

  deleteTrainingData: (id: number) =>
    set((state) => ({
      trainingData: state.trainingData.filter((item) => item.id !== id),
    })),

  deleteAllSelectedTrainingData: () =>
    set((state) => {
      state.selectedTrainingData.forEach((item) => {
        state.deleteTrainingData(item.id);
      });

      return { selectedTrainingData: [] };
    }),

  deleteAllData: () =>
    set(() => {
      return { trainingData: [], isButtonDisabled: false };
    }),

  isButtonDisabledCheck: () =>
    set((state) => {
      console.log(state.trainingData);

      return {
        isButtonDisabled: !(
          state.trainingData[state.trainingData.length - 1].make &&
          state.trainingData[state.trainingData.length - 1].model &&
          state.trainingData[state.trainingData.length - 1].price &&
          state.trainingData[state.trainingData.length - 1].electric
        ),
      };
    }),
}));

export default useTrainingStore;
