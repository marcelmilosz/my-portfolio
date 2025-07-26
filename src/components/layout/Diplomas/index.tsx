import SectionTitle from "@/components/common/SectionTitle";
import { LayoutWrapper } from "@/components/wrappers";
import React from "react";

// Google specialization 
import google_cert_1 from "../../../../public/assets/images/Certificate/Coursera_Google_Data_Analytics_Proffesional_Certificate_150h_8cert/Coursera Google - 1 X4PAJYL5M54Q.jpg"
import google_cert_2 from "../../../../public/assets/images/Certificate/Coursera_Google_Data_Analytics_Proffesional_Certificate_150h_8cert/Coursera Google - 2 J6CGCB7PJCT6.jpg"
import google_cert_3 from "../../../../public/assets/images/Certificate/Coursera_Google_Data_Analytics_Proffesional_Certificate_150h_8cert/Coursera Google - 3 BQN2L2RHNL62.jpg"
import google_cert_4 from "../../../../public/assets/images/Certificate/Coursera_Google_Data_Analytics_Proffesional_Certificate_150h_8cert/Coursera Google - 4 E7BGGWDLBVH9.jpg"
import google_cert_5 from "../../../../public/assets/images/Certificate/Coursera_Google_Data_Analytics_Proffesional_Certificate_150h_8cert/Coursera Google - 5 ZB3A01XQIASW.jpg"
import google_cert_6 from "../../../../public/assets/images/Certificate/Coursera_Google_Data_Analytics_Proffesional_Certificate_150h_8cert/Coursera Google - 6 0V2HRCRVQQU7.jpg"
import google_cert_7 from "../../../../public/assets/images/Certificate/Coursera_Google_Data_Analytics_Proffesional_Certificate_150h_8cert/Coursera Google - 7 W2D9RISTJFH9.jpg"
import google_cert_spec from "../../../../public/assets/images/Certificate/Coursera_Google_Data_Analytics_Proffesional_Certificate_150h_8cert/Coursera Specialization OHXK77VGINE2.jpg"

// Meta Spec 
import meta_cert_1 from "../../../../public/assets/images/Certificate/Coursera_Meta Back_End Developer_240h _ 9cert/Coursera APi MJBZWW6DBSF4.jpg"
import meta_cert_2 from "../../../../public/assets/images/Certificate/Coursera_Meta Back_End Developer_240h _ 9cert/Coursera Backend-Capstone 969JD67LYUJU.jpg"
// import meta_cert_3 from "../../../../public/assets/images/Certificate/Coursera_Meta Back_End Developer_240h _ 9cert/Coursera Backend-Dev-Specialization  U32EWSLTGFKV.jpg"
import meta_cert_4 from "../../../../public/assets/images/Certificate/Coursera_Meta Back_End Developer_240h _ 9cert/Coursera Django 9YNXYCYWHB63.jpg"
import meta_cert_5 from "../../../../public/assets/images/Certificate/Coursera_Meta Back_End Developer_240h _ 9cert/Coursera Intro to Databases ZGDFSHQ45RSP.jpg"
import meta_cert_6 from "../../../../public/assets/images/Certificate/Coursera_Meta Back_End Developer_240h _ 9cert/Coursera Introduction to BE Dev LAGSK9ZQWB6L.jpg"
import meta_cert_7 from "../../../../public/assets/images/Certificate/Coursera_Meta Back_End Developer_240h _ 9cert/Coursera Programming in Python HBYVLXLFMM5B.jpg"
import meta_cert_8 from "../../../../public/assets/images/Certificate/Coursera_Meta Back_End Developer_240h _ 9cert/Coursera Technical Interview CRZDUN6NBNUQ.jpg"
import meta_cert_9 from "../../../../public/assets/images/Certificate/Coursera_Meta Back_End Developer_240h _ 9cert/Coursera Version Control 9F7SGSW38MCH.jpg"
import meta_cert_spec from "../../../../public/assets/images/Certificate/Coursera_Meta Back_End Developer_240h _ 9cert/spec.jpg"

// Learn how to learn
import learn_cert from "../../../../public/assets/images/Certificate/Coursera - Learning How to Learn/spec.jpg"

// Other 
import o_adobe_ai from "../../../../public/assets/images/Certificate/Adobe_Ai_10h.jpeg"
import o_adobe_ps from "../../../../public/assets/images/Certificate/Adobe_CC_11h.jpeg"
import o_c from "../../../../public/assets/images/Certificate/C_Cert_Beginners_24h.jpeg"
import o_sass from "../../../../public/assets/images/Certificate/Complete_Sass_Scss_4h.jpg"
import o_git from "../../../../public/assets/images/Certificate/Git_17h.jpeg"
import o_dsa from "../../../../public/assets/images/Certificate/Js_DSA_22h.jpg"
import o_ts from "../../../../public/assets/images/Certificate/Mastering_TypeScript_11h.jpg"
import o_react from "../../../../public/assets/images/Certificate/Modern_React_Bootcamp_39h.jpg"
import o_nextjs from "../../../../public/assets/images/Certificate/NextJs_25h.jpg"
import o_python from "../../../../public/assets/images/Certificate/Python_Intermediate_11h.jpeg"
import o_webdev from "../../../../public/assets/images/Certificate/Web_Developer_Bootcamp_2022_64h.jpg"

