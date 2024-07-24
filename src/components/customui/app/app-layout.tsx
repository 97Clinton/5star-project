import React from 'react';
import { AppSideNav } from './sidenav';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';

export const AppLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-screen w-full">
      <div className="block lg:hidden">
        <AppSideNav/>
      </div>
        <div className="w-full flex h-screen">
          <ScrollArea className="lg:block hidden me-1">
            <AppSideNav style="relative desktopNav overflow-auto dark:bg-zinc-800 bg-white shadow rounded-tl-lg" />
          </ScrollArea>
          <ScrollArea className="w-full h-full">
            <div className="px-4 pb-14 flex flex-col justify-between md:h-screen h-auto bg-white md:rounded-tr-lg rounded-tr-xl w-full">
              {children}
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </div>
    </div>
  );
};
