import * as React from "react";

function Home() {
  return (
    <div className="flex flex-col items-center bg-stone-50">
      <div className="flex flex-col items-center self-stretch px-6 w-full pb-6 max-md:px-5 max-md:max-w-full">
        <div className="flex overflow-hidden relative flex-col items-center self-stretch px-16 pt-14 mt-6 min-h-[956px] max-md:px-5 max-md:max-w-full">
          <img
            loading="lazy"
            src="/assets/images/svgs/bg-main.svg" alt="bg"
            className="object-cover absolute inset-0 size-full"
          />
          <div className="flex relative z-10 flex-col mb-0 w-full max-w-[1560px] max-md:mb-2.5 max-md:max-w-full">
            <div className="self-center max-w-full w-[1236px]">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                <div className="flex flex-col w-[23%] max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow max-md:mt-10">
                    <img
                      loading="lazy"
                      src="/assets/images/icon-1.jpg"
                      className="max-w-full aspect-[0.82] w-[148px]"
                    />
                    <div className="flex flex-col self-end mt-7 max-w-full w-[164px]">
                      <img
                        loading="lazy"
                        src="/assets/images/icon-3.png"
                        className="self-end aspect-[0.91] w-[62px]"
                      />
                      <img
                        loading="lazy"
                        srcSet="/assets/images/icon-4.png"
                        className="mt-10 max-w-full aspect-[0.69] w-[124px]"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-[55%] max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col justify-center self-stretch my-auto font-medium max-md:mt-10 max-md:max-w-full">
                    <div className="text-8xl font-semibold text-center text-orange-500 leading-[88px] max-md:max-w-full max-md:text-4xl max-md:leading-10">
                      Automated <span className="text-emerald-500">Stock</span>,{" "}
                      <span className="text-yellow-400">Crypto</span>,{" "}
                      <span className="text-orange-500">Forex</span> Trading
                    </div>
                    <div className="mt-10 text-2xl leading-7 text-center text-black max-md:max-w-full">
                      Win more with less effort, in less time.
                    </div>
                    <div className="justify-center self-center mt-10 ">
                      <button className="px-5 py-[8px] transition duration-300 ease-in-out bg-black text-white rounded-xl border border-neutral-200 justify-center items-center gap-2.5 flex hover:bg-neutral-100 hover:text-black">
                        Explore Products
                      </button>
                    </div>

                  </div>
                </div>
                <div className="flex flex-col ml-5 w-[21%] max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow max-md:mt-10">
                    <img
                      loading="lazy"
                      srcSet="/assets/images/icon-2.png"
                      className="self-end w-32 max-w-full aspect-[0.71]"
                    />
                    <img
                      loading="lazy"
                      srcSet="/assets/images/icon-6.png"
                      className="mt-7 aspect-[0.91] w-[62px]"
                    />
                    <img
                      loading="lazy"
                      srcSet="/assets/images/icon-5.png"
                      className="self-center mt-10 w-40 max-w-full aspect-[0.88]"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-wrap content-start mt-20 max-md:mt-10 max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
                  <div className="ml-5">
                    <div className="flex flex-col grow px-5 py-5 w-full text-2xl font-medium leading-8 text-black rounded-3xl backdrop-blur-[2px] bg-white bg-opacity-70 max-md:px-5 max-md:mt-2">
                      <div className="shrink-0 h-80 bg-white rounded-xl border border-solid aspect-square border-neutral-200" />
                      <div className="mt-3">Market Snapshot</div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
                  <div className="ml-5">
                    <div className="flex flex-col grow px-5 py-5 w-full text-2xl font-medium leading-8 text-black rounded-3xl backdrop-blur-[2px] bg-white bg-opacity-70 max-md:px-5 max-md:mt-2">
                      <div className="shrink-0 h-80 bg-white rounded-xl border border-solid aspect-square border-neutral-200" />
                      <div className="mt-3">Currency Heat Map</div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
                  <div className="ml-5">
                    <div className="flex flex-col grow px-5 py-5 w-full text-2xl font-medium leading-8 text-black rounded-3xl backdrop-blur-[2px] bg-white bg-opacity-70 max-md:px-5 max-md:mt-2">
                      <div className="shrink-0 h-80 bg-white rounded-xl border border-solid aspect-square border-neutral-200" />
                      <div className="mt-3">Action Bias</div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
                  <div className="ml-5">
                    <div className="flex flex-col grow px-5 py-5 w-full text-2xl font-medium leading-8 text-black rounded-3xl backdrop-blur-[2px] bg-white bg-opacity-70 max-md:px-5 max-md:mt-2">
                      <div className="shrink-0 h-80 bg-white rounded-xl border border-solid aspect-square border-neutral-200" />
                      <div className="mt-3">Pivot Points</div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
        <div className="mt-12 text-7xl font-semibold text-center text-black leading-[80px] w-[920px] max-md:mt-10 max-md:max-w-full max-md:text-4xl max-md:leading-[49px]">
          Best-in-class products.
          <br />
          Automated profits.
        </div>
        <div className="mt-7 text-lg leading-7 text-center text-black w-[480px] max-md:max-w-full">
          Experience seamless trading with our advanced automation technology.
          Maximize your earnings effortlessly and efficiently. Stay ahead of the
          market with our cutting-edge solutions.
        </div>
        <div className="mt-20 max-w-full w-[1280px] max-md:mt-10">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[69%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow p-16 w-full rounded-3xl backdrop-blur-[2px] bg-white bg-opacity-70 max-md:px-5 max-md:mt-2 max-md:max-w-full">
                <div className="max-md:max-w-full">
                  <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                    <div className="flex flex-col w-[18%] max-md:ml-0 max-md:w-full">
                      <div className="flex flex-col pb-1.5 w-full bg-white rounded-xl border border-solid border-neutral-200 max-md:mt-10">
                        <div className="flex flex-col pb-1.5 bg-white rounded-xl border border-solid border-neutral-200">
                          <div className="flex justify-center items-center px-9 py-8 bg-white rounded-xl border border-solid border-neutral-200 max-md:px-5">
                            <img
                              loading="lazy"
                              srcSet="/assets/images/icon-7.png"
                              className="aspect-[0.68] w-[81px]"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col ml-5 w-[82%] max-md:ml-0 max-md:w-full">
                      <div className="flex flex-col grow pb-8 w-full bg-white rounded-xl border border-solid border-neutral-200 max-md:mt-10 max-md:max-w-full">
                        <div className="p-5 rounded-xl border border-solid bg-stone-50 border-neutral-200 max-md:max-w-full">
                          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                            <div className="flex flex-col w-[16%] max-md:ml-0 max-md:w-full">
                              <img
                                loading="lazy"
                                srcSet="/assets/images/icon-8.png"
                                className="shrink-0 w-20 aspect-square max-md:mt-10"
                              />
                            </div>
                            <div className="flex flex-col ml-5 w-[84%] max-md:ml-0 max-md:w-full">
                              <div className="flex flex-col grow max-md:mt-10 max-md:max-w-full">
                                <div className="text-xl font-medium leading-7 text-black max-md:max-w-full">
                                  AutoTrader Max
                                </div>
                                <div className="mt-3 text-sm leading-5 text-stone-500 max-md:max-w-full">
                                  An advanced trading bot that executes trades
                                  based on pre-defined strategies and market
                                  conditions.
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex gap-5 justify-between pr-3 mx-8 mt-8 max-w-full w-[503px] max-md:flex-wrap max-md:mr-2.5">
                          <div className="flex flex-col whitespace-nowrap">
                            <div className="text-sm leading-5 text-zinc-500">
                              Growth
                            </div>
                            <div className="mt-1 text-2xl font-medium leading-8 text-black">
                              25%
                            </div>
                          </div>
                          <div className="flex flex-col whitespace-nowrap">
                            <div className="text-sm leading-5 text-zinc-500">
                              Profit
                            </div>
                            <div className="mt-1 text-2xl font-medium leading-8 text-black">
                              $12,000
                            </div>
                          </div>
                          <div className="flex flex-col whitespace-nowrap">
                            <div className="text-sm leading-5 text-zinc-500">
                              MDD
                            </div>
                            <div className="mt-1 text-2xl font-medium leading-8 text-black">
                              10%
                            </div>
                          </div>
                          <div className="flex flex-col">
                            <div className="text-sm leading-5 text-zinc-500">
                              Win Rate
                            </div>
                            <div className="mt-1 text-2xl font-medium leading-8 text-emerald-500">
                              70%
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="max-md:max-w-full">
                  <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                    <div className="flex flex-col w-[67%] max-md:ml-0 max-md:w-full">
                      <div className="flex flex-col grow mt-24 max-md:mt-10 max-md:max-w-full">
                        <div className="text-5xl font-medium text-black leading-[56.16px] max-md:max-w-full max-md:text-4xl">
                          Autobots
                        </div>
                        <div className="mt-2 text-lg leading-7 text-stone-500 max-md:max-w-full">
                          Automate your trading success with our advanced
                          autobots, designed to execute trades with precision
                          and maximize profits 24/7.
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                      <img
                        loading="lazy"
                        srcSet="/assets/images/image-pro.png"
                        className="w-full aspect-[1.33] stroke-[1px] stroke-amber-500 stroke-opacity-60 max-md:mt-2"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[31%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow max-md:mt-2">
                <div className="flex flex-col p-8 rounded-3xl backdrop-blur-[2px] bg-white bg-opacity-70 max-md:px-5">
                  <img
                    loading="lazy"
                    srcSet="/assets/images/icon-9.png"
                    className="self-end max-w-full aspect-[0.94] w-[111px]"
                  />
                  <div className="text-2xl font-medium leading-8 text-black">
                    Indicators
                  </div>
                  <div className="mt-2 text-lg leading-7 text-stone-500">
                    Unlock precise market signals and trend analysis with our
                    trading indicators for optimized trading decisions.
                  </div>
                </div>
                <div className="flex flex-col p-8 mt-2 rounded-3xl backdrop-blur-[2px] bg-white bg-opacity-70 max-md:px-5">
                  <img
                    loading="lazy"
                    srcSet="/assets/images/icon-10.png"
                    className="self-end max-w-full aspect-[1.08] w-[127px]"
                  />
                  <div className="text-2xl font-medium leading-8 text-black">
                    Courses
                  </div>
                  <div className="mt-2 text-lg leading-7 text-stone-500">
                    Master the market with our holistic online courses, offering
                    essential knowledge and skills for traders at all levels.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-36 text-7xl font-semibold text-center text-black leading-[80px] w-[920px] max-md:mt-10 max-md:max-w-full max-md:text-4xl max-md:leading-[49px]">
          Empower your trading with essential resources.
        </div>
        <div className="mt-9 text-lg leading-7 text-center text-black w-[480px] max-md:max-w-full">
          Explore our available resources to enhance your trading strategy,
          access exclusive tools, and stay informed with the latest market
          updates.
        </div>
        <div className="mt-20 max-w-full w-[1276px] max-md:mt-10">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col px-8 pt-16 pb-8 w-full rounded-3xl backdrop-blur-[2px] bg-white bg-opacity-70 max-md:px-5 max-md:mt-2">
                <img
                  loading="lazy"
                  src="/assets/images/svgs/svgs-1.svg"
                  className="ml-14 max-w-full aspect-[2] stroke-[1px] stroke-emerald-500 stroke-opacity-60 w-[121px] max-md:ml-2.5"
                />
                <img
                  loading="lazy"
                  srcSet="/assets/images/icon-11.png"
                  className="mt-9 w-20 aspect-square"
                />
                <div className="mt-8 text-2xl font-medium leading-8 text-black">
                  Copytrade
                </div>
                <div className="mt-2 text-lg leading-7 text-stone-500">
                  Effortlessly replicate the trades of top-performing investors
                  to boost your trading success with our Copytrade feature.
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col pt-16 pb-8 pl-8 w-full rounded-3xl backdrop-blur-[2px] bg-white bg-opacity-70 max-md:mt-2">
                <div className="flex gap-5 justify-between items-start">
                  <img
                    loading="lazy"
                    srcSet="/assets/images/icon-12.png"
                    className="shrink-0 self-end mt-24 w-20 aspect-square max-md:mt-10"
                  />
                  <img
                    loading="lazy"
                    src="/assets/images/image-vecter-2.png"
                    className="self-start w-full aspect-[2] stroke-[1px] stroke-amber-500 stroke-opacity-60"
                  />
                </div>
                <div className="mt-8 text-2xl font-medium leading-8 text-black">
                  Marketplace
                </div>
                <div className="mt-2 text-lg leading-7 text-stone-500">
                  Access a wide range of exclusive trading tools and resources
                  tailored to your needs in our comprehensive Marketplace.
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col px-8 pt-20 pb-8 w-full rounded-3xl backdrop-blur-[2px] bg-white bg-opacity-70 max-md:px-5 max-md:mt-2">
                <div className="flex gap-3 mt-20 max-md:mt-10">
                  <img
                    loading="lazy"
                    srcSet="/assets/images/icon-13.png"
                    className="shrink-0 w-20 h-20 aspect-square"
                  />
                  {/* <img
                    loading="lazy"
                    src="/assets/images/svgs/svg-3.svg"
                    className="grow shrink-0 self-end mt-16 basis-0 stroke-[1px] stroke-orange-500 stroke-opacity-60 w-fit max-md:mt-10"
                  /> */}
                </div>
                <div className="mt-8 text-2xl font-medium leading-8 text-black">
                  News
                </div>
                <div className="mt-2 text-lg leading-7 text-stone-500">
                  Stay informed and ahead of the market with our real-time news
                  updates and in-depth expert analysis.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-36 text-7xl font-semibold text-center text-black leading-[79.92px] max-md:mt-10 max-md:max-w-full max-md:text-4xl">
          Our partner brokers.
        </div>
        <div className="flex gap-5 justify-between items-start mt-20 max-w-full w-[1280px] max-md:flex-wrap max-md:mt-10">
          <div className="flex justify-center items-center p-6 bg-white rounded-3xl shadow-sm max-md:px-5">
            <img
              loading="lazy"
              srcSet="/assets/images/info-1.png"
              className="aspect-[3.85] w-[302px]"
            />
          </div>
          <div className="flex justify-center items-center p-6 mt-5 bg-white rounded-3xl shadow-sm max-md:px-5 max-md:max-w-full">
            <img
              loading="lazy"
              src="/assets/images/svgs/info-2.svg"
              className="aspect-[4.76] w-[381px]"
            />
          </div>
        </div>
        <div className="flex justify-center items-center self-end p-6 mt-12 max-w-full bg-white rounded-3xl shadow-sm w-[336px] max-md:px-5 max-md:mt-10 max-md:mr-2.5">
          <img
            loading="lazy"
            src="/assets/images/svgs/info-3.svg"
            className="w-full aspect-[5.88]"
          />
        </div>
      </div>


    </div>
  );
}

export default Home