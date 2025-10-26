import { Outlet } from "react-router";
const ChatLayout = () => {
  return (
    <div className="container max-w-lg mx-auto px-2 border-1 border-gray-100 h-screen">
      <Outlet />
    </div>
  );
};

export default ChatLayout;
