import { BreadcrumbNav } from '@mergestat/blocks'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

type CrumbNavItem = {
  text: string
  startIcon?: React.ReactNode
  endIcon?: React.ReactNode
  onClick?: () => void
  index?: number
}

export function AutoManagedBreadCrumb() {
  const router = useRouter()
  const [crumbs, setCrumbs] = useState([] as CrumbNavItem[])
  useEffect(() => {
    const pathWithoutQuery = router.asPath.split('?')[0]
    let pathArray = pathWithoutQuery.split('/')
    pathArray.shift()

    pathArray = pathArray.filter((path) => path !== '')

    const breadcrumbs = pathArray.map((path, index) => {
      const href = '/' + pathArray.slice(0, index + 1).join('/')
      return {
        onClick: () => {
          router.push(href)
        },
        text: decodeURI(path.charAt(0).toUpperCase() + path.slice(1)),
      }
    })

    setCrumbs(breadcrumbs)
  }, [router.asPath])

  return <BreadcrumbNav data={crumbs} />
}
