import React from 'react'
import styled from 'styled-components'
import color from 'color'
import { Pigmant } from './types'

type PigmantItemProps = {
  pigmant: Pigmant
}
const PigmantItem = ({ pigmant }: PigmantItemProps) => {
  return (
    <Container hexColor={pigmant.hex}>
      <Text>{pigmant.code}</Text>
    </Container>
  )
}

export default PigmantItem

type ContainerProps = {
  hexColor: string
}
const Container = styled.div<ContainerProps>`
  display: flex;
  justify-content: center;
  background-color: ${(p) => p.hexColor};
  padding: 32px;
`
const Text = styled.p`
  background-color: white;
  color: black;
  padding: 8px 16px;
  width: fit-content;
`
