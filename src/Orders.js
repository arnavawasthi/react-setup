import './App.css';
import { Table, Tabs } from 'antd';
import React, { useEffect, useState} from "react";

function Orders() {
  // const  [hasErrors, setErrors] =  useState(false)
  const  [orders, setOrders] = useState([])
  const [isLoaded, setIsLoaded] = useState(false);
  const { TabPane } = Tabs;

  function callback(key) {
    console.log(key);
  }
  
  useEffect(() => {

    fetch("http://localhost:3000/orders.json")
      .then(res => res.json())
      .then(res => {
        setOrders(res)
        setIsLoaded(true)
      })
      // .catch(() => this.setState({ hasErrors: true }));
  }, [])

  const columns = [
    {
      title: 'PO. NO.',
      dataIndex: 'po_no',
      key: 'po_no',
    },
    {
      title: 'Order No.',
      dataIndex: 'order_no',
      key: 'order_no',
    },
    {
      title: 'Created',
      dataIndex: 'created_on',
      key: 'created_on',
    },
    {
      title: 'Prod. CODE',
      dataIndex: 'product_code',
      key: 'product_code',
    },
    {
      title: 'CUST. CODE',
      dataIndex: 'customer_code',
      key: 'customer_code',
    },
    {
      title: 'TYPE',
      dataIndex: 'type',
      key: 'type',
    },
    {
      title: '*PROD. SPEC.',
      dataIndex: 'product_spec',
      key: 'product_spec',
    },
    {
      title: 'SIZE (WxL)',
      dataIndex: 'size',
      key: 'size',
    },
    {
      title: 'CORE ID',
      dataIndex: 'core_id',
      key: 'core_id',
    },
    {
      title: 'QUANTITY',
      dataIndex: 'quantity',
      key: 'quantity',
    },
  ];
  if(!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div>
        <Tabs defaultActiveKey="1" onChange={callback}>
          <TabPane tab="Tab 1" key="1">
            Content of Tab Pane 1
          </TabPane>
          <TabPane tab="Tab 2" key="2">
            Content of Tab Pane 2
          </TabPane>
          <TabPane tab="Tab 3" key="3">
            Content of Tab Pane 3
          </TabPane>
        </Tabs>
        <Table dataSource={orders} columns={columns} />;
      </div>
    )
  }
}

export default Orders;
