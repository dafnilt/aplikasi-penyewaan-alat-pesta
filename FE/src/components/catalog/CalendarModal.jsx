import calenderIcon from "../../assets/icon/calender.svg";
import { DatePicker } from "antd";
import dayjs from "dayjs";
import "react-datepicker/dist/react-datepicker.css";

function CalendarModal({
  isOpen,
  onClose,
  onSave,
  startDate,
  endDate,
  setStartDate,
  setEndDate,
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
          <div className="border-2 border-[#74B559] rounded-lg px-4 py-1 flex items-center gap-3 bg-white">

            <DatePicker
              value={startDate ? dayjs(startDate) : null}
              onChange={(date) => setStartDate(date?.toDate() ?? null)}
              showTime
              format="D MMMM YYYY, HH:mm"
              placeholder="Pilih Start Date"
              variant="borderless"
              className="w-full"
            />
          </div>
        </div>

        <div className="flex items-center gap-4 my-14">
          <div className="h-[1px] bg-gray-300 flex-1"></div>
          <div className="text-gray-400 text-sm">sampai dengan</div>
          <div className="h-[1px] bg-gray-300 flex-1"></div>
        </div>

        <div className="flex justify-center items-center gap-4">
          <div className="border-2 border-[#74B559] rounded-lg px-4 py-1 flex items-center gap-3 bg-white">

            <DatePicker
              value={endDate ? dayjs(endDate) : null}
              onChange={(date) => setEndDate(date?.toDate() ?? null)}
              showTime
              format="D MMMM YYYY, HH:mm"
              placeholder="Pilih End Date"
              variant="borderless"
              className="w-full"
              disabledDate={(current) =>
                startDate
                  ? current && current < dayjs(startDate).startOf("day")
                  : false
              }
            />
          </div>
        </div>

        <div className="flex justify-center mt-16">
          <button
            onClick={onSave}
            disabled={!startDate || !endDate}
            className="bg-[#74B559] text-white text-md font-medium px-12 py-2 rounded-xl disabled:cursor-not-allowed disabled:opacity-60"
          >
            Simpan
          </button>
        </div>
      </div>
    </div>
  );
}

export default CalendarModal;
