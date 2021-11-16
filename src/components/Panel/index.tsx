import React, { useState } from "react";
import styles from "./index.module.scss";
import { Select } from "antd";

const { Option } = Select;

const Panel = () => {
  const handleChange = () => {};

  // 当前的数据集
  const [dataset, setDataset] = useState<string>("github");

  return (
    <div className={styles.panel}>
      <div className={styles.select}>
        <span className={styles.desc}>数据集：</span>
        <Select value={dataset} onChange={handleChange}>
          <Option value="github">Github</Option>
        </Select>
      </div>
    </div>
  );
};

export default Panel;
