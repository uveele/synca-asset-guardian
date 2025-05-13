
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Folders } from "lucide-react";
import DashboardLayout from "@/components/DashboardLayout";
import CreateProjectDialog from "@/components/CreateProjectDialog";

const Dashboard = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isCreateProjectOpen, setIsCreateProjectOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is authenticated
    const authStatus = localStorage.getItem("isAuthenticated");
    if (!authStatus || authStatus !== "true") {
      navigate("/");
      return;
    }
    
    setIsAuthenticated(true);
    
    // Automatically show the create project dialog when dashboard loads for the first time
    const hasSeenProjectDialog = sessionStorage.getItem("hasSeenProjectDialog");
    if (!hasSeenProjectDialog) {
      setTimeout(() => {
        setIsCreateProjectOpen(true);
        sessionStorage.setItem("hasSeenProjectDialog", "true");
      }, 500);
    }
  }, [navigate]);

  if (!isAuthenticated) {
    return null; // Don't render anything while checking auth
  }

  return (
    <DashboardLayout>
      <div className="p-6">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-semibold">Mis Proyectos</h1>
          <Button onClick={() => setIsCreateProjectOpen(true)}>
            <Folders className="mr-2 h-4 w-4" />
            Nuevo Proyecto
          </Button>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 text-center">
          <img 
            src="https://cdn-icons-png.flaticon.com/512/6295/6295417.png" 
            alt="Proyectos" 
            className="w-48 h-48 mx-auto mb-6 opacity-50"
          />
          <h2 className="text-xl font-medium text-gray-700 mb-2">No tienes proyectos aún</h2>
          <p className="text-gray-500 mb-6">
            Comienza creando tu primer proyecto para gestionar tus activos digitales
          </p>
          <Button onClick={() => setIsCreateProjectOpen(true)}>
            <Folders className="mr-2 h-4 w-4" />
            Crear mi primer proyecto
          </Button>
        </div>
      </div>

      <CreateProjectDialog 
        isOpen={isCreateProjectOpen} 
        setIsOpen={setIsCreateProjectOpen} 
      />
    </DashboardLayout>
  );
};

export default Dashboard;
