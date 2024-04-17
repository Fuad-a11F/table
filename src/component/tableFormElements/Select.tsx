import { useEffect, useState } from "react";
import styles from "../contextMenu/ContextMenu.module.scss";
import { MenuItem, Select } from "@mui/material";
import useTrainingStore from "../../modules/main/store/useTrainingStore.ts";

const CustomSelect = ({ data, field }) => {
  const { isButtonDisabledCheck } = useTrainingStore();

  if (data[field]) return data[field];

  const [value, setValue] = useState();

  useEffect(() => {
    if (value) {
      isButtonDisabledCheck();
    }
  }, [isButtonDisabledCheck, value]);

  if (value) {
    return value;
  }

  return (
    <div>
      <Select
        className={styles.select}
        placeholder={"wer"}
        defaultValue={0}
        onChange={(e) => setValue(e.target.value)}
      >
        <MenuItem value={0} disabled>
          Выберите упражнение
        </MenuItem>
        <MenuItem value={"Ten"}>Ten</MenuItem>
        <MenuItem value={"Twenty"}>Twenty</MenuItem>
        <MenuItem value={"Thirty"}>Thirty</MenuItem>
      </Select>
    </div>
  );
};

export default CustomSelect;
