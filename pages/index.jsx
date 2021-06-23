import Head from "next/head";

export default function Home() {
  return (
    <div className="container mx-auto h-[90vh] w-screen flex flex-col space-y-20 justify-center items-center bg-red-50">
      <p className="text-3xl text-gray-700 font-semibold flex">
        This is next js project of Dakshya with{" "}
        <span className="text-pink-500 text-3xl font-semibold ml-3">
          Tailwind Css || JIT
        </span>
      </p>
      <p className="text-5xl text-blue-500 font-semibold text-center w-[60rem]">
        Dakshya Nepal Project Re-structured ! Let's get Started 😉
      </p>
    </div>
  );
}
