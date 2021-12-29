import React from "react";
const MyMessage =({message})=>{

    if(message?.attachments?.length >0){
        return (
            <img src={message.attachments[0].file} alt="message-attachment"
            className="message-image" style={{float:'right'}}/>                  
        )
    }
    return (        
        <div className="meassge" style={{float:'right',marginRight:'18px',color:'white',backgroundColor:'#3B2A50',padding:'10px',borderRadius:'7px 0px 7px 7px'}}>
            {message.text}
        </div>       
    );
}
export default MyMessage;
