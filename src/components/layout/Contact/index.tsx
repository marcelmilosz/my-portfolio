
import MyIcon, { IconNames } from "@/app/icons";
import { BORDER_RADIUSES, DEFAULT_BORDER_RADIUS } from "@/components/_shared";
import { Text } from "@/components/ui/Text";
import { LayoutWrapper } from "@/components/wrappers";
import Link from "next/link";
import React from "react";


function Contact() {
  return (
    <LayoutWrapper className="w-full min-h-max py-24 max-sm:py-16" size="laptop" id={"contact"}>

      {/* <div className="w-full h-full">
        <SectionTitle title="Certificates" subtitle="Well... had to put them somewhere." iconName="award" />
      </div> */}

      <Text size="3xl" weight="semibold" className="text-left mb-2"> You made it to the bottom - thanks for scrolling this far 🙌</Text>
      <Text size="base" weight="normal"> If something caught your eye or you&apos;d just like to connect, feel free to reach out. </Text>

      <div className="py-12 flex flex-col gap-4">
        <Text size="3xl" weight="semibold" className="text-left"> Contact </Text>

        <div className="flex gap-4 flex-wrap">
          <ContactBox contactName="E-Mail" contactData="marcel.milosz99@gmail.com" iconName="email" href="mailto:marcel.milosz99@gmail.com" target={"_self"} />
          <ContactBox contactName="Phone" contactData="+48 793 080 875" iconName="phone" href="tel:+48793080875" target={"_self"} />
          <ContactBox contactName="LinkedIn" contactData="linkedin.com/in/marcelmilosz" iconName="linkedin" href="https://www.linkedin.com/in/marcelmilosz/" />
          <ContactBox contactName="Github" contactData="github.com/marcelmilosz" iconName="github" href="https://github.com/marcelmilosz" />
        </div>
      </div>
    </LayoutWrapper>

  )
}

type ContactBoxProps = {
  contactName: string
  contactData: string
  iconName: IconNames
  href: string
  target?: string
}

function ContactBox({ contactName = "", contactData = "", iconName, href, target = "_blank" }: ContactBoxProps) {
  return (
    <div className={`flex-1 min-w-max max-sm:min-w-full p-4 px-6 relative overflow-hidden ${BORDER_RADIUSES[DEFAULT_BORDER_RADIUS]} flex gap-4 items-center border border-[var(--color-white-auto)]`}>

      <div className="min-w-max">
        <MyIcon iconName={iconName} iconSize="xl" iconVariant={"auto"} iconStroke="1.5" />
      </div>

      <div>
        <Text size="sm" weight="normal" variant="auto">{contactName}</Text>
        <Link href={href} target={target}>
          <Text size="lg" weight="semibold" variant="auto" className="hover:underline">{contactData}</Text>
        </Link>
      </div>

    </div>
  )
}

export default Contact;
