import Link from "next/link";
import React from "react";
import { Text, TextSize } from "./Text";

type Props = {
  href: string
  target?: "_blank" | "_self"
  size?: TextSize
};

function MyLink({ href, target = "_blank", size = "xs" }: Props) {
  return (
    <Link href={href} target={target} >
      <Text variant="primary" className={`opacity-80 hover:opacity-100 cursor-pointer`} size={size}>{href}</Text>
    </Link>
  );
}

export default MyLink;
