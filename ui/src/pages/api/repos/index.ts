import type { NextApiRequest, NextApiResponse } from 'next'
import { RepoDataPropsT } from 'src/@types'
import { query } from 'src/api-logic/apollo/operations'
import GET_REPOS from 'src/api-logic/graphql/queries/getRepos.query'
import { mapToRepoData } from 'src/api-logic/mappers/repos'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<RepoDataPropsT[] | undefined>
) {
  const { data } = await query(GET_REPOS)

  res.status(200).json(mapToRepoData(data))
}
