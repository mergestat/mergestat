import { useEffect } from 'react'
import { useGlobalSetState } from 'src/state/contexts'

const useCrumbsInit = () => {
  const { setCrumbs } = useGlobalSetState()

  useEffect(() => {
    setCrumbs([])
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
}

export default useCrumbsInit
