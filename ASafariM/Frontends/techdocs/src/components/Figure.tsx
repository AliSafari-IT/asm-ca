import React from "react";
// client-docs\src\components\Figure.tsx
 const Figure = ({ children }) => (
    <div style={{ boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(190,0,60,0.24)', padding: '.3rem', margin: '.2rem' }}>
      {children}
    </div>
  );

  export default Figure;