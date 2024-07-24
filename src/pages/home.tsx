import { AppDetails } from "@/components/customui/app/dashboard/AppDetails";
import { DashBoardLayout } from "@/components/customui/main_dashboard/dashboard-layout";
import { SearchBar } from "@/components/global/searchInput";
import { SelectInput } from "@/components/global/selectInput";
import { SelectItem } from "@/components/ui/select";
import { useState } from "react";
import logo from "@/components/images/Frame 14.png"

export const DashboardHome = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const licenseOptions = [
    { value: "Free", title: "Free" },
    { value: "Basic", title: "Basic" },
    { value: "Gold", title: "Gold" },
    { value: "Premium", title: "Premium" },
  ];

  const accessOptions = [
    { value: "Admin", title: "Admin" },
    { value: "Developer", title: "Developer" },
    { value: "View", title: "View" },
  ];

  const app = [
    {
      id: 1,
      logo: logo,
      title: "WebhostingApp",
      plan: "free",
      ios: "co.5start.ios.qlije",
      android: "co.5start.android.qlije",
      user: "Admin",
      members: 2,
      lastSaved: "Last saved 12 days ago",
    },
    {
        id: 2,
        logo: logo,
        title: "WebhostingApp",
        plan: "free",
        ios: "co.5start.ios.qlije",
        android: "co.5start.android.qlije",
        user: "Admin",
        members: 2,
        lastSaved: "Last saved 12 days ago",
      },
      {
        id: 3,
        logo: logo,
        title: "WebhostingApp",
        plan: "free",
        ios: "co.5start.ios.qlije",
        android: "co.5start.android.qlije",
        user: "Admin",
        members: 2,
        lastSaved: "Last saved 12 days ago",
      },
      {
        id: 4,
        logo: logo,
        title: "WebhostingApp",
        plan: "free",
        ios: "co.5start.ios.qlije",
        android: "co.5start.android.qlije",
        user: "Admin",
        members: 2,
        lastSaved: "Last saved 12 days ago",
      },
  ];

  return (
    <DashBoardLayout>
      <div className="">
        <SearchBar
          searchTerm={searchTerm}
          onSearch={setSearchTerm}
          classname="mb-5"
        />
        <div className="flex items-center gap-10 max-w-sm">
          <SelectInput label="" placeholder="License Type" style="4rem border">
            {licenseOptions?.map((selectvalue, index) => {
              const { title, value } = selectvalue;
              return (
                <SelectItem value={value} key={index}>
                  {title}
                </SelectItem>
              );
            })}
          </SelectInput>
          <SelectInput label="" placeholder="My Access" style="4rem border">
            {accessOptions.map((selectvalue, index) => {
              const { title, value } = selectvalue;
              return (
                <SelectItem value={value} key={index}>
                  {title}
                </SelectItem>
              );
            })}
          </SelectInput>
        </div>

        <div className="my-9 grid gap-4">
          {app?.map((item) => (
            <AppDetails key={item?.id} item={item} />
          ))}
        </div>
      </div>
    </DashBoardLayout>
  );
};
