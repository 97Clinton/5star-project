import React from "react";
import { Text } from "../../global/text";
import { AiOutlineDoubleLeft } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";


const authVariant = {
    hidden : {
        opacity: 0,
        x: "-100vw",
        scale: 0
    },
    visible: {
        opacity: 1,
        x: 0,
        scale: 1,
        transition: {
            duration: 1,
            type: "spring",
            stiffness: 50
        }
    }
}

export const AuthLayout=({
    children,
    route,
    routeText
}: {
    children: React.ReactNode,
    route:string,
    routeText: string | React.ReactNode,
  })=>{
    const navigate = useNavigate()
    return(
        <div className="bg-[#f9fafb] h-screen w-full">
            <div className="flex flex-row w-full h-full">
                <div className="w-[30rem] lg:block xl:block md:block sm:hidden relative  h-full ">
                    <div className="">
                        <img src="/handshake.png" alt="" className="h-[100vh] w-[35vw] "/>
                    </div>
                </div>
                <div className="p-4 flex-grow overflow-hidden">
                    <div className="flex flex-wrap justify-between gap-2">
                        <div className="flex gap-2 items-center">
                            <AiOutlineDoubleLeft color="grey" size="1.3rem"/>
                            <Text
                                style="text-sm text-start cursor-pointer underline"
                                value="Return Home"
                            />
                        </div>
                        <Text
                            style="text-sm text-start cursor-pointer"
                            value={routeText}
                            clickFunc={()=>navigate(route)}
                        />
                    </div>
                    <div className="p-4 h-full lg:w-[450px] xl:w-[450px] md:w-[450px] sm:w-full m-auto relative flex flex-col items-center justify-center">
                        <motion.div className="lg:p-8 xl:p-8 md:p-8 sm:p-4 rounded-md bg-white w-full shadow p-3 mb-2 bg-body rounded"
                            variants={authVariant}
                            initial="hidden"
                            animate="visible"
                        >
                            {children}
                        </motion.div>
                    </div>
                </div>
            </div>
       </div>
  );
};