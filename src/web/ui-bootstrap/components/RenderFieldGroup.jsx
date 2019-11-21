import React from 'react'
import PropTypes from 'prop-types'
import {
  FormGroup,
  Label,
  Input,
  FormFeedback,
  InputGroup,
  InputGroupAddon,
} from 'reactstrap'

const RenderField = ({
  input,
  label,
  type,
  meta: { touched, error } = {},
  children,
  placeholder,
  prepend,
  append,
  ...rest
}) => {
  let valid = true
  if (touched && error) {
    valid = false
  }

  return (
    <FormGroup {...rest}>
      {label && (
        <Label className="text-muted" for={input && (input.id || input.name)}>
          {label}
        </Label>
      )}
      <InputGroup>
        {prepend && (
          <InputGroupAddon addonType="prepend">{prepend}</InputGroupAddon>
        )}
        <Input
          placeholder={placeholder || label}
          id={input && (input.id || input.name)}
          type={type}
          invalid={!valid}
          {...input}
        >
          {children}
        </Input>
        {append && (
          <InputGroupAddon addonType="append">{append}</InputGroupAddon>
        )}
        {touched && (error && <FormFeedback>{error}</FormFeedback>)}
      </InputGroup>
    </FormGroup>
  )
}

RenderField.propTypes = {
  input: PropTypes.object,
  label: PropTypes.string,
  type: PropTypes.string,
  meta: PropTypes.object,
  placeholder: PropTypes.string,
  children: PropTypes.array,
  prepend: PropTypes.node,
  append: PropTypes.node,
}

export default RenderField
