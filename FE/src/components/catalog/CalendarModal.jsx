import calenderIcon from "../../assets/icon/calender.svg";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function CalendarModal({
  isOpen,
  onClose,
  onSave,
  startDate,
  endDate,
  setStartDate,
  setEndDate,
  isLoading = false,
}) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="bg-[#f3f3f3] w-[40%] rounded-[32px] px-2 py-8 relative"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="text-lg font-semibold text-center mb-8">
          Pilih tanggal rencana
        </div>

        <div className="flex justify-center items-center gap-4">
          <div className="border-2 border-[#74B559] rounded-lg px-4 py-2 flex items-center gap-3 bg-white">
            <img src={calenderIcon} alt="Calendar" className="w-7" />

            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              showTimeSelect
              dateFormat="d MMMM yyyy, HH:mm"
              placeholderText="Pilih Start Date"
              className="outline-none bg-transparent text-md"
            />
          </div>
        </div>

        <div className="flex items-center gap-4 my-14">
          <div className="h-[1px] bg-gray-300 flex-1"></div>
          <div className="text-gray-400 text-xs">sampai dengan</div>
          <div className="h-[1px] bg-gray-300 flex-1"></div>
        </div>

        <div className="flex justify-center items-center gap-4">
          <div className="border-2 border-[#74B559] rounded-lg px-4 py-2 flex items-center gap-3 bg-white">
            <img src={calenderIcon} alt="Calendar" className="w-7" />

            <DatePicker
              selected={endDate}
              onChange={(date) => setEndDate(date)}
              showTimeSelect
              dateFormat="d MMMM yyyy, HH:mm"
              placeholderText="Pilih End Date"
              minDate={startDate}
              className="outline-none bg-transparent text-md w-full"
            />
          </div>
        </div>

        <div className="flex justify-center mt-16">
          <button
            onClick={onSave}
            disabled={isLoading || !startDate || !endDate}
            className="bg-[#74B559] text-white text-lg font-medium px-16 py-2 rounded-xl disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isLoading ? "Memuat..." : "Simpan"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default CalendarModal;
