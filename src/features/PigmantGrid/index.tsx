import React from 'react'
import styled from 'styled-components'
import pigmants from '../../data/pigments'
import PigmantItem from './PigmantItem'

type PigmantGridProps = {
  //
}
const PigmantGrid = ({}: PigmantGridProps) => {
  const pigmantList = pigmants.map((pigmant) => (
    <PigmantItem pigmant={pigmant} />
  ))

  return <Container>{pigmantList}</Container>
}

export default PigmantGrid

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
`
