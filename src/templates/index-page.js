import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
// import { getImage } from "gatsby-plugin-image";
import "../components/all.scss";

import Layout from "../components/Layout";
import Features from "../components/Features";
// import BlogRoll from "../components/BlogRoll";
// import FullWidthImage from "../components/FullWidthImage2";
import FullWidthHero from "../components/FullWidthHero"

// eslint-disable-next-line
export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  description,
  intro,
}) => {
  // const heroImage = getImage(image) || image;

  return (
    <div>
      {/* <FullWidthImage title={title} subheading={subheading} /> */}
      {/* <FullWidthImage img={heroImage} title={title} subheading={subheading} /> */}
      <FullWidthHero page={"index"} title={title} subheading={subheading}/>
      <section className="section section--gradient">
        <div className="container">
          <div className="section">
            <div className="columns">
              <div className="column is-10 is-offset-1">
                <div className="content">
                  <div className="columns">
                    <div className="column is-12">
                      <h2 className="has-text-weight-semibold is-size-2">
                        {heading}
                      </h2>
                      <p>{description}</p>
                    </div>
                  </div>
                  <Features gridItems={intro.blurbs} />
                  <div className="columns">
                    <div className="column is-12 has-text-centered">
                      <Link className="btn" to="/services">
                        See all services
                      </Link>
                    </div>
                  </div>
                  {/* <div className="column is-12">
                    <h3 className="has-text-weight-semibold is-size-2">
                      Latest stories
                    </h3>
                    <BlogRoll />
                    <div className="column is-12 has-text-centered">
                      <Link className="btn" to="/blog">
                        Read more
                      </Link>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        description={frontmatter.description}
        intro={frontmatter.intro}
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            gatsbyImageData(quality: 100, layout: FULL_WIDTH)
          }
        }
        heading
        subheading
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                gatsbyImageData(width: 240, quality: 64, layout: CONSTRAINED)
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`;
