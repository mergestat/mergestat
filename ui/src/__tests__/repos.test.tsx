import { MockedProvider } from '@apollo/react-testing'
import '@testing-library/jest-dom'
import { cleanup, fireEvent, render, screen, waitFor } from '@testing-library/react'
import 'intersection-observer'
import { RepositoriesProvider } from 'src/state/contexts'
import { TEST_IDS } from 'src/utils/constants'
import RepositoriesView from 'src/views/repositories'
import { RepositoryStatus } from 'src/views/repositories/components/repositories-table/repositories-table-columns'
import { AddRepositoryModal } from 'src/views/repositories/modals/add-repository-modal'
import { ManageAutoImportReposModal } from 'src/views/repositories/modals/auto-import-repository-modals/manage-auto-imports-modal'
import { SyncAutoImportReposModal } from 'src/views/repositories/modals/auto-import-repository-modals/sync-auto-import-modal'
import { DynamicValues } from 'src/__mocks__/constants.mock'
import { apolloMockImports } from 'src/__mocks__/imports.mock'
import { apolloMockAddExistingRepo, apolloMockAddNewRepo, apolloMockAutoImportUser } from 'src/__mocks__/repo-add.mock'
import { mockRepoSatus } from 'src/__mocks__/repo-status.mock'
import { apolloMockJustAngularRepo, apolloMockReposEmpty, apolloMockReposEmptyGitHubPat, apolloMockReposEmptyNoGitHubPat, apolloMockReposWithData, apolloMockWithoutResults } from 'src/__mocks__/repos.mock'

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

  it('calling useQuery(): there are no repos and GitHub Pat is not configured', async () => {
    render(
      <MockedProvider mocks={[apolloMockReposEmptyNoGitHubPat]} addTypename={false}>
        <RepositoriesProvider>
          <RepositoriesView />
        </RepositoriesProvider>
      </MockedProvider>
    )

    await waitFor(() => {
      expect(screen.getByTestId(TEST_IDS.emptyRepositoryTable)).toBeInTheDocument()
    })
  })

  it('calling useQuery(): there are no repos and GitHub Pat is configured', async () => {
    render(
      <MockedProvider mocks={[apolloMockReposEmptyGitHubPat]} addTypename={false}>
        <RepositoriesProvider>
          <RepositoriesView />
        </RepositoriesProvider>
      </MockedProvider>
    )

    await waitFor(() => {
      expect(screen.getByTestId(TEST_IDS.emptyRepository)).toBeInTheDocument()
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
      // Get input search to type
      const searchInput = screen.getByTestId(TEST_IDS.inputRepoSearch)
      if (searchInput) {
        // Typing 'angular'
        fireEvent.change(searchInput, { target: { value: DynamicValues.angular } })
        expect((searchInput as HTMLInputElement).value).toBe(DynamicValues.angular)

        // Check table to have angular repo record
        const repoName = screen.getByTestId(TEST_IDS.repoNameTable)
        expect(repoName).toHaveTextContent('angular/angular')
      }
    })
  })

  it('calling useQuery() and refetch(): searching repos without any result', async () => {
    render(
      <MockedProvider mocks={[apolloMockReposWithData, apolloMockWithoutResults]} addTypename={false}>
        <RepositoriesProvider>
          <RepositoriesView />
        </RepositoriesProvider>
      </MockedProvider>
    )

    await waitFor(() => {
      // Get input search to type
      const searchInput = screen.getByTestId(TEST_IDS.inputRepoSearch)
      if (searchInput) {
        // Typing 'qwerwefvs'
        fireEvent.change(searchInput, { target: { value: DynamicValues.weirdSearch } })
        expect((searchInput as HTMLInputElement).value).toBe(DynamicValues.weirdSearch)

        // Checks if table is empty
        const element = screen.getByTestId(TEST_IDS.repoListEmpty)
        expect(element).toBeInTheDocument()
        expect(element?.textContent).toBe('No data available!')
      }
    })
  })

  it('calling useMutation(): adding a repo by URL', async () => {
    render(
      <MockedProvider mocks={[apolloMockAddNewRepo]} addTypename={false}>
        <RepositoriesProvider>
          <AddRepositoryModal />
        </RepositoriesProvider>
      </MockedProvider>
    )

    // Get 'Add from URL' tab and click on it
    const elements = screen.getAllByText(/Add from URL/i)
    const tab = elements.find(ele => ele instanceof HTMLDivElement)
    fireEvent.click(tab as HTMLDivElement)

    // Get input to add repo
    const inputText = screen.getByTestId(TEST_IDS.addRepoInputText)
    if (inputText) {
      fireEvent.change(inputText, { target: { value: `${DynamicValues.urlGithub}${DynamicValues.newRepoToAdd}` } })
      expect((inputText as HTMLInputElement).value).toBe(`${DynamicValues.urlGithub}${DynamicValues.newRepoToAdd}`)

      // Click to add in memory table
      const addButton = screen.getByTestId(TEST_IDS.addRepoButton)
      fireEvent.click(addButton)

      // Finally click in 'Add Repository' to add repo to data base
      const addToDbButton = screen.getByTestId(TEST_IDS.addRepoToDbButton)
      fireEvent.click(addToDbButton)

      // Check success alert
      await waitFor(() => {
        const successAlert = screen.getByText('1 repo added')
        expect(successAlert).toBeInTheDocument()
      })
    }
  })

  it('calling useMutation(): adding a repo by CSV', async () => {
    render(
      <MockedProvider mocks={[apolloMockAddNewRepo, apolloMockAddExistingRepo, apolloMockReposWithData]} addTypename={false}>
        <RepositoriesProvider>
          <AddRepositoryModal />
        </RepositoriesProvider>
      </MockedProvider>
    )

    // Get 'Add from CSV' tab and click on it
    const elements = screen.getAllByText(/Add from CSV/i)
    const tab = elements.find(ele => ele instanceof HTMLDivElement)
    fireEvent.click(tab as HTMLDivElement)

    // Get text area to add repo
    const textArea = screen.getByTestId(TEST_IDS.addRepoTextArea)
    if (textArea) {
      const text = `${DynamicValues.urlGithub}${DynamicValues.newRepoToAdd}
      ${DynamicValues.urlGithub}${DynamicValues.existingRepo}`

      fireEvent.change(textArea, { target: { value: text } })
      expect((textArea as HTMLInputElement).value).toBe(text)

      // Finally click in 'Add Repository' to add repo to data base
      const addToDbButton = screen.getByTestId(TEST_IDS.addRepoToDbButton)
      fireEvent.click(addToDbButton)

      // Check success alert
      await waitFor(() => {
        const warningAlert = screen.getByText('1 repo added')
        expect(warningAlert).toBeInTheDocument()
      })

      await waitFor(() => {
        const warningAlert = screen.getByText('1 repo already exists')
        expect(warningAlert).toBeInTheDocument()
      })
    }
  })

  it('calling useMutation(): auto import repos from user', async () => {
    render(
      <MockedProvider mocks={[apolloMockReposWithData, apolloMockAutoImportUser]} addTypename={false}>
        <RepositoriesProvider>
          <RepositoriesView />
          <SyncAutoImportReposModal />
        </RepositoriesProvider>
      </MockedProvider>
    )

    // Get 'Add from GitHub User' button and click on it
    const rabioButton = screen.getByText(/Add from GitHub User/i)
    fireEvent.click(rabioButton as HTMLDivElement)

    // Get input text to add repos
    const inputText = screen.getByTestId(TEST_IDS.autoImportInputText)
    if (inputText) {
      fireEvent.change(inputText, { target: { value: DynamicValues.autoImportUser } })
      expect((inputText as HTMLInputElement).value).toBe(DynamicValues.autoImportUser)

      // Finally click in 'Create Auto Import' to add repos to data base
      const autoImportButton = screen.getByTestId(TEST_IDS.autoImportButton)
      fireEvent.click(autoImportButton as HTMLButtonElement)

      // Check success banner alert
      await waitFor(() => {
        const bannerAlert = screen.getByText('Repositories from an auto-import will appear here once they are finished syncing.')
        expect(bannerAlert).toBeInTheDocument()
      })
    }
  })

  it('calling useQuery(): auto imports list', async () => {
    render(
      <MockedProvider mocks={[apolloMockImports, apolloMockAutoImportUser]} addTypename={false}>
        <RepositoriesProvider>
          <RepositoriesView />
          <ManageAutoImportReposModal />
        </RepositoriesProvider>
      </MockedProvider>
    )

    // Checks imports table is rendered
    await waitFor(() => {
      const table = screen.getByTestId(TEST_IDS.importsTableList)
      expect(table).toBeInTheDocument()
    })

    // Checks imports table has 4 rows
    await waitFor(() => {
      const rows = screen.getAllByTestId(TEST_IDS.importsRow)
      expect(rows.length).toBe(4)
    })
  })
})
