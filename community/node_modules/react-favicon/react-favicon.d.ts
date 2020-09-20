import * as React from "react";

export interface FaviconProps {
  readonly url: string | string[];
  readonly alertCount?: number;
  readonly animated?: boolean;
  readonly animationDelay?: number;
  readonly keepIconLink?: () => boolean;
}

export default class Favicon extends React.Component<FaviconProps> {}
