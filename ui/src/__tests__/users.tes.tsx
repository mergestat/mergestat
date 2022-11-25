import { MockedProvider } from '@apollo/react-testing'
import '@testing-library/jest-dom'
import { cleanup, fireEvent, render, screen, waitFor } from '@testing-library/react'
import 'intersection-observer'
import { UserSettingsProvider } from 'src/state/contexts'
import { TEST_IDS } from 'src/utils/constants'
import UserManagement from 'src/views/settings/user-management'
import { DynamicValues } from 'src/__mocks__/constants.mock'
import {
  apolloMockAddUser, apolloMockEditUserPassword, apolloMockEditUserRole, apolloMockRemoveUser, apolloMockUserSearch,
  apolloMockUsersNoData, apolloMockUsersWithData, apolloMockWithEditedUser, apolloMockWithNewUser
} from 'src/__mocks__/users.mock'

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

  it('calling useMutation() and refetch(): add user', async () => {
    render(
      <MockedProvider mocks={[apolloMockUsersWithData, apolloMockAddUser, apolloMockWithNewUser]} addTypename={false}>
        <UserSettingsProvider>
          <UserManagement />
        </UserSettingsProvider>
      </MockedProvider>
    )

    // Click on 'add user' button
    const addButton = screen.getByTestId(TEST_IDS.usersTableListAddUser)
    fireEvent.click(addButton)

    await waitFor(() => {
      // Set username for new user
      const usernameInput = screen.getByTestId(TEST_IDS.usersAddUsername)
      if (usernameInput) {
        // Typing 'newuser'
        fireEvent.change(usernameInput, { target: { value: DynamicValues.newUser } })
        expect((usernameInput as HTMLInputElement).value).toBe(DynamicValues.newUser)
      }

      // Set password for new user
      const passwordInput = screen.getByTestId(TEST_IDS.usersAddPassword)
      if (passwordInput) {
        // Typing 'newuser'
        fireEvent.change(passwordInput, { target: { value: DynamicValues.newUser } })
        expect((passwordInput as HTMLInputElement).value).toBe(DynamicValues.newUser)
      }

      // Set password confirm for new user
      const passwordConfirmInput = screen.getByTestId(TEST_IDS.usersAddPasswordConfirm)
      if (passwordConfirmInput) {
        // Typing 'newuser'
        fireEvent.change(passwordConfirmInput, { target: { value: DynamicValues.newUser } })
        expect((passwordConfirmInput as HTMLInputElement).value).toBe(DynamicValues.newUser)
      }

      // Set role for new user
      const roleRadioInput = screen.getByTestId(`${TEST_IDS.usersAddRole}-1`)
      if (roleRadioInput) {
        fireEvent.click(roleRadioInput)
        expect(roleRadioInput).toBeChecked()
      }
    })

    let addUserButton
    await waitFor(() => {
      addUserButton = screen.getByTestId(TEST_IDS.usersAddButton)
    })

    // Click on 'Add User' button
    addUserButton && fireEvent.click(addUserButton)

    // Check success alert
    await waitFor(() => {
      const successAlert = screen.getByText('User added')
      expect(successAlert).toBeInTheDocument()
    })
  })

  it('calling useMutation() and refetch(): edit user', async () => {
    render(
      <MockedProvider mocks={[apolloMockUsersWithData, apolloMockEditUserRole, apolloMockEditUserPassword, apolloMockWithEditedUser]} addTypename={false}>
        <UserSettingsProvider>
          <UserManagement />
        </UserSettingsProvider>
      </MockedProvider>
    )

    let editButton
    await waitFor(() => {
      editButton = screen.getByTestId(`${TEST_IDS.usersEditUser}-0`)
    })

    // Click on 'edit user' pencil button
    editButton && fireEvent.click(editButton)

    await waitFor(() => {
      // Set password for new user
      const passwordInput = screen.getByTestId(TEST_IDS.usersEditPassword)
      if (passwordInput) {
        // Typing 'newuser'
        fireEvent.change(passwordInput, { target: { value: DynamicValues.newUser } })
        expect((passwordInput as HTMLInputElement).value).toBe(DynamicValues.newUser)
      }

      // Set password confirm for new user
      const passwordConfirmInput = screen.getByTestId(TEST_IDS.usersEditPasswordConfirm)
      if (passwordConfirmInput) {
        // Typing 'newuser'
        fireEvent.change(passwordConfirmInput, { target: { value: DynamicValues.newUser } })
        expect((passwordConfirmInput as HTMLInputElement).value).toBe(DynamicValues.newUser)
      }

      // Change role to 'Read Only'
      const roleRadioInput = screen.getByTestId(`${TEST_IDS.usersEditRole}-2`)
      if (roleRadioInput) {
        fireEvent.click(roleRadioInput)
        expect(roleRadioInput).toBeChecked()
      }
    })

    let editUserButton
    await waitFor(() => {
      editUserButton = screen.getByTestId(TEST_IDS.usersEditButton)
    })

    // Click on 'Save' button to edit Password and Role User
    editUserButton && fireEvent.click(editUserButton)

    // Check success alert
    await waitFor(() => {
      const successAlert = screen.getByText('User updated')
      expect(successAlert).toBeInTheDocument()
    })
  })

  it('calling useMutation() and refetch(): remove user', async () => {
    render(
      <MockedProvider mocks={[apolloMockWithNewUser, apolloMockRemoveUser, apolloMockUsersWithData]} addTypename={false}>
        <UserSettingsProvider>
          <UserManagement />
        </UserSettingsProvider>
      </MockedProvider>
    )

    let removeButton
    await waitFor(() => {
      removeButton = screen.getByTestId(`${TEST_IDS.usersRemoveUser}-0`)
    })

    // Click on 'remove user' trash button
    removeButton && fireEvent.click(removeButton)

    await waitFor(() => {
      // Check message to delete newuser user
      const elements = screen.getAllByText(/Are you sure you want to remove/i)
      const divElement = elements.find(ele => ele instanceof HTMLDivElement)
      expect(divElement).toBeInTheDocument()
    })

    let removeUserButton
    await waitFor(() => {
      removeUserButton = screen.getByTestId(TEST_IDS.usersRemoveUserButton)
    })

    // Click on 'Remove User' button
    removeUserButton && fireEvent.click(removeUserButton)

    // Check success alert
    await waitFor(() => {
      const successAlert = screen.getByText('User removed')
      expect(successAlert).toBeInTheDocument()
    })
  })
})
