import React from 'react'

interface RepositoriesContext {
  showOpenRepositoryModal: boolean
  setShowOpenRepositoryModal: (show: boolean) => void

  showAutoImportModal: boolean
  setShowAutoImportModal: (show: boolean) => void

  showAddRepositoryModal: boolean
  setShowAddRepositoryModal: (show: boolean) => void
  showSyncRepoModal: boolean
  setShowSyncRepoModal: (show: boolean) => void
}

export const RepositoriesContext = React.createContext<RepositoriesContext>({
  showOpenRepositoryModal: false,
  setShowOpenRepositoryModal: (show: boolean) => { },

  showAutoImportModal: false,
  setShowAutoImportModal: (show: boolean) => { },

  showAddRepositoryModal: false,
  setShowAddRepositoryModal: (show: boolean) => { },

  showSyncRepoModal: false,
  setShowSyncRepoModal: (show: boolean) => { },
})

export const useRepositoriesContext = (): RepositoriesContext =>
  React.useContext(RepositoriesContext)

export const RepositoriesProvider: React.FC = (props) => {
  const [showOpenRepositoryModal, setShowOpenRepositoryModal] =
    React.useState(false)
  const [showAutoImportModal, setShowAutoImportModal] = React.useState(false)
  const [showAddRepositoryModal, setShowAddRepositoryModal] =
    React.useState(false)
  const [showSyncRepoModal, setShowSyncRepoModal] =
    React.useState(false)

  return (
    <RepositoriesContext.Provider
      value={{
        showOpenRepositoryModal,
        setShowOpenRepositoryModal,
        showAutoImportModal,
        setShowAutoImportModal,
        showAddRepositoryModal,
        setShowAddRepositoryModal,
        showSyncRepoModal,
        setShowSyncRepoModal
      }}
    >
      {props.children}
    </RepositoriesContext.Provider>
  )
}
