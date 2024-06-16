import "./navbar.scss";
import{
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuItem
} from "../ui/navigation-menu";
import { useNavigate } from "react-router-dom";

export function Navbar() {

    const navigate = useNavigate();

    return (
        <div className="navbar">
            <div className="logo">
                <img src="/logo.png" alt="" className="logo"/>
            </div>
            {/* <div className="user">
                <img src="../public/avatar.png" alt="" className="avatar"/>
                <img src="../public/chevron-down.png" alt="" className="arrow" />
            </div> */}
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
                                    <ul className="w-[4rem]">
                                        <li>
                                            <NavigationMenuLink asChild>
                                            <a
                                                className="text-sm flex w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-4 no-underline outline-none focus:shadow-md"
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
    )
}