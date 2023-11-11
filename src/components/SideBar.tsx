import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import AppsIcon from '@mui/icons-material/Apps';
import GamesIcon from '@mui/icons-material/Games';
import CustomizedDialogs from './mui/Dialog';
import AlertDialogSlide from './mui/Slide';
const SideBar = () => {

    const data =[
        {
            item:<HomeRoundedIcon style={{fontSize:'30px'}}/>,
        },
        {
              item:<AppsIcon style={{fontSize:'30px'}} />,
        },        
        {
           item:<GamesIcon style={{fontSize:'30px'}}/>,
        },
        {
            item:<AlertDialogSlide />,
        },               
    ];


  return (
    <div className='flex justify-start items-start flex-col p-5 w-[40px]'>
        <ul className='flex justify-center items-center flex-col gap-6'>
            {
                data.map((item , index )=> (
                    <li key={index} className='rounded-lg bg-black text-white p-2 hover:text-black hover:bg-white cursor-pointer' style={{transition:'0.5s'}}>
                        {item.item}
                    </li>
                ))
            }
<li>
    <CustomizedDialogs />
</li>
        </ul>
    </div>
  )
}

export default SideBar

