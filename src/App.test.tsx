import React from 'react'
import { MockedProvider } from '@apollo/client/testing'
import { render, screen, waitFor } from '@testing-library/react'
import App, { ME_QUERY } from './App'

describe('App component', () => {
  test('should render the fragment', async () => {
    const mocks = [
      {
        request: {
          query: ME_QUERY,
        },
        result: {
          data: {
            me: 12314123,
          },
        },
      },
    ]
    const { asFragment } = render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <App />
      </MockedProvider>
    )

    await waitFor(async () => {
      await new Promise((resolve) => setTimeout(resolve, 0))
    })

    expect(asFragment()).toMatchSnapshot()
  })

  test('should render and verify me user in the document', async () => {
    const mocks = [
      {
        request: {
          query: ME_QUERY,
        },
        result: {
          data: {
            me: 12314123,
          },
        },
      },
    ]
    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <App />
      </MockedProvider>
    )

    await waitFor(async () => {
      await new Promise((resolve) => setTimeout(resolve, 0))
    })

    const linkElement = screen.getByText(/12314123/)
    expect(linkElement).toBeInTheDocument()
  })
})
