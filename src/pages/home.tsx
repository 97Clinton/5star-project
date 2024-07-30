import { AppDetails } from "@/components/customui/app/dashboard/AppDetails";
import { DashBoardLayout } from "@/components/customui/main_dashboard/dashboard-layout";
import { SearchBar } from "@/components/global/searchInput";
import { SelectInput } from "@/components/global/selectInput";
import { SelectItem } from "@/components/ui/select";
import { useState } from "react";
import logo from "@/components/images/Frame 14.png"
import { useNavigate } from "react-router-dom";

export const DashboardHome = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const navigate = useNavigate();

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

            <div className="menu lg:hidden xl:hidden md:block sm:block mb-3 ">
                <a className="btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBackdrop" aria-controls="offcanvasWithBackdrop"><i className="fa-solid fa-bars text-2xl" ></i></a>
                <div className="offcanvas offcanvas-start pl-3 " tabIndex={-1} id="offcanvasWithBackdrop" aria-labelledby="offcanvasWithBackdropLabel">
                    <div className="offcanvas-header">
                      <div className="header flex gap-5 mt-4">
                          <h2 className="offcanvas-title" id="offcanvasWithBackdropLabel" style={{fontWeight: "600", fontSize: "20px"}}>Odejinmi Samuel`s <br /> Team</h2>
                          <img src="/right-arrow.png" alt="" className="w-[2em] h-[2em]"/>
                      </div>
                        
                      <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body flex flex-col gap-4">
                        <div className="list flex gap-2 cursor-pointer hover:bg-[#F2F2F2] w-[50%] hover:p-2 rounded-xl" onClick={() => navigate("/app")}>
                            <img src="/phone-icon.png" alt="" className="w-[1.8em] h-[1.8em]" />
                            <p>Apps</p>
                        </div>
                        <div className="list flex gap-2 cursor-pointer hover:bg-[#F2F2F2] w-[50%] hover:p-2 rounded-xl" onClick={() => navigate("/app/members")}>
                            <img src="/users-icon.png" alt="" className="w-[1.8em] h-[1.8em]"  />
                            <p>Members</p>
                        </div>
                        <div className="list flex gap-2 cursor-pointer hover:bg-[#F2F2F2] w-[50%] hover:p-2 rounded-xl" onClick={() => navigate("/app/settings")}>
                            <img src="/settings-icon.png" alt="" className="w-[1.8em] h-[1.8em]"  />
                            <p>Settings</p></div>
                        <div className="list flex gap-2 cursor-pointer hover:bg-[#F2F2F2] w-[50%] hover:p-2 rounded-xl" onClick={() => navigate("/app/overview")}>
                            <img src="/create-icon.png" alt="" className="w-[1.8em] h-[1.8em]"  />
                            <p>Create New App</p>
                        </div>
                    </div>
                </div>
            </div>
      <div className="mb-5">
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
