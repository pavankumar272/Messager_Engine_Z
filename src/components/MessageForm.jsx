import { useState } from "react";
import { sendMessage,isTyping } from "react-chat-engine";
import { SendOutlined,PictureOutlined } from "@ant-design/icons";
const MessageForm =(props)=>{
    const [value,setValue] =useState('');
    const {chatId,creds}=props;
const handleSubmit = (e)=>{
e.preventDefault();
const text = value.trim();
if(text.length >0) sendMessage(creds, chatId, {text});

}
const handleChange=(e)=>{
setValue(e.target.value);
isTyping(props, chatId);
}
const handleUpload=(e)=>{
sendMessage(creds,chatId,{files:e.target.files,text:''});
}

    return (
       <form className="message-form" onSubmit={handleSubmit}>
           <input  value={value} 
           className="message-input"
           placeholder="Send a message..."
           onChange={handleChange}
           onSubmit={handleSubmit}
           />
           <label htmlFor="upload-button">
               <span className="image-button">
                   <PictureOutlined className="picture-icon"/>
               </span>
           </label>
           <input type="file"
           multiple={false}
        
           id="upload-button"
           style={{display:'none'}}
           onChange={handleUpload}
           />
           <button className="send-button" type="sumbit">
               <SendOutlined className="send-icon"/>
           </button>
       </form>
    );
}
export default MessageForm;