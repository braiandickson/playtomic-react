import React, { ReactNode, Suspense } from 'react';

import Loading from '../../../../components/Loading';

interface Props {
  fallback: ReactNode;
  children: ReactNode;
}

function CustomSuspense({ fallback = Loading, children }: Props) {
  return <Suspense fallback={fallback}>{children}</Suspense>;
}

export default CustomSuspense;
