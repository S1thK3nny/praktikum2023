import { NextApiRequest, NextPage } from "next";
import axios from "axios";

export async function getServerSideProps(context: any) {
  //Careful, upper/lowercase is important.
  const userAgent = context.req.headers['user-agent'];
  const userLanguage = context.req.headers['accept-language'];

  const key = context.query.code;
  const res = await axios.post(process.env.WEBSITE + "api/redirect", { key: key }, {
    headers: {
      'User-Agent': userAgent,
      'accept-language': userLanguage
    }
  });
  
  
  if (res.status !== 200) {
    return
  }

  const data = await res.data;

  return {
    redirect: {
      destination: data.url,
      permanent: false,
    },
  };
}

const Redirect: NextPage = () => {
  return (
    <>
      <div className="flex w-screen h-screen justify-center items-center bg-black text-white">
        <div className="text-center max-w-sm">
          <h1 className="font-bold text-2xl">Redirecting you.</h1>
          <p>If you are not being redirected within a few seconds, your link might be invalid.</p>
        </div>
      </div>
    </>
  );
};

export default Redirect;

function delay(ms: number) {
  return new Promise( resolve => setTimeout(resolve, ms) );
}