import Link from "next/link";
import React from "react";
import { Text } from "./Text";

type Props = {
  href: string
  target?: "_blank" | "_self"
};

function MyLink({ href, target = "_blank" }: Props) {
  return (
    <Link href={href} target={target} >
      <Text variant="primary" className="opacity-80 hover:opacity-100 cursor-pointer" size="xs">{href}</Text>
    </Link>
  );
}

export default MyLink;
