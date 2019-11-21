import React, { useState } from 'react';
import styled, { withTheme } from 'styled-components'
 
const ListingGroupLabel = styled.div`
margin: 60px 0 30px;
color: green
`

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

export default function Home5() {
    return (
    <>
    <h2>Home6</h2>
    <ListingGroupLabel>In progress</ListingGroupLabel>
    <Grid>
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
      <div>5</div>
      <div>6</div>
      </Grid>
    </>
    )
  }

  