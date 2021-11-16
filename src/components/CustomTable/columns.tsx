export const columns = [
  {
    title: "id",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "html_url",
    dataIndex: "html_url",
    key: "html_url",
    render: (html_url: string) => <a href={html_url}>{html_url}</a>,
  },
  {
    title: "created_at",
    dataIndex: "created_at",
    key: "created_at",
  },
  {
    title: "updated_at",
    dataIndex: "updated_at",
    key: "updated_at",
  },
  {
    title: "pushed_at",
    dataIndex: "pushed_at",
    key: "pushed_at",
  },
];
