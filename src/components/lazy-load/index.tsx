import React, { Suspense } from "react";

export const LazyLoad: React.FC<{ component: JSX.Element }> = props => {
  return <Suspense fallback={<></>}>{props.component}</Suspense>;
};
