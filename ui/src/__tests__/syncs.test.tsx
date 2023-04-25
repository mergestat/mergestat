
import { MockedProvider } from '@apollo/react-testing'
import '@testing-library/jest-dom'
import { cleanup, fireEvent, render, screen, waitFor } from '@testing-library/react'
import 'intersection-observer'
import { useRouter } from 'next/router'
import { DynamicValues } from 'src/__mocks__/constants.mock'
import { apolloMockReposWithData } from 'src/__mocks__/repos.mock'
import { apolloMockAddTag, apolloMockSyncsTypesData } from 'src/__mocks__/syncs.mock'
import RepoDetailsPage from 'src/pages/v1/repos/[repository]'
import { GlobalProvider, RepositoriesProvider } from 'src/state/contexts'
import { TEST_IDS } from 'src/utils/constants'

jest.mock('next/router', () => ({
  __esModule: true,
  useRouter: jest.fn()
}))

afterEach(() => {
  cleanup()
  jest.clearAllMocks()
})

describe('GraphQL queries: (Syncs Types)', () => {
  it('calling useMutation(): creating a tag for a repo', async () => {
    const mockRouter = { push: jest.fn(), query: { repository: DynamicValues.repoId } };
    (useRouter as jest.Mock).mockReturnValue(mockRouter)

    render(
      <MockedProvider mocks={[apolloMockSyncsTypesData, apolloMockReposWithData, apolloMockAddTag]} addTypename={false}>
        <GlobalProvider>
          <RepositoriesProvider>
            <RepoDetailsPage />
          </RepositoriesProvider>
        </GlobalProvider>
      </MockedProvider>
    )

    // Click on 'Repo Settings'
    let settingsTab
    await waitFor(() => {
      settingsTab = screen.getByTestId(TEST_IDS.removeRepoSettingsTab)
      expect(settingsTab as HTMLButtonElement).toBeInTheDocument()
    })
    settingsTab && fireEvent.click(settingsTab)

    // Get input to create the tag
    let tagInput
    await waitFor(() => {
      tagInput = screen.queryByPlaceholderText(/Add a tag.../i)
      expect(tagInput as HTMLInputElement).toBeInTheDocument()
    })

    if (tagInput) {
      // Se new tag to add
      fireEvent.change(tagInput, { target: { value: 'new tag' } })
      expect((tagInput as HTMLInputElement).value).toBe('new tag')

      // Press Enter to add 'new tag'
      fireEvent.keyPress(tagInput, { key: 'Enter', code: 13, charCode: 13 })

      // Checks 'new tag' was added
      const newTag = screen.getByText(/new tag/i)
      expect(newTag as HTMLSpanElement).toBeInTheDocument()
    }
  })
})
