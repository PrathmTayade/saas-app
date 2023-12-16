import { FC } from "react";

interface ChatWrapperProps {
  isSubscribed: boolean;
  fileId: string;
}

const ChatWrapper: FC<ChatWrapperProps> = ({isSubscribed , fileId}) => {
  return <div>ChatWrapper</div>;
};

export default ChatWrapper;
