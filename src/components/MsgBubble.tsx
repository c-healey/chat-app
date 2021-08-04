import "./MsgBubble.scss";

type MsgBubbleProps = {
  bubbleStyle: string;
};
const MsgBubble: React.FC<MsgBubbleProps> = ({ bubbleStyle, children }) => {
  // const MsgBubble = ({style, children})=>{

  return <div className={`msg-${bubbleStyle}`}>{children}</div>;
};
type MsgBubblePriceProps = {
  item: string;
  price: string;
};
export const MsgBubblePrice: React.FC<MsgBubblePriceProps> = ({
  item,
  price,
}) => {
  return (
    <MsgBubble bubbleStyle={"price"}>
      {" "}
      <div className="d-flex">
        <input
          className="form-check-input  msg-price-check me-2 "
          type="checkbox"
          id="checkboxNoLabel"
          value=""
          aria-label="..."
        />

        {item}
        <span className="msg-price-price ms-auto"> ${price}</span>
      </div>
    </MsgBubble>
  );
};
type MsgBubbleImgsProps = {
  images: Array<string>;
};
export const MsgBubbleImgs: React.FC<MsgBubbleImgsProps> = ({ images }) => {
  return (
    <MsgBubble bubbleStyle={"images"}>
      {images.map((image, indx) => (
        <img
          className="msg-images-img "
          src={image}
          alt={`dog${indx}`}
          key={indx}
        />
      ))}
    </MsgBubble>
  );
};
export default MsgBubble;
