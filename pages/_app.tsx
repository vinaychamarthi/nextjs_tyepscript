import { ReactElement,ReactNode} from 'react';
import '@/styles/globals.css'
import '@/styles/layout.css'
import type { AppProps } from 'next/app'

import { NextPage } from 'next';
import Layout from '@/components/common components/layout';

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};


type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);
  return(
    <>
    <Layout>
      <Component {...pageProps} />
    </Layout>
   
    </>
  );
}
