import axios from 'axios';
import { useEffect, useState} from 'react';

const ChatBoxParty = (props) => {

    const [data, setData] = useState();
    useEffect(() => {
        (async () => {
            const response = await axios.get(
              `http://44.235.8.206/api/1.0/chat/party/${props.mId}?room=${props.rId}`
            ); 
            const interval = setTimeout(() => {
              setData(response.data.result);
            }, 100);
        })();
      }, [data]);

      function renderChatcontent() {
 
        return (
            <div className="product__size-selector">
            {data.map((chat) => {
              if(chat.user_name==window.localStorage.getItem('Name'))
                return (
                  <div class="d-flex flex-row p-3">
                  <img src="https://img.icons8.com/color/48/000000/circled-user-female-skin-type-7.png" width="30" height="30"/>
                  <div class="chat ml-2 p-3"><span class="text-muted dot">{chat.content}</span></div>
                  </div>
                  
                );
              else
                return(
                  <div class="d-flex flex-row p-3 justify-content-end">
                  <div class="bg-white mr-2 p-3"><span class="text-muted">{chat.content}</span></div>
                  <img src="https://img.icons8.com/color/48/000000/circled-user-male-skin-type-7.png" width="30" height="30"/>
                </div>
                );
            })}
          </div>
        );
      } 

      async function  handleSubmit(event){
        // 👇️ prevent page refresh
        event.preventDefault();
        const response = await axios.post(
          `http://44.235.8.206/api/1.0/party/insertchat`,[{"mId" : props.mId,
                                                      "user_name" : window.localStorage.getItem('Name'),
                                                      "content" : event.target.id.value,
                                                      "report_time" : 0,
                                                      "rId" : props.rId}]
        ); 
        console.log('form submitted ');
      };

    if(!data)
      return null;  
    return(
        <>
            <div className="container d-flex justify-content-center ">
                <div class="card mt-5">
                    <div class="d-flex flex-row justify-content-between p-3 adiv text-white">
                        <i class="fas fa-chevron-left"></i>
                        <span class="pb-3">Live chat</span>
                        <i class="fas fa-times"></i>
                    </div>
                    <div className='chat-box'>
                    {renderChatcontent()}
                    </div>
                    <form onSubmit={handleSubmit} class="form-group px-3 mt-auto">
                        <textarea class="form-control" rows="5" placeholder="Type your message" name="id"></textarea>
                        <button type="Submit" className='mt-2'>Submit</button>
                    </form>
                </div>
            </div>
        </>
    );


};

export default ChatBoxParty;