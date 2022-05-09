import React from 'react'
import { LogsDetails, LogsInfo, PageHeader } from './components'

export const RepositoryDataLogsDetailsView: React.FC = () => {
    return (
        <main className="w-full bg-gray-100">
            <PageHeader />
            <div className='p-8'>
                <LogsInfo />
                <LogsDetails />
            </div>
        </main>
    )
}
