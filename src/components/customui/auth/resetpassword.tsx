import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "../../ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../ui/form"
import {useState } from "react";
import { ReloadIcon } from "@radix-ui/react-icons";
import { IconInput } from "../../global/iconinput";
import { Text } from "../../global/text";
import { ResetPasswordformSchema } from "../../../lib/schema";

export function ResetPasswordForm() {
    const[isLoading, setIsLoading]= useState<boolean>(false);
    const form = useForm<z.infer<typeof ResetPasswordformSchema>>({
        resolver: zodResolver(ResetPasswordformSchema),
        defaultValues: {
            email:""
        },
    })

    function onSubmit(values: z.infer<typeof ResetPasswordformSchema>) {
        console.log(values)
        // const {
        //     email
        // }=values;
        setIsLoading(true)
        
    }

  return (
    <div className="flex flex-col my-5">
        <Text
            style="text-xl font-semibold mb-4 text-center"
            value="FORGET PASSWORD"
        />
        <Text
            style="text-md font-light mb-8 text-center"
            value="ENTER YOUR EMAIL TO RESET PASSWORD"
        />
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">  
            <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                    <FormItem>
                    {/* <FormLabel>Email</FormLabel> */}
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
                            placeHolder="example@gmail.com" 
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
                        <Button type="submit" className="w-full text-white bg-[#24243E] p-[0.5rem]" style={{display: "flex", justifyContent: "space-between", padding: "0px 30px"}} >Proceed to my Account <i className="fa-solid fa-arrow-right"></i></Button>
                    }
                </div>
            </form>
        </Form>

        <div className="bottom absolute bottom-0 mb-3" style={{fontSize: "12px", marginLeft:"20%"}}>
            <a href=""><h6>Having issues with your Password?</h6></a>
        </div>
    </div>
  )
}