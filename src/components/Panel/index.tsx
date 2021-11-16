import React, { useEffect, useState } from "react";
import styles from "./index.module.scss";
import { Select } from "antd";
import { DEFAULT_DATA_SET } from "@/constants";
import Clock from "react-clock";

const { Option } = Select;

const Panel = () => {
  const handleChange = () => {};

  // 当前的数据集
  const [dataset, setDataset] = useState<string>(DEFAULT_DATA_SET);

  const [value, setValue] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setValue(new Date()), 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className={styles.panel}>
      <div className={styles.select}>
        <span className={styles.desc}>数据集：</span>
        <Select value={dataset} onChange={handleChange}>
          <Option value="github">Github</Option>
        </Select>
      </div>
      <div className={styles.time}>
        <Clock value={value} />
      </div>
    </div>
  );
};

export default Panel;
