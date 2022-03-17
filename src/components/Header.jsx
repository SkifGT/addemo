import React from 'react'
import { PageHeader, Divider } from 'antd';


function Header() {
  return (<>
    <PageHeader
        title="AntDesign Demo"
        subTitle="Lesson"
    />
    <Divider>Pizza database</Divider>
  </>
  )
}

export default Header