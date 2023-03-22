import { MockedProvider } from '@apollo/react-testing'
import '@testing-library/jest-dom'
import { cleanup, render, screen, waitFor } from '@testing-library/react'
import 'intersection-observer'
import { GlobalProvider, RepositoriesProvider } from 'src/state/contexts'
import { TEST_IDS } from 'src/utils/constants'
import RepositoriesView from 'src/views/repos'
import { RepositoryStatus } from 'src/views/repos/components/repositories-table/repositories-table-columns'
import { mockRepoSatus } from 'src/__mocks__/repo-status.mock'
import { apolloMockReposEmpty, apolloMockReposWithData } from 'src/__mocks__/repos.mock'

afterEach(() => {
  cleanup()
  jest.clearAllMocks()
})

describe('Components: (Repos)', () => {
  it('rendering component <RepositoryStatus />', async () => {
    render(<RepositoryStatus {...mockRepoSatus} />)
    const element = screen.getAllByTestId(TEST_IDS.repoDataDropdown)
    expect(element.length).toBe(5)
  })
})

describe('GraphQL queries: (Repos)', () => {
  it('calling useQuery(): data is fetched', async () => {
    render(
      <MockedProvider mocks={[apolloMockReposWithData]} addTypename={false}>
        <GlobalProvider>
          <RepositoriesProvider>
            <RepositoriesView />
          </RepositoriesProvider>
        </GlobalProvider>
      </MockedProvider>
    )

    await waitFor(() => {
      expect(screen.getByTestId(TEST_IDS.repoTableList)).toBeInTheDocument()
    })
  })

  it('calling useQuery(): no data is fetched', async () => {
    render(
      <MockedProvider mocks={[apolloMockReposEmpty]} addTypename={false}>
        <GlobalProvider>
          <RepositoriesProvider>
            <RepositoriesView />
          </RepositoriesProvider>
        </GlobalProvider>
      </MockedProvider>
    )

    await waitFor(() => {
      expect(screen.getByTestId(TEST_IDS.emptyData)).toBeInTheDocument()
    })
  })
})
