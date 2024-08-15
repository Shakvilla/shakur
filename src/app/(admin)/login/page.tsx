import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function page() {
  return (
    <div className="flex h-screen justify-center items-center">
      <Card className="w-full max-w-sm bg-transparent border border-[#1E2D3D]">
        <CardHeader>
          <h3 className="text-2xl">_Login</h3>
          <CardDescription>
            Enter your email below to login to your account.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="m@example.com"
              required
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" required />
          </div>
        </CardContent>
        <CardFooter>
          <button className="w-full bg-[#1c2b3a] px-2 py-1 rounded font-normal text-sm text-white mt-2">
            Sign in
          </button>
        </CardFooter>
      </Card>
    </div>
  );
}
