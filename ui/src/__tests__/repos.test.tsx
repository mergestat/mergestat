import { MockedProvider } from '@apollo/react-testing'
import '@testing-library/jest-dom'
import { cleanup, fireEvent, render, screen, waitFor } from '@testing-library/react'
import { RepositoriesProvider } from 'src/state/contexts'
import { TEST_IDS } from 'src/utils/constants'
import RepositoriesView from 'src/views/repositories'
import { RepositoriesTable } from 'src/views/repositories/components'
import { RepositoryStatus } from 'src/views/repositories/components/repositories-table/repositories-table-columns'
import { mockRepoSatus } from 'src/__mocks__/repo-status.mock'
import { apolloMockJustAngularRepo, apolloMockReposEmpty, apolloMockReposWithData, DynamicValues, mockRepoData } from 'src/__mocks__/repos.mock'

afterEach(() => {
  cleanup()
  jest.clearAllMocks()
})

describe('Components: (Repos)', () => {
  it('rendering component <RepositoriesTable /> when list is empty (No data available!)', () => {
    render(<RepositoriesTable />)
    const element = screen.getByTestId(TEST_IDS.repoListEmpty)
    expect(element).toBeInTheDocument()
    expect(element?.textContent).toBe('No data available!')
  })

  it('rendering component <RepositoriesTable /> when list has data', () => {
    render(<RepositoriesTable data={mockRepoData} />)
    const element = screen.getByTestId(TEST_IDS.repoTableList)
    expect(element).toBeInTheDocument()
  })

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
        <RepositoriesProvider>
          <RepositoriesView />
        </RepositoriesProvider>
      </MockedProvider>
    )

    await waitFor(() => {
      expect(screen.getByTestId(TEST_IDS.repoTableList)).toBeInTheDocument()
    })
  })

  it('calling useQuery(): no data is fetched', async () => {
    render(
      <MockedProvider mocks={[apolloMockReposEmpty]} addTypename={false}>
        <RepositoriesProvider>
          <RepositoriesView />
        </RepositoriesProvider>
      </MockedProvider>
    )

    await waitFor(() => {
      expect(screen.getByTestId(TEST_IDS.emptyRepositoryTable)).toBeInTheDocument()
    })
  })

  it('calling useQuery() and refetch(): searching \'mergestat\' repo', async () => {
    render(
      <MockedProvider mocks={[apolloMockReposWithData, apolloMockJustAngularRepo]} addTypename={false}>
        <RepositoriesProvider>
          <RepositoriesView />
        </RepositoriesProvider>
      </MockedProvider>
    )

    await waitFor(() => {
      const searchInput = screen.getByTestId(TEST_IDS.inputRepoSearch)
      if (searchInput) {
        fireEvent.change(searchInput, { target: { value: DynamicValues.angular } })
        expect((searchInput as HTMLInputElement).value).toBe(DynamicValues.angular)

        const repoName = screen.getByTestId(TEST_IDS.repoNameTable)
        expect(repoName).toHaveTextContent('angular/angular')
      }
    })
  })
})
