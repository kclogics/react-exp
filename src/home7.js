import React, { useContext } from 'react'
import styled, { withTheme } from 'styled-components'
 
 



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
        <Grid><div>1</div><div>2</div></Grid>
      </>
    )

  
}

export default function Home7() {
    return (
    <>
    <h2>Home7</h2>
  
    </>
    )
  }
