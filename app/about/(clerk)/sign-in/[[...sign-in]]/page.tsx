import { SignIn } from "@clerk/nextjs";
import './sign-in.css'
export default function Page() {
  return (
  <div className="sign-in">
    <SignIn 
    afterSignInUrl="/"
    />
  </div>
  );
}