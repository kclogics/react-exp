import React from 'react'
import PropTypes from 'prop-types'
import { FormFeedback, CustomInput } from 'reactstrap'

const RenderCheckBox = ({
  input,
  label,
  type,
  meta: { touched, error } = {},
  className,
}) => {
  return (
    <React.Fragment>
      <CustomInput
        className={className}
        placeholder={label}
        type={type}
        {...input}
        label={label}
        id={input.id || input.name}
      />
      {touched && (error && <FormFeedback>{error}</FormFeedback>)}
    </React.Fragment>
  )
}

RenderCheckBox.propTypes = {
  input: PropTypes.object,
  label: PropTypes.node,
  type: PropTypes.string,
  meta: PropTypes.object,
  className: PropTypes.string,
}

export default RenderCheckBox
