import ItemAdcademy from '../components/ItemAdcademy'

function Academy() {
  return (
    <div className="flex flex-col px-6 pb-6 bg-stone-50 max-md:px-5">
      <div className="flex overflow-hidden relative flex-col items-center px-16 pt-16 mt-6 min-h-[956px] max-md:px-5 max-md:max-w-full">
        <img
          loading="lazy"
          src="/public/assets/images/background.png"
          className="object-cover absolute inset-0 size-full"
        />
        <div className="flex relative z-10 flex-col -mb-6 w-full max-w-[1340px] max-md:mb-2.5 max-md:max-w-full">
          <div className="self-center max-w-full w-[848px]">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col w-[22%] max-md:ml-0 max-md:w-full">
                <img
                  loading="lazy"
                  srcSet="/public/assets/images/icon-adademy.png"
                  className="shrink-0 mt-2 max-w-full aspect-[0.88] w-[106px] max-md:mt-10"
                />
              </div>
              <div className="flex flex-col ml-5 w-[63%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow whitespace-nowrap max-md:mt-10">
                  <div className="text-8xl font-semibold text-center text-black leading-[88px] max-md:text-4xl">
                    Academy
                  </div>
                  <div className="flex gap-1 justify-between items-center self-center p-1 mt-10 text-sm font-medium leading-5 rounded-xl border border-solid bg-neutral-100 border-neutral-200 text-stone-500">
                    <div className="self-stretch my-auto py-2 px-4">All</div>
                    <div className="self-stretch my-auto py-2 px-4">Stock</div>
                    <div className="self-stretch my-auto py-2 px-4">Crypto</div>
                    <div className="self-stretch my-auto py-2 px-4 text-black rounded-lg shadow-lg">
                      Forex
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-[15%] max-md:ml-0 max-md:w-full">
                <img
                  loading="lazy"
                  srcSet="/public/assets/images/icon-adademy-yellow.png"
                  className="shrink-0 mt-2 max-w-full aspect-[0.85] w-[102px] max-md:mt-10"
                />
              </div>
            </div>
          </div>
          <div className="mt-5 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              {/* chia component */}
              <ItemAdcademy />
              {/* stop */}
              <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                <div className="flex text-center flex-col grow p-5 mx-auto w-full text-sm font-medium leading-5 rounded-3xl shadow-sm backdrop-blur-[2px] bg-white bg-opacity-70 max-md:mt-5">
                  <div className="flex gap-1 whitespace-nowrap">
                    <div className="justify-center px-2.5 py-1.5 text-orange-500 rounded-md bg-orange-500 bg-opacity-10">
                      Forex
                    </div>
                    <div className="justify-center px-2.5 py-1.5 rounded-md bg-neutral-100 text-stone-500">
                      Video
                    </div>
                  </div>
                  <div className="mt-5 text-xl leading-7 text-black">
                    Forex Trading A-Z
                  </div>
                  <div className="mt-3 leading-5 text-zinc-500">
                    A comprehensive video course covering everything from the
                    basics of forex trading to advanced trading strategies and
                    risk management.
                  </div>
                  <div className="justify-center text-center items-center px-5 py-3 mt-12 text-black bg-white rounded-xl border border-black border-solid max-md:mt-10">
                    Learn More
                  </div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow p-5 mx-auto w-full text-sm font-medium leading-5 rounded-3xl shadow-sm backdrop-blur-[2px] bg-white bg-opacity-70 max-md:mt-5">
                  <div className="flex gap-1 whitespace-nowrap">
                    <div className="justify-center px-2.5 py-1.5 text-emerald-500 rounded-md bg-emerald-500 bg-opacity-10">
                      Stock
                    </div>
                    <div className="justify-center px-2.5 py-1.5 rounded-md bg-neutral-100 text-stone-500">
                      Video
                    </div>
                  </div>
                  <div className="mt-5 text-xl leading-7 text-black">
                    Technical Analysis Masterclass
                  </div>
                  <div className="mt-3 leading-5 text-zinc-500">
                    A detailed video course focused on technical analysis,
                    teaching how to read charts, use indicators, and identify
                    trading patterns.
                  </div>
                  <div className="justify-center items-center px-5 py-3 mt-12 text-black bg-white rounded-xl border border-black border-solid max-md:mt-10">
                    Learn More
                  </div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow p-5 mx-auto w-full text-sm font-medium leading-5 rounded-3xl shadow-sm backdrop-blur-[2px] bg-white bg-opacity-70 max-md:mt-5">
                  <div className="flex gap-1 whitespace-nowrap">
                    <div className="justify-center px-2.5 py-1.5 text-yellow-400 rounded-md bg-yellow-400 bg-opacity-10">
                      Crypto
                    </div>
                    <div className="justify-center px-2.5 py-1.5 rounded-md bg-neutral-100 text-stone-500">
                      Video
                    </div>
                  </div>
                  <div className="mt-5 text-xl leading-7 text-black">
                    Crypto Trading for Beginners
                  </div>
                  <div className="mt-3 leading-5 text-zinc-500">
                    A beginner-friendly video course that walks through setting
                    up a crypto wallet, choosing a trading platform, and
                    executing trades.
                  </div>
                  <div className="justify-center items-center px-5 py-3 mt-16 text-black bg-white rounded-xl border border-black border-solid max-md:mt-10">
                    Learn More
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Academy
