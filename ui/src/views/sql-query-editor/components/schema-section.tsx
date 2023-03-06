import { useQuery } from '@apollo/client'
import { Input, Tree } from '@mergestat/blocks'
import { SchemaIcon, SearchIcon, TableIcon } from '@mergestat/icons'
import { debounce } from 'lodash'
import { KeyboardEvent, useEffect, useState } from 'react'
import { SchemaData } from 'src/@types'
import { GetSchemaQuery } from 'src/api-logic/graphql/generated/schema'
import { GET_SCHEMA_INFO } from 'src/api-logic/graphql/queries/get-schema'
import { mapToSchemaData } from 'src/api-logic/mappers/schema'
import Loading from 'src/components/Loading'

const SchemaSection: React.FC = () => {
  const [search, setSearch] = useState('')
  const [schameInfo, setSchameInfo] = useState<SchemaData[]>()

  const onChange = debounce((e) => setSearch(e.target.value), 300)

  const { loading, data, refetch } = useQuery<GetSchemaQuery>(GET_SCHEMA_INFO, {
    variables: { search },
    fetchPolicy: 'no-cache'
  })

  useEffect(() => {
    setSchameInfo(mapToSchemaData(data))
  }, [data])

  useEffect(() => {
    refetch({ search })
  }, [refetch, search])

  return (
    <div className="flex flex-col p-4 h-full">
      <h4 className="font-semibold mb-3">Schema</h4>
      <Input placeholder="Search..."
        startIcon={<SearchIcon className="t-icon t-icon-muted" />}
        onChange={onChange}
        onKeyUp={(e: KeyboardEvent<HTMLInputElement>) => (e.key === 'Enter' && setSearch((e.target as HTMLInputElement).value))}
      />
      <div className='flex-1 mt-4 overflow-auto'>
        {loading
          ? <Loading />
          : <Tree>
            {schameInfo?.map((s, index) =>
              <Tree.Item key={`schema-${index}`} name={s.schema || ''} icon={<SchemaIcon className="t-icon t-icon-muted" />} open={index === 0}>
                {s.tables?.map((t, index) =>
                  <Tree.Item key={`${s.schema}-table-${index}`} name={t.tableName || ''} icon={<TableIcon className="t-icon t-icon-muted" />} >
                    {t.columns?.map((c, index) =>
                      <Tree.SubItem key={`${s.schema}-${t.tableName}-col-${index}`} name={c.columnName || ''} desc={c.columnDescription || ''} />
                    )}
                  </Tree.Item>
                )}
              </Tree.Item>
            )}
          </Tree>
        }
      </div>
    </div>
  )
}

export default SchemaSection
