import React from 'react'
import NoteStep from './NoteStep'

describe('<NoteStep />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<NoteStep />)
  })
})