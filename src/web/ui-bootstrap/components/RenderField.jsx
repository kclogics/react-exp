import React from 'react'
import PropTypes from 'prop-types'
import { FormGroup, Label, Input, FormFeedback, FormText } from 'reactstrap'
import { TimePicker, DatePicker } from 'antd'

const getInputClassName = ({ input, valid }) => {
  let className = { ...input.className, 'form-control': true, 'p-0': true }
  if (!valid) className = { ...className, 'is-invalid': true }
  return className
}

const RenderField = ({
  input,
  label,
  type,
  meta: { touched, error } = {},
  children,
  placeholder,
  helpText,
  ...rest
}) => {
  let valid = true
  if (touched && error) {
    valid = false
  }
  let lbl = ''
  if (label) {
    if (typeof label === 'string')
      lbl = (
        <Label className="text-muted" for={input && (input.id || input.name)}>
          {label}
        </Label>
      )
    else lbl = label
  }

  let Component = Input
  switch (input.type) {
    case 'time':
      Component = TimePicker
      input.className = getInputClassName({
        input,
        valid,
      })
      input.format = 'h:mm a'
      break
    case 'date':
      Component = DatePicker
      input.className = getInputClassName({
        input,
        valid,
      })
      input.format = 'D/M/YYYY'
      break
  }

  return (
    <FormGroup {...rest}>
      {lbl}
      <Component
        id={input && (input.id || input.name)}
        placeholder={placeholder || label}
        invalid={!valid}
        type={type}
        {...input}
      >
        {children}
      </Component>
      {touched && (error && <FormFeedback>{error}</FormFeedback>)}
      {helpText && <FormText color="muted">{helpText}</FormText>}
    </FormGroup>
  )
}

RenderField.propTypes = {
  input: PropTypes.object,
  label: PropTypes.node,
  type: PropTypes.string,
  meta: PropTypes.object,
  placeholder: PropTypes.string,
  children: PropTypes.array,
  helpText: PropTypes.string,
}

export default RenderField
