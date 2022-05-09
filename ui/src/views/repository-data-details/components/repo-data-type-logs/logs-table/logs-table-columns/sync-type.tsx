import { CircleCheckFilledIcon, CircleErrorFilledIcon } from '@mergestat/icons'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { syncType } from '../@type'


type SyncTypeProps = {
    sync_type: syncType
    last_sync_time: string
}
export const SyncType: React.FC<SyncTypeProps> = (props) => {
    const { sync_type, last_sync_time } = props
    const router = useRouter()
    const { repoName, dataType } = router.query
    switch (sync_type) {
        case 'failed':
            return (
                <div className=' flex gap-2 items-center '>
                    <CircleErrorFilledIcon className='w-5 h-5 text-red-600 mt-1' />
                    <Link href={`/repos/${repoName}/${dataType}/${last_sync_time}`}>
                        <a className=' hover_text-blue-600 cursor-pointer '>Failed</a>
                    </Link>

                </div>
            )
        case 'succeeded':
            return (
                <div className=' flex gap-2 items-center '>
                    <CircleCheckFilledIcon className='w-5 h-5 text-green-600 mt-1' />
                    <Link href={`/repos/${repoName}/${dataType}/${last_sync_time}`}>
                        <a className=' hover_text-blue-600 cursor-pointer '>Succeeded</a>
                    </Link>
                </div>
            )
        default:
            return <div>{sync_type}</div>
    }
    return (
        <div>SyncType</div>
    )
}
