import React from 'react';

function Input({ value, onChange }) {
  return (
    <>
      <textarea className="markdown-text" value={value} onChange={onChange}/>
    </>
  );
}

export default Input;
