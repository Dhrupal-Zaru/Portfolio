import { Outlet } from "react-router";
import Header from "./Header";

export default function AppLayout() {
    return (
        <div className="grid grid-rows-[auto_1fr] h-screen w-full bg-[#fefeff] text-slate-800">
            <Header />
            <main className="pt-30 overflow-y-auto overflow-x-hidden">
                <Outlet />
            </main>
        </div>
    )
}
