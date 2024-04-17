import { Button } from "@mui/material";
import styles from "./ContextMenu.module.scss";
import { useEffect } from "react";
import useTrainingStore from "../../modules/main/store/useTrainingStore.ts";

const ContextMenu = ({ x, y, isOpen, setIsOpen }) => {
  const { deleteAllSelectedTrainingData } = useTrainingStore();

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("click", (e) => {
        setIsOpen(false);
      });
      document.addEventListener("scroll", () => {
        setIsOpen(false);
      });
    }
  }, [isOpen, setIsOpen]);

  return (
    <div style={{ top: y, left: x }} className={styles.menu}>
      <Button onClick={deleteAllSelectedTrainingData}>Удалить</Button>
      <Button>Редактировать</Button>
    </div>
  );
};

export default ContextMenu;
