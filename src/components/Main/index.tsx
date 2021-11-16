import React from "react";
import styles from "./index.module.scss";
import { Routes, Route } from "react-router-dom";
import Github from "@/pages/Github";

const Main = () => {
  return (
    <div className={styles.main}>
      <Routes>
        <Route path="/github" element={<Github />} />
        <Route path="/" element={<Github />} />
      </Routes>
    </div>
  );
};

export default Main;
