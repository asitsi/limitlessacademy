import React from "react";
import { Image } from "@nextui-org/react";

export const AcmeLogo = () => (
  <Image src="/assets/main_Logo.png" alt="logo" style={ImageStyle}/>
);

const ImageStyle: React.CSSProperties = {
  height: '60px',
  width: '60px'
}
