import React from "react";
import styles from "./index.module.scss";
import { columns } from "./columns";
import { Table } from "antd";

export interface ICustomTableProps {
  // TODO: 定义类型
  dataSource: any[];
  total: number;
  page: number;
  onChange: (page: number) => void;
}

const CustomTable: React.FC<ICustomTableProps> = (props) => {
  const { dataSource, total, page, onChange } = props;
  return (
    <Table
      columns={columns}
      dataSource={dataSource}
      rowKey={(item) => item.id}
      pagination={{
        total,
        current: page,
        showSizeChanger: false,
        onChange,
      }}
    />
  );
};

export default CustomTable;
