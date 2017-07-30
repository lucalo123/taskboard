import React, {PropTypes} from 'react';

const Panel = ({title, children}) => {
  return (
    <div className="panel panel-default">
      <div className="panel-heading">{title}</div>
      <div className="panel-body">
        {children}
      </div>
  </div>
  );
};

Panel.propTypes = {
  children: React.PropTypes.oneOfType([
      React.PropTypes.arrayOf(React.PropTypes.node),
      React.PropTypes.node
    ]),
  title: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired
};

export default Panel;