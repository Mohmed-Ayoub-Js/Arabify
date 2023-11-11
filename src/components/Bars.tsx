import Appbar from './Appbar'
import SideBar from './SideBar'
import ApplicationContent from './ApplicationContent'
const Bars = () => {
  return (
    <div>
        <div>
        <Appbar />
        </div>
        <div className='flex justify-between flex-row'>
  <div className='sidebar'>
    <SideBar />
  </div>
  <div className='main-content'>
    <ApplicationContent />
  </div>
</div>

    </div>
  )
}

export default Bars