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
    <div>
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
