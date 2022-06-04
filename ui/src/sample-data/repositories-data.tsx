import type { RepoDataPropsT } from 'src/@types'

export const sampleRepositoriesData: Array<RepoDataPropsT> = [
  {
    name: 'marko-js/repo1',
    lastUpdate: 'Last updated today',
    type: 'github',
    automaticImport: true,
    tags: [
      { title: 'javascript', checked: true },
      { title: 'nodejs', checked: true },
      { title: 'virtual-dom', checked: true },
      { title: 'reactjs', checked: false },
      { title: 'angularjs', checked: false },
      { title: 'typescript', checked: false },
    ],
    lastSync: '3 minutes ago',
    status: [
      { type: 'failed', count: 1 },
      { type: 'running', count: 3 },
      { type: 'succeeded', count: 8 },
    ],
  },
  {
    name: 'MithrilJS/mithril.js',
    lastUpdate: 'Last updated yesterday',
    type: 'github',
    automaticImport: false,
    tags: [
      { title: 'javascript', checked: true },
      { title: 'nodejs', checked: false },
      { title: 'virtual-dom', checked: true },
    ],
    lastSync: '3 minutes ago',
    status: [
      { type: 'failed', count: 1 },
      { type: 'running', count: 3 },
      { type: 'succeeded', count: 8 },
    ],
  },
  {
    name: 'angular/angular',
    lastUpdate: 'Last updated yesterday',
    type: 'github',
    automaticImport: true,
    tags: [
      { title: 'javascript', checked: true },
      { title: 'nodejs', checked: false },
      { title: 'angular', checked: true },
    ],
    lastSync: '3 minutes ago',
    status: [
      { type: 'running', count: 1 },
      { type: 'succeeded', count: 4 },
    ],
  },
  {
    name: 'emberjs/ember.js',
    lastUpdate: 'Last updated 4 days ago',
    type: 'github',
    tags: [
      { title: 'javascript', checked: true },
      { title: 'nodejs', checked: false },
      { title: 'ember', checked: true },
    ],
    lastSync: '1 hours ago',
    status: [
      { type: 'succeeded', count: 2 },
    ],
  },
]
