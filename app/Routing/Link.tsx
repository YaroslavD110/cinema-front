import * as React from "react";
import NextLink from "next/link";

// Types
import { RoutingSlugs, Routing } from "./index";

interface ILinkProps {
  slug: RoutingSlugs;
}

export const Link: React.FC<ILinkProps> = props => {
  const { slug } = props;
  const route = Routing.getRoute(slug);

  return <NextLink href={route.path}>{props.children}</NextLink>;
};

export default Link;
