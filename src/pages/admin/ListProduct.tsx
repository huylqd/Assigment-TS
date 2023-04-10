// ANTD LAYOUT
import { useEffect, useState } from "react";
import { Button, Popconfirm, Image, Space, Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import { Link } from "react-router-dom";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";

// interface data type product
import { IProduct } from "../../types/product";
import { ICategory } from "../../types/category";
import { Input, } from 'antd';
import _ from 'lodash';

const { Search } = Input;

const ListProduct = (props: any) => {
  //get all product
  const [products, setProducts] = useState<IProduct[]>([]);
  const [categories, setCategories] = useState<ICategory[]>([]);

  useEffect(() => {
    setProducts(props.products);
  }, [props.products]);

  useEffect(() => {
    setCategories(props.categories);
  }, [props.categories]);

  // data product
  const columns: ColumnsType<IProduct> = [
    {
      title: "Số thứ tự",
      key: "index",
      render: (text, record, index) => {
        return index + 1;
      },
    },
    {
      title: "Tên",
      dataIndex: "name",
      key: "name",
      sorter: (obj1, obj2):any => {
        return obj1.name.localeCompare(obj2.name);
      },
    },
    {
      title: "Danh mục",
      dataIndex: "categoryId",
      key: "categoryId",
      render: (record: any): any => {
        const nameCate = categories.find((c) => c._id === record);
        return <span style={{ color: "#1677ff" }}>{nameCate?.name}</span>;
      },
    },
    {
      title: "Giá",
      dataIndex: "price",
      key: "price",
      sorter: (obj1, obj2):any => {
        return obj1.price - obj2.price
      },
      render: (record): any => {
        return (
          <span className="text-danger">
            {record.toLocaleString("vi-VN", {
              style: "currency",
              currency: "VND",
            })}
          </span>
        );
      },
    },
    {
      title: "Hình ảnh",
      key: "image",
      dataIndex: "image",
      render: (record): any => {
        return <Image width={100} height={100} src={record[0].url} />;
      },
    },
    {
      title: "Chức năng",
      key: "action",
      render: (record) => {
        return (
          <Space size="middle">
            <Link to={`/admin/products/${record._id}/update`}>
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

  const onHandleChange = _.debounce((e: any) => {
    props.onKeyWord(e.target.value)
  },500)

  //confirm delete
  const text = "Bạn có chắc chắn muốn xóa?";
  const description = "Điều này sẽ xóa đi sản phẩm của bạn.";
  const onDelete = (id: string) => {
    props.onDelete(id);
  };

  return (
    <div>
      <Space direction="vertical">
        <Search placeholder="Search Name Products"  style={{ width: 200 }} onChange={onHandleChange} />
      </Space>
      <Table
        columns={columns}
        dataSource={products}
        rowKey={(record, index) => index!}
      />
    </div>

  );
};

export default ListProduct;