import { CollapsibleComponent } from "@/components/global/collapsibleComponent"
import { Text } from "@/components/global/text"
import { AppIconCard } from "./appIconCard"
import { SplashScreenCard } from "./splashscreencard"
import { StatusbarCard } from "./statusbarcard"
import { ThemeColorsCard } from "./themecolorsCard"

export const BrandingSection =()=>{
    return(
        <div className="flex gap-1 flex-col">
            <div className="p-2 bg-white w-full rounded">
                <Text
                    style="text-xl font-semibold mb-1"
                    value="App Branding"
                />
                <Text
                    style="text-sm text-[grey]"
                    value="The first step in configuring your app is add an app icon and splash screen, and to select theme colors
                    aligned with your organization"
                />
            </div>
            <div className="p-4 bg-white">
                <CollapsibleComponent
                    title="App Icon"
                    subTitle="Your app icon is your app’s identity and is used on the device home screen and in other locations such as settings. Upload a PNG or JPG square image to use as your app's launch icon. Recommended resolution is 1024x1024 pixels."
                >
                    <div className="gap-4 grid md:grid-cols-2 grd-cols-1">
                        <AppIconCard
                            os="IOS"
                            img="/laundry img.svg"
                        />
                        <AppIconCard
                            os="Android"
                            img="/laundry img.svg"
                        />
                    </div>
                </CollapsibleComponent>
            </div>
            <div className="p-4 bg-white">
                <CollapsibleComponent
                    title="Splash Screen"
                    subTitle="Configure the splash screen that displays while your app initially launches. Splash screen appearance varies between iOS and Android to meet design guidelines for each platform. The splash screen will display until your webpage finishes loading (when the DOMContentLoaded event fires) so that the transition between splash screen and your app is seamless."
                >
                    <div className="flex flex-col gap-4">
                        <SplashScreenCard
                            os="IOS"
                            img="/laundry img.svg"
                        />
                        <SplashScreenCard
                            os="Android"
                            img="/laundry img.svg"
                        />
                    </div>
                </CollapsibleComponent>
            </div>
            <div className="p-4 bg-white">
                <CollapsibleComponent
                    title="Theme Colors"
                    subTitle="Set a Primary Color used for text fields and labels, also referred to as the Tint color for iOS and the Accent color for Android."
                >
                    <div className="flex flex-col gap-4">
                        <ThemeColorsCard
                            os="IOS"
                        />
                        <ThemeColorsCard
                            os="Android"
                        />
                    </div>
                </CollapsibleComponent>
            </div>
            <div className="p-4 bg-white">
                <CollapsibleComponent
                    title="Status Bar"
                    subTitle="Set default styling options and Light/Dark mode for the device status bar while your app is open. When the status bar is in Light mode it will display with black text, in Dark mode white text, in Auto mode it will follow the device Light/Dark mode setting. You may also customize and dynamically set the status bar visibility and style during runtime from your website using the Median Javascript Bridge."
                >
                    <div className="flex flex-col gap-4">
                        <StatusbarCard
                            os="IOS"
                        />
                        <StatusbarCard
                            os="Android"
                        />
                    </div>
                </CollapsibleComponent>
            </div>
        </div>
    )
}