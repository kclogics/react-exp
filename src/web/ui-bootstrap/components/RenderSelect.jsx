import React from 'react'
import PropTypes from 'prop-types'
import { FormGroup, Label, Input, FormFeedback } from 'reactstrap'

const RenderField = ({
  input,
  label,
  type,
  children,
  meta: { touched, error } = {},
  className,
}) => {
  let valid = true
  if (touched && error) {
    valid = false
  }

  return (
    <FormGroup className={className}>
      {label && (
        <Label className="text-muted" for={input && (input.id || input.name)}>
          {label}
        </Label>
      )}
      <Input
        id={input && (input.id || input.name)}
        type={type}
        invalid={!valid}
        {...input}
      >
        {children}
      </Input>
      {touched && (error && <FormFeedback>{error}</FormFeedback>)}
    </FormGroup>
  )
}

RenderField.propTypes = {
  input: PropTypes.object,
  label: PropTypes.string,
  type: PropTypes.string,
  meta: PropTypes.object,
  children: PropTypes.node,
  className: PropTypes.string,
}

export default RenderField
