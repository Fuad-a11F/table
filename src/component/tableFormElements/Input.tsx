import { FormControl, OutlinedInput } from "@mui/material";
import styles from "../contextMenu/ContextMenu.module.scss";
import { useEffect, useState } from "react";
import useTrainingStore from "../../modules/main/store/useTrainingStore.ts";

const CustomInput = ({ data, field }) => {
  const { isButtonDisabledCheck } = useTrainingStore();

  if (data[field]) return data[field];

  const [value, setValue] = useState();
  const [isFocus, setIsFocus] = useState(true);

  useEffect(() => {
    if (value && !isFocus) {
      isButtonDisabledCheck();
    }
  }, [isButtonDisabledCheck, value, isFocus]);

  if (!isFocus && value) {
    return value;
  }

  return (
    <div>
      <FormControl className={styles.select} variant="outlined">
        <OutlinedInput
          className={styles.select}
          id="outlined-adornment-weight"
          aria-describedby="outlined-weight-helper-text"
          inputProps={{
            "aria-label": "weight",
          }}
          onChange={(e) => setValue(e.target.value)}
          onBlur={(e) => setIsFocus(false)}
        />
      </FormControl>
    </div>
  );
};

export default CustomInput;
