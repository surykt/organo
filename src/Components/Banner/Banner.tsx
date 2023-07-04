import React from "react";
import "./Banner.css";

interface BannerProps {
  imagePath: string,
  alternativeText?: string
}

export default function Banner({ imagePath, alternativeText }: BannerProps) {
  return <img src={imagePath} alt={alternativeText} />;
}
