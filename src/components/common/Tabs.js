import React, {PropTypes} from 'react';

const Tabs = ({list}) => {
  const items = list.map((name, index) => {
    return <li key={index} className={index === 0 && 'tab-active'}><a>{name}</a></li>;
  });
  return (
    <ul className="tabs">
      {items}
    </ul>
  );
};

Tabs.propTypes = {
  list: PropTypes.array.isRequired
};

export default Tabs;