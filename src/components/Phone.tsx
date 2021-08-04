import MsgBubble, {MsgBubblePrice, MsgBubbleImgs} from './MsgBubble';

import './Phone.scss';
const Phone =()=>{
    const imgArr  = [
      "./images/dog-image-1.jpg",
      "./images/dog-image-2.jpg",
      "./images/dog-image-3.jpg",
    ];
    const msgs = [
      <MsgBubble bubbleStyle={'left '}>That sounds great. I’d be happy with that.</MsgBubble>,
      <MsgBubble bubbleStyle={'left '}>Could you send over some pictures of your dog, please?</MsgBubble>,
      <MsgBubbleImgs images={imgArr}/>,
      <MsgBubble bubbleStyle={'right'}>Here are a few pictures. She’s a happy girl!</MsgBubble>,
      <MsgBubble bubbleStyle={'right'}>Can you make it?</MsgBubble>,
      <MsgBubble bubbleStyle={'left'}>She looks so happy! The time we discussed walks. How long shall I take her out for?</MsgBubble>,
      <MsgBubblePrice item={'30 minute walk'} price='29'/>,
      <MsgBubblePrice item={'1 hour walk'} price='49'/>
    ]
   return (
    <div className="phone d-flex direction-row w-50  shadow">
    <div className=" phone-header align-items-center ">
      <i className="bi bi-chevron-left me-2"></i>
      <img
        src="./images/avatar.jpg"
        alt="samuel green avatar"
        className="avatar me-2"
      />
      <span className="title ">
        <h6>Samuel Green</h6>
        <p>Available to Walk</p>
      </span>
      <div className='text-white ms-auto'><div className='dot'></div><div className='dot'></div><div className='dot'></div></div>
    </div>
    <div className="phone-body d-flex flex-column justify-content-between h-50 ">
      
      
      {msgs.map((msg, indx)=>{
        const delay={animationDelay:`${indx}s`};
      console.log(`${indx}s`)
      return<div key={indx} className='fade-in' style={delay}>{msg}</div>
      })}
     
  
      <div className="input-group  w-100">
        <input
          type="text"
          className="form-control round msg"
          placeholder="Type a message"
          aria-label="type a message"
          aria-describedby="basic-addon2"
        />
        <span
          className="input-group-text bg-white round"
          id="basic-addon2"
        >
          <i className="bi bi-chevron-right  text-white round msg-send-btn"></i>
        </span>
      </div>
    </div>
  </div>
  
   )
  }
  export default Phone;