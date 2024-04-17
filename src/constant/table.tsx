import CustomSelect from "../component/tableFormElements/Select.tsx";
import CustomInput from "../component/tableFormElements/Input.tsx";

export const TableTrainingColumn = [
  {
    field: "make",
    headerName: "Упражнение",
    cellRenderer: (event) => <CustomSelect data={event?.data} field={"make"} />,
  },
  {
    field: "model",
    headerName: "Отягощение",
    cellRenderer: (event) => <CustomInput data={event?.data} field={"model"} />,
  },
  {
    field: "model",
    headerName: "Кол-во подходов",
    cellRenderer: (event) => <CustomInput data={event?.data} field={"model"} />,
  },
  {
    field: "price",
    headerName: "Кол-во повторений",
    cellRenderer: (event) => (
      <CustomSelect data={event?.data} field={"price"} />
    ),
  },
  {
    field: "electric",
    headerName: "Время отдыха",
    editable: true,
    cellRenderer: (event) => (
      <CustomInput data={event?.data} field={"electric"} />
    ),
  },
];
