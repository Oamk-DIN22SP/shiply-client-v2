import { Home } from "lucide-react";

const SideBar = () => {

  const items = [
    {name: 'Home', path: '/', icon: <Home />},
    {name: 'Send', path: '/send', icon: <Home />},
    {name: 'Receive', path: '/receive', icon: <Home />},
  ];

  return ( 
    <div className="flex flex-col gap-2">
      
    </div>
   );
}
 
export default SideBar;