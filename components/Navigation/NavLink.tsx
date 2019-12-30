import { withRouter, NextRouter } from 'next/router';
import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';
import tw from 'tailwind.macro';

interface NavLinkProps {
  href: string;
  as: string;
  children: string;
  prefetch?: boolean;
  passHref?: boolean;
  router: NextRouter;
}

const Wrapper = styled.a<{ active: boolean }>`
  ${tw`p-4 inline-block font-light text-secondary text-xl hover:text-brand-light outline-none focus:text-brand`};
  ${({ active }) => active && tw`font-bold`};
  text-decoration: none;
  transition: color 0.2s;
`;

export const NavLink = withRouter<NavLinkProps, {}>(
  ({ children, router, ...rest }) => {
    const active: boolean = router
      ? router.route === rest.as ||
        router.asPath === rest.as ||
        router.asPath === `${rest.as}/` ||
        (router.route === '/case' && rest.as === '/')
      : false;

    return (
      <Link {...rest}>
        <Wrapper active={active}>{children}</Wrapper>
      </Link>
    );
  }
);
