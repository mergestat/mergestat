import { faker } from '@faker-js/faker'
import { SYNC_STATUS } from 'src/utils/constants'
import { RepositoryStatusProps } from 'src/views/repos/components/repositories-table/repositories-table-columns'

export const mockRepoSatus: RepositoryStatusProps = {
  idRepo: faker.datatype.uuid(),
  type: SYNC_STATUS.succeeded,
  status: [
    {
      type: SYNC_STATUS.succeeded,
      count: 5,
      syncs: [
        {
          idType: faker.datatype.uuid(),
          type: 'Git Commit Stats',
          idLastSync: faker.random.numeric(4),
          lastSync: faker.date.recent(1).toDateString()
        },
        {
          idType: faker.datatype.uuid(),
          type: 'Git Files',
          idLastSync: faker.random.numeric(4),
          lastSync: faker.date.recent(1).toDateString()
        },
        {
          idType: faker.datatype.uuid(),
          type: 'Github Repo Metadata',
          idLastSync: faker.random.numeric(4),
          lastSync: faker.date.recent(1).toDateString()
        },
        {
          idType: faker.datatype.uuid(),
          type: 'Git Refs',
          idLastSync: faker.random.numeric(4),
          lastSync: faker.date.recent(1).toDateString()
        },
        {
          idType: faker.datatype.uuid(),
          type: 'Git Commits',
          idLastSync: faker.random.numeric(4),
          lastSync: faker.date.recent(1).toDateString()
        }
      ]
    }
  ]
}
