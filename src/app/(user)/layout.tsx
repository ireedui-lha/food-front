import { ReactNode } from "react";

export default function Userlayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <div className="flex w-screen justify-between m-auto ">
      <div>{children}</div>
      <div>
        <img src="./hurgelt.svg" alt="" />
      </div>
    </div>
  );
}
