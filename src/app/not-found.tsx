import Image from "next/image";

export const metadata = {
  title: "page not found",
};

export default function NotFound() {
  return (
    <div className="px-2 w-full">
      <div className="mx-auto py-4 flex flex-col justify-center items-center gap-4">
        <h2 className="text-2xl">Page Not Found</h2>
        <Image
          src="/images/not-found.jpg"
          className="m-0 rounded-xl"
          width={300}
          height={300}
          sizes="300px"
          alt="page not found"
          priority={true}
          title="page not found"
        />
      </div>
    </div>
  );
}
