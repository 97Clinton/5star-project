import { CollapsibleComponent } from "@/components/global/collapsibleComponent"
import { Text } from "@/components/global/text"
import { Button } from "@/components/ui/button"
import { AiOutlineLink } from "react-icons/ai"

export const AppDevelopementTab =()=>{
    return(
        <div>
            <CollapsibleComponent
                    title="Self-Service App Developement"
                    subTitle=""
                >
                    <div>
                        <ul className="text-xs text-[grey] gap-8 list-disc leading-7 ">
                            <li>Enter your website url to build an app that displays your web content</li>
                            <li>Use Our Online Builders to add Icons and colors that match your branding</li>
                            <li>Add native menus, support for WebRTC, deep Linking, and much more to build a fully functioning app</li>
                        </ul>
                        <Button className="flex items-center gap-2 bg-[#CCCCCC] text-xs text-black my-4">
                            Support portal
                            <AiOutlineLink size="1.3rem"/>
                        </Button>
                        <div className="grid lg:grid-cols-2 xl:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-4">
                            <div className="border p-4 rounded-md">
                                <Text
                                    style="text-lg font-semibold"
                                    value="Assisted App Developement"
                                />
                                <Text
                                    style="text-sm font-semibold mb-4"
                                    value="How it works:"
                                />
                                <ul className="text-xs text-[grey] gap-8 list-decimal leading-7">
                                    <li>You develop your app using median plartform with our assistance, on your schedule</li>
                                    <li>Our team assists through email in cluding configuring push notification and native plugins</li>
                                    <li>Add our app publishing service to have our team publish your app to the Apple app Store and Google play store with a guarantee of approval</li>
                                </ul>
                                <div className="flex items-center gap-2 font-semibold text-lg my-4 justify-center">#20000 <span className="font-medium text-sm">one-time payment</span></div>
                                <Button className="bg-black text-white w-full">
                                    Purchase
                                </Button>
                            </div>
                            <div className="border p-4 rounded-md">
                                <Text
                                    style="text-lg font-semibold"
                                    value="Conciege App Developement"
                                />
                                <Text
                                    style="text-sm font-semibold mb-4"
                                    value="How it works:"
                                />
                                <ul className="text-xs text-[grey] gap-8 list-decimal leading-7">
                                    <li>We develop your app for you using our plartform, typically requireing 1-2 weeks developement time</li>
                                    <li>A dedicated project management meets with you via video call to understand your requirement</li>
                                    <li>Add our app publishing service to have our team publish your app to the Apple app Store and Google play store with a guarantee of approval</li>
                                </ul>
                                <div className="flex items-center gap-2 font-semibold text-lg my-4 justify-center">#20000 <span className="font-medium text-sm">one-time payment</span></div>
                                <Button className="bg-black text-white w-full">
                                    Purchase
                                </Button>
                            </div>
                        </div>
                    </div>
                </CollapsibleComponent>
        </div>
    )
}