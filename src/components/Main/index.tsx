import React from "react";
import styles from "./index.module.scss";
import { Routes, Route } from "react-router-dom";
import Github from "@/pages/Github";

const Main = () => {
  return (
    <div className={styles.main}>
      <Routes>
        <Route path="/alibaba_training/github" element={<Github />} />
        <Route path="/alibaba_training/" element={<Github />} />
      </Routes>
    </div>
  );
};

export default Main;
