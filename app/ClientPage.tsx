'use client';

import Script from 'next/script';

export default function ClientPage({ html }: { html: string }) {
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: html }} />
      <Script src="/qbr-init.js" strategy="afterInteractive" />
    </>
  );
}
