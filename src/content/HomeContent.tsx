import { Divider } from '@mui/material';
import Axios from 'axios';
import {useState , useEffect} from 'react';
import { NavLink } from 'react-router-dom';
import {Button} from "@nextui-org/react";
import {Card, Skeleton} from "@nextui-org/react";
import {Popover, PopoverTrigger, PopoverContent} from "@nextui-org/react";
import {CardHeader, CardBody, CardFooter, Link, Image} from "@nextui-org/react";
import VisibilityIcon from '@mui/icons-material/Visibility';
export const Skelaton = ()=> {
  const numberOfCards = 20;
 return(
<div className='grid grid-cols-4 gap-6'>
      {Array.from({ length: numberOfCards }, (_, index) => (
        <Card key={index} className="w-[200px] space-y-5 p-4" radius="lg">
          <Skeleton className="rounded-lg">
            <div className="h-24 rounded-lg bg-default-300"></div>
          </Skeleton>
          <div className="space-y-3">
            <Skeleton className="w-3/5 rounded-lg">
              <div className="h-3 w-3/5 rounded-lg bg-default-200"></div>
            </Skeleton>
            <Skeleton className="w-4/5 rounded-lg">
              <div className="h-3 w-4/5 rounded-lg bg-default-200"></div>
            </Skeleton>
            <Skeleton className="w-2/5 rounded-lg">  
              <div className="h-3 w-2/5 rounded-lg bg-default-300"></div>
            </Skeleton>
          </div>
        </Card>
      ))}
    </div>
 )
}




const HomeContent = () => {
  const [data , setData] = useState([]);
  const [loading , setLoading] = useState(true);
  const [view , setView] = useState(0);

  useEffect(() => {
    
    Axios.get('https://slick-games.onrender.com/software').then(
      (res) => {setData(res.data); setLoading(false) }
    );
  } , [data]);
  interface Item {
    id:number,
    image: string;
    type: string;
    name: string;
    size: string;
    developer: string;
    link: string;
    des:string,
    moreImage:string,
    view:number,
  }
  
  const handelView = (item : Item) => {
   setView(item.view);
   setView(view + 1);
   Axios.post(`https://slick-games.onrender.com/view/${item.id}` , {view : view})
  }
  return (
    <div className='flex justify-center items-center flex-col'>
    <div className='grid grid-cols-2 gap-5'>
      <div className='p-8 m-5 bg-gray-300 rounded-lg w-[1060px]'>
        <h1 className='text-3xl font-bold m-5'>
        apps & games
        </h1>
          {loading == true ? (<Skelaton />) : (
                <ul className='grid grid-cols-4 gap-6'>
                {data.map((item : Item, index) => (
                    <li key={index}  className='flex bg-gray-200 p-5 mt-4 rounded-lg shadow-lg justify-center items-center flex-col w-[250px]'>
                      <img src={item.image} alt="" width={500} height={500} className='rounded-lg shadow-lg' />
                      <div className='text-xl font-bold'>
                      the {item.type}  {item.name}
                      </div>
                      <div>
                        {item.size} 
                      </div>
                      <div>
                      </div>
                      <div className='flex justify-between items-center flex-row gap-8'>
                      <NavLink target='_blank' to={item.link}>
                      <button className="w-28 h-12 text-white font-semibold bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 rounded-lg shadow-lg hover:scale-105 duration-200 hover:drop-shadow-2xl hover:shadow-[#7dd3fc] hover:cursor-pointer">
                        <p>
                          تحميل
                        </p>
                      </button>                
                      </NavLink>
                      <Popover placement="bottom" showArrow={true}>
                      <PopoverTrigger>
                        <Button color='secondary' onClick={() => handelView(item)}>المزيد</Button>
                      </PopoverTrigger>
                      <PopoverContent>
                      <Card className="max-w-[400px]">
                      <CardHeader className="flex gap-3">
                        <Image
                          alt="nextui logo"
                          height={40}
                          radius="sm"
                          src={item.image}
                          width={40}
                        />
                        <div className="flex flex-col">
                        <p><VisibilityIcon /> {item.view}</p>
                          <p className="text-md">{item.name}</p>
                          <p className="text-small text-default-500">{item.link}</p>
                        </div>
                      </CardHeader>
                      <Divider/>
                      <CardBody>
                        <p>{item.des}</p>                        <div className='flex flex-col'>
                          <p>صورة داخل البرمجية:</p>
                        <Image
                        isBlurred
                        width={240}
                        src={item.moreImage}
                        alt="NextUI Album Cover"
                        className="m-5"
                      />
                        </div>
                      </CardBody>
                      <Divider/>
                      <CardFooter>
                        <Link
                          isExternal
                          showAnchorIcon
                          href={item.link}
                        >
                         <p onClick={() => {alert('هذه روابط خارجية اذا اصاب جهازك برامج خبيثة نحن لسنا مسؤولين عن ذلك');}}>التحميل من رابط خارجي</p>
                        </Link>
                      </CardFooter>
                    </Card>                      
                      </PopoverContent>
                    </Popover>                        
                      </div>

                      <Divider />
                                          </li>                      
                ))}
              </ul>         
          )}
          
             
      </div> 
    </div>
  </div>
  
  )

                }
export default HomeContent;
