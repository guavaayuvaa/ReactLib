import React from 'react';

let renderCount = 0;

const RenderLogger = React.memo(({ label }) => {
  renderCount++;
  console.log(`${label} render count:`, renderCount);
  return <div>{label} rendered {renderCount} times</div>;
});

export default RenderLogger;
