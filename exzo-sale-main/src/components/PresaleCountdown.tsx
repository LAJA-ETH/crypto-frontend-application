import Countdown, { zeroPad } from "react-countdown";
import config from "../config";
import PresaleCountdownItem from "./PresaleCountdownItem";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { useMemo } from "react";

const PresaleCountdown = () => {
  const phase = useSelector((state: RootState) => state.presale.phase);
  const endtime = useMemo(() => config.phases[phase || 0].endTime, [phase]);

  return (
    <div className="flex h-full flex-col items-center justify-center gap-8 font-chakra">
      <Countdown
        date={endtime * 1000}
        renderer={({ days, hours, minutes, seconds }) => (
          <div className="flex justify-center gap-1 px-6 lg:gap-3">
            <PresaleCountdownItem
              label="Days"
              value={(days / 30) * 100}
              time={zeroPad(days)}
            />
            <span className="mt-3 text-3xl font-bold lg:text-5xl">:</span>
            <PresaleCountdownItem
              label="Hours"
              value={(hours / 60) * 100}
              time={zeroPad(hours)}
            />
            <span className="mt-3 text-3xl font-bold lg:text-5xl">:</span>
            <PresaleCountdownItem
              label="Minutes"
              value={(minutes / 60) * 100}
              time={zeroPad(minutes)}
            />
            <span className="mt-3 text-3xl font-bold lg:text-5xl">:</span>
            <PresaleCountdownItem
              label="Seconds"
              value={(seconds / 60) * 100}
              time={zeroPad(seconds)}
            />
          </div>
        )}
      />
    </div>
  );
};

export default PresaleCountdown;
