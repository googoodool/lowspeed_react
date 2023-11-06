import { Carousel } from "react-carousel-minimal";
import styled from "styled-components";

function InspecPic({ overView, lpr }) {
  const image = [
    {
      image: `data:image/png;base64,${overView}`,
      caption: "Over View",
    },
    {
      image: `data:image/png;base64,${lpr}`,
      caption: "Front View",
    },
  ];

  const captionStyle = {
    fontSize: "1.5em",
    fontWeight: "bold",
  };
  const slideNumberStyle = {
    fontSize: "20px",
    fontWeight: "bold",
  };

  return (
    <Section>
      <div style={{ textAlign: "center" }}>
        <div
          style={{
            padding: "0 20px",
          }}
        >
          <Carousel
            data={image}
            time={5000}
            width="650px"
            height="310px"
            captionStyle={captionStyle}
            radius="10px"
            slideNumber={true}
            slideNumberStyle={slideNumberStyle}
            captionPosition="bottom"
            automatic={true}
            dots={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="darkgrey"
            // object-fit ,contain and cover
            slideImageFit="cover"
            thumbnails={true}
            thumbnailWidth="50px"
            style={{
              textAlign: "center",
              maxWidth: "850px",
              maxHeight: "500px",
              margin: "40px auto",
            }}
          />
        </div>
      </div>
    </Section>
  );
}
export default InspecPic;

const Section = styled.section``;
