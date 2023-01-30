import { GetServerSidePropsContext } from 'next';

type CacheControl = {
  key: string;
  value: string;
};

interface Props {
  createdAt: string;
  cacheControl: CacheControl;
}

export default function IfErrorTest({ cacheControl, createdAt }: Props) {
  return (
    <>
      <ul>
        <li>
          {cacheControl.key} : {cacheControl.value}
        </li>
        <li>This page was created at : {createdAt}</li>
      </ul>
    </>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const date = new Date().toString();
  const cacheControl = {
    key: 'Cache-Control',
    value: 'max-age=0, s-maxage=60, stale-if-error=60'
  };

  context.res.setHeader(cacheControl.key, cacheControl.value);

  return {
    props: {
      cacheControl: cacheControl,
      createdAt: date
    } // will be passed to the page component as props
  };
}
