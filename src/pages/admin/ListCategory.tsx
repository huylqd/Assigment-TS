import React, { useEffect, useState } from "react";
import { Button, Popconfirm, Space, Table, message } from "antd";
import type { ColumnsType } from "antd/es/table";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { ICategory } from "../../types/category";
import { Link } from "react-router-dom";
import { Input, } from 'antd';
import _ from 'lodash';

// type of Props
interface IProps {
  categories: ICategory[];
  onDelete: (id: string) => void;
  onKeyWord: (value: string) => void;
}
const { Search } = Input;

const ListCategory = (props: IProps) => {
  const [category, setCategories] = useState<ICategory[]>([]);
  useEffect(() => {
    setCategories(props.categories);
  }, [props]);

  const text = "Bạn có chắc chắc muốn xóa?";
  const description = "Điều này sẽ xóa đi toàn bộ sản phẩm của bạn.";

  const onDelete = (id: string) => {
    props.onDelete(id);
  };

  const onHandleChange = _.debounce((e: any) => {
    props.onKeyWord(e.target.value.toLowerCase())
  }, 200)
  
  const columns: ColumnsType<ICategory> = [
    {
      title: "Số thứ tự",
      key: "index",
      render: (text, record, index) => {
        return index + 1;
      },
    },
    {
      title: "Tên danh mục",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Chức năng",
      key: "action",
      render: (record): any => {
        return (
          <Space size="middle">
            <Link to={`/admin/categories/${record._id}/update`}>
              <Button className="btn ">
                <EditOutlined className="d-block btn-edit-pro" />
              </Button>
            </Link>

            <Popconfirm
              placement="topLeft"
              title={text}
              description={description}
              onConfirm={() => onDelete(record._id)}
              cancelText="Hủy"
              okText="Xóa"
            >
              <Button className="btn m-0">
                <DeleteOutlined className="d-block mb-1 text-danger" />
              </Button>
            </Popconfirm>
          </Space>
        );
      },
    },
  ];

  return (
    <div>
      <Space direction="vertical">
        <Search placeholder="Search category" style={{ width: 200 }} onChange={onHandleChange} />
      </Space>
      <Table
        columns={columns}
        dataSource={category}
        rowKey={(record, index) => index!}
      />
    </div>

  );
};

export default ListCategory;