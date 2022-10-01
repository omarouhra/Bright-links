import GithubIcon from "@/Icon/GithubIcon";
import LinkedinIcon from "@/Icon/LinkedinIcon";
import TwitterIcon from "@/Icon/TwitterIcon";
import React from "react";

export const TwitterShare = () => {
  const ShareURL = `https://twitter.com/intent/tweet?text=Ayats Wallpaper App&url=https://ayats-wallpapers.vercel.app/`;
  return (
    <a href={ShareURL} target="_blank" rel="noopener noreferrer">
      <TwitterIcon />
    </a>
  );
};

export const LinkedinShare = () => {
  const ShareURL = `https://www.linkedin.com/sharing/share-offsite/?url=https://ayats-wallpapers.vercel.app/`;

  return (
    <a href={ShareURL} target="_blank" rel="noopener noreferrer">
      <LinkedinIcon />
    </a>
  );
};

export const GithubRepository = () => {
  return (
    <a href={""} target="_blank" rel="noopener noreferrer">
      <GithubIcon />
    </a>
  );
};
