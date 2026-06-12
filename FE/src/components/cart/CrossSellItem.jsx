function CrossSellItem({ image, name, price }) {
  return (
    <div className="cursor-pointer">
        <img
          src={image}
          alt={name}
          className="w-40 h-40 object-contain"
        />

      <div className="mt-3">
        <div className="text-sm font-medium text-[#2A2A2A]">{name}</div>

        <div className="mt-1 text-base text-[#2A2A2A]">Rp{price}</div>
      </div>
    </div>
  );
}

export default CrossSellItem;
