"use client";
import { AppProgressBar, ProgressBarProps } from "next-nprogress-bar";

export default function ProgressBar({ ...props }: ProgressBarProps) {
  return <AppProgressBar {...props} />;
}
