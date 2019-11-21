import React from 'react'
import PropTypes from 'prop-types'
import styled, { withTheme } from 'styled-components'
import { Row, Col, Container } from './'

const Wrapper = styled.div`
  padding: 1rem;
  color: ${props => props.theme.colors.white};
  background-color: ${props => props.theme.colors.secondary};
  z-index: 11;
  position: relative;
  ${props =>
    props.isSticky &&
    'box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);'};
`

const Toolbar = ({ components, rightComponents, style, isSticky }) => {
  return (
    <Wrapper style={style} isSticky={isSticky}>
      <Container>
        <Row className="no-gutters">
          <Col className="d-flex align-items-center">{components}</Col>
          <Col className="text-right ml-auto">{rightComponents}</Col>
        </Row>
      </Container>
    </Wrapper>
  )
}

Toolbar.propTypes = {
  components: PropTypes.node,
  rightComponents: PropTypes.node,
  style: PropTypes.object,
  isSticky: PropTypes.bool,
}

export default withTheme(Toolbar)
