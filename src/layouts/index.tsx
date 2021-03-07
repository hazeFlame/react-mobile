import { useState } from 'react';
import { Icon, TabBar, Cell, Button, NavBar } from 'zarm';
import { history } from 'umi';

const TabIcon = Icon.createFromIconfont('//at.alicdn.com/t/font_1340918_lpsswvb7yv.js');

import 'zarm/dist/zarm.css';
const App = (props: any) => {
  const [activeKey, setActiveKey] = useState('/');
  const [visible, setVisible] = useState(true);

  if (props.location.pathname === '/login') {
    return 1
  }

  return (
    <>
      <NavBar
        left={
          <Icon
            type="arrow-left"
            theme="primary"
            onClick={() => window.history.back()}
          />
        }
      />
      { props.children}
      <TabBar
        visible={visible}
        activeKey={activeKey}
        onChange={(v: string) => { setActiveKey(v), history.push(v) }}>
        <TabBar.Item
          itemKey="/"
          title="主页"
          icon={<TabIcon type="home" />}
        />
        <TabBar.Item
          itemKey="/a"
          title="商品"
          icon={<TabIcon type="insurance" />}
          badge={{ shape: 'circle', text: '3' }}
        />
        <TabBar.Item
          itemKey="/b"
          title="我的"
          icon={<TabIcon type="user" />}
          badge={{ shape: 'dot' }}
        />
      </TabBar>
    </>
  );
}

export default App
