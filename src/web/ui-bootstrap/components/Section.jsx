import React from 'react'
import PropTypes from 'prop-types'
import styled, { withTheme } from 'styled-components'
import cn from 'classnames'
import { Collapse } from 'reactstrap'
import Divider from './Divider'

const Container = styled.section`
  background-color: #fff;
  :first-child {
    border-top-right-radius: 4px;
    border-top-left-radius: 4px;
  }
  :last-child {
    border-bottom-right-radius: 4px;
    border-bottom-left-radius: 4px;
  }
`

const Content = styled.div`
  padding: ${props => (props.withPadding ? '1.25rem 2rem' : '')};

  @media (max-width: 767px) {
    padding: ${props => (props.withPadding ? '1.25rem 1rem' : '')};
  }
`

const TitleContainer = styled.div`
  padding: ${props => (props.withPadding ? '2.5rem 2rem 0' : '')};
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: ${props => (props.onClick ? 'pointer' : '')};
`

const Title = styled.span`
  color: ${props => props.theme.colors.secondary};
  margin-bottom: 15px;
`

const SectionDivider = styled(Divider)`
  margin-top: ${props => (props.isOpen ? '40px' : '30px')};
`

const CollapsibleIcon = styled.i`
  font-size: 1.25rem;
  color: ${props => props.theme.colors.gray90};
`

const Section = ({
  className,
  title,
  showDivider,
  children,
  isOpen,
  onClick,
  withPadding,
}) => {
  return (
    <Container className={className}>
      {title && (
        <TitleContainer onClick={onClick} withPadding={withPadding}>
          {title && <Title>{title}</Title>}
          {onClick && (
            <CollapsibleIcon
              className={cn('fa', isOpen ? 'fa-chevron-up' : 'fa-chevron-down')}
            />
          )}
        </TitleContainer>
      )}
      <Collapse isOpen={isOpen}>
        <Content withPadding={withPadding}>{children}</Content>
      </Collapse>
      {showDivider && <SectionDivider isOpen={isOpen} />}
    </Container>
  )
}

Section.propTypes = {
  className: PropTypes.string,
  title: PropTypes.node,
  showDivider: PropTypes.bool,
  children: PropTypes.node,
  isOpen: PropTypes.bool,
  onClick: PropTypes.func,
  withPadding: PropTypes.bool,
}

Section.defaultProps = {
  collapsible: false,
  isOpen: true,
  withPadding: true,
}

export default withTheme(Section)
