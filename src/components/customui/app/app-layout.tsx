import React from 'react';
import { AppSideNav } from './sidenav';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { motion } from 'framer-motion';

const layoutVariant = {
  hidden: {
    opacity: 0,
    y: "100vw",
    scale: 0
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: 0.2,
      duration: 0.7
    }
  }
}


export const AppLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full w-full ">
      <div className="block lg:hidden">
        <AppSideNav/>
      </div>
        <motion.div className="w-full flex h-screen"
          variants={layoutVariant}
          initial="hidden"
          animate="visible"
        >
          <ScrollArea className="lg:block w-80 hidden me-1">
            <AppSideNav style="relative desktopNav pt-4 overflow-auto dark:bg-zinc-800 bg-white shadow rounded-tl-lg" />
          </ScrollArea>
          <ScrollArea className="w-full h-full">
            <div className="px-4 pt-4 pb-14 flex flex-col justify-between md:h-screen h-auto bg-white md:rounded-tr-lg rounded-tr-xl w-full">
              {children}
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </motion.div>
    </div>
  );
};
