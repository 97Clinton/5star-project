import { CollapsibleComponent } from "@/components/global/collapsibleComponent"
import { Text } from "@/components/global/text"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export const NativePluginSection =()=>{
    return(
        <div className="flex gap-1 flex-col">
            <div className="p-2 bg-white w-full rounded">
                <Text
                    style="text-xl font-semibold mb-1"
                    value="Native Plugin"
                />
            </div>
            <div className="p-4 bg-white">
                <CollapsibleComponent
                    title="Available Plugins"
                    subTitle=""
                >
                    <Input
                        type="text"
                        className="border w-full"
                        placeholder="Search for an app"
                    />
                </CollapsibleComponent>
            </div>
            {
                [
                    {
                        img:"native2",
                        value:"Social Login",
                    },{
                        img:"native3",
                        value:"QR/Barcode scanner",
                    },{
                        img:"native4",
                        value:"Google Firebase Analytics",
                    },{
                        img:"native5",
                        value:"Face ID/Touch ID Android Biomet",
                    },{
                        img:"native6",
                        value:"In-App Purchases",
                    },{
                        img:"native7",
                        value:"App Review",
                    },{
                        img:"native8",
                        value:"Share into app",
                    },{
                        img:"native9",
                        value:"Native Datastore",
                    },{
                        img:"native10",
                        value:"Background Location",
                    },{
                        img:"native11",
                        value:"Haptics",
                    },{
                        img:"native12",
                        value:"HapAdMob Native Adstics",
                    },{
                        img:"native13",
                        value:"Native Media Player",
                    },{
                        img:"native14",
                        value:"Meta App Events",
                    },{
                        img:"native15",
                        value:"Native Contacts",
                    },{
                        img:"native16",
                        value:"Document Scanner",
                    },{
                        img:"native17",
                        value:"Secure Modal (Apple Pay)",
                    },{
                        img:"native18",
                        value:"Calendar",
                    },{
                        img:"native19",
                        value:"Offline Downloads",
                    },{
                        img:"native20",
                        value:"Card.io",
                    },{
                        img:"native21",
                        value:"Branch.io",
                    },{
                        img:"native22",
                        value:"NFC Tag Scanner",
                    }].map((plugins,index)=>{
                    return(
                            <div 
                                className="p-4 bg-white"
                                key={index}
                            >
                                <CollapsibleComponent
                                    title={
                                        <div  
                                            className="flex w-full gap-4 flex-wrap items-center"
                                        >
                                            <div className="flex-grow flex gap-2 items-center">
                                                <div className=" w-[1.3rem] h-[1.3rem] relative">
                                                    <img
                                                        src={`/${plugins?.img}.png`}
                                                        alt="object not found"
                                                        className="w-full"
                                                    />
                                                </div>
                                                <Text
                                                    style="text-sm text-start"
                                                    value={plugins?.value}
                                                />
                                            </div>
                                            <div className="flex gap-2 items-center">
                                                <Text
                                                    style="text-sm"
                                                    value="#2000"
                                                />
                                                <Text
                                                    style="text-xs"
                                                    value="one time"
                                                />
                                                <Button className="bg-[grey] text-black badge">view docs</Button>
                                                <Button className="badge">Add</Button>
                                            </div>
                                        </div>
                                    }
                                    subTitle="Our most popular push notification service offers advanced messaging and fits businesses of all sizes, and is free to test before publishing. Opt for Full-Service, and we’ll configure it for your app."
                                >
                                <div></div>
                            </CollapsibleComponent>
                        </div>
                       
                    )
                })
            }
        </div>
    )
}