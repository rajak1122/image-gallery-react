//Image Card Component

import "./ImageCard.css";

function ImageCard(props) {
  return (
    <div className="imgcard">
      <img src={props.image} alt="Mountain" className="img" />
      <h1>{props.title}</h1>
      <p>{props.description}</p>
    </div>
  );
}

export default ImageCard;
