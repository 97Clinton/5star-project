import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { Button } from "../../ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../ui/form"
import {useState } from "react";
import { ReloadIcon } from "@radix-ui/react-icons"
import { IconInput } from "../../global/iconinput"
import { Text } from "../../global/text"
import { SigninformSchema } from "../../../lib/schema"
import { useNavigate } from "react-router-dom";


export function SigninForm() {

    const [mail, setEmail] = useState("");
    const [psw, setPsw] = useState("");

    const[isLoading, setIsLoading]= useState<boolean>(false);
    const navigate = useNavigate();
    const form = useForm<z.infer<typeof SigninformSchema>>({
        resolver: zodResolver(SigninformSchema),
        defaultValues: {
            email:"",
            password:""
        },
    })

    function onSubmit(values: z.infer<typeof SigninformSchema>) {
        console.log(values)
        // const {
        //     email,
        //     password
        // }=values;

        setIsLoading(true)
        
    }

  return (
    <div className="flex flex-col my-4">
        <Text
            style="text-xl font-semibold mb-4 text-center"
            value="WELCOME BACK EXCLUSIVE MEMBERS"
        />
        <Text
            style="text-md font-light mb-8 text-center"
            value="LOGIN TO CONTINUE"
        />
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">  
            <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                        <IconInput
                            style="p-2"
                            icon={
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                                </svg>
                            }
                            
                            type="email"
                            category="formInput"
                            placeHolder="email" 
                            field = {field}
                        />
                       
                        {/* <Input 
                            onChangeCapture={(e) => setEmail(e.currentTarget.value)}
                            placeholder= "email"
                            type="email" 
                            {...field} 
                        /> */}
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />
                <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                        <IconInput
                            style="p-2"
                            icon={
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
                                </svg>
                            }
                            type="password"
                            category="formInput"
                            placeHolder="password" 
                            field = {field} 
                        />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />
                <Text
                    style="text-sm text-grey font-light mb-4 text-start"
                    value="Forget Password? Reset here"
                    clickFunc={()=>navigate("/auth/password_reset")}
                />
                <div 
                    className="flex justify-end items-end bg-[#24243E] rounded-md mt-4"
                    style={{marginTop:"1rem"}}
                >
                    {isLoading?
                        <Button 
                            disabled 
                            className="w-full text-white bg-[#24243E] p-[0.5rem]">
                            <ReloadIcon className="mr-2 h-4 w-4 animate-spin text-white" />
                            Please wait...
                        </Button>:
                        <Button type="submit" className="w-full text-white bg-[#24243E] p-[0.5rem]" style={{display: "flex", justifyContent: "space-between", padding: "0px 30px"}} >Proceed to my Account <i className="fa-solid fa-arrow-right"></i></Button>
                    }
                </div>
            </form>
        </Form>
    </div>
  )
}