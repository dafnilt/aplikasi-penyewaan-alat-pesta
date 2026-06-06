export function useShipping() {
  const [guestId, setGuestId] = useState("");

  useEffect(() => {
    setGuestId(ensureGuestId());
  }, []);

  return useQuery({
    queryKey: ["shipping-cost", guestId],
    enabled: Boolean(guestId),
    queryFn: async ({ guestId, city }) => {
      const response = await privateApi.get("/orders/shipping/", {
        guestId,
        city,
      });

      return response.data?.data ?? null;
    },
  });
}
