import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'

import BackgroundImage from 'gatsby-background-image'

const BackgroundSection = ({ heroImg, className, title, subheading}) => {
  const data = useStaticQuery(
    graphql`
      query {
        desktop: file(relativePath: { eq: "blog-header.jpg" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  )

  // Set ImageData.
  const imageData = data.desktop.childImageSharp.fluid
  // const imageData = heroImg

  return (
    <BackgroundImage
      Tag="section"
      className={className}
      fluid={imageData}
      backgroundColor={`#040e18`}
    >
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
                  marginTop: "10rem"
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
    </BackgroundImage>
  )
}

const StyledBackgroundSection = styled(BackgroundSection)`
    background-size: cover;

    /* Set a specific height */
    min-height: 450px;

    /* Create the parallax scrolling effect */
    background-attachment: fixed;
    background-position: 50% 0%;
    background-repeat: no-repeat;
    
    position: relative;
    z-index: 0;

    &:before {
        background: rgba(0, 0, 0, 0.6);
        content: "";
        height: 100%;
        left: 0;
        position: absolute;
        // top: 0;
        bottom:50;
        width: 100%;
        z-index: -1;
    }


`

export default StyledBackgroundSection