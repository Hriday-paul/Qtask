import AdminNavbar from "@/components/Admin/Sidebar/AdminNavbar";
import AdminSidebar from "@/components/Admin/Sidebar/Sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";


function AdminDashboardLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <SidebarProvider >
            <AdminSidebar />
            <main className="w-full">
                <AdminNavbar />
                <div className="p-5">
                    {children}
                </div>
            </main>
        </SidebarProvider>
    )
}

export default AdminDashboardLayout;