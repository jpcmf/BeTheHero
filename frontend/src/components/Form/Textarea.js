import React, { useEffect, useRef } from 'react';
import { useField } from '@unform/core';

// import { Container } from './styles';

export default function Textarea({ name, ...rest }) {
  const inputRef = useRef(null);
  const { fieldName, registerField, defaultValue, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <div>
      <textarea ref={inputRef} defaultValue={defaultValue} {...rest} />
      {error && <span>{error}</span>}
    </div>
  );
}
