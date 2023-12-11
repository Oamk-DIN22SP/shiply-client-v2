interface PanelProps {
  children: React.ReactNode;
  title: string;
}

const Panel: React.FC<PanelProps> = ({ children, title }) => {
  return (
    <div className="col-span-2 grid items-start gap-6 lg:col-span-1 py-2">
      <div className="flex flex-col items-center justify-center h-full">
        {/* title area */}
        <div className="w-full h-[70px] flex items-center border-b-10 border-gray-500 shadow-md font-family-poppins text-[19px] font-semibold leading-[29px] px-4 text-left text-gray-700">
          {title}
        </div>

        {/* content area */}
        <div className="w-full py-4">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Panel;
