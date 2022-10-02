import GithubIcon from "@/Icon/GithubIcon";
import LinkedinIcon from "@/Icon/LinkedinIcon";
import TwitterIcon from "@/Icon/TwitterIcon";
import React from "react";

export const TwitterShare = () => {
  const ShareURL = `https://twitter.com/intent/tweet?text=Bright Links App&url=https://www.brightlinks.me`;
  return (
    <a href={ShareURL} target="_blank" rel="noopener noreferrer">
      <TwitterIcon />
    </a>
  );
};

export const LinkedinShare = () => {
  const ShareURL = `https://www.linkedin.com/sharing/share-offsite/?url=https://www.brightlinks.me`;

  return (
    <a href={ShareURL} target="_blank" rel="noopener noreferrer">
      <LinkedinIcon />
    </a>
  );
};

export const GithubRepository = () => {
  return (
    <a
      href="https://github.com/omarouhra/Bright-links"
      target="_blank"
      rel="noopener noreferrer"
    >
      <GithubIcon />
    </a>
  );
};
