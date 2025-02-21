import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Page() {
  return (
    <div>
      <h1>Create your account</h1>
      <p>Sign up to explore favorite dishes</p>
      <Input />
      <Button className="w-[416px]"> Let's go</Button>
    </div>
  );
}
