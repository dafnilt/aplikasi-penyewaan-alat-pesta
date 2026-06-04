function QuantitySelector({
  qty,
  onIncrease,
  onDecrease,
  onChange,
  disableIncrease,
  disableDecrease,
}) {
  return (
    <div className="grid grid-cols-3 items-center w-[40%] border border-[#B9B9B9] rounded-xl">
      <button
        onClick={onDecrease}
        disabled={disableDecrease}
        className="
          text-[#74B559]
          text-sm
          font-bold
          hover:scale-110
          transition
          cursor-pointer
          disabled:cursor-not-allowed
          disabled:opacity-60
        "
      >
        -
      </button>

      <input
        type="text"
        inputMode="numeric"
        pattern="[0-9]*"
        value={qty}
        onChange={(event) => onChange(event.target.value)}
        className="text-center text-sm text-[#4A4A4A]"
      />

      <button
        onClick={onIncrease}
        disabled={disableIncrease}
        className="
          text-[#74B559]
          text-sm
          font-bold
          hover:scale-110
          transition
          cursor-pointer
          disabled:cursor-not-allowed
          disabled:opacity-60
        "
      >
        +
      </button>
    </div>
  );
}

export default QuantitySelector;
