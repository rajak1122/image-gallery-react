//Galler Component

import ImageCard from "./ImageCard";
import "./Gallery.css";

var images = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1529419412599-7bb870e11810?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bmF0dXJlJTIwYmFja2dyb3VuZHxlbnwwfHwwfHx8MA%3D%3D",
    title: "Mountains",
    description: "Beautifull mountain view with some orange flowers",
  },
  {
    id: 2,
    image:
      "https://plus.unsplash.com/premium_photo-1675827055694-010aef2cf08f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG5hdHVyZSUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D",
    title: "Waterfalls",
    description: "A beautifull waterfalls on the middle of the forest",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bmF0dXJlJTIwYmFja2dyb3VuZHxlbnwwfHwwfHx8MA%3D%3D",
    title: "Pineforest",
    description: "Big and smokey pine forest with large pine trees",
  },
  {
    id: 4,
    image:
      "https://plus.unsplash.com/premium_photo-1673697239981-389164b7b87f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bmF0dXJlJTIwYmFja2dyb3VuZHxlbnwwfHwwfHx8MA%3D%3D",
    title: "Lake",
    description: "Peacefull lake in between the large mountains",
  },
  {
    id: 5,
    image:
      "https://images.unsplash.com/photo-1516821371801-280cf8069a4e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTh8fG5hdHVyZSUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D",
    title: "Snow Mountains",
    description: "Large snow mountains with snow on layered on it",
  },
  {
    id: 6,
    image:
      "https://images.unsplash.com/photo-1608534200562-f1e9bfe1d15f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGRhbmRlbGlvbnxlbnwwfHwwfHx8MA%3D%3D",
    title: "Dandelions",
    description: "A beautifull dandelions flying away throung the wind",
  },
  {
    id: 7,
    image:
      "https://images.unsplash.com/photo-1582721478779-0ae163c05a60?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dm9sY2FuaWMlMjBlcnVwdGlvbnxlbnwwfHwwfHx8MA%3D%3D",
    title: "Valcano",
    description: "Agressively erupting valcano whit hot lava and ashes",
  },
  {
    id: 8,
    image:
      "https://images.unsplash.com/photo-1563846465145-c733e29ee0f8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cmFpbmJvd3xlbnwwfHwwfHx8MA%3D%3D",
    title: "Rainbow",
    description: "Formation of rainbow between the dark clouds",
  },
];

function Gallery() {
  return (
    <div>
      <div className="container">
        <h1 className="heading">Image Gallery</h1>
      </div>
      <div className="gallery">
        {images.map(function (items) {
          return (
            <ImageCard
              image={items.image}
              title={items.title}
              description={items.description}
            ></ImageCard>
          );
        })}
      </div>
    </div>
  );
}

export default Gallery;
