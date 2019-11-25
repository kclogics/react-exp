import React, { useContext } from 'react'
import styled, { withTheme } from 'styled-components'
import PropTypes from 'prop-types'
import Container from './layouts/container';
 
 
 
 
export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(300px, 1fr));
  grid-gap: 30px;
  @media (max-width: 1023px) {
    grid-template-columns: repeat(2, minmax(300px, 1fr));
  }
  @media (max-width: 767px) {
    grid-template-columns: repeat(1, minmax(300px, 1fr));
  }
`

const renderListingItems = ({ listings, toggleDrawer, loading }) => {
  if (listings && !!listings.length)
    return (
      <> 
        <Grid>
          <div>1</div><div>2</div>
         
          
          </Grid>
      </>
    )
}



const TAB_ITEMS = {
  status: 'Status',
  basicInfo: 'Basic info',
  contacts: 'Contacts',
  features: 'Features',
  notes: 'Notes',
  files: 'Files',
}

const ListingDetailView = ({
  id: listingId,
  address,
  propertyDetails,
  contacts,
  features,
  note,
  activeTab,
  onTabClick,
  theme,
}) => {
  const appraisal = (propertyDetails &&
    propertyDetails.appraisals &&
    propertyDetails.appraisals[0]) || { value: 0 }
  return (
   <>
   {address.fullAddress}
   </>
  )
}

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}



export default function Home7() {
    return (
    <>
    <h2>Home7</h2>
    <Container> <div>hi</div></Container> 
   
    </>
    )
  }


  ListingDetailView.propTypes = {
    id: PropTypes.string.isRequired,
    address: PropTypes.shape({
      fullAddress: PropTypes.string.isRequired,
    }),
    activeTab: PropTypes.string.isRequired,
    onTabClick: PropTypes.func.isRequired,
    features: PropTypes.object.isRequired,
    contacts: PropTypes.array,
    propertyDetails: PropTypes.object,
    note: PropTypes.object,
    theme: PropTypes.object,
  }
