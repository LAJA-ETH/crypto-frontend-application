import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { createTeleporter } from "react-teleporter";
import { ReactComponent as CloseIcon } from "../assets/svg/close.svg";
import { RootState } from "../store";
import { useNetwork } from "wagmi";
import config from "../config";
type Props = {
  closeModal: Function;
  selectToken: Function;
};

const SelectTokenModalTeleport = createTeleporter();

export function SelectTokenModalTarget() {
  return <SelectTokenModalTeleport.Target />;
}

export function SelectTokenModal({ closeModal, selectToken }: Props) {
  const { chain } = useNetwork();
  const tokens = useSelector(
    (state: RootState) => state.presale.tokens[chain?.id || config.chains[0].id]
  );
  const dialog = useRef<HTMLDivElement>(null);
  const [search, setSearch] = useState("");

  const filteredTokens = tokens.filter(
    (token) =>
      token.symbol.toLowerCase().includes(search.toLowerCase()) ||
      token.name.toLowerCase().includes(search.toLowerCase()) ||
      !search
  );

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  const clickOutside = (event: any) => {
    const childElement = dialog.current;
    if (
      event.target instanceof HTMLElement &&
      !childElement?.contains(event.target)
    ) {
      closeModal();
    }
  };
  return (
    <SelectTokenModalTeleport.Source>
      <div
        className="fixed inset-0 z-50 flex h-full w-full items-center justify-center bg-[#131212]/70 px-4 lg:px-0"
        onClick={clickOutside}
      >
        <div
          ref={dialog}
          className="w-full max-w-xl rounded-3xl border border-white/10 bg-[#1A2025]/70 p-6 backdrop-blur-xl lg:p-8"
        >
          <div className="mb-2.5 flex items-center justify-between">
            <h4 className="text-2xl font-medium uppercase">Select Token</h4>
            <CloseIcon
              className="cursor-pointer transition-opacity duration-200 hover:opacity-75"
              onClick={() => closeModal()}
            />
          </div>
          <input
            type="text"
            className="my-4 w-full rounded-xl border-2 border-transparent bg-[#232c3a]/50 py-2.5 pr-2.5 pl-6 outline-none ring-4 ring-transparent focus-within:border-blue-400/50 focus-within:ring-blue-400/20"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          {filteredTokens.length > 0 ? (
            <ul className="mx-auto max-h-[80vh] max-w-full overflow-y-auto rounded-2xl bg-[#2F3B4F]/50">
              {filteredTokens.map((token, index) => (
                <li
                  key={index}
                  className="flex cursor-pointer items-center gap-4 rounded-xl py-2.5 px-4 transition-all duration-200 hover:bg-blue-400/50"
                  onClick={() => selectToken(token)}
                >
                  <img
                    src={token.image}
                    alt={`${token.symbol} logo`}
                    width="40"
                    height="40"
                    className="h-10 w-10 rounded-full bg-white p-1"
                    loading="lazy"
                  />
                  <p className="flex flex-col font-medium">
                    {token.symbol}
                    <span className="text-xs font-light text-slate-500 dark:text-slate-200">
                      {token.name}
                    </span>
                  </p>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-center text-slate-500 dark:text-slate-200">
              No tokens found
            </p>
          )}
        </div>
      </div>
    </SelectTokenModalTeleport.Source>
  );
}
