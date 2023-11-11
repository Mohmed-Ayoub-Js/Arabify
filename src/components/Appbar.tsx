import  {useState} from 'react'
import Pilstine from './Pilstine';
import { UserButton } from '@clerk/clerk-react';
const Appbar = () => {
    const [pageName , setPageName] = useState('الالعاب');
    const links = [
    {
        href:'../apps',
        dir:'التطبيقات',
    },
    {
        href:'../games',
        dir:'الالعاب',        
    }
  ];
  const handelPage = (button : string) => {
    if(pageName == 'الالعاب' && button == "التطبيقات") {
        setPageName('التطبيقات');
    }
    if(pageName == 'التطبيقات'  && button == "الالعاب")
    {
        setPageName('الالعاب');
    }
  }
  return (
  <div>
    <Pilstine />
    <div className='flex justify-between items-center flex-row p-5 '>
        <div>
          <img width={50} height={50} src="logo.png" alt=""  className='relative left-5'/>
        </div>
        <div>
        <ul className='flex justify-center items-center flex-row gap-5'>
            {links.map((item, index) => (
                <li onClick={() => handelPage(item.dir)} key={index} className={`hidden p-2 rounded-2xl ${pageName === item.dir ? 'bg-black text-white' : 'bg-gray-100'} hover:bg-black hover:text-white cursor-pointer`}>
                {item.dir}
                </li>
            ))}
       </ul>
        </div>
        <div className='p-5 flex justify-center '>
 
        <UserButton />
        </div>
    </div>    
  </div>

  )
}

export default Appbar