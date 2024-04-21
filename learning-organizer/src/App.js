import './App.css';
import * as React from 'react';
import GridLayout from 'react-grid-layout';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';

function App() {
  // Define the layout configuration for each grid item
  const layoutConfig = [
    { i: 'item1', x: 0, y: 0, w: 2, h: 3 },
    { i: 'item2', x: 2, y: 0, w: 4, h: 3 },
    { i: 'item3', x: 6, y: 0, w: 2, h: 3 }
  ];
  const gridItemProps = {
    i: 'fixedItem',
    x: 0,
    y: 0,
    w: 12,
    h: 5,
    static: true
  };

  return (
    <GridLayout className="example-layout" layout={layoutConfig} cols={12} rowHeight={30} width={1200}>
      <div key={gridItemProps.i} data-grid={gridItemProps} style={{ background: '#faad14' }}>
        Fixed Size Item
      </div>
    </GridLayout>
  );
};

export default App;
