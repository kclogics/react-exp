import React from 'react'
import PropTypes from 'prop-types'
import { FormGroup, Label, FormFeedback } from 'reactstrap'

const FormItem = ({ children, label, errorValidationMessage, ...props }) => {
  return (
    <FormGroup {...props}>
      {label && <Label size="md">{label}</Label>}
      {children}
      {errorValidationMessage && (
        <FormFeedback>{errorValidationMessage}</FormFeedback>
      )}
    </FormGroup>
  )
}

FormItem.propTypes = {
  children: PropTypes.node,
  label: PropTypes.string,
  errorValidationMessage: PropTypes.string,
}

export default FormItem
