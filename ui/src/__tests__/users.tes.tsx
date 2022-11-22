import { MockedProvider } from '@apollo/react-testing'
import '@testing-library/jest-dom'
import { cleanup, fireEvent, render, screen, waitFor } from '@testing-library/react'
import 'intersection-observer'
import { UserSettingsProvider } from 'src/state/contexts'
import { TEST_IDS } from 'src/utils/constants'
import UserManagement from 'src/views/settings/user-management'
import { DynamicValues } from 'src/__mocks__/constants.mock'
import { apolloMockUserSearch, apolloMockUsersNoData, apolloMockUsersWithData } from 'src/__mocks__/users.mock'

afterEach(() => {
  cleanup()
  jest.clearAllMocks()
})

describe('GraphQL queries: (Users)', () => {
  it('calling useQuery(): data is fetched', async () => {
    render(
      <MockedProvider mocks={[apolloMockUsersWithData]} addTypename={false}>
        <UserSettingsProvider>
          <UserManagement />
        </UserSettingsProvider>
      </MockedProvider>
    )

    await waitFor(() => {
      expect(screen.getByTestId(TEST_IDS.usersTableList)).toBeInTheDocument()
    })
  })

  it('calling useQuery(): no data is fetched', async () => {
    render(
      <MockedProvider mocks={[apolloMockUsersNoData]} addTypename={false}>
        <UserSettingsProvider>
          <UserManagement />
        </UserSettingsProvider>
      </MockedProvider>
    )

    await waitFor(() => {
      expect(screen.getByTestId(TEST_IDS.usersListEmpty)).toBeInTheDocument()
    })
  })

  it('calling useQuery() and refetch(): searching \'newuser\' user', async () => {
    render(
      <MockedProvider mocks={[apolloMockUsersWithData, apolloMockUserSearch]} addTypename={false}>
        <UserSettingsProvider>
          <UserManagement />
        </UserSettingsProvider>
      </MockedProvider>
    )

    await waitFor(() => {
      // Get input search to type
      const searchInput = screen.getByTestId(TEST_IDS.inputUserSearch)
      if (searchInput) {
        // Typing 'newuser'
        fireEvent.change(searchInput, { target: { value: DynamicValues.newUser } })
        expect((searchInput as HTMLInputElement).value).toBe(DynamicValues.newUser)

        // Check table to have 'newuser' user record
        const usersName = screen.getByTestId(TEST_IDS.usersNameTable)
        expect(usersName).toHaveTextContent('newuser')
      }
    })
  })
})
