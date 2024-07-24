import React from 'react';
import { SideNav } from './sidenav';
import { TopNav } from '../../global/topnav';

export const DashBoardLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div className="h-full">
      <div className="block lg:hidden">
        <SideNav />
      </div>
      <div className="w-full h-full">
        <div
          className="flex h-screen"
        >
          <div className="h-[100%] lg:block hidden">
            <SideNav style="relative desktopNav overflow-auto dark:bg-zinc-800 bg-white shadow me-2 me-1" />
          </div>
          <div className="w-full h-full overflow-auto">
            <TopNav />
            <div className="px-4 w-full h-full mt-4">
              <div className="pb-14 flex flex-col justify-between md:h-screen h-auto">
                {children}
              </div>
            </div>
          </div>
        </div>

        {/* <div className="flex bg-cl">
        <div className="h-[100%] lg:block xl:block md:hidden sm:hidden">
          <AppSideNav style="relative desktopNav w-60 overflow-y-scroll dark:bg-zinc-800 bg-white me-1" />
        </div>
        <div className="w-full h-full pb-20 lg:pt-8 xl:pt-8 md:pt-8 sm:pt-2 xs:pt-2 bg-white rounded-md">
          <ScrollArea className="px-4 h-full w-full h-full">
            {children}
          </ScrollArea>
        </div>
      </div> */}
      </div>
    </div>

    // <div className="bg-[#f9fafb] h-screen px-2 relative">
    //   <div className="mb-4">
    //     <TopNav />
    //   </div>
    //   <div className="mobileNav">
    //     <SideNav />
    //   </div>
    //   <div className="w-full h-full">
    //     <div
    //       className="flex bg-cl"
    //       style={{
    //         height: "100%",
    //       }}
    //     >
    //       <div className="h-[100%]">
    //         <SideNav style="relative desktopNav w-60 overflow-hidden dark:bg-zinc-800 bg-white shadow me-2" />
    //       </div>
    //       <div className="w-full h-full lg:pt-8 xl:pt-8 md:pt-8 sm:pt-2 xs:pt-2 overflow-auto bg-white rounded-md">
    //         <div className="px-4  overflow-auto w-full h-full">
    //           {children}
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};
