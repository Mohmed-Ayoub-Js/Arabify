import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import AddIcon from '@mui/icons-material/Add';
import TextField from '@mui/material/TextField';
import Axios from 'axios';
import {Button} from "@nextui-org/react";
import { useUser } from "@clerk/clerk-react";
const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});
export default function AlertDialogSlide() {
  const { isLoaded, isSignedIn, user } = useUser();

  if (!isLoaded || !isSignedIn) {
    return null;
  }
  const [name , setName] =React.useState("");
  const [size , setSize] = React.useState("");
  const [image , setImage] = React.useState("");
  const [more , setMore] = React.useState("");
  const [type , setType] = React.useState("");
  const [link , setLink] = React.useState("");
  const [des , setDes] = React.useState("");
  const [message , setMessage] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const [developer , setDeveloper] = React.useState(false);
  const [buttonLoading , setbuttonLoading] = React.useState(false);


  const SubmitData = () => {
    if (name === "") {
      setMessage(`من فضلك ادخل اسم${type === "game" ? " اللعبة" : " التطبيق"}`);
    } else if (size === "") {
      setMessage(`من فضلك ادخل حجم${type === "game" ? " اللعبة" : " التطبيق"}`);
    } else if (image === "") {
      setMessage(`من فضلك ادخل صورة ${type === "game" ? " اللعبة" : " التطبيق"}`);
    } else if (more === "") {
      setMessage(`من فضلك ادخل صورة اخرى${type === "game" ? " اللعبة" : " التطبيق"}`);
    } else if (des === "") {
      setMessage(`من فضلك ادخل وصف ${type === "game" ? " اللعبة" : " التطبيق"}`);
    }
    else if (link === "") {
      setMessage(`من فضلك ادخل رابط تحميل ${type === "game" ? " اللعبة" : " التطبيق"}`);
    } 
    else {
      Axios.post("https://slick-games.onrender.com/" , {
        name:name,
        size:size,
        image:image,
        developer:user.firstName,
        type:type,
        des:des,
        moreImage:more,
        link:link,
      });
      setOpen(false);
    }
      
    

  }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  const handelLoadingButton = () => {
   if(buttonLoading == false){
    return(
      <div>
      <Button color="primary" variant="shadow" onClick={handelLoadingButton} isLoading>
        فتح الميزات
      </Button>         
      </div>
    )
   } else {
    return(
      <div>
      <Button color="primary" variant="shadow" onClick={handelLoadingButton}>
        فتح الميزات
      </Button>         
      </div>      
    )
   }
  }
  return (
   <div>
      {developer == true ? (
<div>
  <div onClick={handleClickOpen}>
    <AddIcon />
  </div>
<Dialog
   open={open}
   TransitionComponent={Transition}
   keepMounted
   onClose={handleClose}
   aria-describedby="alert-dialog-slide-description"
 >
   <DialogTitle className='flex justify-center items-center flex-row'><p className='font-bold text-red-500'>{message}</p></DialogTitle>
   <DialogContent>
     <DialogContentText id="alert-dialog-slide-description">
     <div className="max-w-md relative flex flex-col p-4 rounded-md text-black bg-white">
<div className="text-2xl font-bold mb-2 text-[#1e0e4b] text-center">ابدأ الان في رفع برمجياتك في المتجر العربي<span className="text-[#7747ff]"> Arabify </span></div>
<div className="text-sm font-normal mb-4 text-center text-[#1e0e4b]">رفع البرمجيات مجانا</div>
<div className="text-sm font-normal mb-4 text-center text-red-500">{message}</div>
<div className="flex flex-col gap-3">
<div className="block relative"> 
<label htmlFor="email" className="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2">اسم البرمجية</label>
<input type="text" onChange={(e) => {setName(e.target.value)}} id="email" placeholder='example : Pubg Mobile...' className="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2  ring-gray-900 outline-0" />

</div>
<div className="block relative"> 
<label htmlFor="password" className="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2">حجم البرمجية</label>
<input type="text" onChange={(e) => {setSize(e.target.value)}} placeholder='eg : 200MB' id="password" className="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2 ring-gray-900 outline-0" />

</div>

<div className="block relative"> 
<label htmlFor="password"  className="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2">رابط صورة البرمجية</label>
<input type="text" onChange={(e) => {setImage(e.target.value)}} placeholder='مثال : https://www.website.com/image/200/500' id="password" className="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2 ring-gray-900 outline-0" />

</div>
<div className="block relative"> 
<label htmlFor="password"  className="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2">صورة اضافية</label>
<input onChange={(e) => {setMore(e.target.value)}} type="text" placeholder='مثال : https://www.website.com/image/200/500' id="password" className="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2 ring-gray-900 outline-0" />

</div>
<div className="block relative"> 
<label htmlFor="password"  className="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2">مصدر تحميل </label>
<input onChange={(e) => {setLink(e.target.value)}} type="text" placeholder='مثال : https://www.mediafire.com/app' id="password" className="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2 ring-gray-900 outline-0" />

</div>
<div>

<TextField
     id="outlined-multiline-static"
     label="اوصف برمجيتك"
     multiline
     rows={4}
    onChange={(e) =>{setDes(e.target.value)}}
/>
</div>
<p>
هل برمجيتك عبارة عن
</p>
<div className='flex  flex-row gap-9'>

<label htmlFor="option1" className="inline-flex items-center">
<input type="radio" id="option1" name="radio-group" onChange={() => {setType('game')}} className="form-radio text-indigo-600" />
<span className="ml-2">لعبة</span>
</label>

<label htmlFor="option2" className="inline-flex items-center">
<input type="radio" id="option2" name="radio-group" onChange={() => {setType('application')}}  className="form-radio text-indigo-600" />
<span className="ml-2">تطبيق</span>
</label>    
</div>



<button onClick={SubmitData} type="submit" className="bg-[#7747ff] w-max m-auto px-6 py-2 rounded text-white text-sm font-normal">Submit</button>

</div>
</div>
     </DialogContentText>
   </DialogContent>
   <DialogActions>
     <Button onClick={handleClose}><p>غلق</p></Button>
   </DialogActions>
 </Dialog>
</div>

      ) : (
        <div>
         <div onClick={handleClickOpen}>
           <AddIcon />
        </div>
        <Dialog
   open={open}
   TransitionComponent={Transition}
   keepMounted
   onClose={handleClose}
   aria-describedby="alert-dialog-slide-description"
 >
   <DialogTitle className='flex justify-center items-center flex-row'><p className='font-bold text-red-500'>بحاجة الى شراء حساب مطور</p></DialogTitle>
   <DialogContent>
     <DialogContentText id="alert-dialog-slide-description">
  <div>
    <h1>
نتفهم تمامًا قيمة وأهمية إبداعك وجهدك في تطوير البرمجيات. نحن نعتزم تحسين تجربتك مع تطبيقنا، ولهذا السبب قررنا تغيير نهجنا في تقديم خدمة رفع البرمجيات.

من أجل توفير دعم مستمر وتحسينات مستقبلية للمستخدمين المخلصين، قمنا بتطوير نموذج جديد يتيح لك الوصول الكامل إلى خاصية رفع البرمجيات عبر شراء التطبيق المدفوع. مع هذا التحول، ستتمكن من الاستفادة من الميزات الإضافية والدعم المخصص الذي يجعل تجربتك أفضل وأكثر فعالية.

نحن ندرك أن التكلفة تلعب دورًا في اتخاذ قرار الشراء، ولذلك نقدم لك هذا العرض الرائع بسعر فقط 5 دولار. سيتيح لك هذا الاستثمار الصغير فتح العديد من الفرص والمزايا التي ستجعل من تجربتك كمطور برامج أكثر إشراقًا وتقدمًا.

نحن نثق في أنك ستجد قيمة حقيقية في تطبيقنا المدفوع وستستمتع بفوائده. شكرًا لك على دعمك المستمر، ونتطلع إلى مشاركتك في رحلتنا لتحسين عالم تطوير البرمجيات. احصل على التطبيق المدفوع اليوم وابدأ في تحقيق إمكانياتك الكاملة كمطور برامج!
    </h1>

    <div>
    {buttonLoading === false ? (
       <Button color="primary" variant="shadow" onClick={() => {setbuttonLoading(true);setTimeout(() => {
         setbuttonLoading(false);
         setDeveloper(true);
       }, 5000);}}>
            فتح الميزات لمدة 30 يوم
       </Button>  
    ) : (
      <Button color="primary" variant="shadow" isLoading >
       جاري فتح الميزات
    </Button>  
    )}
    </div>
</div>
     </DialogContentText>
   </DialogContent>
   <DialogActions>
     <Button onClick={handleClose}><p>غلق</p></Button>
   </DialogActions>
 </Dialog>
        </div>
      )}
     
    </div>
  );
}