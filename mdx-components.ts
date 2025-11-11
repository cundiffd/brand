// Copyright © Spatial Corporation. All rights reserved.

import { A as a } from "@dakarai/app/blog/components/a";
import { P as p } from "@dakarai/app/blog/components/p";
import { H1 as h1 } from "@dakarai/app/blog/components/h1";
import { H2 as h2 } from "@dakarai/app/blog/components/h2";
import { H3 as h3 } from "@dakarai/app/blog/components/h3";
import { OL as ol } from "@dakarai/app/blog/components/ol";
import { UL as ul } from "@dakarai/app/blog/components/ul";
import { LI as li } from "@dakarai/app/blog/components/li";
import { HR as hr } from "@dakarai/app/blog/components/hr";
import { Code as code } from "@dakarai/app/blog/components/code";
import { Image } from "@dakarai/components/image";
import { Figure } from "@dakarai/app/blog/components/figure";
import { Snippet } from "@dakarai/app/blog/components/snippet";
import { Caption } from "@dakarai/app/blog/components/caption";
import { Callout } from "@dakarai/app/blog/components/callout";
import { YouTube } from "@dakarai/app/blog/components/youtube";
import { Ref, FootNotes, FootNote } from "@dakarai/app/blog/components/footnotes";
import { Blockquote as blockquote } from "@dakarai/app/blog/components/blockquote";

export function useMDXComponents(components: { [component: string]: React.ComponentType }) {
  return {
    ...components,
    a,
    h1,
    h2,
    h3,
    p,
    ol,
    ul,
    li,
    hr,
    code,
    pre: Snippet,
    img: Image,
    blockquote,
    Image,
    Figure,
    Snippet,
    Caption,
    Callout,
    YouTube,
    Ref,
    FootNotes,
    FootNote
  };
}
