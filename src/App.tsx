import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Home from './layout/Home';
import { ClerkProvider } from "@clerk/clerk-react";
import {
  SignedIn,
  SignedOut,
  RedirectToSignIn,
} from "@clerk/clerk-react";
if (!"pk_test_ZGVjZW50LXNlYWhvcnNlLTU2LmNsZXJrLmFjY291bnRzLmRldiQ") {
  throw new Error("Missing Publishable Key")
}
const clerkPubKey = "pk_test_ZGVjZW50LXNlYWhvcnNlLTU2LmNsZXJrLmFjY291bnRzLmRldiQ";
 
function App() {
  return (
    <div>
      <div className='p-5 m-5 flex justify-center items-center  flex-col'>
      <h1 className='bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent  t-5 text-5xl font-extrabold leading-[1.15] text-black sm:text-6xl'>
        التطبيق مغلق
      </h1>
      <p className='mt-5 text-lg text-gray-600 sm:text-xl max-w-2xl'>
      ما للحقيقة عذر، أحياناً الأمور المالية تلقي بظلالها على تطور التطبيقات. لكن الجانب الإيجابي هو أن التطبيق ما زال مفتوح المصدر، يعني يمكن لأي شخص مهتم أن يأخذ بزمام المبادرة ويدير الأمور
      
      
      </p>
      <img src="https://media2.giphy.com/media/xHMZ9iw9DirfpUFfc5/giphy.gif?cid=6c09b952zcii6ivu9dt7zjdlulg93a2vo2yaizkv5k55b28a&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=s" alt="" />
      </div>
    <div className="hidden">
    <ClerkProvider publishableKey={clerkPubKey}>
    <SignedIn>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />}/>
          </Routes>
        </BrowserRouter>       
      </SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
       
    </ClerkProvider>
    </div>      
    </div>

  );
}

export default App;
