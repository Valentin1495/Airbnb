import Header from "./Header";
import Skeleton from "./Skeleton";

export default function Loading() {
  return (
    <div>
      <Header />
      <div className="h-[1px] bg-gray-200" />
      <main className=" max-w-2xl mx-auto px-6 lg:max-w-[1400px] lg:px-8 py-5">
        <section
          className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 
          lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8"
        >
          <Skeleton />
        </section>
      </main>
    </div>
  );
}
