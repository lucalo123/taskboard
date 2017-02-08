import React, {PropTypes} from 'react';

const Tabs = ({list, activeId, onTabClick}) => {
  let items = list.slice();
  items.unshift({id: -1, name: 'All'});
  return (
    <ul className="tabs">
      {items.map(tab => {
         return <li key={tab.id} className={tab.id === activeId && 'tab-active'} onClick={() => { onTabClick(tab.id); }}><a>{tab.name}</a></li>;
      })}
    </ul>
  );
};

Tabs.propTypes = {
  list: PropTypes.array.isRequired,
  activeId: PropTypes.number.isRequired,
  onTabClick: PropTypes.func.isRequired
};

export default Tabs;