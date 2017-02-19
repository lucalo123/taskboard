import React, {PropTypes} from 'react';

const Tabs = ({list, activeId, onTabClick}) => {
  // TODO: Come up with a graceful solution for many tabs. An option would be to have a left and right caret that scrolls through overflowed tabs horizontally.
  // Copy array and add the 'All' option as the first and default option.
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