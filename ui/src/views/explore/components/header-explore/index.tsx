import FiltersSection from './components/filter-section'
import TitleSection from './components/title-section'

const HeaderExplore: React.FC = () => {
  return (
    <div className='flex flex-col bg-white w-full border-b px-8 py-4 gap-4'>
      <TitleSection />
      <FiltersSection />
    </div>
  )
}

export default HeaderExplore
