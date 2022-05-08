import { Button, Checkbox, Dropdown, Filter, Input, Menu, Spinner } from "@mergestat/blocks";
import { ArrowLeftIcon, ArrowRightIcon, CheckIcon, ChevronLeftIcon, ChevronRightIcon, CircleCheckFilledIcon, CircleErrorFilledIcon, PlusIcon, SearchIcon, XIcon } from "@mergestat/icons";
import SvgArrowRight from "@mergestat/icons/dist/ArrowRight";
import { repoDataStatus } from "../components/repositories-table/sample-data";

type RepositoryDataProps = {
    data: Array<{ title: string; lastSync: string }>
    status: repoDataStatus
}
export const RepoDataDropDown: React.FC<RepositoryDataProps> = (props) => {
    const { data, status } = props

    return (
        <Dropdown
            overlay={() =>
                <Menu className=' rounded w-100  p-4 flex flex-col gap-y-4 '>
                    {data.map((item, index) => (
                        <div key={index}
                            className=' flex items-center justify-between gap-3 focus-within_ text-base'>
                            <div className=" flex items-center gap-2">
                                {status==="check" && <CircleCheckFilledIcon className="text-green-600 mt-1" />}
                                {status==="error" && <CircleErrorFilledIcon className="text-red-600 mt-1" />}
                                {status==="loading" &&  <Spinner size="sm"  className="mt-1"/>}
                                <span>{item.title}</span>
                            </div>

                            <div className=" flex items-center gap-2">
                                <span>{item.lastSync}</span>
                                <ChevronRightIcon />
                            </div>
                        </div>
                    ))
                    }
                </Menu>
            }
            trigger={getRepoStatusComponent(status, data.length)}
        />
    )
}
function getRepoStatusComponent (status: repoDataStatus, count: number):React.ReactNode {
    switch (status) {
        case "check":
            return <RepositoryCheckStatus count={count} />
        case "error":
            return <RepositoryErrorStatus count={count} />
        case "loading":
            return <RepositoryLoadingStatus count={count} />
        default:return <></>
    }
}

type RepositoryStatusProps = {
    count: number
}

const RepositoryCheckStatus: React.FC<RepositoryStatusProps> = (props) => {
    const { count } = props
    if (!count) return <></>
    return (
        <div
            className="flex items-center gap-2 border border-gray-300 rounded py-1 px-2 text-sm w-max bg-gray-100 cursor-pointer"
        >
            <CircleCheckFilledIcon className="text-green-600" />
            {count}
        </div>
    )
}
const RepositoryLoadingStatus: React.FC<RepositoryStatusProps> = (props) => {
    const { count } = props
    return (
        <div
            className="flex items-center gap-2 border border-gray-300 rounded py-1 px-2 text-sm w-max bg-gray-100 cursor-pointer"
        >
            <Spinner size="sm" />
            {count}
        </div>
    )
}

const RepositoryErrorStatus: React.FC<RepositoryStatusProps> = (props) => {
    const { count } = props
    return (
        <div
            className="flex items-center gap-2 border border-gray-300 rounded py-1 px-2 text-sm w-max bg-gray-100 cursor-pointer"
        >
            <CircleErrorFilledIcon className="text-red-600 " />
            {count}
        </div>
    )
}