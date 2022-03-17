import React from 'react'
import { Table, Typography, BackTop, Image  } from 'antd'
import{ pizzas } from '../data'


const style = {
  height: 40,
  width: 40,
  lineHeight: '40px',
  borderRadius: 4,
  backgroundColor: '#1088e9',
  color: '#fff',
  textAlign: 'center',
  fontSize: 14,
};



function _Table({rows = 5}) {
    
    const columns = [
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
          render: text => <Typography.Text copyable>{ text }</Typography.Text> 
        },
        {
          title: 'Image',
          dataIndex: 'imageUrl',
          key: 'image',
          render: (image) => <Image src={image} alt='Pizza' width={150}/>,
        },
        {
          title: 'Price',
          dataIndex: 'price',
          key: 'price',
          render: dataIndex => `${ dataIndex } $`,
          sorter: (a,b) => a.price - b.price,
        },
      ];
    const dataSource = pizzas.map((item)=>({...item, key: item.id}))

  return (
    <>
    <Table 
    dataSource = { dataSource } 
    columns={ columns }
    pagination={{
      // defaultPageSize: 5,
      // showSizeChanger: true,
      // pageSizeOptions: [3, 4, 5, 6]
      pageSize: rows
    }} 
   />;
    <BackTop>
      <div style={style}>UP</div>
    </BackTop>
    </>
  )
}

export default _Table