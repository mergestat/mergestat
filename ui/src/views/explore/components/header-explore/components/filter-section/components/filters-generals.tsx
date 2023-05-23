import { MutationFunctionOptions } from '@apollo/client'
import { Input, Label } from '@mergestat/blocks'
import React, { ChangeEvent, PropsWithChildren } from 'react'
import { ExploreUiQuery } from 'src/api-logic/graphql/generated/schema'
import { useExploreFilters } from 'src/views/hooks/repoExplore/useExploreFilters'
import Filter from './filter'

type Props = PropsWithChildren<{
  explore: (options?: MutationFunctionOptions<ExploreUiQuery> | undefined) => void
}>

const FiltersGenerals: React.FC<Props> = ({ explore }: Props) => {
  const {
    filePath,
    filterRepo,
    filterFile,
    filterAuthor,
    filter,
    onChangeParam,
    onKeyEnter
  } = useExploreFilters(explore)

  return (
    <>
      <Filter
        label='Repo'
        value={filterRepo}
        reset={() => filter('repo_pattern', undefined)}
        explore={() => filter('repo_pattern', filterRepo)}
        overlay={(close, show) => (
          <>
            <Label>Matches pattern</Label>
            <Input value={filterRepo || ''} placeholder="mergestat/mergestat%"
              onChange={(e: ChangeEvent<HTMLInputElement>) => onChangeParam('repo_pattern', e.target.value)}
              onKeyUp={onKeyEnter('repo_pattern', filterRepo, close, show)}
            />
          </>
        )}
      />

      <Filter
        label='File path'
        value={filePath}
        reset={() => filter('file_path_pattern', undefined)}
        explore={() => filter('file_path_pattern', filePath)}
        overlay={(close, show) => (
          <>
            <Label>Matches pattern</Label>
            <Input value={filePath || ''} placeholder="%.go"
              onChange={(e: ChangeEvent<HTMLInputElement>) => onChangeParam('file_path_pattern', e.target.value)}
              onKeyUp={onKeyEnter('file_path_pattern', filePath, close, show)}
            />
          </>
        )}
      />

      <Filter
        label='File contents'
        value={filterFile}
        reset={() => filter('file_contents_pattern', undefined)}
        explore={() => filter('file_contents_pattern', filterFile)}
        overlay={(close, show) => (
          <>
            <Label>Matches pattern</Label>
            <Input value={filterFile || ''} placeholder="example%"
              onChange={(e: ChangeEvent<HTMLInputElement>) => onChangeParam('file_contents_pattern', e.target.value)}
              onKeyUp={onKeyEnter('file_contents_pattern', filterFile, close, show)}
            />
          </>
        )}
      />

      <Filter
        label='Author'
        value={filterAuthor}
        reset={() => filter('author_name_pattern', undefined)}
        explore={() => filter('author_name_pattern', filterAuthor)}
        overlay={(close, show) => (
          <>
            <Label>Matches pattern</Label>
            <Input value={filterAuthor || ''} placeholder="author-name%"
              onChange={(e: ChangeEvent<HTMLInputElement>) => onChangeParam('author_name_pattern', e.target.value)}
              onKeyUp={onKeyEnter('author_name_pattern', filterAuthor, close, show)}
            />
          </>
        )}
      />
    </>
  )
}

export default FiltersGenerals
