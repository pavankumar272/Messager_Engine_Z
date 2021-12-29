import React from "react";
const TheirMessage =({lastMessage, message})=>{
    const isFirstMessageByUser = !lastMessage || lastMessage.sender.username !==  message.sender.username;
    return (
        <>
        <div className="message-row">
{isFirstMessageByUser && (
    <div className="message-avatar"
    style={{backgroundImage:`url(${message?.sender?.avatar})`}}>
        {message.text}
    </div>
)
}
{message?.attachments?.length >0
    ? (
        <img src={message.attachments[0].file} alt="message-attachment"
        className="message-image" style={{marginLeft:isFirstMessageByUser?'4px':'48px'}}/>
           
        
        
    ) : (

        <div className="meassge" style={{float:'left',backgroundColor:'#CABCDC',marginLeft:isFirstMessageByUser?'4px':'48px',padding:'10px',borderRadius:'0px 7px 7px 7px'}}>
        {message.text}
        
        </div>
        
    )



    }
            
        </div>
        
        </>
    );
}
export default TheirMessage;
