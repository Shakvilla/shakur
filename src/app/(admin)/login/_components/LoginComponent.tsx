"use client"
import * as React from "react"
 
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { useRouter } from "next/navigation"
import { Form, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"



type Props = {}
const formSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});



function LoginComponent() {


  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
        email: "",
        password: "",
    },
});






const onSubmit = async (values: z.infer<typeof formSchema>) => {
  try {
     
      router.push("/dashboard");
  } catch (error: any) {
      const errorstatus = error?.response?.status;
      // switch (errorstatus) {
      //     case 401:
      //         toast({
      //             title: `${error.response.data.status}`,
      //             description: `${error.response.data.message}`,
      //         });
      //         break;
      //     default:
      //         toast({ title: "Error", description: "Login failed" });
      // }
  }
};

const isLoading = form.formState.isSubmitting;



  return (
<>
    <div className='p-8  bg-[#011627] border border-gray-700 rounded-lg '>
    <Card className="w-[350px] border-gray-700">
      <CardHeader>
        <CardTitle>Login </CardTitle>
        <CardDescription>This is for developer.</CardDescription>
      </CardHeader>
      <CardContent>
        {/* <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Name of your project" />
            </div>
          
          </div>
        </form> */}

<Form {...form}>
                        <form  className="space-y-4">
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="dark:text-white">Email</FormLabel>
                                        <Input type="email" {...field} placeholder="Email" />
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="password"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="dark:text-white">Password</FormLabel>
                                        <Input type="password" {...field} placeholder="Password" />
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <button
                                type="submit"
                                // size="default"
                                className="bg-[#1c2b3a] flex items-center justify-center py-2 rounded font-normal text-normal text-white mt-2 w-full"
                                // disabled={isLoading}
                            >
                                {/* {isLoading ? (
                                    <span className="flex items-center justify-center">
                                        <svg
                                            className="-ml-1 mr-3 h-5 w-5 animate-spin text-white"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                        >
                                            <circle
                                                className="opacity-25"
                                                cx="12"
                                                cy="12"
                                                r="10"
                                                stroke="currentColor"
                                                strokeWidth="4"
                                            ></circle>
                                            <path
                                                className="opacity-75"
                                                fill="currentColor"
                                                d="M4 12a8 8 0 018-8v8H4z"
                                            ></path>
                                        </svg>
                                        Loading...
                                    </span>
                                ) : (
                                    "Submit"
                                )} */}
                                Login
                            </button>
                        </form>
                    </Form>

      </CardContent>
      <CardFooter className="flex justify-between">
        {/* <Button variant="outline">Cancel</Button>
        <Button>Deploy</Button> */}
      </CardFooter>
    </Card>

    </div>
</>
  )
}

export default LoginComponent