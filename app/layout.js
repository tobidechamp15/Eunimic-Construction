import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css';

export const metadata = {
  title: 'Eunimic Constructions',
  description:
    'Eunimic Constructions specializes in delivering high-quality construction projects with a focus on innovation, reliability, and excellence. Discover our portfolio and learn how our dedicated team brings your construction vision to life.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/public/favicon.ico" />
      </Head>
      <body>{children}</body>
    </html>
  );
}
