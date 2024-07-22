function News() {
  return (
    <div className="flex flex-col items-center px-6 bg-stone-50 max-md:px-5">
      <div className="mt-16 max-w-full w-[1004px] max-md:mt-10">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[27%] max-md:ml-0 max-md:w-full">
            <img
              loading="lazy"
              srcSet="../../../public/assets/images/icon-analyst-green.png"
              className="grow shrink-0 max-w-full aspect-[0.94] w-[170px] max-md:mt-10"
            />
          </div>
          <div className="flex flex-col ml-5 w-[48%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow mt-5 whitespace-nowrap max-md:mt-10">
              <div className="text-8xl font-semibold text-center text-black leading-[88px] max-md:text-4xl">
                News
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
          <div className="flex flex-col ml-5 w-[24%] max-md:ml-0 max-md:w-full">
            <img
              loading="lazy"
              srcSet="../../../public/assets/images/icon-analyst-yellow.png"
              className="grow shrink-0 max-w-full aspect-[1.08] w-[194px] max-md:mt-10"
            />
          </div>
        </div>
      </div>
      {/* content */}
      <div className="flex flex-col justify-end px-10 py-9 rounded-3xl shadow-sm backdrop-blur-[2px] bg-white bg-opacity-70 max-md:px-5">
        <div className="max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow text-2xl font-medium leading-8 text-black max-md:mt-5">
                <img
                  className="shrink-0 h-80 rounded-xl aspect-square "
                  src="../../../public/assets/images/image-forex-1.png"
                  alt=""
                />
                <div className="mt-5">Market Snapshot</div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow text-2xl font-medium leading-8 text-black max-md:mt-5">
                <img
                  className="shrink-0 h-80 rounded-xl aspect-square "
                  src="../../../public/assets/images/image-forex-1.png"
                  alt=""
                />
                <div className="mt-5">Currency Heat Map</div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow text-2xl font-medium leading-8 text-black max-md:mt-5">
                <img
                  className="shrink-0 h-80 rounded-xl aspect-square "
                  src="../../../public/assets/images/image-forex-1.png"
                  alt=""
                />
                <div className="mt-5">Action Bias</div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow text-2xl font-medium leading-8 text-black max-md:mt-5">
                <img
                  className="shrink-0 h-80 rounded-xl aspect-square "
                  src="../../../public/assets/images/image-forex-1.png"
                  alt=""
                />
                <div className="mt-5">Pivot Points</div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow max-md:mt-5 max-md:max-w-full">
                <img
                  className="shrink-0 rounded-xl bg-neutral-50 h-[495px] max-md:max-w-full"
                  src="../../../public/assets/images/image-forex-1.png"
                  alt=""
                />
                <div className="mt-5 text-3xl font-medium leading-10 text-black max-md:max-w-full">
                  Canadian CPI Takes Center Stage; Yen Stabilizes in Quiet
                  Trading
                </div>
                <div className="mt-2 text-xs leading-4 text-zinc-500 max-md:max-w-full">
                  Jun 25, 05:53
                </div>
                <div className="mt-2 text-sm leading-5 text-stone-500 max-md:max-w-full">
                  Trading in the Asian session has been quiet today and is
                  expected to remain so during the European session, given the
                  empty economic calendar
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col max-md:mt-5 max-md:max-w-full">
                <div className="max-md:max-w-full">
                  <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                    <div className="flex flex-col w-[32%] max-md:ml-0 max-md:w-full">
                      <img
                        className="shrink-0 mx-auto rounded-xl bg-neutral-50 h-[150px] w-[200px] max-md:mt-5"
                        src="../../../public/assets/images/image-forex-1.png"
                        alt=""
                      />
                    </div>
                    <div className="flex flex-col ml-5 w-[68%] max-md:ml-0 max-md:w-full">
                      <div className="flex flex-col self-stretch my-auto max-md:mt-10">
                        <div className="text-xl font-medium leading-7 text-black">
                          Yen Rebounds from 160 Level, Euro Gains but Political
                          Risks Remain
                        </div>
                        <div className="mt-2 text-xs leading-4 text-zinc-500">
                          Jun 25, 05:53
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-5 max-md:max-w-full">
                  <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                    <div className="flex flex-col w-[32%] max-md:ml-0 max-md:w-full">
                      <img
                        className="shrink-0 mx-auto rounded-xl bg-neutral-50 h-[150px] w-[200px] max-md:mt-5"
                        src="../../../public/assets/images/image-forex-1.png"
                        alt=""
                      />
                    </div>
                    <div className="flex flex-col ml-5 w-[68%] max-md:ml-0 max-md:w-full">
                      <div className="flex flex-col self-stretch my-auto max-md:mt-10">
                        <div className="text-xl font-medium leading-7 text-black">
                          Japan’s Inaction and Refrained Rhetoric Lead to
                          Speculation on New Intervention Threshold
                        </div>
                        <div className="mt-2 text-xs leading-4 text-zinc-500">
                          Jun 25, 05:53
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-5 max-md:max-w-full">
                  <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                    <div className="flex flex-col w-[32%] max-md:ml-0 max-md:w-full">
                      <img
                        className="shrink-0 mx-auto rounded-xl bg-neutral-50 h-[150px] w-[200px] max-md:mt-5"
                        src="../../../public/assets/images/image-forex-1.png"
                        alt=""
                      />
                    </div>
                    <div className="flex flex-col ml-5 w-[68%] max-md:ml-0 max-md:w-full">
                      <div className="flex flex-col self-stretch my-auto max-md:mt-10">
                        <div className="text-xl font-medium leading-7 text-black">
                          Yen’s Plunge Puts Japan’s Intervention Resolve Under
                          Scrutiny
                        </div>
                        <div className="mt-2 text-xs leading-4 text-zinc-500">
                          Jun 25, 05:53
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-5 max-md:max-w-full">
                  <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                    <div className="flex flex-col w-[32%] max-md:ml-0 max-md:w-full">
                      <img
                        className="shrink-0 mx-auto rounded-xl bg-neutral-50 h-[150px] w-[200px] max-md:mt-5"
                        src="../../../public/assets/images/image-forex-1.png"
                        alt=""
                      />
                    </div>
                    <div className="flex flex-col ml-5 w-[68%] max-md:ml-0 max-md:w-full">
                      <div className="flex flex-col self-stretch my-auto max-md:mt-10">
                        <div className="text-xl font-medium leading-7 text-black">
                          Euro and Sterling Fall on Weak PMI Data
                        </div>
                        <div className="mt-2 text-xs leading-4 text-zinc-500">
                          Jun 25, 05:53
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-1 self-start mt-10 text-3xl font-medium text-black whitespace-nowrap">
          <div>Stock</div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/4fcdb2ace8a4bb25c9b33a448d3ea62ca6c304e5ed1929e8e414ef2a351dc157?apiKey=3e4bab1690d64b71a08812886842dfab&"
            className="shrink-0 my-auto w-8 aspect-square"
          />
        </div>
        <div className="mt-5 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow max-md:mt-5">
                <img
                  className="shrink-0 h-60 rounded-xl "
                  src="../../../public/assets/images/image-forex-1.png"
                  alt=""
                />
                <div className="mt-5 text-xl font-medium leading-7 text-black">
                  Swiss Franc Plummets After SNB Rate Cut, Sterling Weakens
                  Following BoE Hold
                </div>
                <div className="mt-2 text-xs leading-4 text-zinc-500">
                  Jun 25, 05:53
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col max-md:mt-5">
                <img
                  className="shrink-0 h-60 rounded-xl "
                  src="../../../public/assets/images/image-forex-1.png"
                  alt=""
                />
                <div className="mt-5 text-xl font-medium leading-7 text-black">
                  Markets Await SNB and BoE Decisions, Gold Bounces Higher
                </div>
                <div className="mt-2 text-xs leading-4 text-zinc-500">
                  Jun 25, 05:53
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col max-md:mt-5">
                <img
                  className="shrink-0 h-60 rounded-xl "
                  src="../../../public/assets/images/image-forex-1.png"
                  alt=""
                />
                <div className="mt-5 text-xl font-medium leading-7 text-black">
                  Sterling and Aussie Show Strength in Quiet Trading
                </div>
                <div className="mt-2 text-xs leading-4 text-zinc-500">
                  Jun 25, 05:53
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow max-md:mt-5">
                <img
                  className="shrink-0 h-60 rounded-xl "
                  src="../../../public/assets/images/image-forex-1.png"
                  alt=""
                />
                <div className="mt-5 text-xl font-medium leading-7 text-black">
                  Sterling Steady as UK Inflation Eases; Australian Dollar
                  Strengthens
                </div>
                <div className="mt-2 text-xs leading-4 text-zinc-500">
                  Jun 25, 05:53
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-1 self-start mt-10 text-3xl font-medium text-black whitespace-nowrap">
          <div>Crypto</div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/4fcdb2ace8a4bb25c9b33a448d3ea62ca6c304e5ed1929e8e414ef2a351dc157?apiKey=3e4bab1690d64b71a08812886842dfab&"
            className="shrink-0 my-auto w-8 aspect-square"
          />
        </div>
        <div className="mt-5 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow max-md:mt-5">
                <img
                  className="shrink-0 h-60 rounded-xl "
                  src="../../../public/assets/images/image-forex-1.png"
                  alt=""
                />
                <div className="mt-5 text-xl font-medium leading-7 text-black">
                  Swiss Franc Plummets After SNB Rate Cut, Sterling Weakens
                  Following BoE Hold
                </div>
                <div className="mt-2 text-xs leading-4 text-zinc-500">
                  Jun 25, 05:53
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col max-md:mt-5">
                <img
                  className="shrink-0 h-60 rounded-xl "
                  src="../../../public/assets/images/image-forex-1.png"
                  alt=""
                />
                <div className="mt-5 text-xl font-medium leading-7 text-black">
                  Markets Await SNB and BoE Decisions, Gold Bounces Higher
                </div>
                <div className="mt-2 text-xs leading-4 text-zinc-500">
                  Jun 25, 05:53
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col max-md:mt-5">
                <img
                  className="shrink-0 h-60 rounded-xl "
                  src="../../../public/assets/images/image-forex-1.png"
                  alt=""
                />
                <div className="mt-5 text-xl font-medium leading-7 text-black">
                  Sterling and Aussie Show Strength in Quiet Trading
                </div>
                <div className="mt-2 text-xs leading-4 text-zinc-500">
                  Jun 25, 05:53
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow max-md:mt-5">
                <img
                  className="shrink-0 h-60 rounded-xl "
                  src="../../../public/assets/images/image-forex-1.png"
                  alt=""
                />
                <div className="mt-5 text-xl font-medium leading-7 text-black">
                  Sterling Steady as UK Inflation Eases; Australian Dollar
                  Strengthens
                </div>
                <div className="mt-2 text-xs leading-4 text-zinc-500">
                  Jun 25, 05:53
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-1 self-start mt-10 text-3xl font-medium text-black whitespace-nowrap">
          <div>Forex</div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/4fcdb2ace8a4bb25c9b33a448d3ea62ca6c304e5ed1929e8e414ef2a351dc157?apiKey=3e4bab1690d64b71a08812886842dfab&"
            className="shrink-0 my-auto w-8 aspect-square"
          />
        </div>
        <div className="mt-5 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow max-md:mt-5">
                <img
                  className="shrink-0 h-60 rounded-xl "
                  src="../../../public/assets/images/image-forex-1.png"
                  alt=""
                />
                <div className="mt-5 text-xl font-medium leading-7 text-black">
                  Swiss Franc Plummets After SNB Rate Cut, Sterling Weakens
                  Following BoE Hold
                </div>
                <div className="mt-2 text-xs leading-4 text-zinc-500">
                  Jun 25, 05:53
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col max-md:mt-5">
                <img
                  className="shrink-0 h-60 rounded-xl "
                  src="../../../public/assets/images/image-forex-1.png"
                  alt=""
                />
                <div className="mt-5 text-xl font-medium leading-7 text-black">
                  Markets Await SNB and BoE Decisions, Gold Bounces Higher
                </div>
                <div className="mt-2 text-xs leading-4 text-zinc-500">
                  Jun 25, 05:53
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col max-md:mt-5">
                <img
                  className="shrink-0 h-60 rounded-xl "
                  src="../../../public/assets/images/image-forex-1.png"
                  alt=""
                />
                <div className="mt-5 text-xl font-medium leading-7 text-black">
                  Sterling and Aussie Show Strength in Quiet Trading
                </div>
                <div className="mt-2 text-xs leading-4 text-zinc-500">
                  Jun 25, 05:53
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow max-md:mt-5">
                <img
                  className="shrink-0 h-60 rounded-xl "
                  src="../../../public/assets/images/image-forex-1.png"
                  alt=""
                />
                <div className="mt-5 text-xl font-medium leading-7 text-black">
                  Sterling Steady as UK Inflation Eases; Australian Dollar
                  Strengthens
                </div>
                <div className="mt-2 text-xs leading-4 text-zinc-500">
                  Jun 25, 05:53
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default News
