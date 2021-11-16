import React, { useEffect, useState } from "react";
import styles from "./index.module.scss";
import { httpRequest } from "@/services";
import {
  DEFAULT_LANGUAGE,
  DEFAULT_SORT,
  DESC_ORDER,
  LANGUAGES,
  ORDERS,
  SORTS,
} from "@/constants";
import { Select } from "antd";
import CustomTable from "@/components/CustomTable";
import BarChart from "@/components/BarChart";

const { Option } = Select;

const Github = () => {
  // 默认找Python项目
  const [language, setLanguage] = useState<string>(DEFAULT_LANGUAGE);
  // 升序降序
  const [order, setOrder] = useState<string>(DESC_ORDER);
  // 搜索规则
  const [sort, setSort] = useState<string>(DEFAULT_SORT);

  const [dataSource, setDataSource] = useState<any[]>([]);
  const [total, setTotal] = useState<number>(0);
  const [page, setPage] = useState<number>(1);

  // language change
  const handleLanguageChange = (language: string) => {
    setLanguage(language);
  };

  // order change
  const handleOrderChange = (order: string) => {
    setOrder(order);
  };

  // sort change
  const handleSortChange = (sort: string) => {
    setSort(sort);
  };

  // page change
  const handlePageChange = (page: number) => {
    setPage(page);
  };

  // 找出Github上星级最高的项目
  const fetchRepositories = async () => {
    const res = (await httpRequest.get(
      `/search/repositories?q=language:${language}&sort=${sort}&order=${order}&per_page=10&page=${page}`
    )) as any;

    setDataSource(res?.data?.items ?? []);
    setTotal(res?.data?.total_count ?? 0);
  };

  // 拉取仓库
  useEffect(() => {
    fetchRepositories();
  }, [language, order, sort, page]);

  return (
    <div className={styles.github}>
      <div className={styles.header}>
        <div className={styles.select}>
          <span className={styles.desc}>语言：</span>
          <Select value={language} onChange={handleLanguageChange}>
            {LANGUAGES.map((item) => (
              <Option key={item} value={item}>
                {item}
              </Option>
            ))}
          </Select>
        </div>
        <div className={styles.select}>
          <span className={styles.desc}>升序/降序：</span>
          <Select value={order} onChange={handleOrderChange}>
            {ORDERS.map((item) => (
              <Option key={item} value={item}>
                {item}
              </Option>
            ))}
          </Select>
        </div>
        <div className={styles.select}>
          <span className={styles.desc}>排序规则：</span>
          <Select value={sort} onChange={handleSortChange}>
            {SORTS.map((item) => (
              <Option key={item} value={item}>
                {item}
              </Option>
            ))}
          </Select>
        </div>
      </div>
      <div className={styles.table}>
        <CustomTable
          dataSource={dataSource}
          page={page}
          total={total}
          onChange={handlePageChange}
        />
      </div>
      <div className={styles.bar}>
        <BarChart
          dataSource={dataSource.map((item) => ({
            name: item?.name ?? "",
            stars: item?.stargazers_count ?? 0,
          }))}
          xField="name"
          yField="stars"
          containerId="starId"
        />
      </div>
      <div className={styles.bar}>
        <BarChart
          dataSource={dataSource.map((item) => ({
            name: item?.name ?? "",
            forks: item?.forks ?? 0,
          }))}
          xField="name"
          yField="forks"
          containerId="forkId"
        />
      </div>
      <div className={styles.bar}>
        <BarChart
          dataSource={dataSource.map((item) => ({
            name: item?.name ?? "",
            open_issues: item?.open_issues ?? 0,
          }))}
          xField="name"
          yField="open_issues"
          containerId="issueId"
        />
      </div>
    </div>
  );
};

export default Github;
