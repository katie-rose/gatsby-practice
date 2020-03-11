import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';

export function HeaderTemplate({ email }) {
  return (
    <header className="header" role="banner">
      <div className="grid-container">
        <div className="grid-x align-middle">
          <div className="cell small-6">
            <div className="header__branding">
              <span className="icon-logo" />
            </div>
          </div>
          <div className="cell small-6">
            <div className="header__contact">
              <a href={`mailto:${email}`} className="button">
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

HeaderTemplate.propTypes = {
  email: PropTypes.string.isRequired,
};

const Header = () => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            email
          }
        }
      }
    `}
    render={(query) => {
      const { site: { siteMetadata: props } } = query;

      return <HeaderTemplate {...props} />;
    }}
  />
);

export default Header;
