import { Skeleton } from "@mui/material";

function ProductSkeleton() {
  return (
    <div className="grid grid-cols-[1.2fr_2fr_1.2fr] gap-6 py-6">
      <div>
        <Skeleton
          variant="rounded"
          width="100%"
          height={350}
          sx={{ borderRadius: "16px" }}
        />

        <div className="flex gap-2 mt-4">
          {Array.from({ length: 4 }).map((_, index) => (
            <Skeleton
              key={index}
              variant="rounded"
              width={80}
              height={80}
              sx={{ borderRadius: "12px" }}
            />
          ))}
        </div>
      </div>

      <div>
        <Skeleton variant="text" width="70%" height={48} />

        <Skeleton
          variant="text"
          width="40%"
          height={36}
          sx={{ mt: 1 }}
        />

        <Skeleton
          variant="text"
          width="90%"
          height={24}
          sx={{ mt: 3 }}
        />

        <Skeleton variant="text" width="95%" height={24} />
        <Skeleton variant="text" width="80%" height={24} />

        <div className="mt-8">
          <Skeleton width={140} height={24} />

          <div className="flex gap-2 mt-3">
            {Array.from({ length: 3 }).map((_, index) => (
              <Skeleton
                key={index}
                variant="rounded"
                width={100}
                height={40}
              />
            ))}
          </div>
        </div>

        <div className="mt-6">
          <Skeleton width={140} height={24} />

          <div className="flex gap-2 mt-3">
            {Array.from({ length: 4 }).map((_, index) => (
              <Skeleton
                key={index}
                variant="rounded"
                width={80}
                height={40}
              />
            ))}
          </div>
        </div>
      </div>
      
      <div className="border rounded-2xl p-5">
        <Skeleton width="60%" height={30} />

        <Skeleton
          variant="rounded"
          width="100%"
          height={50}
          sx={{ mt: 3 }}
        />

        <Skeleton
          variant="rounded"
          width="100%"
          height={50}
          sx={{ mt: 2 }}
        />

        <Skeleton
          variant="rounded"
          width="100%"
          height={60}
          sx={{ mt: 4 }}
        />

        <Skeleton
          variant="rounded"
          width="100%"
          height={50}
          sx={{ mt: 4 }}
        />
      </div>
    </div>
  );
}

export default ProductSkeleton;