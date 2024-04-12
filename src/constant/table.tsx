export const TableTrainingColumn = [
  {
    field: "make",
    headerName: "Упражнение",
    editable: true,
    // cellRenderer: () => {
    //   return (
    //     <select>
    //       <option value="1">213</option>
    //       <option value="2">ewr</option>
    //       <option value="3">321</option>
    //     </select>
    //   );
    // },
  },
  { field: "model", headerName: "Отягощение", width: 164, editable: true },
  {
    field: "model1",
    headerName: "Кол-во подходов",
    width: 164,
    editable: true,
  },
  {
    field: "price",
    headerName: "Кол-во повторений",
    width: 164,
    editable: true,
  },
  {
    field: "electric",
    headerName: "Время отдыха",
    editable: true,
    width: 164,
    cellDataType: false,
    rowSpan: (d) => {
      console.log(d.data);

      if (d.data.id === 1) return 3;
      if (d.data.id === 41) return 1;
      if (d.data.id === 42) return 2;
    },
    cellClassRules: {
      "show-cell": "value !== undefined",
    },
  },
  {
    headerName: "Столбец с элементом",
    field: "value",
    // Используйте CustomRenderer в качестве renderer
    cellRendererFramework: `<div>ува</div>`,
  },
];
