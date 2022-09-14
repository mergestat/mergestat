
import { MockedProvider } from '@apollo/react-testing'
import '@testing-library/jest-dom'
import { cleanup, fireEvent, render, screen, waitFor } from '@testing-library/react'
import 'intersection-observer'
import { useRouter } from 'next/router'
import RepoDetailsPage from 'src/pages/repos/[repository]'
import { TEST_IDS } from 'src/utils/constants'
import { DynamicValues } from 'src/__mocks__/constants.mock'
import { apolloMockAddSyncType, apolloMockNextSyncNow, apolloMockSyncNow, apolloMockSyncsTypesData, apolloMockSyncsTypesRunningData } from 'src/__mocks__/syncs.mock'

jest.mock('next/router', () => ({
  __esModule: true,
  useRouter: jest.fn()
}))

afterEach(() => {
  cleanup()
  jest.clearAllMocks()
})

describe('GraphQL queries: (Syncs Types)', () => {
  it('calling useMutation(): sync now', async () => {
    const mockRouter = { query: { repository: DynamicValues.syncTypeId } };
    (useRouter as jest.Mock).mockReturnValue(mockRouter)

    render(
      <MockedProvider mocks={[apolloMockSyncsTypesData, apolloMockSyncNow, apolloMockSyncsTypesRunningData]} addTypename={false}>
        <RepoDetailsPage />
      </MockedProvider>
    )

    // Checks syncs types table has 10 rows
    await waitFor(() => {
      const rows = screen.getAllByTestId(TEST_IDS.syncsTypesRow)
      expect(rows.length).toBe(10)
    })

    // Get 'Sync Now' button
    const buttons = screen.getAllByTestId(TEST_IDS.syncsTypesSyncNowButton)
    fireEvent.click(buttons[2] as HTMLButtonElement)

    // Checks if 'Git Files' is syncing
    await waitFor(() => {
      const element = screen.getByText('Syncing...')
      expect(element as HTMLSpanElement).toBeInTheDocument()
    })
  })

  it('calling useMutation(): first time hitting sync now', async () => {
    const mockRouter = { query: { repository: DynamicValues.syncTypeId } };
    (useRouter as jest.Mock).mockReturnValue(mockRouter)

    render(
      <MockedProvider mocks={[apolloMockSyncsTypesData, apolloMockAddSyncType, apolloMockNextSyncNow, apolloMockSyncsTypesRunningData]} addTypename={false}>
        <RepoDetailsPage />
      </MockedProvider>
    )

    // Checks syncs types table has 10 rows
    await waitFor(() => {
      const rows = screen.getAllByTestId(TEST_IDS.syncsTypesRow)
      expect(rows.length).toBe(10)
    })

    // Get 'Sync Now' button
    const buttons = screen.getAllByTestId(TEST_IDS.syncsTypesSyncNowButton)
    fireEvent.click(buttons[0] as HTMLButtonElement)

    // Checks if 'Git Files' is syncing
    await waitFor(() => {
      const element = screen.getByText('Syncing...')
      expect(element as HTMLSpanElement).toBeInTheDocument()
    })
  })
})
