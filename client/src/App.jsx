import { useState } from 'react';
import Button from './components/Button';
import Card from './components/Card';
import ListItem from './components/ListItem';
import Counter from './components/Counter';
import RenderLogger from './components/RenderLogger';
import ValidatedCounter from './components/ValidatedCounter';
import DynamicList from './components/DynamicList';

function App() {
  const [count, setCount] = useState(0);
  const [list, setList] = useState([
    { id: 'a', value: 'Item A' },
    { id: 'b', value: 'Item B' },
  ]);

  return (
    <div className="p-4 space-y-4">
      <Card title="Reusable Components">
        <Button label="Click Me" onClick={() => alert('Button Clicked')} />
       
      </Card>

      <Card title="Counter with Lifted State">
        <Counter
          count={count}
          onIncrement={() => setCount(c => c + 1)}
          onDecrement={() => setCount(c => c - 1)}
        />
        <Counter
          count={count}
          onIncrement={() => setCount(c => c + 1)}
          onDecrement={() => setCount(c => c - 1)}
        />
      </Card>

      <Card title="Render Logger ">
        <RenderLogger label="Logger" />
      </Card>

      <Card title="PropTypes Demo">
        <ValidatedCounter count={"not-a-number"} />
      </Card>

      <Card title="Dynamic List">
        <DynamicList items={list} useBadKeys={true} />
      </Card>
    </div>
  );
}

export default App;
