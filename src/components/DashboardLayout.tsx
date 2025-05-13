
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Menu, Home, Folders, LogOut } from "lucide-react";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("userEmail");
    navigate("/");
  };

  return (
    <div className="min-h-screen flex bg-gray-50">
      {/* Sidebar */}
      <div 
        className={`${
          isSidebarOpen ? 'w-64' : 'w-20'
        } bg-white border-r border-gray-200 transition-all duration-300 flex flex-col`}
      >
        <div className="p-4 flex items-center justify-between border-b border-gray-100">
          <div className={`flex items-center ${!isSidebarOpen && 'justify-center w-full'}`}>
            {isSidebarOpen ? (
              <span className="text-xl font-bold text-synca-700 gradient-text">Synca</span>
            ) : (
              <span className="text-xl font-bold text-synca-700">S</span>
            )}
          </div>
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className={!isSidebarOpen ? 'hidden' : ''}
          >
            <Menu size={18} />
          </Button>
        </div>
        
        <nav className="flex-1 pt-5 px-2">
          <div className="space-y-1">
            <Button 
              variant="ghost" 
              className={`w-full justify-start ${!isSidebarOpen && 'justify-center'}`}
            >
              <Home size={18} className={isSidebarOpen ? 'mr-2' : ''} />
              {isSidebarOpen && <span>Inicio</span>}
            </Button>
            
            <Button 
              variant="ghost" 
              className={`w-full justify-start ${!isSidebarOpen && 'justify-center'} bg-gray-100`}
            >
              <Folders size={18} className={isSidebarOpen ? 'mr-2' : ''} />
              {isSidebarOpen && <span>Proyectos</span>}
            </Button>
          </div>
        </nav>
        
        <div className="p-4 border-t border-gray-100">
          <Button 
            variant="outline" 
            className={`w-full justify-start ${!isSidebarOpen && 'justify-center'}`}
            onClick={handleLogout}
          >
            <LogOut size={18} className={isSidebarOpen ? 'mr-2' : ''} />
            {isSidebarOpen && <span>Cerrar sesión</span>}
          </Button>
        </div>
      </div>
      
      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-x-hidden">
        <header className="bg-white border-b border-gray-200 py-3 px-4 flex items-center">
          {!isSidebarOpen && (
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setIsSidebarOpen(true)}
              className="mr-2"
            >
              <Menu size={18} />
            </Button>
          )}
          <h1 className="text-lg font-medium">Dashboard</h1>
        </header>
        
        <main className="flex-1 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
