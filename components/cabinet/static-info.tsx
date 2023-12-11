const CabinetStaticInfo = () => {
  return (
    <div>
      <h1 className="text-[#4A4A4A] text-[23px] font-bold leading-8">Cabinets</h1>
      <h2 className="text-[#686868] text-[16px] font-semibold leading-6">Below, are all the cabinets of Locker Center 1.</h2>
      <div className="flex flex-row gap-2">
        <div className="flex flex-row gap-2 py-2 items-center">
          <p className="bg-[#D5F9B8] w-auto text-center border rounded-sm px-1 text-sm h-6 min-w-[70px]">
            Empty
          </p>
          <p className="text-xs leading-3">Green cabinets are empty.</p>
        </div>
        <div className="flex flex-row gap-2 py-2 items-center">
          <p className="bg-[#F3C1FE] w-auto text-center border rounded-sm min-w-[70px] px-1 text-sm h-6">
            Full
          </p>
          <p className="text-xs leading-3">
            Lilac cabinets are ready for consignees.
          </p>
        </div>
      </div>
      <div className="flex flex-row gap-2 py-2 items-center">
        <p className="bg-[#FAA6A6] w-auto text-center border font-bold rounded-sm min-w-[70px] px-1 text-sm h-6">
          Deliver
        </p>
        <p className="text-xs leading-3 font-bold">
          Red cabinets are to be delivered. Undelivered packages are our main
          priority.
        </p>
      </div>
    </div>
  );
};

export default CabinetStaticInfo;
