import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { Button } from "@/components/ui/button";

const Register = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Card className="w-full max-w-sm p-6 shadow-md bg-white rounded-lg">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">Register</CardTitle>
          <CardDescription>Enter your info to Register</CardDescription>
        </CardHeader>

        <CardContent>
          <form className="space-y-4">
            <div className="flex gap-3">
                <div>
                    <Label htmlFor="fname">First Name</Label>
                    <Input type="text" id="fname" placeholder="First name" required />
                </div>
                <div>
                    <Label htmlFor="lname">Last Name</Label>
                    <Input type="text" id="lname" placeholder="Last name" required />
                </div>
            </div>

            <div className="flex flex-col gap-2">
              <Label htmlFor="email">Email</Label>
              <Input type="email" id="email" placeholder="email@example.com" required />
            </div>

            <div className="flex flex-col gap-2">
              <Label htmlFor="password">Password</Label>
              <Input type="password" id="password" placeholder="********" required />
            </div>

            <Button type="submit" className="w-full">
              Register
            </Button>

            <Button variant="outline" className="w-full">
              Register with Google
            </Button>
          </form>

          <div className="mt-4 text-center text-sm">
            Already have an account?{" "}
            <a href="/login" className="underline text-blue-600 hover:text-blue-800">
              Login
            </a>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Register;
