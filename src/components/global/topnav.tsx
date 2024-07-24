import { AiOutlineMenu } from "react-icons/ai";
import{
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuItem
} from "../ui/navigation-menu"
// import Avatar from 'react-avatar';
import { useNavigate } from "react-router-dom";
import { AppSideNav } from "../customui/app/sidenav";

export const TopNav =()=>{
    const navigate = useNavigate()
    return(
        <div className="mb-0 flex lg:flex-row xl:flex-row md:flex-col pl-5 pr-5 sm:flex-col justify-between md:flex-col-reverse sm:flex-col-reverse items-center w-[100%] gap-2 bg-black">
            <div className="flex items-center justify-between w-full bg-black p-2 rounded">
                <div className="flex gap-2 items-center">
                    <div className="lg:hidden xl:hidden md:block sm:block">
                        <div
                            id="toggler"
                            className="inline-block transition duration-150 ease-in-out hover:shadow-lg  active:shadow-lg"
                            data-te-sidenav-toggle-ref
                            data-te-target="#full-screen-example"
                            data-te-ripple-init>
                            <span className="block ">
                                <AiOutlineMenu
                                    size="1.5rem"
                                    color="white"
                                />
                            </span>
                            {/* <div className="mobileNav">
                                <AppSideNav/>
                            </div>
                            <div className="tabletNav">
                                <AppSideNav/>
                            </div> */}
                            
                        </div>
                    </div>
                    <div className=" w-[6rem] h-[3.5rem] relative">
                        <img
                            src="/5starlogo.svg"
                            alt="object not found"
                            className="w-full"
                            onClick={() => navigate("/")}
                        />
                    </div>
                    
                </div>
                <div className="flex gap-[0.5rem] items-center bg-[grey] p-3 rounded-md"> 
                    <span>
                    
                        <NavigationMenu>
                            <NavigationMenuList>
                                <NavigationMenuItem>
                                <NavigationMenuTrigger>
                                    {/* <Avatar name="Hamzat lawal" size={"150"} round={true}/> */}
                                    <div className=" w-[1.8rem] h-[1.8rem] relative">
                                        <img
                                            src={`/userDp.png`}
                                            alt="object not found"
                                            className="w-full"
                                        />
                                    </div>
                                </NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <ul className="w-[5rem]">
                                        <li>
                                            <NavigationMenuLink asChild>
                                            <a
                                                className="text-large flex w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-2 no-underline outline-none focus:shadow-md"
                                                href="#"
                                                onClick={()=>navigate("/auth/signin")}
                                            >
                                                Log Out
                                            </a>
                                            </NavigationMenuLink>
                                        </li>
                                    </ul>
                                </NavigationMenuContent>
                                </NavigationMenuItem>
                            </NavigationMenuList>
                            </NavigationMenu>
                    </span>
                </div>
            </div>
        </div>
    )
}