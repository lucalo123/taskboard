import React from 'react';
import ReactGridLayout from 'react-grid-layout';

const HomePage = () => {
  const layout = [
      {i: 'a', x: 0, y: 0, w: 1, h: 3, minH: 3},
      {i: 'b', x: 1, y: 0, w: 3, h: 3, minH: 3, minW: 2, maxW: 4},
      {i: 'c', x: 4, y: 0, w: 1, h: 3, minH: 3}
    ];
  const widgets = [
    {i: 'a', title: 'W #1', content: 'Content'},
    {i: 'b', title: 'W #2', content: 'Content'},
    {i: 'c', title: 'W #3', content: 'Content'}
  ];
  const gridItems = widgets.map((item) => {
    return (
      <div key={item.i} className="panel panel-default">
        <div className="panel-heading">{item.title}</div>
        <div className="panel-body">
          {item.content}
        </div>
      </div>
    );
  });
  return (
    <div>
      <h2>Taskboard</h2>
      <ReactGridLayout className="layout" layout={layout} cols={12} rowHeight={30} width={1140}>
        {gridItems}
      </ReactGridLayout>
    </div>
  );
};

export default HomePage;
