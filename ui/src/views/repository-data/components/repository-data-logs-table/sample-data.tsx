import { RepoSyncDataType } from './@type'

export const sampleRepositoryData: RepoSyncDataType[] = [
  {
    data: {
      title: 'Commit stats',
      brief: 'Stores git commits for this repo in the "git_commits" table',
    },
    latest_run: 'Now',
    status: {
      data: [
        {value: 6, status: 'success'},
        {value: 10, status: 'error'},
        {value: 5.5, status: 'success'},
        {value: 6, status: 'success'},
        {value: 5, status: 'success'},
        {value: 1, status: 'success'},
        {value: 2, status: 'success'},
        {value: 6, status: 'success'},
        {value: 5, status: 'error'},
        {value: 5.5, status: 'success'},
        {value: 6, status: 'success'},
        {value: 7, status: 'success'},
        {value: 5, status: 'success'},
        {value: 4, status: 'success'},
        {value: 10, status: 'success'},
        {value: 2, status: 'loading'},
      ],
      syncState: 'loading'
    },
  },
  {
    data: {
      title: 'Pull Requests',
      brief: 'Stores git commits for this repo in the "git_commits" table',
    },
    latest_run: '20 minutes ago',
    status: {
      data: [
        {value: 2, status: 'loading'},
        {value: 5, status: 'success'},
        {value: 4, status: 'success'},
        {value: 5, status: 'success'},
        {value: 7, status: 'success'},
        {value: 6, status: 'success'},
        {value: 5.5, status: 'success'},
        {value: 5, status: 'error'},
        {value: 6, status: 'success'},
        {value: 2, status: 'success'},
        {value: 5, status: 'success'},
        {value: 1, status: 'success'},
      ],
      syncState: 'error'
    },
  },
  {
    data: {
      title: 'Issues',
      brief: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    latest_run: '20 minutes ago',
    status: {
      data: [
        {value: 3, status: 'error'},
        {value: 3.5, status: 'error'},
        {value: 2, status: 'success'},
        {value: 3, status: 'success'},
        {value: 10, status: 'error'},
        {value: 5.5, status: 'success'},
        {value: 6, status: 'success'},
        {value: 7, status: 'success'},
        {value: 5, status: 'success'},
      ],
      syncState: 'done'
    },
  },
  {
    data: {
      title: 'Dependencies',
      brief: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    latest_run: '-',
    status: {
      syncState: 'disabled'
    },
  },
  {
    data: {
      title: 'Stargazers',
      brief: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    latest_run: '20 minutes ago',
    status: {
      data: [
        {value: 2, status: 'success'},
        {value: 6, status: 'success'},
        {value: 5, status: 'error'},
        {value: 5.5, status: 'success'},
        {value: 6, status: 'success'},
        {value: 7, status: 'success'},
        {value: 5, status: 'success'},
        {value: 4, status: 'success'},
      ],
      syncState: 'done'
    },
  },
  {
    data: {
      title: 'Blame',
      brief: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    latest_run: '20 minutes ago',
    status: {
      data: [
        {value: 5, status: 'success'},
        {value: 1, status: 'success'},
        {value: 2, status: 'success'},
        {value: 6, status: 'success'},
        {value: 5, status: 'error'},
        {value: 5.5, status: 'success'},
        {value: 6, status: 'success'},
        {value: 7, status: 'success'},
        {value: 5, status: 'success'},
        {value: 4, status: 'success'},
        {value: 5, status: 'success'},
        {value: 2, status: 'loading'},
      ],
      syncState: 'done'
    },
  },
]
