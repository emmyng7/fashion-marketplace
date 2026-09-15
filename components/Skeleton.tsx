// components/Skeleton.tsx

export function SkeletonBox({ className }: { className?: string }) {
  return (
    <div className={`bg-gray-200 rounded-[12px] animate-pulse ${className}`} />
  );
}

export function ProductSkeleton() {
  return (
    <div className="bg-white p-4 rounded-[20px] shadow-sm">
      <div className="aspect-square bg-gray-200 rounded-[16px] mb-3 animate-pulse" />
      <div className="h-3 bg-gray-200 rounded-full w-3/4 mb-2 animate-pulse" />
      <div className="h-2 bg-gray-200 rounded-full w-1/3 mb-2 animate-pulse" />
      <div className="h-4 bg-gray-200 rounded-full w-1/4 animate-pulse" />
    </div>
  );
}

export function ProductGridSkeleton({ count = 8 }: { count?: number }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
      {Array.from({ length: count }).map((_, i) => (
        <ProductSkeleton key={i} />
      ))}
    </div>
  );
}

export function ProductDetailSkeleton() {
  return (
    <div className="bg-white rounded-[30px] p-6 md:p-10 shadow-sm">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Image Skeleton */}
        <div className="flex flex-col-reverse md:flex-row gap-4">
          <div className="flex md:flex-col gap-3">
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="w-16 h-20 bg-gray-200 rounded-[12px] animate-pulse" />
            ))}
          </div>
          <div className="flex-1 bg-gray-200 rounded-[24px] aspect-square animate-pulse" />
        </div>
        {/* Details Skeleton */}
        <div className="space-y-4">
          <div className="h-4 bg-gray-200 rounded-full w-1/4 animate-pulse" />
          <div className="h-8 bg-gray-200 rounded-full w-3/4 animate-pulse" />
          <div className="h-4 bg-gray-200 rounded-full w-1/2 animate-pulse" />
          <div className="h-6 bg-gray-200 rounded-full w-1/3 animate-pulse" />
          <div className="h-4 bg-gray-200 rounded-full w-full animate-pulse" />
          <div className="h-4 bg-gray-200 rounded-full w-full animate-pulse" />
          <div className="h-4 bg-gray-200 rounded-full w-2/3 animate-pulse" />
          <div className="flex gap-2 mt-6">
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="w-10 h-10 bg-gray-200 rounded-full animate-pulse" />
            ))}
          </div>
          <div className="h-12 bg-gray-200 rounded-full w-full mt-4 animate-pulse" />
        </div>
      </div>
    </div>
  );
}

export function CartSkeleton() {
  return (
    <div className="space-y-4">
      {Array.from({ length: 3 }).map((_, i) => (
        <div key={i} className="flex items-center gap-4 border-b border-gray-100 pb-4">
          <div className="w-20 h-20 bg-gray-200 rounded-[16px] animate-pulse" />
          <div className="flex-1 space-y-2">
            <div className="h-4 bg-gray-200 rounded-full w-3/4 animate-pulse" />
            <div className="h-3 bg-gray-200 rounded-full w-1/4 animate-pulse" />
          </div>
          <div className="h-4 bg-gray-200 rounded-full w-16 animate-pulse" />
        </div>
      ))}
    </div>
  );
}