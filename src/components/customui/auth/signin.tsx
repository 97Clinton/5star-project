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
import { Bounce, ToastContainer, toast } from 'react-toastify'; 
import "react-toastify/dist/ReactToastify.css";
import { useAuth } from "@/AuthContext"


// Define the type for the SignIn props
interface SignInProps {
    onLogin: (email: string, password: string) => void;
}

export const SigninForm: React.FC<SignInProps> = ({ onLogin }) => {

    const[isLoading, setIsLoading]= useState<boolean>(false);
    const navigate = useNavigate();
    const form = useForm<z.infer<typeof SigninformSchema>>({
        resolver: zodResolver(SigninformSchema),
        defaultValues: {
            email:"",
            password:""
        },
    })

    const { signIn } = useAuth();

    async function onSubmit(values: z.infer<typeof SigninformSchema>) {
        //destructure the details
        const {
            email,
            password
        }=values;

        onLogin(email, password);  // Pass credentials to the parent or another component

        const user = {username: email, psw: password}
        // Call signIn and store user data
        signIn(user);

        let details = {email, password};
        setIsLoading(true);

        //fetch api
        try {
            let response = await fetch("https://web2app.prisca.5starcompany.com.ng/api/login", {
                method: 'POST',
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(details)
            });

            //log response error
            if (!response.ok) {
                throw new Error('Unprocessable content!');
            }

            let responseData = await response.json();
                // store user details and basic auth credentials in local storage 
                // to keep user logged in between page refreshes
            
            // Assuming the token is inside the response data, e.g., responseData.token
            const token = responseData.token;
            const dataMessage = responseData.message;

            // Store the token in localStorage
            localStorage.setItem('authToken', token);  // Save token in localStorage
            console.log('Token saved: ', token);
            console.log('Message: ', dataMessage);
            
            localStorage.setItem("user-info", JSON.stringify(responseData));
            console.log('Response: ', responseData);
            
            //navigate to homepage after successful login
            setTimeout(()=> navigate('/'), 2000); //delayed to allow toast display

            toast.success(`${dataMessage}`, {
                position: "bottom-right",
                draggable: true
            })
                      
        } catch (dataMessage) {
            //catch and log error
            console.error("error:", dataMessage);
            toast.error(`${dataMessage}`, {
                position: "bottom-right",
                draggable: true
            })
        } finally {
            //make sure isLoading returns false
            setIsLoading(false);
        }
                
    }

  return (
    <div className="flex flex-col my-2">
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
                    value={<h6> Forget Password? <span className="hover:underline cursor-pointer hover:font-medium">Reset here</span></h6>}
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
                    <ToastContainer transition={Bounce} draggable/>
                </div>
            </form>
        </Form>
    </div>
  )
}