import { SectionSummaryText, Text } from "@/components/ui/Text";
import { ImageWithModal } from "@/components/common/ImageWithModal";
import { StaticImageData } from "next/image";
import { FramerBoxSlideIn, FramerTopBottomOpacity } from "@/components/common/FramerWrappers";
import { HorizontalCertGallery } from "@/components/common/ImageGallery";
import { SECTION_IDS } from "@/components/common/FloatingNavbar";

type CertificateType = {
  Specialization: {
    image: StaticImageData
    title: string
    end_date: string
    time_spent: string
    platform: string
  }
  sub_certs: StaticImageData[]
}

const GoogleCert: CertificateType = {
  Specialization: {
    image: google_cert_spec,
    title: "Google Data Analytics",
    end_date: "Oct 25, 2024",
    time_spent: "~ 6 months / 150 h+",
    platform: "Coursera",
  },
  sub_certs: [google_cert_1, google_cert_2, google_cert_3, google_cert_4, google_cert_5, google_cert_6, google_cert_7],
}

const MetaCert: CertificateType = {
  Specialization: {
    image: meta_cert_spec,
    title: "Meta Back-End Developer",
    end_date: "Aug 18, 2023",
    time_spent: "~ 7 months / 240 h+",
    platform: "Coursera",
  },
  sub_certs: [meta_cert_1, meta_cert_2, meta_cert_4, meta_cert_5, meta_cert_6, meta_cert_7, meta_cert_8, meta_cert_9],
}

const LearnCert: CertificateType = {
  Specialization: {
    image: learn_cert,
    title: "Learning How to Learn",
    end_date: "Jul 23, 2024",
    time_spent: "I should've watched this in school... could've saved a decade of trial and error. Fantastic course. ~ 2 weeks",
    platform: "Coursera",
  },
  sub_certs: [],
}

const other_certs = [o_webdev, o_nextjs, o_react, o_ts, o_python, o_dsa, o_git, o_c, o_sass, o_adobe_ps, o_adobe_ai]


function Diplomas() {
  return (
    <LayoutWrapper className="w-full min-h-screen" size="laptop" id={SECTION_IDS.diplomas}>

      <div className="w-full h-full">
        <SectionTitle title="Certificates" subtitle="Well... had to put them somewhere." iconName="award" />

        <div className="py-12 flex flex-col gap-24">

          <CertDisplay cert={GoogleCert} />

          <CertDisplay cert={MetaCert} />

          <CertDisplay cert={LearnCert} />


          <HorizontalCertGallery images={other_certs} title={"Ohh... There's more"} />

        </div>


        <SectionSummaryText> I know, I know… a wall of certificates. Still rookie numbers. Just waiting to see if AI replaces me before I earn more. </SectionSummaryText>
      </div>
    </LayoutWrapper>

  )
}

function CertDisplay({ cert }: { cert: CertificateType }) {

  return (
    <FramerTopBottomOpacity className="flex gap-8 max-lg:flex-col max-lg:max-w-[512px] max-lg:mx-auto ">
      <CertDetails cert={cert} className="lg:hidden" />

      {/* Main Image div  */}
      <div className="flex-1 max-w-[768px]">
        <ImageWithModal
          src={cert.Specialization.image}
          width={768}
          height={512}
          alt="Google specialization certificate"
          className="rounded-2xl cursor-zoom-in hover:scale-[1.02] transition-transform shadow-[var(--color-project-box-shadow)]"
          quality={100}
          unoptimized
        />
      </div>

      <div className="flex-1 flex flex-col gap-8">

        {/* Title and details  */}
        <CertDetails cert={cert} className="max-lg:hidden" />

        {/* Sub Images  */}
        <div className="grid grid-cols-[repeat(auto-fit,minmax(100px,1fr))] max-lg:grid-cols-[repeat(auto-fit,minmax(60px,1fr))] gap-4">
          {(cert.sub_certs.map((img, idx) => {
            return (
              <FramerBoxSlideIn idx={idx} key={`${cert.Specialization.title} ${idx}`} className="flex-1">
                <ImageWithModal src={img} width={128} height={128} alt={`Google specialization certificate - ${idx + 1}`} className=" shadow-[var(--color-project-box-shadow)] rounded-sm w-full max-w-[150px] cursor-zoom-in transform-all duration-200 hover:scale-[1.02]" />
              </FramerBoxSlideIn>
            )
          }))}
        </div>
      </div>
    </FramerTopBottomOpacity>
  )
}

function CertDetails({ cert, className }: { cert: CertificateType, className?: string }) {
  return (
    <div className={`flex flex-col gap-2 ${className ?? ""}`}>
      <Text size="3xl" weight="bold">{cert.Specialization.title} - {cert.Specialization.platform}</Text>
      <Text size="base" weight="normal">{cert.Specialization.end_date}</Text>

      <Text size="sm" weight="normal" variant="muted">{cert.Specialization.time_spent}</Text>
    </div>
  )
}


export default Diplomas;
