function Products() {
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
                    Products
                  </div>
                  <div className="flex gap-1 justify-between items-center self-center p-1 mt-10 text-sm font-medium leading-5 rounded-xl border border-solid bg-neutral-100 border-neutral-200 text-stone-500">
                    <div className="self-stretch my-auto py-2 px-4 text-black rounded-lg shadow-lg">
                      All
                    </div>
                    <div className="self-stretch my-auto py-2 px-4">
                      Indicator
                    </div>
                    <div className="self-stretch my-auto py-2 px-4">
                      Autobot
                    </div>
                    <div className="self-stretch my-auto py-2 px-4 ">
                      Course
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
          <div className="flex z-10 flex-col justify-center p-10 mt-12 w-full rounded-3xl shadow-sm backdrop-blur-[2px] bg-white bg-opacity-70 max-w-[1420px] max-md:px-5 max-md:mt-0 max-md:max-w-full">
            <div className="flex gap-5 justify-center px-5 text-sm font-medium leading-5 text-black max-md:flex-wrap">
              <div className="flex flex-1 pr-20 whitespace-nowrap max-md:flex-wrap">
                <div>Indicator</div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/f3e9ca5bc88522d4cae90fead7c6dca5e560964938b0db7456e303e1487e0e35?apiKey=3e4bab1690d64b71a08812886842dfab&"
                  className="shrink-0 w-5 aspect-square"
                />
              </div>
              <div className="flex gap-5 justify-center">
                <div className="flex pr-1.5">
                  <div>Avg. Return</div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/f3e9ca5bc88522d4cae90fead7c6dca5e560964938b0db7456e303e1487e0e35?apiKey=3e4bab1690d64b71a08812886842dfab&"
                    className="shrink-0 w-5 aspect-square"
                  />
                </div>
                <div className="flex pr-3">
                  <div>Win Rate</div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/f3e9ca5bc88522d4cae90fead7c6dca5e560964938b0db7456e303e1487e0e35?apiKey=3e4bab1690d64b71a08812886842dfab&"
                    className="shrink-0 w-5 aspect-square"
                  />
                </div>
                <div className="flex pr-1.5 whitespace-nowrap">
                  <div>Downloads</div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/f3e9ca5bc88522d4cae90fead7c6dca5e560964938b0db7456e303e1487e0e35?apiKey=3e4bab1690d64b71a08812886842dfab&"
                    className="shrink-0 w-5 aspect-square"
                  />
                </div>
              </div>
            </div>
            <div className="flex gap-5 justify-between p-5 mt-5 w-full bg-white rounded-xl border border-solid border-neutral-200 max-md:flex-wrap max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-wrap">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/2e1f0bb82405183976a9bd78c7c5b6a5ea42adb8ed968b157278d1ec56de327b?apiKey=3e4bab1690d64b71a08812886842dfab&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/2e1f0bb82405183976a9bd78c7c5b6a5ea42adb8ed968b157278d1ec56de327b?apiKey=3e4bab1690d64b71a08812886842dfab&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/2e1f0bb82405183976a9bd78c7c5b6a5ea42adb8ed968b157278d1ec56de327b?apiKey=3e4bab1690d64b71a08812886842dfab&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/2e1f0bb82405183976a9bd78c7c5b6a5ea42adb8ed968b157278d1ec56de327b?apiKey=3e4bab1690d64b71a08812886842dfab&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/2e1f0bb82405183976a9bd78c7c5b6a5ea42adb8ed968b157278d1ec56de327b?apiKey=3e4bab1690d64b71a08812886842dfab&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/2e1f0bb82405183976a9bd78c7c5b6a5ea42adb8ed968b157278d1ec56de327b?apiKey=3e4bab1690d64b71a08812886842dfab&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/2e1f0bb82405183976a9bd78c7c5b6a5ea42adb8ed968b157278d1ec56de327b?apiKey=3e4bab1690d64b71a08812886842dfab&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/2e1f0bb82405183976a9bd78c7c5b6a5ea42adb8ed968b157278d1ec56de327b?apiKey=3e4bab1690d64b71a08812886842dfab&"
                  className="shrink-0 w-20 aspect-square"
                />
                <div className="flex flex-col flex-1">
                  <div className="text-xl font-medium leading-7 text-black">
                    TrendMaster Pro
                  </div>
                  <div className="mt-3 text-sm leading-5 text-stone-500">
                    A powerful trend-following indicator that helps identify
                    market direction and potential entry and exit points.
                  </div>
                </div>
              </div>
              <div className="flex justify-around gap-5 my-auto text-base font-medium text-black whitespace-nowrap">
                <div>10%</div>
                <div className="text-emerald-500">72%</div>
                <div>16,000</div>
              </div>
            </div>
            <div className="flex gap-5 justify-between p-5 mt-5 w-full bg-white rounded-xl border border-solid border-neutral-200 max-md:flex-wrap max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-wrap">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/9edcdbf44b99e57a057314a7efa5038944984ec056abb5e5ae60c1fad82ecee9?apiKey=3e4bab1690d64b71a08812886842dfab&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/9edcdbf44b99e57a057314a7efa5038944984ec056abb5e5ae60c1fad82ecee9?apiKey=3e4bab1690d64b71a08812886842dfab&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9edcdbf44b99e57a057314a7efa5038944984ec056abb5e5ae60c1fad82ecee9?apiKey=3e4bab1690d64b71a08812886842dfab&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/9edcdbf44b99e57a057314a7efa5038944984ec056abb5e5ae60c1fad82ecee9?apiKey=3e4bab1690d64b71a08812886842dfab&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/9edcdbf44b99e57a057314a7efa5038944984ec056abb5e5ae60c1fad82ecee9?apiKey=3e4bab1690d64b71a08812886842dfab&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9edcdbf44b99e57a057314a7efa5038944984ec056abb5e5ae60c1fad82ecee9?apiKey=3e4bab1690d64b71a08812886842dfab&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/9edcdbf44b99e57a057314a7efa5038944984ec056abb5e5ae60c1fad82ecee9?apiKey=3e4bab1690d64b71a08812886842dfab&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/9edcdbf44b99e57a057314a7efa5038944984ec056abb5e5ae60c1fad82ecee9?apiKey=3e4bab1690d64b71a08812886842dfab&"
                  className="shrink-0 w-20 aspect-square"
                />
                <div className="flex flex-col flex-1">
                  <div className="text-xl font-medium leading-7 text-black">
                    RSI Ultimate
                  </div>
                  <div className="mt-3 text-sm leading-5 text-stone-500">
                    An advanced Relative Strength Index (RSI) indicator that
                    includes divergence detection and overbought/oversold
                    alerts.
                  </div>
                </div>
              </div>
              <div className="flex gap-5 my-auto text-base font-medium text-black whitespace-nowrap">
                <div>15%</div>
                <div className="text-emerald-500">64%</div>
                <div>14,000</div>
              </div>
            </div>
            <div className="flex gap-5 justify-between p-5 mt-5 w-full bg-white rounded-xl border border-solid border-neutral-200 max-md:flex-wrap max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-wrap">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/94e23b58d42f9df97dd28734542b3fbbda42191effc06d75430f8026831ead0a?apiKey=3e4bab1690d64b71a08812886842dfab&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/94e23b58d42f9df97dd28734542b3fbbda42191effc06d75430f8026831ead0a?apiKey=3e4bab1690d64b71a08812886842dfab&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/94e23b58d42f9df97dd28734542b3fbbda42191effc06d75430f8026831ead0a?apiKey=3e4bab1690d64b71a08812886842dfab&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/94e23b58d42f9df97dd28734542b3fbbda42191effc06d75430f8026831ead0a?apiKey=3e4bab1690d64b71a08812886842dfab&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/94e23b58d42f9df97dd28734542b3fbbda42191effc06d75430f8026831ead0a?apiKey=3e4bab1690d64b71a08812886842dfab&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/94e23b58d42f9df97dd28734542b3fbbda42191effc06d75430f8026831ead0a?apiKey=3e4bab1690d64b71a08812886842dfab&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/94e23b58d42f9df97dd28734542b3fbbda42191effc06d75430f8026831ead0a?apiKey=3e4bab1690d64b71a08812886842dfab&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/94e23b58d42f9df97dd28734542b3fbbda42191effc06d75430f8026831ead0a?apiKey=3e4bab1690d64b71a08812886842dfab&"
                  className="shrink-0 w-20 aspect-square"
                />
                <div className="flex flex-col flex-1">
                  <div className="text-xl font-medium leading-7 text-black">
                    Volume Surge Detector
                  </div>
                  <div className="mt-3 text-sm leading-5 text-stone-500">
                    An indicator designed to detect unusual volume activity,
                    signaling potential market moves.
                  </div>
                </div>
              </div>
              <div className="flex gap-5 my-auto text-base font-medium text-black whitespace-nowrap">
                <div>8%</div>
                <div className="text-emerald-500">78%</div>
                <div>18,000</div>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center p-10 mt-10 w-full rounded-3xl shadow-sm backdrop-blur-[2px] bg-white bg-opacity-70 max-w-[1420px] max-md:px-5 max-md:max-w-full">
            <div className="flex gap-5 justify-center px-5 text-sm font-medium leading-5 text-black max-md:flex-wrap">
              <div className="flex flex-1 pr-20 whitespace-nowrap max-md:flex-wrap">
                <div>Autobot</div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/f3e9ca5bc88522d4cae90fead7c6dca5e560964938b0db7456e303e1487e0e35?apiKey=3e4bab1690d64b71a08812886842dfab&"
                  className="shrink-0 w-5 aspect-square"
                />
              </div>
              <div className="flex gap-5 justify-center max-md:flex-wrap">
                <div className="flex pr-4 whitespace-nowrap">
                  <div>Growth</div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/f3e9ca5bc88522d4cae90fead7c6dca5e560964938b0db7456e303e1487e0e35?apiKey=3e4bab1690d64b71a08812886842dfab&"
                    className="shrink-0 w-5 aspect-square"
                  />
                </div>
                <div className="flex pr-6 whitespace-nowrap">
                  <div>Profit</div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/f3e9ca5bc88522d4cae90fead7c6dca5e560964938b0db7456e303e1487e0e35?apiKey=3e4bab1690d64b71a08812886842dfab&"
                    className="shrink-0 w-5 aspect-square"
                  />
                </div>
                <div className="flex pr-7 whitespace-nowrap">
                  <div>MDD</div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/f3e9ca5bc88522d4cae90fead7c6dca5e560964938b0db7456e303e1487e0e35?apiKey=3e4bab1690d64b71a08812886842dfab&"
                    className="shrink-0 w-5 aspect-square"
                  />
                </div>
                <div className="flex pr-3">
                  <div>Win Rate</div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/f3e9ca5bc88522d4cae90fead7c6dca5e560964938b0db7456e303e1487e0e35?apiKey=3e4bab1690d64b71a08812886842dfab&"
                    className="shrink-0 w-5 aspect-square"
                  />
                </div>
                <div className="flex pr-1.5 whitespace-nowrap">
                  <div>Downloads</div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/f3e9ca5bc88522d4cae90fead7c6dca5e560964938b0db7456e303e1487e0e35?apiKey=3e4bab1690d64b71a08812886842dfab&"
                    className="shrink-0 w-5 aspect-square"
                  />
                </div>
              </div>
            </div>
            <div className="p-5 mt-5 bg-white rounded-xl border border-solid border-neutral-200 max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col">
                <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                  <div className="flex grow gap-5 max-md:flex-wrap max-md:mt-10">
                    <img
                      loading="lazy"
                      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/6601a24e7b812d1f21047fa445c6dbd78720c654a204524e907e6eb277f14f9c?apiKey=3e4bab1690d64b71a08812886842dfab&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/6601a24e7b812d1f21047fa445c6dbd78720c654a204524e907e6eb277f14f9c?apiKey=3e4bab1690d64b71a08812886842dfab&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6601a24e7b812d1f21047fa445c6dbd78720c654a204524e907e6eb277f14f9c?apiKey=3e4bab1690d64b71a08812886842dfab&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/6601a24e7b812d1f21047fa445c6dbd78720c654a204524e907e6eb277f14f9c?apiKey=3e4bab1690d64b71a08812886842dfab&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/6601a24e7b812d1f21047fa445c6dbd78720c654a204524e907e6eb277f14f9c?apiKey=3e4bab1690d64b71a08812886842dfab&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6601a24e7b812d1f21047fa445c6dbd78720c654a204524e907e6eb277f14f9c?apiKey=3e4bab1690d64b71a08812886842dfab&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/6601a24e7b812d1f21047fa445c6dbd78720c654a204524e907e6eb277f14f9c?apiKey=3e4bab1690d64b71a08812886842dfab&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/6601a24e7b812d1f21047fa445c6dbd78720c654a204524e907e6eb277f14f9c?apiKey=3e4bab1690d64b71a08812886842dfab&"
                      className="shrink-0 w-20 aspect-square"
                    />
                    <div className="flex flex-col flex-1 max-md:max-w-full">
                      <div className="text-xl font-medium leading-7 text-black max-md:max-w-full">
                        AutoTrader Max
                      </div>
                      <div className="mt-3 text-sm leading-5 text-stone-500 max-md:max-w-full">
                        An advanced trading bot that executes trades based on
                        pre-defined strategies and market conditions.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                  <div className="flex gap-5 self-stretch my-auto text-base font-medium text-black whitespace-nowrap max-md:flex-wrap max-md:mt-10">
                    <div>25%</div>
                    <div>$12,000</div>
                    <div>10%</div>
                    <div className="text-emerald-500">70%</div>
                    <div>10,000</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-5 mt-5 bg-white rounded-xl border border-solid border-neutral-200 max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col">
                <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                  <div className="flex grow gap-5 max-md:flex-wrap max-md:mt-10">
                    <img
                      loading="lazy"
                      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/4e2e0d0e1cc7ada72b24cc25fe221f6bc423603577454401dbcad40e9f303efb?apiKey=3e4bab1690d64b71a08812886842dfab&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/4e2e0d0e1cc7ada72b24cc25fe221f6bc423603577454401dbcad40e9f303efb?apiKey=3e4bab1690d64b71a08812886842dfab&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/4e2e0d0e1cc7ada72b24cc25fe221f6bc423603577454401dbcad40e9f303efb?apiKey=3e4bab1690d64b71a08812886842dfab&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/4e2e0d0e1cc7ada72b24cc25fe221f6bc423603577454401dbcad40e9f303efb?apiKey=3e4bab1690d64b71a08812886842dfab&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/4e2e0d0e1cc7ada72b24cc25fe221f6bc423603577454401dbcad40e9f303efb?apiKey=3e4bab1690d64b71a08812886842dfab&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/4e2e0d0e1cc7ada72b24cc25fe221f6bc423603577454401dbcad40e9f303efb?apiKey=3e4bab1690d64b71a08812886842dfab&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/4e2e0d0e1cc7ada72b24cc25fe221f6bc423603577454401dbcad40e9f303efb?apiKey=3e4bab1690d64b71a08812886842dfab&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/4e2e0d0e1cc7ada72b24cc25fe221f6bc423603577454401dbcad40e9f303efb?apiKey=3e4bab1690d64b71a08812886842dfab&"
                      className="shrink-0 w-20 aspect-square"
                    />
                    <div className="flex flex-col flex-1 max-md:max-w-full">
                      <div className="text-xl font-medium leading-7 text-black max-md:max-w-full">
                        CryptoBot 360
                      </div>
                      <div className="mt-3 text-sm leading-5 text-stone-500 max-md:max-w-full">
                        A specialized bot for cryptocurrency trading, offering
                        automated trading strategies for major crypto assets.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                  <div className="flex gap-5 self-stretch my-auto text-base font-medium text-black whitespace-nowrap max-md:flex-wrap max-md:mt-10">
                    <div>30%</div>
                    <div>$15,000</div>
                    <div>15%</div>
                    <div className="text-emerald-500">65%</div>
                    <div>12,000</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-5 mt-5 bg-white rounded-xl border border-solid border-neutral-200 max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col">
                <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                  <div className="flex grow gap-5 max-md:flex-wrap max-md:mt-10">
                    <img
                      loading="lazy"
                      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/cb7a549a7c5ade59ab5f545b8716d471e8bd95a399e0225f97f137a571416b35?apiKey=3e4bab1690d64b71a08812886842dfab&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/cb7a549a7c5ade59ab5f545b8716d471e8bd95a399e0225f97f137a571416b35?apiKey=3e4bab1690d64b71a08812886842dfab&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/cb7a549a7c5ade59ab5f545b8716d471e8bd95a399e0225f97f137a571416b35?apiKey=3e4bab1690d64b71a08812886842dfab&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/cb7a549a7c5ade59ab5f545b8716d471e8bd95a399e0225f97f137a571416b35?apiKey=3e4bab1690d64b71a08812886842dfab&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/cb7a549a7c5ade59ab5f545b8716d471e8bd95a399e0225f97f137a571416b35?apiKey=3e4bab1690d64b71a08812886842dfab&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/cb7a549a7c5ade59ab5f545b8716d471e8bd95a399e0225f97f137a571416b35?apiKey=3e4bab1690d64b71a08812886842dfab&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/cb7a549a7c5ade59ab5f545b8716d471e8bd95a399e0225f97f137a571416b35?apiKey=3e4bab1690d64b71a08812886842dfab&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/cb7a549a7c5ade59ab5f545b8716d471e8bd95a399e0225f97f137a571416b35?apiKey=3e4bab1690d64b71a08812886842dfab&"
                      className="shrink-0 w-20 aspect-square"
                    />
                    <div className="flex flex-col flex-1 max-md:max-w-full">
                      <div className="text-xl font-medium leading-7 text-black max-md:max-w-full">
                        ForexBot Elite
                      </div>
                      <div className="mt-3 text-sm leading-5 text-stone-500 max-md:max-w-full">
                        An autobot tailored for forex trading, providing
                        automated execution of forex trading strategies.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                  <div className="flex gap-5 self-stretch my-auto text-base font-medium text-black whitespace-nowrap max-md:flex-wrap max-md:mt-10">
                    <div>20%</div>
                    <div>$10,000</div>
                    <div>8%</div>
                    <div className="text-emerald-500">75%</div>
                    <div>8,000</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center p-10 mt-10 w-full rounded-3xl shadow-sm backdrop-blur-[2px] bg-white bg-opacity-70 max-w-[1420px] max-md:px-5 max-md:max-w-full">
            <div className="flex gap-5 justify-center px-5 text-sm font-medium leading-5 text-black whitespace-nowrap max-md:flex-wrap">
              <div className="flex flex-1 pr-20 max-md:flex-wrap">
                <div>Course</div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/f3e9ca5bc88522d4cae90fead7c6dca5e560964938b0db7456e303e1487e0e35?apiKey=3e4bab1690d64b71a08812886842dfab&"
                  className="shrink-0 w-5 aspect-square"
                />
              </div>
              <div className="flex gap-5 justify-center max-md:flex-wrap">
                <div className="flex pr-4">
                  <div>Articles</div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/f3e9ca5bc88522d4cae90fead7c6dca5e560964938b0db7456e303e1487e0e35?apiKey=3e4bab1690d64b71a08812886842dfab&"
                    className="shrink-0 w-5 aspect-square"
                  />
                </div>
                <div className="flex pr-4">
                  <div>Videos</div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/f3e9ca5bc88522d4cae90fead7c6dca5e560964938b0db7456e303e1487e0e35?apiKey=3e4bab1690d64b71a08812886842dfab&"
                    className="shrink-0 w-5 aspect-square"
                  />
                </div>
                <div className="flex pr-7">
                  <div>Time</div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/f3e9ca5bc88522d4cae90fead7c6dca5e560964938b0db7456e303e1487e0e35?apiKey=3e4bab1690d64b71a08812886842dfab&"
                    className="shrink-0 w-5 aspect-square"
                  />
                </div>
                <div className="flex pr-1.5">
                  <div>Downloads</div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/f3e9ca5bc88522d4cae90fead7c6dca5e560964938b0db7456e303e1487e0e35?apiKey=3e4bab1690d64b71a08812886842dfab&"
                    className="shrink-0 w-5 aspect-square"
                  />
                </div>
              </div>
            </div>
            <div className="justify-between p-5 mt-5 bg-white rounded-xl border border-solid border-neutral-200 max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col">
                <div className="flex flex-col w-[55%] max-md:ml-0 max-md:w-full">
                  <div className="flex grow gap-5 max-md:flex-wrap max-md:mt-10">
                    <img
                      loading="lazy"
                      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/8a46f515e2df36970205b0748710e8c0c11d109f820112f1bbe64c5e6af9c668?apiKey=3e4bab1690d64b71a08812886842dfab&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/8a46f515e2df36970205b0748710e8c0c11d109f820112f1bbe64c5e6af9c668?apiKey=3e4bab1690d64b71a08812886842dfab&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/8a46f515e2df36970205b0748710e8c0c11d109f820112f1bbe64c5e6af9c668?apiKey=3e4bab1690d64b71a08812886842dfab&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/8a46f515e2df36970205b0748710e8c0c11d109f820112f1bbe64c5e6af9c668?apiKey=3e4bab1690d64b71a08812886842dfab&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/8a46f515e2df36970205b0748710e8c0c11d109f820112f1bbe64c5e6af9c668?apiKey=3e4bab1690d64b71a08812886842dfab&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/8a46f515e2df36970205b0748710e8c0c11d109f820112f1bbe64c5e6af9c668?apiKey=3e4bab1690d64b71a08812886842dfab&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/8a46f515e2df36970205b0748710e8c0c11d109f820112f1bbe64c5e6af9c668?apiKey=3e4bab1690d64b71a08812886842dfab&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/8a46f515e2df36970205b0748710e8c0c11d109f820112f1bbe64c5e6af9c668?apiKey=3e4bab1690d64b71a08812886842dfab&"
                      className="shrink-0 w-20 aspect-square"
                    />
                    <div className="flex flex-col flex-1 max-md:max-w-full">
                      <div className="text-xl font-medium leading-7 text-black max-md:max-w-full">
                        Auto Trading Basics
                      </div>
                      <div className="mt-3 text-sm leading-5 text-stone-500 max-md:max-w-full">
                        A beginner’s course that introduces the fundamentals of
                        automated trading and how to get started with trading
                        bots.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-[45%] max-md:ml-0 max-md:w-full">
                  <div className="flex gap-5 self-stretch my-auto text-base font-medium text-black max-md:flex-wrap max-md:mt-10">
                    <div>6</div>
                    <div>2</div>
                    <div className="text-emerald-500">10 hours</div>
                    <div>2,000</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="justify-between p-5 mt-5 bg-white rounded-xl border border-solid border-neutral-200 max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col">
                <div className="flex flex-col w-[55%] max-md:ml-0 max-md:w-full">
                  <div className="flex grow gap-5 max-md:flex-wrap max-md:mt-10">
                    <img
                      loading="lazy"
                      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/76e37803de57310bab47f137f45deab3941c09757fa2c4f042ded54b9ff6f791?apiKey=3e4bab1690d64b71a08812886842dfab&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/76e37803de57310bab47f137f45deab3941c09757fa2c4f042ded54b9ff6f791?apiKey=3e4bab1690d64b71a08812886842dfab&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/76e37803de57310bab47f137f45deab3941c09757fa2c4f042ded54b9ff6f791?apiKey=3e4bab1690d64b71a08812886842dfab&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/76e37803de57310bab47f137f45deab3941c09757fa2c4f042ded54b9ff6f791?apiKey=3e4bab1690d64b71a08812886842dfab&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/76e37803de57310bab47f137f45deab3941c09757fa2c4f042ded54b9ff6f791?apiKey=3e4bab1690d64b71a08812886842dfab&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/76e37803de57310bab47f137f45deab3941c09757fa2c4f042ded54b9ff6f791?apiKey=3e4bab1690d64b71a08812886842dfab&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/76e37803de57310bab47f137f45deab3941c09757fa2c4f042ded54b9ff6f791?apiKey=3e4bab1690d64b71a08812886842dfab&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/76e37803de57310bab47f137f45deab3941c09757fa2c4f042ded54b9ff6f791?apiKey=3e4bab1690d64b71a08812886842dfab&"
                      className="shrink-0 w-20 aspect-square"
                    />
                    <div className="flex flex-col flex-1 max-md:max-w-full">
                      <div className="text-xl font-medium leading-7 text-black max-md:max-w-full">
                        Advanced Trading Strategies
                      </div>
                      <div className="mt-3 text-sm leading-5 text-stone-500 max-md:max-w-full">
                        An in-depth course covering advanced trading strategies
                        and how to implement them using autobots.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-[45%] max-md:ml-0 max-md:w-full">
                  <div className="flex gap-5 self-stretch my-auto text-base font-medium text-black max-md:flex-wrap max-md:mt-10">
                    <div>8</div>
                    <div>4</div>
                    <div className="text-emerald-500">12 hours</div>
                    <div>6,000</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="justify-between p-5 mt-5 bg-white rounded-xl border border-solid border-neutral-200 max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col">
                <div className="flex flex-col w-[55%] max-md:ml-0 max-md:w-full">
                  <div className="flex grow gap-5 max-md:flex-wrap max-md:mt-10">
                    <img
                      loading="lazy"
                      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/3fcfe26a1a087d989e9bb568945f6d7725a1f872ba56e46387feb888f2a7eaf0?apiKey=3e4bab1690d64b71a08812886842dfab&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/3fcfe26a1a087d989e9bb568945f6d7725a1f872ba56e46387feb888f2a7eaf0?apiKey=3e4bab1690d64b71a08812886842dfab&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3fcfe26a1a087d989e9bb568945f6d7725a1f872ba56e46387feb888f2a7eaf0?apiKey=3e4bab1690d64b71a08812886842dfab&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/3fcfe26a1a087d989e9bb568945f6d7725a1f872ba56e46387feb888f2a7eaf0?apiKey=3e4bab1690d64b71a08812886842dfab&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/3fcfe26a1a087d989e9bb568945f6d7725a1f872ba56e46387feb888f2a7eaf0?apiKey=3e4bab1690d64b71a08812886842dfab&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3fcfe26a1a087d989e9bb568945f6d7725a1f872ba56e46387feb888f2a7eaf0?apiKey=3e4bab1690d64b71a08812886842dfab&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/3fcfe26a1a087d989e9bb568945f6d7725a1f872ba56e46387feb888f2a7eaf0?apiKey=3e4bab1690d64b71a08812886842dfab&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/3fcfe26a1a087d989e9bb568945f6d7725a1f872ba56e46387feb888f2a7eaf0?apiKey=3e4bab1690d64b71a08812886842dfab&"
                      className="shrink-0 w-20 aspect-square"
                    />
                    <div className="flex flex-col flex-1 max-md:max-w-full">
                      <div className="text-xl font-medium leading-7 text-black max-md:max-w-full">
                        Crypto Trading Masterclass
                      </div>
                      <div className="mt-3 text-sm leading-5 text-stone-500 max-md:max-w-full">
                        A comprehensive course on cryptocurrency trading,
                        focusing on both manual and automated trading
                        techniques.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-[45%] max-md:ml-0 max-md:w-full">
                  <div className="flex gap-5 self-stretch my-auto text-base font-medium text-black max-md:flex-wrap max-md:mt-10">
                    <div>10</div>
                    <div>6</div>
                    <div className="text-emerald-500">16 hours</div>
                    <div>4,000</div>
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
export default Products
