import Layout from "../../component/layout/Layout";
import styles from "./Auth.module.scss";
import StudentLogin from "./component/StudentLogin";
import CoachLogin from "./component/CoachLogin";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import CoachRegistration from "./component/CoachRegistration";
import { variants } from "./animate";

const Auth = () => {
  const [state, setState] = useState(false);
  const [role, setRole] = useState("Coach");

  return (
    <Layout title={"Вход в систему"}>
      <div className={styles.form}>
        <AnimatePresence>
          {role === "Student" && (
            <div className={styles.form__center}>
              <motion.div
                initial={"initial"}
                variants={variants}
                animate={"show"}
                exit={"hide"}
              >
                <StudentLogin />
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {!state && role === "Coach" && (
            <div className={styles.form__center}>
              <motion.div
                initial={"initial"}
                variants={variants}
                animate={"show"}
                exit={"hide"}
              >
                <CoachLogin setState={setState} />
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {state && role === "Coach" && (
            <div className={styles.form__center}>
              <motion.div
                initial={"initial"}
                variants={variants}
                animate={"show"}
                exit={"hide"}
              >
                <CoachRegistration setState={setState} />
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>

      <button onClick={() => setState(!state)}>sd</button>
    </Layout>
  );
};

export default Auth;
