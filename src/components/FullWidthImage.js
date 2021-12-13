import React from "react";
import PropTypes from "prop-types";
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";

export default function FullWidthImage(props) {
  const {
    height = 500,
    img,
    title,
    subheading,
    imgPosition = "top left",
  } = props;

  return (
    <React.Fragment>
      {/* <div className="full-width-image-container"> */}
      <div
        className="bgimage margin-top-0"
        style={{
          display: "grid",
          alignItems: "center",
        }}
      >
        {img?.url ? (
          <img
          //  object-fit: cover !important;
          // objectPosition: 0% 0% !important;
          // fontFamily: "object-fit: cover !important; object-position: 0% 0% !important;";
  
            src={img}
            objectFit={"cover"}
            objectPosition={imgPosition}
            style={{
              gridArea: "1/1",
              // You can set a maximum height for the image, if you wish.
              height: height,
              width: "100%",
              objectFit:"cover !important;",
              objectPosition:"top left !important;",
              fontFamily: "object-fit: cover !important; object-position: 0% 0% !important;"
            }}
            // You can optionally force an aspect ratio for the generated image
            aspectRatio={3 / 1}
            // This is a presentational image, so the alt should be an empty string
            alt=""
            formats={["auto", "webp", "avif"]}
          />
        ) : (
          <GatsbyImage
            image={img}
            objectFit={"cover"}
            objectPosition={imgPosition}
            // className="full-width-image"
            style={{
              gridArea: "1/1",
              // You can set a maximum height for the image, if you wish.
              maxHeight: height,
              objectFit: "cover !important;",
              objectPosition: "top left !important;",
              fontFamily: "object-fit: cover !important; object-position: 0% 0% !important;"
            }}
            layout="fullWidth"
            // You can optionally force an aspect ratio for the generated image
            aspectRatio={3 / 1}
            // This is a presentational image, so the alt should be an empty string
            alt=""
            formats={["auto", "webp", "avif"]}
          />
        )}
        {(title || subheading) && (
          <div
            style={{
              // By using the same grid area for both, they are stacked on top of each other
              gridArea: "1/1",
              position: "relative",
              // This centers the other elements inside the hero component
              placeItems: "center",
              display: "grid",
            }}
          >
            {/* Any content here will be centered in the component */}
            {title && (
              <h1
                className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen"
                style={{
                  boxShadow:
                    "rgb(69,105,104) 0.5rem 0px 0px, rgb(69,105,104) -0.5rem 0px 0px",
                  backgroundColor: "rgb(69,105,104)",
                  color: "white",
                  lineHeight: "1",
                  padding: "0.25em",
                }}
              >
                {title}
              </h1>
            )}
            {subheading && (
              <h3
                className="has-text-weight-bold is-size-5-mobile is-size-5-tablet is-size-4-widescreen"
                style={{
                  boxShadow:
                    "rgb(69,105,104) 0.5rem 0px 0px, rgb(69,105,104) -0.5rem 0px 0px",
                  backgroundColor: "rgb(69,105,104)",
                  color: "white",
                  lineHeight: "1",
                  padding: "0.25rem",
                  marginTop: "0.5rem",
                }}
              >
                {subheading}
              </h3>
            )}
          </div>
        )}
      </div>
      {/* </div> */}
    </React.Fragment>
  );
}

FullWidthImage.propTypes = {
  img: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  height: PropTypes.number,
  subheading: PropTypes.string,
};
