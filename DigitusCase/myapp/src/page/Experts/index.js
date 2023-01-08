import { Helmet } from "react-helmet";

export default function index() {
  return (
    <div className="flex flex-col w-full ">
      <Helmet>
        <title>Experts</title>
        <meta name="description" content="blog description" />
      </Helmet>
      <div className="flex w-full lg:px-0  px-3  justify-between flex-col lg:flex-row ">
        <div className="boxCenter rounded-md w-full p-3 bg-purple-400">
          <h1 className="font-bold text-2xl text-white">Experts</h1>
        </div>
      </div>
    </div>
  );
}
