import React from "react";
import { LoadingIcon } from "../../utils/Icons";
import styles from "./Loading.module.scss";

const LoadingPage = () => (
  <div className={styles.loadingContainer}>
    <LoadingIcon />
  </div>
);

export default LoadingPage;
