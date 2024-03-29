import { MutationFunctionOptions } from '@apollo/client'
import { KeyboardEvent } from 'react'
import { ExploreUiQuery } from 'src/api-logic/graphql/generated/schema'
import { ExploreParams, useRepoExploreContext, useRepoExploreSetState } from 'src/state/contexts/repo-explore.context'
import { cleanObject } from 'src/utils'

export const useExploreFilters = (
  explore: (options?: MutationFunctionOptions<ExploreUiQuery> | undefined) => void
) => {
  const [{
    params,
    params: {
      file_path_pattern: filePath,
      repo_pattern: filterRepo,
      file_contents_pattern: filterFile,
      author_name_pattern: filterAuthor,
      days_since_repo_modified_last: filterRepoDays,
      days_since_repo_not_modified_last: filterNotRepoDays,
      days_since_file_modified_last: filterFileDays,
      days_since_file_not_modified_last: filterNotFileDays,
      days_since_authored_last: filterAuthoredDays,
      days_since_not_authored_last: filterNotAuthoredDays,
      days_since_committed_last: filterCommittedDays,
      days_since_not_committed_last: filterNotCommittedDays,
    }
  }] = useRepoExploreContext()
  const { setParams, setEmpty } = useRepoExploreSetState()

  const setParamsAndExplore = (params: ExploreParams) => {
    const cleanedParams = cleanObject(params)
    setParams(cleanedParams)

    if (Object.keys(cleanedParams).length > 0) {
      explore({ variables: { params: cleanedParams } })
      setEmpty(false)
    } else {
      setEmpty(true)
    }
  }

  const clearFilters = () => {
    setParamsAndExplore({})
    setEmpty(true)
  }

  const filter = (filter: keyof ExploreParams, value: string | undefined) => {
    setParamsAndExplore({
      ...params,
      [filter]: value,
    })
  }

  const onChangeParam = (filter: keyof ExploreParams, value: string | undefined) => {
    const valueCheck = value || undefined
    setParams({
      ...params,
      [filter]: valueCheck,
    })
  }

  const handleDaysChange = (filter: keyof ExploreParams, value: string | undefined) => {
    const regex = /^[0-9\b]+$/
    if (value && value.length <= 3 && (value === '' || regex.test(value))) {
      onChangeParam(filter, value)
    }
  }

  const onKeyEnter = (
    param: keyof ExploreParams,
    value?: string,
    close?: () => void,
    show?: () => void
  ) => (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      filter(param, value)
      value && show && show()
      close && close()
    }
  }

  return {
    filePath,
    filterRepo,
    filterFile,
    filterAuthor,
    filterRepoDays,
    filterNotRepoDays,
    filterFileDays,
    filterNotFileDays,
    filterAuthoredDays,
    filterNotAuthoredDays,
    filterCommittedDays,
    filterNotCommittedDays,
    filter,
    clearFilters,
    onChangeParam,
    handleDaysChange,
    onKeyEnter
  }
}
