import { BreadcrumbNav, Button, SplitButton, ThreeDots } from '@mergestat/blocks'
import { AutoImportIcon, CogIcon, DotsHorizontalIcon, PlusIcon, RefreshIcon } from '@mergestat/icons'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { AutoManagedBreadCrumb } from 'src/components/bread-crumb'

export type RepoDetailsHeaderProps = {
    repo: {
        text: string;
        startIcon?: React.ReactNode;
        endIcon?: React.ReactNode;
        onClick?: (() => void) | undefined;
    },
    datatype: {
        text: string;
        startIcon?: React.ReactNode;
        endIcon?: React.ReactNode;
        onClick?: (() => void) | undefined;
    }
}

export const PageHeader: React.FC<RepoDetailsHeaderProps> = (props) => {
    const { repo, datatype } = props
    const router = useRouter()
    return (
        <div className="bg-white h-16 w-full flex justify-between px-8 items-center border-b border-gray-200">
            <div className="text-xl font-semibold">
                {/* <BreadcrumbNav
                    data={[
                        {
                            text: 'Repos',
                            onClick: router.back,
                        },
                        {
                            ...repo
                        },
                        { ...datatype }]}
                /> */}
                <AutoManagedBreadCrumb/>
            </div>
            <div className=' flex gap-3'>
                <Button skin="secondary">
                    <DotsHorizontalIcon />
                </Button>
                <Button className='flex gap-2' startIcon={<RefreshIcon className=' w-5 h-5' />}>
                    Sync Now
                </Button>

            </div>
        </div>
    )
}

