import { Row, Col, Slider, Typography } from 'antd'
import React from 'react';

import Header from "./components/Header";
import Table from "./components/Table";

function App() {
  const [rows, setRows] = React.useState(5)
  return (<>
    <Header/>
    <Row>
      <Col xs={24} md={{ span: 12, offset: 6}}>
      <Typography.Title level={4}>Количество пицц на странице:</Typography.Title>
      <Slider min={2} max={9} defaultValue={rows} onChange={setRows}/>
        <Table rows = {rows} />
      </Col>
    </Row>

    </>
  );
  

}

export default App;
