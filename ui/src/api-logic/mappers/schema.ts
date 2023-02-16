import { SchemaData, TableData } from 'src/@types'
import { GetSchemaQuery } from '../graphql/generated/schema'

const mapToSchemaData = (data: GetSchemaQuery | undefined): SchemaData[] => {
  let mappedData: SchemaData[] = []

  data?.schemaIntrospections?.nodes.forEach((data) => {
    let schemaFound: SchemaData | undefined = mappedData.find(s => s.schema === data.schema)

    if (!schemaFound) {
      const newSchema: SchemaData = {
        schema: data.schema,
        tables: [
          { tableName: data.tableName, columns: [{ columnName: data.columnName, columnDescription: data.columnDescription }] }
        ]
      }
      mappedData.push(newSchema)
    } else {
      const tableFound = schemaFound.tables.find(t => t.tableName === data.tableName)

      if (!tableFound) {
        const newTable: TableData = {
          tableName: data.tableName,
          columns: [{ columnName: data.columnName, columnDescription: data.columnDescription }]
        }
        schemaFound.tables.push(newTable)
      } else {
        tableFound.columns.push({ columnName: data.columnName, columnDescription: data.columnDescription })
      }
    }
  })

  return mappedData
}


const getRecordsFromSchema = (data: GetSchemaQuery | undefined, field: 'schema' | 'tableName' | 'columnName'): string[] => {
  let result: string[] = []
  data?.schemaIntrospections?.nodes.forEach((data) => {
    if (!result.includes(data[field])) {
      result.push(data[field])
    }
  })
  return result
}


export { mapToSchemaData, getRecordsFromSchema }
