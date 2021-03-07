import { Tabs } from 'zarm';
import { useState } from 'react';

const { Panel } = Tabs;

const Demo = () => {
  const [value, setValue] = useState(0);

  return (
    <Tabs scrollable value={value} onChange={setValue} direction="vertical">
      <Panel title="选项卡1">
        <div className="content">选项卡1内容</div>
      </Panel>
      <Panel title="选项卡2">
        <div className="content">选项卡2内容</div>
      </Panel>
      <Panel title="选项卡3">
        <div className="content">选项卡3内容</div>
      </Panel>
      <Panel title="选项卡4">
        <div className="content">选项卡4内容</div>
      </Panel>
      <Panel title="选项卡5">
        <div className="content">选项卡5内容</div>
      </Panel>
      <Panel title="选项卡6">
        <div className="content">选项卡6内容</div>
      </Panel>
      <Panel title="选项卡7">
        <div className="content">选项卡7内容</div>
      </Panel>
    </Tabs>
  );
}

export default Demo
