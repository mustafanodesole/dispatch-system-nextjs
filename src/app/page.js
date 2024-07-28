import LoginSignup from "@/components/LoginSignUp/Login";
import HomePage from "../components/HomePage";
import LandingPage from "../components/LandingPage";
import CallLog from "../components/CallLog";
import AccordionComponent from "../components/AccordionComponent";
import Connect from "@/lib/dbConfig";
export default function Home() {
  // Connect();
  return (
    <>
      {/* <HomePage /> */}
      <LoginSignup />
      
      {/* <LandingPage /> */}
    </>
  );
}
