import React, { useEffect, useState } from "react";
import styles from "./index.module.scss";
import { Button, Select } from "antd";
import { DEFAULT_DATA_SET } from "@/constants";
import Clock from "react-clock";
import Record from "../Record";

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

  const handleEnterStockSystem = () => {
    window.location.href = "https://xutong8.github.io/stock_dashboard/";
  };

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
      <div className={styles.record}>
        <Record />
      </div>
      <div className={styles.link}>
        <Button type="primary" onClick={handleEnterStockSystem}>
          股票分析系统
        </Button>
      </div>
    </div>
  );
};

export default Panel;
