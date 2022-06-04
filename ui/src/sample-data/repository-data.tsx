import type { RepoSyncDataType } from 'src/@types'

export const sampleRepositoryData: RepoSyncDataType[] = [
  {
    data: {
      title: 'Commit Stats',
      brief: 'Stores git commits for this repo in the "git_commits" table',
    },
    latestRun: 'Now',
    status: {
      data: [
        {value: 6, status: 'succeeded'},
        {value: 10, status: 'failed'},
        {value: 5.5, status: 'succeeded'},
        {value: 6, status: 'succeeded'},
        {value: 5, status: 'succeeded'},
        {value: 1, status: 'succeeded'},
        {value: 2, status: 'succeeded'},
        {value: 6, status: 'succeeded'},
        {value: 5, status: 'failed'},
        {value: 5.5, status: 'succeeded'},
        {value: 6, status: 'succeeded'},
        {value: 7, status: 'succeeded'},
        {value: 5, status: 'succeeded'},
        {value: 4, status: 'succeeded'},
        {value: 10, status: 'succeeded'},
        {value: 2, status: 'running'},
      ],
      syncState: 'running'
    },
  },
  {
    data: {
      title: 'Pull Requests',
      brief: 'Stores git commits for this repo in the "git_commits" table',
    },
    latestRun: '20 minutes ago',
    status: {
      data: [
        {value: 2, status: 'running'},
        {value: 5, status: 'succeeded'},
        {value: 4, status: 'succeeded'},
        {value: 5, status: 'succeeded'},
        {value: 7, status: 'succeeded'},
        {value: 6, status: 'succeeded'},
        {value: 5.5, status: 'succeeded'},
        {value: 5, status: 'failed'},
        {value: 6, status: 'succeeded'},
        {value: 2, status: 'succeeded'},
        {value: 5, status: 'succeeded'},
        {value: 1, status: 'succeeded'},
      ],
      syncState: 'failed'
    },
  },
  {
    data: {
      title: 'Issues',
      brief: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    latestRun: '20 minutes ago',
    status: {
      data: [
        {value: 3, status: 'failed'},
        {value: 3.5, status: 'failed'},
        {value: 2, status: 'succeeded'},
        {value: 3, status: 'succeeded'},
        {value: 10, status: 'failed'},
        {value: 5.5, status: 'succeeded'},
        {value: 6, status: 'succeeded'},
        {value: 7, status: 'succeeded'},
        {value: 5, status: 'succeeded'},
      ],
      syncState: 'succeeded'
    },
  },
  {
    data: {
      title: 'Dependencies',
      brief: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    latestRun: '-',
    status: {
      syncState: 'disabled'
    },
  },
  {
    data: {
      title: 'Stargazers',
      brief: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    latestRun: '20 minutes ago',
    status: {
      data: [
        {value: 2, status: 'succeeded'},
        {value: 6, status: 'succeeded'},
        {value: 5, status: 'failed'},
        {value: 5.5, status: 'succeeded'},
        {value: 6, status: 'succeeded'},
        {value: 7, status: 'succeeded'},
        {value: 5, status: 'succeeded'},
        {value: 4, status: 'succeeded'},
      ],
      syncState: 'succeeded'
    },
  },
  {
    data: {
      title: 'Blame',
      brief: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    latestRun: '20 minutes ago',
    status: {
      data: [
        {value: 5, status: 'succeeded'},
        {value: 1, status: 'succeeded'},
        {value: 2, status: 'succeeded'},
        {value: 6, status: 'succeeded'},
        {value: 5, status: 'failed'},
        {value: 5.5, status: 'succeeded'},
        {value: 6, status: 'succeeded'},
        {value: 7, status: 'succeeded'},
        {value: 5, status: 'succeeded'},
        {value: 4, status: 'succeeded'},
        {value: 5, status: 'succeeded'},
        {value: 2, status: 'running'},
      ],
      syncState: 'succeeded'
    },
  },
]
