import { ChatIcon } from '@/components/icons';
import * as React from 'react';

interface IChatProps {
}

const Chat: React.FunctionComponent<IChatProps> = (props) => {
  return <div className=' fixed bottom-10 right-10' >
    <ChatIcon />
  </div >

};

export default Chat;
