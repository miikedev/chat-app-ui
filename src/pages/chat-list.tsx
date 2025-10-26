import { Avatar } from "@heroui/avatar";
import { Badge } from "@heroui/badge";
import { Input } from "@heroui/input";
import { Link } from "react-router";
import { SearchIcon } from "@/components/icons";
const ChatList = () => {
  return (
    <div>
      <div className="chat-list-header flex justify-between py-3">
        <div>
          <h1 className="text-2xl font-bold">Chitty Chat</h1>
        </div>
        <div className="flex gap-2">
          <Input
            className="text-medium"
            placeholder="Search"
            startContent={<SearchIcon />}
            type="Search"
          />
          <Avatar className="w-12 h-10" name="Junior" />
        </div>
      </div>
      <div className="chat-list py-2">
        {Array.from({ length: 20 }).map((_, i) => (
          <Link
            key={i}
            preventScrollReset
            className="h-[4rem] hover:bg-gray-100 w-full flex items-center px-2 rounded-lg"
            to={`/chat/${i}`}
          >
            <Badge
              color="success"
              content=""
              placement="bottom-right"
              shape="circle"
            >
              <Avatar
                radius="full"
                src={`https://i.pravatar.cc/150?u=a04258a2462d82671${i}`}
              />
            </Badge>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ChatList;
