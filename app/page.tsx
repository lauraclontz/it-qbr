import { qbrBodyHtml } from '../lib/qbr-html';
import ClientPage from './ClientPage';

export default function Home() {
  return <ClientPage html={qbrBodyHtml} />;
}
