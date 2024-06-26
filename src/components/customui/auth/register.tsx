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
import { RegisterformSchema } from "../../../lib/schema"

export function SignupForm() {
    const[isLoading, setIsLoading]= useState<boolean>(false);
    const form = useForm<z.infer<typeof RegisterformSchema>>({
        resolver: zodResolver(RegisterformSchema),
        defaultValues: {
            email:"",
            password:"",
            fullname:""
        },
    })

    function onSubmit(values: z.infer<typeof RegisterformSchema>) {
        console.log(values)
        // const {
        //     email,
        //     fullname,
        //     password
        // }=values;
        setIsLoading(true)
        
    }

  return (
    <div className="flex flex-col my-4">
        <Text
            style="text-xl font-semibold mb-4 text-center"
            value="BECOME AN EXCLUSIVE MEMBERS"
        />
        <Text
            style="text-md font-light mb-8 text-center"
            value="SIGN UP AND JOIN THE PARTNERSHIP"
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
                            {...field} 
                        />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />
                <FormField
                control={form.control}
                name="fullname"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Full Name</FormLabel>
                    <IconInput
                            style="p-2"
                            icon={
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                                </svg>
                            }
                            type="text"
                            category="formInput"
                            placeHolder="full name" 
                            {...field} 
                        />
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
                            {...field} 
                        />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
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
                        <Button type="submit" className="w-full text-white bg-[#24243E] p-[0.5rem]" >Login</Button>
                    }
                </div>
            </form>
        </Form>
    </div>
  )
}