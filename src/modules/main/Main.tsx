import Layout from "../../component/layout/Layout";
import TrainingProgram from "./trainingProgram/TrainingProgram";
import Menu from "../../component/menu/Menu";
import { Grid } from "@mui/joy";
import { Button } from "@mui/material";
import { useState } from "react";
import FoodProgram from "./foodProgram/FoodProgram";
import { AnimatePresence, motion } from "framer-motion";
import styles from "./Main.module.scss";
import { variants } from "./animate";

const Main = () => {
  const [type, setType] = useState("training");

  const changeType = () => {
    if (type === "training") setType("food");
    else if (type === "food") setType("training");
  };

  return (
    <div>
      <Menu />

      <Layout title={"Составление программ"}>
        <Grid container justifyContent="flex-end">
          <Grid item>
            <Button variant="contained" sx={{ mb: 4 }} onClick={changeType}>
              {type === "training"
                ? "Перейти к составлению меню"
                : "Вернуться к составлению программы"}
            </Button>
          </Grid>
        </Grid>

        <div className={styles.table__wrapper}>
          <AnimatePresence>
            {type === "training" && (
              <div className={styles.table}>
                <motion.div
                  initial={"initial"}
                  variants={variants}
                  animate={"show"}
                  exit={"hide"}
                >
                  <TrainingProgram />
                </motion.div>
              </div>
            )}
          </AnimatePresence>

          <AnimatePresence>
            {type === "food" && (
              <div className={styles.table}>
                <motion.div
                  initial={"initial"}
                  variants={variants}
                  animate={"show"}
                  exit={"hide"}
                >
                  <FoodProgram />
                </motion.div>
              </div>
            )}
          </AnimatePresence>
        </div>
      </Layout>
    </div>
  );
};

export default Main;
