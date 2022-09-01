import { MockedProvider } from '@apollo/react-testing'
import '@testing-library/jest-dom'
import { cleanup, fireEvent, render, screen, waitFor } from '@testing-library/react'
import Settings from 'src/pages/settings'
import { TEST_IDS } from 'src/utils/constants'
import { DynamicValues } from 'src/__mocks__/repos.mock'
import { apolloMockSetPAT } from 'src/__mocks__/settings.mock'

afterEach(() => {
  cleanup()
  jest.clearAllMocks()
})

describe('Components: (Settings)', () => {
  it('calling useMutation(): setting PAT - token invalid', async () => {
    render(
      <MockedProvider addTypename={false}>
        <Settings />
      </MockedProvider>
    )

    // Get input to set PAT
    const inputText = screen.getByTestId(TEST_IDS.patInputText)
    if (inputText) {
      fireEvent.change(inputText, { target: { value: `${DynamicValues.invalidPAT}` } })
      expect((inputText as HTMLInputElement).value).toBe(`${DynamicValues.invalidPAT}`)

      // Click to validate given token
      const validateButton = screen.getByTestId(TEST_IDS.patValidateToken)
      fireEvent.click(validateButton)

      // Checks if token is invalid
      await waitFor(() => {
        const element = screen.getByText('Token invalid')
        expect(element as HTMLParagraphElement).toBeInTheDocument()
      })
    }
  })

  it('calling useMutation(): setting PAT - token valid', async () => {
    render(
      <MockedProvider addTypename={false}>
        <Settings />
      </MockedProvider>
    )

    // Get input to set PAT
    const inputText = screen.getByTestId(TEST_IDS.patInputText)
    if (inputText) {
      fireEvent.change(inputText, { target: { value: `${DynamicValues.validPAT}` } })
      expect((inputText as HTMLInputElement).value).toBe(`${DynamicValues.validPAT}`)

      // Click to validate given token
      const validateButton = screen.getByTestId(TEST_IDS.patValidateToken)
      fireEvent.click(validateButton)

      // Checks if token is valid
      await waitFor(() => {
        const element = screen.getByText('Token valid')
        expect(element as HTMLParagraphElement).toBeInTheDocument()
      })
    }
  })

  it('calling useMutation(): setting PAT - saving token in data base', async () => {
    render(
      <MockedProvider mocks={[apolloMockSetPAT]} addTypename={false}>
        <Settings />
      </MockedProvider>
    )

    // Get input to set PAT
    const inputText = screen.getByTestId(TEST_IDS.patInputText)
    if (inputText) {
      fireEvent.change(inputText, { target: { value: `${DynamicValues.validPAT}` } })
      expect((inputText as HTMLInputElement).value).toBe(`${DynamicValues.validPAT}`)

      // Click to save given token
      const saveButton = screen.getByTestId(TEST_IDS.patSetToken)
      fireEvent.click(saveButton)

      // Checks if token is invalid
      await waitFor(() => {
        const element = screen.getByText('PAT saved')
        expect(element).toBeInTheDocument()
      })
    }
  })
})
