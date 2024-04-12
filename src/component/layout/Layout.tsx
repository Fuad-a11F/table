import styles from "./Layout.module.scss";
import { LayoutInterface } from "../../models/component/layout";
import { FC } from "react";
import { Typography } from "@mui/joy";

const Layout: FC<LayoutInterface> = ({ children, title }) => {
  return (
    <div className={styles.layout__wrapper}>
      <Typography level="h4" component={"h1"}>
        {title}
      </Typography>

      <div className={styles.layout}>{children}</div>
    </div>
  );
};

export default Layout;
