export default function Skeleton() {
  return (
    <div className="space-y-1.5">
      <div>
        <div className="skeleton w-full aspect-w-1 aspect-h-1 rounded-xl"></div>
      </div>
      <div className="flex justify-between">
        <div className="skeleton w-3/5 h-5"></div>
        <div className="skeleton w-[15%] h-5"></div>
      </div>
      <div className="skeleton w-2/5 h-5"></div>
      <div className="skeleton w-[30%] h-5"></div>
    </div>
  );
}
