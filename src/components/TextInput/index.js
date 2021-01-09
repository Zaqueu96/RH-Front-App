import React, {
  useEffect,
  useRef,
  forwardRef,
  useState,
  useCallback,
} from "react";
import PropTypes from "prop-types";
import { TextField } from "@material-ui/core";

import { useField } from "@unform/core";

function TextInput({ name, ...rest }) {
  const inputRef = useRef(null);
  const { fieldName, registerField, defaultValue, error } = useField(name);
  const [value,setValue] = useState(defaultValue || "");
  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: "value",
    });
  }, [fieldName, registerField]);

  const change = useCallback(({ target: { value:valueT } }) => {
    setValue(valueT);
  }, []);
  return (
    <>
      <TextField
        error={!!error}
        defaultValue={defaultValue}
        helperText={error}
        onChange={change}
        variant="outlined"
        {...rest}
      />
      <input ref={inputRef} name={fieldName} type="hidden" value={value} />
    </>
  );
}

TextInput.propTypes = {
  name: PropTypes.string.isRequired,
};

export default forwardRef(TextInput);
