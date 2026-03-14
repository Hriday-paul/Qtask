"use client"
import { Button } from '@/components/ui/button'
import { SidebarToggle } from './SidebarToggle'
import { LogOut } from 'lucide-react'
import { Logout } from '@/lib/Actions/Auth.action';
import { useRouter } from 'next/navigation';

function AdminNavbar() {

  const router = useRouter();

  const handleLogout = async () => {
    await Logout();
    router.replace(`/admin/auth/login`)
  };

  return (
    <div className='bg-white px-5 py-5 border-b border-stroke w-full shadow'>

      <div className='flex flex-row justify-between items-center'>
        <div className='flex flex-row gap-x-3 items-center'>
          <SidebarToggle />
          <h3 className='text-lg font-medium font-epilogue'>Dashboard</h3>
        </div>
        <Button
          onClick={handleLogout}
          variant="ghost"
          size="sm"
          className="flex items-center gap-2 hover:border border-stroke font-epilogue"
        >
          <LogOut className="h-4 w-4" />
          Logout
        </Button>
      </div>

    </div>
  )
}

export default AdminNavbar