"use client";
import { Card, CardBody, CardHeader, Tab, Tabs } from "@nextui-org/react";
import { FC, Key, useState } from "react";
import LoginTab from "./components/LoginTab";
import SignUpTab from "./components/SignUpTab";
import { useRouter } from "next/navigation";

const LoginSignup: FC = () => {
  const [selected, setSelected] = useState<string>("login");
  const router = useRouter();

  const handleNaviagtion = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    router.push("/dashboard", { scroll: false });
  };
  return (
    <div className="bg-[#F9FAFD] h-screen overflow-hidden">
      <Card className="max-w-[440px] min-w-[340px] m-auto absolute top-1/2 left-1/2 py-4 -translate-x-2/4 -translate-y-2/4">
        <CardHeader className="justify-center font-bold  p-0 pt-3 text-xl">
          Login
        </CardHeader>
        <CardBody className="">
          <LoginTab setSelected={setSelected} onClick={handleNaviagtion} />
        </CardBody>
      </Card>
    </div>
  );
};

export default LoginSignup;
