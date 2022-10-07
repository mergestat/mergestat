import { useMutation } from '@apollo/client'
import { useState } from 'react'
import { SyncType } from 'src/@types'
import { AUTO_IMPORT_REPOS } from 'src/api-logic/graphql/mutations/add-repo'
import { useRepositoriesContext, useRepositoriesSetState } from 'src/state/contexts'
import { showSuccessAlert } from 'src/utils/alerts'
import { SYNC_REPO_METHOD } from 'src/utils/constants'
import useRepos from './useRepos'
import useSyncTypes from './useSyncTypes'

const useImports = () => {
  const [{ imports, search }] = useRepositoriesContext()
  const { setImports, setShowAddRepositoryModal } = useRepositoriesSetState()

  const [importType, setImportType] = useState(SYNC_REPO_METHOD.GH_ORG)
  const [orgUserText, setOrgUserText] = useState('')

  const { syncsTypesArray } = useSyncTypes()
  const { refetch } = useRepos(search)

  const [autoImportRepos] = useMutation(AUTO_IMPORT_REPOS, {
    onCompleted: () => {
      showSuccessAlert('Repo auto import added')
      refetch()
      closeModal()
    }
  })

  const addImport = () => {
    const imp = imports.find((imp) => imp.name === orgUserText)
    if (!imp) {
      setImports([...imports, { name: orgUserText, type: importType, opened: true, defaultSyncs: syncsTypesArray }])
      setImportType(SYNC_REPO_METHOD.GH_ORG)
      setOrgUserText('')
    }
  }

  const removeURL = (name: string) => {
    setImports(imports.filter((imp) => imp.name !== name))
  }

  const updateImports = (name: string, data: { key: string, value: string | boolean | SyncType[] }) => {
    setImports(
      imports.map((imp) => {
        if (imp.name === name) {
          return { ...imp, [data.key]: (typeof data.value === 'boolean' ? !data.value : data.value) }
        }
        return imp
      })
    )
  }

  const handleCheckBox = (importName: string, syncTypes: SyncType[], type: string) => {
    const newDefaults = syncTypes.map((st) => {
      if (st.type === type) {
        return { ...st, checked: !st.checked }
      }
      return st
    })

    updateImports(importName, { key: 'defaultSyncs', value: newDefaults })
  }

  const closeModal = () => {
    setShowAddRepositoryModal(false)
  }

  const addImports = () => {
    const importToSend = imports.map(imp => {
      const defaultSyncs = imp.defaultSyncs.filter(ds => ds.checked).map(ds => ds.type)
      const settings = {
        [imp.type === SYNC_REPO_METHOD.GH_ORG ? 'org' : 'user']: imp.name,
        defaultSyncTypes: defaultSyncs
      }

      return { type: imp.type, settings }
    })

    importToSend.map(imp => autoImportRepos({ variables: imp }))
  }

  return {
    imports,
    importType,
    orgUserText,
    addImport,
    removeURL,
    updateImports,
    handleCheckBox,
    setImportType,
    setOrgUserText,
    addImports
  }
}

export default useImports
