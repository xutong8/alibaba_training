import React, { useEffect, useRef } from "react";
import styles from "./index.module.scss";
import { Column } from "@antv/g2plot";

export interface IBarChartProps {
  // TODO: 定义类型
  containerId: string;
  dataSource: any[];
  xField: string;
  yField: string;
}

const BarChart: React.FC<IBarChartProps> = (props) => {
  const { containerId, dataSource, xField, yField } = props;

  const chartRef = useRef<any>(null);

  useEffect(() => {
    const columnPlot = new Column(containerId, {
      data: dataSource,
      xField,
      yField,
      label: {
        // 可手动配置 label 数据标签位置
        position: "middle", // 'top', 'bottom', 'middle',
        // 配置样式
        style: {
          fill: "#FFFFFF",
          opacity: 0.6,
        },
      },
      xAxis: {
        label: {
          autoRotate: false,
          autoHide: false,
        },
      },
    });
    columnPlot.render();
    chartRef.current = columnPlot;
  }, []);

  useEffect(() => {
    if (dataSource.length === 0) return;
    chartRef.current?.changeData(dataSource);
  }, [dataSource]);

  return <div className={styles.bar} id={containerId}></div>;
};

export default BarChart;
