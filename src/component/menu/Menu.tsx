import styles from "./Menu.module.scss";
import Online from "./component/Online";
import Export from "./component/Export";
import AIForm from "./component/AIForm";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { variants, variantsButton } from "./variants";

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <div className={styles.menu}>
            <motion.div
              initial={"initial"}
              variants={variants}
              animate={"show"}
              exit={"hide"}
            >
              <div className={styles.menu_flex}>
                <div>
                  <Online />

                  <Export />
                </div>

                <AIForm />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <motion.div
        className={styles.menu_open}
        variants={variantsButton}
        initial={"initial"}
        animate={isOpen ? "show" : "hide"}
      >
        <button onClick={() => setIsOpen(!isOpen)}>Open</button>
      </motion.div>

      <motion.div
        className={styles.menu_plush}
        initial={{ opacity: 0 }}
        animate={isOpen ? { opacity: 0.7 } : { opacity: 0 }}
      ></motion.div>
    </>
  );
};

export default Menu;
