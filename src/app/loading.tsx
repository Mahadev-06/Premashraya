export default function Loading() {
  return (
    <div className="min-h-screen bg-surface pt-20">
      {/* Navbar Skeleton */}
      <div className="w-full h-20 bg-surface-container/30 animate-pulse border-b border-outline-variant/20 fixed top-0 left-0 z-50"></div>
      
      {/* Hero Skeleton */}
      <div className="relative h-[60vh] md:h-[80vh] w-full bg-surface-container-low/50 animate-pulse mt-20 flex flex-col items-center justify-center p-8">
        <div className="w-32 h-6 bg-surface-container-high rounded-full mb-8"></div>
        <div className="w-3/4 max-w-3xl h-16 bg-surface-container-high rounded-xl mb-6"></div>
        <div className="w-2/3 max-w-2xl h-16 bg-surface-container-high rounded-xl mb-10"></div>
        <div className="w-1/2 max-w-xl h-8 bg-surface-container-high rounded-xl mb-12"></div>
        <div className="flex gap-4">
          <div className="w-40 h-14 bg-surface-container-highest rounded-full"></div>
          <div className="w-40 h-14 bg-surface-container-highest rounded-full"></div>
        </div>
      </div>

      {/* Content Section Skeleton */}
      <div className="max-w-[1280px] mx-auto px-4 py-20">
        <div className="w-48 h-6 bg-surface-container-high rounded-full mb-12 mx-auto"></div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex flex-col gap-4 animate-pulse">
              <div className="w-full h-64 bg-surface-container-low rounded-[40px]"></div>
              <div className="w-3/4 h-8 bg-surface-container-high rounded-lg mt-4"></div>
              <div className="w-full h-4 bg-surface-container-low rounded-lg"></div>
              <div className="w-5/6 h-4 bg-surface-container-low rounded-lg"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
