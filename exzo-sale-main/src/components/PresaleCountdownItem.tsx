type PresaleCountdownItemProps = {
  label: string;
  value: number;
  time: string;
};

const PresaleCountdownItem = ({ label, time }: PresaleCountdownItemProps) => {
  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <div
        className="min-w-[3.5rem] rounded-xl py-4 px-3 text-center lg:min-w-[5rem] lg:py-6"
        style={{
          background:
            "linear-gradient(203.17deg, #F320D8 28.01%, #16A6EE 85.02%)",
        }}
      >
        <span className="text-xl font-bold lg:text-3xl">{time}</span>
      </div>
      <span className="text-xs uppercase lg:text-base">{label}</span>
    </div>
  );
};

export default PresaleCountdownItem;
