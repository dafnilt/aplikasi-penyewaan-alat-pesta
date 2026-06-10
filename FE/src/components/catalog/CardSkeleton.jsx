import Skeleton from "@mui/material/Skeleton";

function CardSkeleton() {
  return (
    <div className="bg-white rounded-2xl p-3">
      <Skeleton
        variant="rectangular"
        width="100%"
        height={180}
        sx={{
          borderRadius: "12px",
        }}
      />

      <Skeleton
        variant="rounded"
        width="100%"
        height={20}
        sx={{
          mt: 1.5,
          borderRadius: "6px",
        }}
      />

      <Skeleton
        variant="rounded"
        width="60%"
        height={20}
        sx={{
          mt: 1,
          borderRadius: "6px",
        }}
      />
    </div>
  );
}

export default CardSkeleton;