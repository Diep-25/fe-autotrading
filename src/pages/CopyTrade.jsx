function CopyTrade() {
  return (
    <div className="flex flex-col items-center px-6 bg-stone-50 max-md:px-5">
      <div className="mt-16 max-w-full w-[924px] max-md:mt-10">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-[19%] max-md:ml-0 max-md:w-full">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/2ae6942728df5c85027220770469ab75e2aa8ec15a5332c2d1e11c854d7d5422?apiKey=3e4bab1690d64b71a08812886842dfab&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/2ae6942728df5c85027220770469ab75e2aa8ec15a5332c2d1e11c854d7d5422?apiKey=3e4bab1690d64b71a08812886842dfab&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/2ae6942728df5c85027220770469ab75e2aa8ec15a5332c2d1e11c854d7d5422?apiKey=3e4bab1690d64b71a08812886842dfab&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/2ae6942728df5c85027220770469ab75e2aa8ec15a5332c2d1e11c854d7d5422?apiKey=3e4bab1690d64b71a08812886842dfab&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/2ae6942728df5c85027220770469ab75e2aa8ec15a5332c2d1e11c854d7d5422?apiKey=3e4bab1690d64b71a08812886842dfab&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/2ae6942728df5c85027220770469ab75e2aa8ec15a5332c2d1e11c854d7d5422?apiKey=3e4bab1690d64b71a08812886842dfab&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/2ae6942728df5c85027220770469ab75e2aa8ec15a5332c2d1e11c854d7d5422?apiKey=3e4bab1690d64b71a08812886842dfab&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/2ae6942728df5c85027220770469ab75e2aa8ec15a5332c2d1e11c854d7d5422?apiKey=3e4bab1690d64b71a08812886842dfab&"
              className="grow shrink-0 max-w-full aspect-[0.69] w-[124px] max-md:mt-10"
            />
          </div>
          <div className="flex flex-col ml-5 w-3/5 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow mt-5 text-black max-md:mt-10 max-md:max-w-full">
              <div className="text-8xl font-semibold text-center leading-[88px] max-md:max-w-full max-md:text-4xl">
                Copytrade
              </div>
              <div className="flex gap-1 self-center p-1 mt-10 text-sm font-medium leading-5 rounded-xl border border-solid bg-neutral-100 border-neutral-200">
                <div className="flex gap-2 justify-center py-2 pr-2 pl-4 rounded-lg shadow-sm">
                  <div>Risk Score (Lowest)</div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/692d7408c92e3f7d2126e8cef9df6da3a14eb9b584403843efebbd51984ccae1?apiKey=3e4bab1690d64b71a08812886842dfab&"
                    className="shrink-0 w-5 aspect-square"
                  />
                </div>
                <div className="flex gap-2 justify-center py-2 pr-2 pl-4 whitespace-nowrap rounded-lg shadow-sm">
                  <div>All-Time</div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/692d7408c92e3f7d2126e8cef9df6da3a14eb9b584403843efebbd51984ccae1?apiKey=3e4bab1690d64b71a08812886842dfab&"
                    className="shrink-0 w-5 aspect-square"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[22%] max-md:ml-0 max-md:w-full">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/140218f125e5f4663c86e7fb6cf7d0bcc9df4e1d6153b8c8850d5ee81b20801b?apiKey=3e4bab1690d64b71a08812886842dfab&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/140218f125e5f4663c86e7fb6cf7d0bcc9df4e1d6153b8c8850d5ee81b20801b?apiKey=3e4bab1690d64b71a08812886842dfab&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/140218f125e5f4663c86e7fb6cf7d0bcc9df4e1d6153b8c8850d5ee81b20801b?apiKey=3e4bab1690d64b71a08812886842dfab&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/140218f125e5f4663c86e7fb6cf7d0bcc9df4e1d6153b8c8850d5ee81b20801b?apiKey=3e4bab1690d64b71a08812886842dfab&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/140218f125e5f4663c86e7fb6cf7d0bcc9df4e1d6153b8c8850d5ee81b20801b?apiKey=3e4bab1690d64b71a08812886842dfab&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/140218f125e5f4663c86e7fb6cf7d0bcc9df4e1d6153b8c8850d5ee81b20801b?apiKey=3e4bab1690d64b71a08812886842dfab&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/140218f125e5f4663c86e7fb6cf7d0bcc9df4e1d6153b8c8850d5ee81b20801b?apiKey=3e4bab1690d64b71a08812886842dfab&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/140218f125e5f4663c86e7fb6cf7d0bcc9df4e1d6153b8c8850d5ee81b20801b?apiKey=3e4bab1690d64b71a08812886842dfab&"
              className="grow shrink-0 w-40 max-w-full aspect-[0.88] max-md:mt-10"
            />
          </div>
        </div>
      </div>
      <div className="mt-16 w-full max-w-[1340px] max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow p-5 mx-auto w-full rounded-3xl shadow-sm backdrop-blur-[2px] bg-white bg-opacity-70 max-md:mt-5">
              <div className="flex gap-5 justify-between px-px w-full">
                <div className="flex gap-4">
                  <div className="shrink-0 w-12 h-12 bg-white rounded-xl border border-solid border-neutral-200" />
                  <div className="flex flex-col">
                    <div className="text-base font-medium leading-6 text-black">
                      Baby Trader
                    </div>
                    <div className="flex gap-0.5 px-px mt-1">
                      <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/b079683a2b29c9abd0f6daf92a1e9bbeed2456223ce6f6e883e150cae2a2787a?apiKey=3e4bab1690d64b71a08812886842dfab&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/b079683a2b29c9abd0f6daf92a1e9bbeed2456223ce6f6e883e150cae2a2787a?apiKey=3e4bab1690d64b71a08812886842dfab&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b079683a2b29c9abd0f6daf92a1e9bbeed2456223ce6f6e883e150cae2a2787a?apiKey=3e4bab1690d64b71a08812886842dfab&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/b079683a2b29c9abd0f6daf92a1e9bbeed2456223ce6f6e883e150cae2a2787a?apiKey=3e4bab1690d64b71a08812886842dfab&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/b079683a2b29c9abd0f6daf92a1e9bbeed2456223ce6f6e883e150cae2a2787a?apiKey=3e4bab1690d64b71a08812886842dfab&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b079683a2b29c9abd0f6daf92a1e9bbeed2456223ce6f6e883e150cae2a2787a?apiKey=3e4bab1690d64b71a08812886842dfab&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/b079683a2b29c9abd0f6daf92a1e9bbeed2456223ce6f6e883e150cae2a2787a?apiKey=3e4bab1690d64b71a08812886842dfab&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/b079683a2b29c9abd0f6daf92a1e9bbeed2456223ce6f6e883e150cae2a2787a?apiKey=3e4bab1690d64b71a08812886842dfab&"
                        className="shrink-0 w-5 border border-solid aspect-square border-neutral-200"
                      />
                      <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/7aa1d989a60f0156f195e6d98fcc14f2595c020f50823dca51e3312b39bef1b7?apiKey=3e4bab1690d64b71a08812886842dfab&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/7aa1d989a60f0156f195e6d98fcc14f2595c020f50823dca51e3312b39bef1b7?apiKey=3e4bab1690d64b71a08812886842dfab&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/7aa1d989a60f0156f195e6d98fcc14f2595c020f50823dca51e3312b39bef1b7?apiKey=3e4bab1690d64b71a08812886842dfab&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/7aa1d989a60f0156f195e6d98fcc14f2595c020f50823dca51e3312b39bef1b7?apiKey=3e4bab1690d64b71a08812886842dfab&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/7aa1d989a60f0156f195e6d98fcc14f2595c020f50823dca51e3312b39bef1b7?apiKey=3e4bab1690d64b71a08812886842dfab&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/7aa1d989a60f0156f195e6d98fcc14f2595c020f50823dca51e3312b39bef1b7?apiKey=3e4bab1690d64b71a08812886842dfab&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/7aa1d989a60f0156f195e6d98fcc14f2595c020f50823dca51e3312b39bef1b7?apiKey=3e4bab1690d64b71a08812886842dfab&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/7aa1d989a60f0156f195e6d98fcc14f2595c020f50823dca51e3312b39bef1b7?apiKey=3e4bab1690d64b71a08812886842dfab&"
                        className="shrink-0 w-5 border border-solid aspect-square border-neutral-200"
                      />
                      <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/ef42053d59d90b0289b1e77adf24aef9ea82b51d6448db66456584d1e376204a?apiKey=3e4bab1690d64b71a08812886842dfab&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/ef42053d59d90b0289b1e77adf24aef9ea82b51d6448db66456584d1e376204a?apiKey=3e4bab1690d64b71a08812886842dfab&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ef42053d59d90b0289b1e77adf24aef9ea82b51d6448db66456584d1e376204a?apiKey=3e4bab1690d64b71a08812886842dfab&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/ef42053d59d90b0289b1e77adf24aef9ea82b51d6448db66456584d1e376204a?apiKey=3e4bab1690d64b71a08812886842dfab&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/ef42053d59d90b0289b1e77adf24aef9ea82b51d6448db66456584d1e376204a?apiKey=3e4bab1690d64b71a08812886842dfab&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ef42053d59d90b0289b1e77adf24aef9ea82b51d6448db66456584d1e376204a?apiKey=3e4bab1690d64b71a08812886842dfab&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/ef42053d59d90b0289b1e77adf24aef9ea82b51d6448db66456584d1e376204a?apiKey=3e4bab1690d64b71a08812886842dfab&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/ef42053d59d90b0289b1e77adf24aef9ea82b51d6448db66456584d1e376204a?apiKey=3e4bab1690d64b71a08812886842dfab&"
                        className="shrink-0 w-5 aspect-square"
                      />
                      <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/11961327e9d2bb4b93878c4fce9cd49c1e70a8cd00dfdfa5870468cc9175b0bb?apiKey=3e4bab1690d64b71a08812886842dfab&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/11961327e9d2bb4b93878c4fce9cd49c1e70a8cd00dfdfa5870468cc9175b0bb?apiKey=3e4bab1690d64b71a08812886842dfab&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/11961327e9d2bb4b93878c4fce9cd49c1e70a8cd00dfdfa5870468cc9175b0bb?apiKey=3e4bab1690d64b71a08812886842dfab&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/11961327e9d2bb4b93878c4fce9cd49c1e70a8cd00dfdfa5870468cc9175b0bb?apiKey=3e4bab1690d64b71a08812886842dfab&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/11961327e9d2bb4b93878c4fce9cd49c1e70a8cd00dfdfa5870468cc9175b0bb?apiKey=3e4bab1690d64b71a08812886842dfab&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/11961327e9d2bb4b93878c4fce9cd49c1e70a8cd00dfdfa5870468cc9175b0bb?apiKey=3e4bab1690d64b71a08812886842dfab&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/11961327e9d2bb4b93878c4fce9cd49c1e70a8cd00dfdfa5870468cc9175b0bb?apiKey=3e4bab1690d64b71a08812886842dfab&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/11961327e9d2bb4b93878c4fce9cd49c1e70a8cd00dfdfa5870468cc9175b0bb?apiKey=3e4bab1690d64b71a08812886842dfab&"
                        className="shrink-0 w-5 aspect-square"
                      />
                    </div>
                  </div>
                </div>
                <div className="px-3 py-1.5 my-auto text-sm leading-5 text-white bg-emerald-500 rounded-[32px]">
                  1 risk
                </div>
              </div>

              <div className="flex gap-3 mt-5 whitespace-nowrap">
                <div className="flex flex-col flex-1">
                  <div className="text-sm leading-5 text-zinc-500">Gain</div>
                  <div className="mt-1 text-base font-medium leading-6 text-emerald-500">
                    28.35%
                  </div>
                </div>
                <div className="flex flex-col flex-1">
                  <div className="text-sm leading-5 text-zinc-500">Copiers</div>
                  <div className="mt-1 text-base font-medium leading-6 text-black">
                    570
                  </div>
                </div>
                <div className="flex flex-col flex-1">
                  <div className="text-sm leading-5 text-zinc-500">
                    Commission
                  </div>
                  <div className="mt-1 text-base font-medium leading-6 text-emerald-500">
                    Free
                  </div>
                </div>
              </div>
              <div className="flex gap-1 justify-between mt-5 text-sm leading-5 whitespace-nowrap text-zinc-500">
                <div>Profit</div>
                <div>Loss</div>
              </div>
              <div className="flex gap-1 justify-between mt-1 text-base font-medium leading-6 text-black whitespace-nowrap">
                <div>$14,180.30</div>
                <div>1,268.22</div>
              </div>
              <div className="flex px-px mt-1 rounded-sm">
                <div className="shrink-0 max-w-full h-2 bg-emerald-500 w-[258px]" />
                <div className="flex-1 shrink-0 h-2 bg-red-500" />
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow p-5 mx-auto w-full rounded-3xl shadow-sm backdrop-blur-[2px] bg-white bg-opacity-70 max-md:mt-5">
              <div className="flex gap-5 justify-between px-px w-full">
                <div className="flex gap-4">
                  <div className="shrink-0 w-12 h-12 bg-white rounded-xl border border-solid border-neutral-200" />
                  <div className="flex flex-col">
                    <div className="text-base font-medium leading-6 text-black">
                      Baby Trader
                    </div>
                    <div className="flex gap-0.5 px-px mt-1">
                      <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/b079683a2b29c9abd0f6daf92a1e9bbeed2456223ce6f6e883e150cae2a2787a?apiKey=3e4bab1690d64b71a08812886842dfab&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/b079683a2b29c9abd0f6daf92a1e9bbeed2456223ce6f6e883e150cae2a2787a?apiKey=3e4bab1690d64b71a08812886842dfab&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b079683a2b29c9abd0f6daf92a1e9bbeed2456223ce6f6e883e150cae2a2787a?apiKey=3e4bab1690d64b71a08812886842dfab&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/b079683a2b29c9abd0f6daf92a1e9bbeed2456223ce6f6e883e150cae2a2787a?apiKey=3e4bab1690d64b71a08812886842dfab&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/b079683a2b29c9abd0f6daf92a1e9bbeed2456223ce6f6e883e150cae2a2787a?apiKey=3e4bab1690d64b71a08812886842dfab&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b079683a2b29c9abd0f6daf92a1e9bbeed2456223ce6f6e883e150cae2a2787a?apiKey=3e4bab1690d64b71a08812886842dfab&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/b079683a2b29c9abd0f6daf92a1e9bbeed2456223ce6f6e883e150cae2a2787a?apiKey=3e4bab1690d64b71a08812886842dfab&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/b079683a2b29c9abd0f6daf92a1e9bbeed2456223ce6f6e883e150cae2a2787a?apiKey=3e4bab1690d64b71a08812886842dfab&"
                        className="shrink-0 w-5 border border-solid aspect-square border-neutral-200"
                      />
                      <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/7aa1d989a60f0156f195e6d98fcc14f2595c020f50823dca51e3312b39bef1b7?apiKey=3e4bab1690d64b71a08812886842dfab&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/7aa1d989a60f0156f195e6d98fcc14f2595c020f50823dca51e3312b39bef1b7?apiKey=3e4bab1690d64b71a08812886842dfab&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/7aa1d989a60f0156f195e6d98fcc14f2595c020f50823dca51e3312b39bef1b7?apiKey=3e4bab1690d64b71a08812886842dfab&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/7aa1d989a60f0156f195e6d98fcc14f2595c020f50823dca51e3312b39bef1b7?apiKey=3e4bab1690d64b71a08812886842dfab&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/7aa1d989a60f0156f195e6d98fcc14f2595c020f50823dca51e3312b39bef1b7?apiKey=3e4bab1690d64b71a08812886842dfab&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/7aa1d989a60f0156f195e6d98fcc14f2595c020f50823dca51e3312b39bef1b7?apiKey=3e4bab1690d64b71a08812886842dfab&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/7aa1d989a60f0156f195e6d98fcc14f2595c020f50823dca51e3312b39bef1b7?apiKey=3e4bab1690d64b71a08812886842dfab&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/7aa1d989a60f0156f195e6d98fcc14f2595c020f50823dca51e3312b39bef1b7?apiKey=3e4bab1690d64b71a08812886842dfab&"
                        className="shrink-0 w-5 border border-solid aspect-square border-neutral-200"
                      />
                      <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/ef42053d59d90b0289b1e77adf24aef9ea82b51d6448db66456584d1e376204a?apiKey=3e4bab1690d64b71a08812886842dfab&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/ef42053d59d90b0289b1e77adf24aef9ea82b51d6448db66456584d1e376204a?apiKey=3e4bab1690d64b71a08812886842dfab&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ef42053d59d90b0289b1e77adf24aef9ea82b51d6448db66456584d1e376204a?apiKey=3e4bab1690d64b71a08812886842dfab&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/ef42053d59d90b0289b1e77adf24aef9ea82b51d6448db66456584d1e376204a?apiKey=3e4bab1690d64b71a08812886842dfab&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/ef42053d59d90b0289b1e77adf24aef9ea82b51d6448db66456584d1e376204a?apiKey=3e4bab1690d64b71a08812886842dfab&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ef42053d59d90b0289b1e77adf24aef9ea82b51d6448db66456584d1e376204a?apiKey=3e4bab1690d64b71a08812886842dfab&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/ef42053d59d90b0289b1e77adf24aef9ea82b51d6448db66456584d1e376204a?apiKey=3e4bab1690d64b71a08812886842dfab&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/ef42053d59d90b0289b1e77adf24aef9ea82b51d6448db66456584d1e376204a?apiKey=3e4bab1690d64b71a08812886842dfab&"
                        className="shrink-0 w-5 aspect-square"
                      />
                      <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/11961327e9d2bb4b93878c4fce9cd49c1e70a8cd00dfdfa5870468cc9175b0bb?apiKey=3e4bab1690d64b71a08812886842dfab&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/11961327e9d2bb4b93878c4fce9cd49c1e70a8cd00dfdfa5870468cc9175b0bb?apiKey=3e4bab1690d64b71a08812886842dfab&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/11961327e9d2bb4b93878c4fce9cd49c1e70a8cd00dfdfa5870468cc9175b0bb?apiKey=3e4bab1690d64b71a08812886842dfab&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/11961327e9d2bb4b93878c4fce9cd49c1e70a8cd00dfdfa5870468cc9175b0bb?apiKey=3e4bab1690d64b71a08812886842dfab&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/11961327e9d2bb4b93878c4fce9cd49c1e70a8cd00dfdfa5870468cc9175b0bb?apiKey=3e4bab1690d64b71a08812886842dfab&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/11961327e9d2bb4b93878c4fce9cd49c1e70a8cd00dfdfa5870468cc9175b0bb?apiKey=3e4bab1690d64b71a08812886842dfab&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/11961327e9d2bb4b93878c4fce9cd49c1e70a8cd00dfdfa5870468cc9175b0bb?apiKey=3e4bab1690d64b71a08812886842dfab&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/11961327e9d2bb4b93878c4fce9cd49c1e70a8cd00dfdfa5870468cc9175b0bb?apiKey=3e4bab1690d64b71a08812886842dfab&"
                        className="shrink-0 w-5 aspect-square"
                      />
                    </div>
                  </div>
                </div>
                <div className="px-3 py-1.5 my-auto text-sm leading-5 text-white bg-emerald-500 rounded-[32px]">
                  1 risk
                </div>
              </div>

              <div className="flex gap-3 mt-5 whitespace-nowrap">
                <div className="flex flex-col flex-1">
                  <div className="text-sm leading-5 text-zinc-500">Gain</div>
                  <div className="mt-1 text-base font-medium leading-6 text-emerald-500">
                    28.35%
                  </div>
                </div>
                <div className="flex flex-col flex-1">
                  <div className="text-sm leading-5 text-zinc-500">Copiers</div>
                  <div className="mt-1 text-base font-medium leading-6 text-black">
                    570
                  </div>
                </div>
                <div className="flex flex-col flex-1">
                  <div className="text-sm leading-5 text-zinc-500">
                    Commission
                  </div>
                  <div className="mt-1 text-base font-medium leading-6 text-emerald-500">
                    Free
                  </div>
                </div>
              </div>
              <div className="flex gap-1 justify-between mt-5 text-sm leading-5 whitespace-nowrap text-zinc-500">
                <div>Profit</div>
                <div>Loss</div>
              </div>
              <div className="flex gap-1 justify-between mt-1 text-base font-medium leading-6 text-black whitespace-nowrap">
                <div>$14,180.30</div>
                <div>1,268.22</div>
              </div>
              <div className="flex px-px mt-1 rounded-sm">
                <div className="shrink-0 h-2 bg-emerald-500 w-[140px]" />
                <div className="flex-1 shrink-0 h-2 bg-red-500" />
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow p-5 mx-auto w-full rounded-3xl shadow-sm backdrop-blur-[2px] bg-white bg-opacity-70 max-md:mt-5">
              <div className="flex gap-5 justify-between px-px w-full">
                <div className="flex gap-4">
                  <div className="shrink-0 w-12 h-12 bg-white rounded-xl border border-solid border-neutral-200" />
                  <div className="flex flex-col">
                    <div className="text-base font-medium leading-6 text-black">
                      Baby Trader
                    </div>
                    <div className="flex gap-0.5 px-px mt-1">
                      <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/b079683a2b29c9abd0f6daf92a1e9bbeed2456223ce6f6e883e150cae2a2787a?apiKey=3e4bab1690d64b71a08812886842dfab&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/b079683a2b29c9abd0f6daf92a1e9bbeed2456223ce6f6e883e150cae2a2787a?apiKey=3e4bab1690d64b71a08812886842dfab&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b079683a2b29c9abd0f6daf92a1e9bbeed2456223ce6f6e883e150cae2a2787a?apiKey=3e4bab1690d64b71a08812886842dfab&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/b079683a2b29c9abd0f6daf92a1e9bbeed2456223ce6f6e883e150cae2a2787a?apiKey=3e4bab1690d64b71a08812886842dfab&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/b079683a2b29c9abd0f6daf92a1e9bbeed2456223ce6f6e883e150cae2a2787a?apiKey=3e4bab1690d64b71a08812886842dfab&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b079683a2b29c9abd0f6daf92a1e9bbeed2456223ce6f6e883e150cae2a2787a?apiKey=3e4bab1690d64b71a08812886842dfab&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/b079683a2b29c9abd0f6daf92a1e9bbeed2456223ce6f6e883e150cae2a2787a?apiKey=3e4bab1690d64b71a08812886842dfab&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/b079683a2b29c9abd0f6daf92a1e9bbeed2456223ce6f6e883e150cae2a2787a?apiKey=3e4bab1690d64b71a08812886842dfab&"
                        className="shrink-0 w-5 border border-solid aspect-square border-neutral-200"
                      />
                      <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/7aa1d989a60f0156f195e6d98fcc14f2595c020f50823dca51e3312b39bef1b7?apiKey=3e4bab1690d64b71a08812886842dfab&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/7aa1d989a60f0156f195e6d98fcc14f2595c020f50823dca51e3312b39bef1b7?apiKey=3e4bab1690d64b71a08812886842dfab&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/7aa1d989a60f0156f195e6d98fcc14f2595c020f50823dca51e3312b39bef1b7?apiKey=3e4bab1690d64b71a08812886842dfab&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/7aa1d989a60f0156f195e6d98fcc14f2595c020f50823dca51e3312b39bef1b7?apiKey=3e4bab1690d64b71a08812886842dfab&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/7aa1d989a60f0156f195e6d98fcc14f2595c020f50823dca51e3312b39bef1b7?apiKey=3e4bab1690d64b71a08812886842dfab&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/7aa1d989a60f0156f195e6d98fcc14f2595c020f50823dca51e3312b39bef1b7?apiKey=3e4bab1690d64b71a08812886842dfab&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/7aa1d989a60f0156f195e6d98fcc14f2595c020f50823dca51e3312b39bef1b7?apiKey=3e4bab1690d64b71a08812886842dfab&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/7aa1d989a60f0156f195e6d98fcc14f2595c020f50823dca51e3312b39bef1b7?apiKey=3e4bab1690d64b71a08812886842dfab&"
                        className="shrink-0 w-5 border border-solid aspect-square border-neutral-200"
                      />
                      <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/ef42053d59d90b0289b1e77adf24aef9ea82b51d6448db66456584d1e376204a?apiKey=3e4bab1690d64b71a08812886842dfab&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/ef42053d59d90b0289b1e77adf24aef9ea82b51d6448db66456584d1e376204a?apiKey=3e4bab1690d64b71a08812886842dfab&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ef42053d59d90b0289b1e77adf24aef9ea82b51d6448db66456584d1e376204a?apiKey=3e4bab1690d64b71a08812886842dfab&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/ef42053d59d90b0289b1e77adf24aef9ea82b51d6448db66456584d1e376204a?apiKey=3e4bab1690d64b71a08812886842dfab&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/ef42053d59d90b0289b1e77adf24aef9ea82b51d6448db66456584d1e376204a?apiKey=3e4bab1690d64b71a08812886842dfab&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ef42053d59d90b0289b1e77adf24aef9ea82b51d6448db66456584d1e376204a?apiKey=3e4bab1690d64b71a08812886842dfab&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/ef42053d59d90b0289b1e77adf24aef9ea82b51d6448db66456584d1e376204a?apiKey=3e4bab1690d64b71a08812886842dfab&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/ef42053d59d90b0289b1e77adf24aef9ea82b51d6448db66456584d1e376204a?apiKey=3e4bab1690d64b71a08812886842dfab&"
                        className="shrink-0 w-5 aspect-square"
                      />
                      <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/11961327e9d2bb4b93878c4fce9cd49c1e70a8cd00dfdfa5870468cc9175b0bb?apiKey=3e4bab1690d64b71a08812886842dfab&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/11961327e9d2bb4b93878c4fce9cd49c1e70a8cd00dfdfa5870468cc9175b0bb?apiKey=3e4bab1690d64b71a08812886842dfab&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/11961327e9d2bb4b93878c4fce9cd49c1e70a8cd00dfdfa5870468cc9175b0bb?apiKey=3e4bab1690d64b71a08812886842dfab&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/11961327e9d2bb4b93878c4fce9cd49c1e70a8cd00dfdfa5870468cc9175b0bb?apiKey=3e4bab1690d64b71a08812886842dfab&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/11961327e9d2bb4b93878c4fce9cd49c1e70a8cd00dfdfa5870468cc9175b0bb?apiKey=3e4bab1690d64b71a08812886842dfab&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/11961327e9d2bb4b93878c4fce9cd49c1e70a8cd00dfdfa5870468cc9175b0bb?apiKey=3e4bab1690d64b71a08812886842dfab&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/11961327e9d2bb4b93878c4fce9cd49c1e70a8cd00dfdfa5870468cc9175b0bb?apiKey=3e4bab1690d64b71a08812886842dfab&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/11961327e9d2bb4b93878c4fce9cd49c1e70a8cd00dfdfa5870468cc9175b0bb?apiKey=3e4bab1690d64b71a08812886842dfab&"
                        className="shrink-0 w-5 aspect-square"
                      />
                    </div>
                  </div>
                </div>
                <div className="px-3 py-1.5 my-auto text-sm leading-5 text-white bg-emerald-500 rounded-[32px]">
                  1 risk
                </div>
              </div>

              <div className="flex gap-3 mt-5 whitespace-nowrap">
                <div className="flex flex-col flex-1">
                  <div className="text-sm leading-5 text-zinc-500">Gain</div>
                  <div className="mt-1 text-base font-medium leading-6 text-emerald-500">
                    28.35%
                  </div>
                </div>
                <div className="flex flex-col flex-1">
                  <div className="text-sm leading-5 text-zinc-500">Copiers</div>
                  <div className="mt-1 text-base font-medium leading-6 text-black">
                    570
                  </div>
                </div>
                <div className="flex flex-col flex-1">
                  <div className="text-sm leading-5 text-zinc-500">
                    Commission
                  </div>
                  <div className="mt-1 text-base font-medium leading-6 text-emerald-500">
                    Free
                  </div>
                </div>
              </div>
              <div className="flex gap-1 justify-between mt-5 text-sm leading-5 whitespace-nowrap text-zinc-500">
                <div>Profit</div>
                <div>Loss</div>
              </div>
              <div className="flex gap-1 justify-between mt-1 text-base font-medium leading-6 text-black whitespace-nowrap">
                <div>$14,180.30</div>
                <div>1,268.22</div>
              </div>
              <div className="flex px-px mt-1 rounded-sm">
                <div className="shrink-0 w-40 h-2 bg-emerald-500" />
                <div className="flex-1 shrink-0 h-2 bg-red-500" />
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow p-5 mx-auto w-full rounded-3xl shadow-sm backdrop-blur-[2px] bg-white bg-opacity-70 max-md:mt-5">
              <div className="flex gap-5 justify-between px-px w-full">
                <div className="flex gap-4">
                  <div className="shrink-0 w-12 h-12 bg-white rounded-xl border border-solid border-neutral-200" />
                  <div className="flex flex-col">
                    <div className="text-base font-medium leading-6 text-black">
                      Baby Trader
                    </div>
                    <div className="flex gap-0.5 px-px mt-1">
                      <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/b079683a2b29c9abd0f6daf92a1e9bbeed2456223ce6f6e883e150cae2a2787a?apiKey=3e4bab1690d64b71a08812886842dfab&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/b079683a2b29c9abd0f6daf92a1e9bbeed2456223ce6f6e883e150cae2a2787a?apiKey=3e4bab1690d64b71a08812886842dfab&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b079683a2b29c9abd0f6daf92a1e9bbeed2456223ce6f6e883e150cae2a2787a?apiKey=3e4bab1690d64b71a08812886842dfab&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/b079683a2b29c9abd0f6daf92a1e9bbeed2456223ce6f6e883e150cae2a2787a?apiKey=3e4bab1690d64b71a08812886842dfab&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/b079683a2b29c9abd0f6daf92a1e9bbeed2456223ce6f6e883e150cae2a2787a?apiKey=3e4bab1690d64b71a08812886842dfab&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b079683a2b29c9abd0f6daf92a1e9bbeed2456223ce6f6e883e150cae2a2787a?apiKey=3e4bab1690d64b71a08812886842dfab&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/b079683a2b29c9abd0f6daf92a1e9bbeed2456223ce6f6e883e150cae2a2787a?apiKey=3e4bab1690d64b71a08812886842dfab&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/b079683a2b29c9abd0f6daf92a1e9bbeed2456223ce6f6e883e150cae2a2787a?apiKey=3e4bab1690d64b71a08812886842dfab&"
                        className="shrink-0 w-5 border border-solid aspect-square border-neutral-200"
                      />
                      <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/7aa1d989a60f0156f195e6d98fcc14f2595c020f50823dca51e3312b39bef1b7?apiKey=3e4bab1690d64b71a08812886842dfab&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/7aa1d989a60f0156f195e6d98fcc14f2595c020f50823dca51e3312b39bef1b7?apiKey=3e4bab1690d64b71a08812886842dfab&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/7aa1d989a60f0156f195e6d98fcc14f2595c020f50823dca51e3312b39bef1b7?apiKey=3e4bab1690d64b71a08812886842dfab&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/7aa1d989a60f0156f195e6d98fcc14f2595c020f50823dca51e3312b39bef1b7?apiKey=3e4bab1690d64b71a08812886842dfab&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/7aa1d989a60f0156f195e6d98fcc14f2595c020f50823dca51e3312b39bef1b7?apiKey=3e4bab1690d64b71a08812886842dfab&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/7aa1d989a60f0156f195e6d98fcc14f2595c020f50823dca51e3312b39bef1b7?apiKey=3e4bab1690d64b71a08812886842dfab&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/7aa1d989a60f0156f195e6d98fcc14f2595c020f50823dca51e3312b39bef1b7?apiKey=3e4bab1690d64b71a08812886842dfab&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/7aa1d989a60f0156f195e6d98fcc14f2595c020f50823dca51e3312b39bef1b7?apiKey=3e4bab1690d64b71a08812886842dfab&"
                        className="shrink-0 w-5 border border-solid aspect-square border-neutral-200"
                      />
                      <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/ef42053d59d90b0289b1e77adf24aef9ea82b51d6448db66456584d1e376204a?apiKey=3e4bab1690d64b71a08812886842dfab&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/ef42053d59d90b0289b1e77adf24aef9ea82b51d6448db66456584d1e376204a?apiKey=3e4bab1690d64b71a08812886842dfab&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ef42053d59d90b0289b1e77adf24aef9ea82b51d6448db66456584d1e376204a?apiKey=3e4bab1690d64b71a08812886842dfab&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/ef42053d59d90b0289b1e77adf24aef9ea82b51d6448db66456584d1e376204a?apiKey=3e4bab1690d64b71a08812886842dfab&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/ef42053d59d90b0289b1e77adf24aef9ea82b51d6448db66456584d1e376204a?apiKey=3e4bab1690d64b71a08812886842dfab&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ef42053d59d90b0289b1e77adf24aef9ea82b51d6448db66456584d1e376204a?apiKey=3e4bab1690d64b71a08812886842dfab&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/ef42053d59d90b0289b1e77adf24aef9ea82b51d6448db66456584d1e376204a?apiKey=3e4bab1690d64b71a08812886842dfab&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/ef42053d59d90b0289b1e77adf24aef9ea82b51d6448db66456584d1e376204a?apiKey=3e4bab1690d64b71a08812886842dfab&"
                        className="shrink-0 w-5 aspect-square"
                      />
                      <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/11961327e9d2bb4b93878c4fce9cd49c1e70a8cd00dfdfa5870468cc9175b0bb?apiKey=3e4bab1690d64b71a08812886842dfab&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/11961327e9d2bb4b93878c4fce9cd49c1e70a8cd00dfdfa5870468cc9175b0bb?apiKey=3e4bab1690d64b71a08812886842dfab&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/11961327e9d2bb4b93878c4fce9cd49c1e70a8cd00dfdfa5870468cc9175b0bb?apiKey=3e4bab1690d64b71a08812886842dfab&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/11961327e9d2bb4b93878c4fce9cd49c1e70a8cd00dfdfa5870468cc9175b0bb?apiKey=3e4bab1690d64b71a08812886842dfab&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/11961327e9d2bb4b93878c4fce9cd49c1e70a8cd00dfdfa5870468cc9175b0bb?apiKey=3e4bab1690d64b71a08812886842dfab&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/11961327e9d2bb4b93878c4fce9cd49c1e70a8cd00dfdfa5870468cc9175b0bb?apiKey=3e4bab1690d64b71a08812886842dfab&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/11961327e9d2bb4b93878c4fce9cd49c1e70a8cd00dfdfa5870468cc9175b0bb?apiKey=3e4bab1690d64b71a08812886842dfab&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/11961327e9d2bb4b93878c4fce9cd49c1e70a8cd00dfdfa5870468cc9175b0bb?apiKey=3e4bab1690d64b71a08812886842dfab&"
                        className="shrink-0 w-5 aspect-square"
                      />
                    </div>
                  </div>
                </div>
                <div className="px-3 py-1.5 my-auto text-sm leading-5 text-white bg-emerald-500 rounded-[32px]">
                  1 risk
                </div>
              </div>

              <div className="flex gap-3 mt-5 whitespace-nowrap">
                <div className="flex flex-col flex-1">
                  <div className="text-sm leading-5 text-zinc-500">Gain</div>
                  <div className="mt-1 text-base font-medium leading-6 text-emerald-500">
                    28.35%
                  </div>
                </div>
                <div className="flex flex-col flex-1">
                  <div className="text-sm leading-5 text-zinc-500">Copiers</div>
                  <div className="mt-1 text-base font-medium leading-6 text-black">
                    570
                  </div>
                </div>
                <div className="flex flex-col flex-1">
                  <div className="text-sm leading-5 text-zinc-500">
                    Commission
                  </div>
                  <div className="mt-1 text-base font-medium leading-6 text-emerald-500">
                    Free
                  </div>
                </div>
              </div>
              <div className="flex gap-1 justify-between mt-5 text-sm leading-5 whitespace-nowrap text-zinc-500">
                <div>Profit</div>
                <div>Loss</div>
              </div>
              <div className="flex gap-1 justify-between mt-1 text-base font-medium leading-6 text-black whitespace-nowrap">
                <div>$14,180.30</div>
                <div>1,268.22</div>
              </div>
              <div className="flex px-px mt-1 rounded-sm">
                <div className="shrink-0 h-2 bg-emerald-500 w-[200px]" />
                <div className="flex-1 shrink-0 h-2 bg-red-500" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5 w-full max-w-[1340px] max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow p-5 mx-auto w-full rounded-3xl shadow-sm backdrop-blur-[2px] bg-white bg-opacity-70 max-md:mt-5">
              <div className="flex gap-5 justify-between px-px w-full">
                <div className="flex gap-4">
                  <div className="shrink-0 w-12 h-12 bg-white rounded-xl border border-solid border-neutral-200" />
                  <div className="flex flex-col">
                    <div className="text-base font-medium leading-6 text-black">
                      Baby Trader
                    </div>
                    <div className="flex gap-0.5 px-px mt-1">
                      <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/b079683a2b29c9abd0f6daf92a1e9bbeed2456223ce6f6e883e150cae2a2787a?apiKey=3e4bab1690d64b71a08812886842dfab&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/b079683a2b29c9abd0f6daf92a1e9bbeed2456223ce6f6e883e150cae2a2787a?apiKey=3e4bab1690d64b71a08812886842dfab&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b079683a2b29c9abd0f6daf92a1e9bbeed2456223ce6f6e883e150cae2a2787a?apiKey=3e4bab1690d64b71a08812886842dfab&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/b079683a2b29c9abd0f6daf92a1e9bbeed2456223ce6f6e883e150cae2a2787a?apiKey=3e4bab1690d64b71a08812886842dfab&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/b079683a2b29c9abd0f6daf92a1e9bbeed2456223ce6f6e883e150cae2a2787a?apiKey=3e4bab1690d64b71a08812886842dfab&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b079683a2b29c9abd0f6daf92a1e9bbeed2456223ce6f6e883e150cae2a2787a?apiKey=3e4bab1690d64b71a08812886842dfab&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/b079683a2b29c9abd0f6daf92a1e9bbeed2456223ce6f6e883e150cae2a2787a?apiKey=3e4bab1690d64b71a08812886842dfab&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/b079683a2b29c9abd0f6daf92a1e9bbeed2456223ce6f6e883e150cae2a2787a?apiKey=3e4bab1690d64b71a08812886842dfab&"
                        className="shrink-0 w-5 border border-solid aspect-square border-neutral-200"
                      />
                      <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/7aa1d989a60f0156f195e6d98fcc14f2595c020f50823dca51e3312b39bef1b7?apiKey=3e4bab1690d64b71a08812886842dfab&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/7aa1d989a60f0156f195e6d98fcc14f2595c020f50823dca51e3312b39bef1b7?apiKey=3e4bab1690d64b71a08812886842dfab&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/7aa1d989a60f0156f195e6d98fcc14f2595c020f50823dca51e3312b39bef1b7?apiKey=3e4bab1690d64b71a08812886842dfab&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/7aa1d989a60f0156f195e6d98fcc14f2595c020f50823dca51e3312b39bef1b7?apiKey=3e4bab1690d64b71a08812886842dfab&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/7aa1d989a60f0156f195e6d98fcc14f2595c020f50823dca51e3312b39bef1b7?apiKey=3e4bab1690d64b71a08812886842dfab&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/7aa1d989a60f0156f195e6d98fcc14f2595c020f50823dca51e3312b39bef1b7?apiKey=3e4bab1690d64b71a08812886842dfab&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/7aa1d989a60f0156f195e6d98fcc14f2595c020f50823dca51e3312b39bef1b7?apiKey=3e4bab1690d64b71a08812886842dfab&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/7aa1d989a60f0156f195e6d98fcc14f2595c020f50823dca51e3312b39bef1b7?apiKey=3e4bab1690d64b71a08812886842dfab&"
                        className="shrink-0 w-5 border border-solid aspect-square border-neutral-200"
                      />
                      <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/ef42053d59d90b0289b1e77adf24aef9ea82b51d6448db66456584d1e376204a?apiKey=3e4bab1690d64b71a08812886842dfab&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/ef42053d59d90b0289b1e77adf24aef9ea82b51d6448db66456584d1e376204a?apiKey=3e4bab1690d64b71a08812886842dfab&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ef42053d59d90b0289b1e77adf24aef9ea82b51d6448db66456584d1e376204a?apiKey=3e4bab1690d64b71a08812886842dfab&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/ef42053d59d90b0289b1e77adf24aef9ea82b51d6448db66456584d1e376204a?apiKey=3e4bab1690d64b71a08812886842dfab&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/ef42053d59d90b0289b1e77adf24aef9ea82b51d6448db66456584d1e376204a?apiKey=3e4bab1690d64b71a08812886842dfab&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ef42053d59d90b0289b1e77adf24aef9ea82b51d6448db66456584d1e376204a?apiKey=3e4bab1690d64b71a08812886842dfab&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/ef42053d59d90b0289b1e77adf24aef9ea82b51d6448db66456584d1e376204a?apiKey=3e4bab1690d64b71a08812886842dfab&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/ef42053d59d90b0289b1e77adf24aef9ea82b51d6448db66456584d1e376204a?apiKey=3e4bab1690d64b71a08812886842dfab&"
                        className="shrink-0 w-5 aspect-square"
                      />
                      <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/11961327e9d2bb4b93878c4fce9cd49c1e70a8cd00dfdfa5870468cc9175b0bb?apiKey=3e4bab1690d64b71a08812886842dfab&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/11961327e9d2bb4b93878c4fce9cd49c1e70a8cd00dfdfa5870468cc9175b0bb?apiKey=3e4bab1690d64b71a08812886842dfab&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/11961327e9d2bb4b93878c4fce9cd49c1e70a8cd00dfdfa5870468cc9175b0bb?apiKey=3e4bab1690d64b71a08812886842dfab&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/11961327e9d2bb4b93878c4fce9cd49c1e70a8cd00dfdfa5870468cc9175b0bb?apiKey=3e4bab1690d64b71a08812886842dfab&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/11961327e9d2bb4b93878c4fce9cd49c1e70a8cd00dfdfa5870468cc9175b0bb?apiKey=3e4bab1690d64b71a08812886842dfab&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/11961327e9d2bb4b93878c4fce9cd49c1e70a8cd00dfdfa5870468cc9175b0bb?apiKey=3e4bab1690d64b71a08812886842dfab&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/11961327e9d2bb4b93878c4fce9cd49c1e70a8cd00dfdfa5870468cc9175b0bb?apiKey=3e4bab1690d64b71a08812886842dfab&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/11961327e9d2bb4b93878c4fce9cd49c1e70a8cd00dfdfa5870468cc9175b0bb?apiKey=3e4bab1690d64b71a08812886842dfab&"
                        className="shrink-0 w-5 aspect-square"
                      />
                    </div>
                  </div>
                </div>
                <div className="px-3 py-1.5 my-auto text-sm leading-5 text-white bg-emerald-500 rounded-[32px]">
                  2 risk
                </div>
              </div>

              <div className="flex gap-3 mt-5 whitespace-nowrap">
                <div className="flex flex-col flex-1">
                  <div className="text-sm leading-5 text-zinc-500">Gain</div>
                  <div className="mt-1 text-base font-medium leading-6 text-emerald-500">
                    28.35%
                  </div>
                </div>
                <div className="flex flex-col flex-1">
                  <div className="text-sm leading-5 text-zinc-500">Copiers</div>
                  <div className="mt-1 text-base font-medium leading-6 text-black">
                    570
                  </div>
                </div>
                <div className="flex flex-col flex-1">
                  <div className="text-sm leading-5 text-zinc-500">
                    Commission
                  </div>
                  <div className="mt-1 text-base font-medium leading-6 text-emerald-500">
                    Free
                  </div>
                </div>
              </div>
              <div className="flex gap-1 justify-between mt-5 text-sm leading-5 whitespace-nowrap text-zinc-500">
                <div>Profit</div>
                <div>Loss</div>
              </div>
              <div className="flex gap-1 justify-between mt-1 text-base font-medium leading-6 text-black whitespace-nowrap">
                <div>$14,180.30</div>
                <div>1,268.22</div>
              </div>
              <div className="flex px-px mt-1 rounded-sm">
                <div className="shrink-0 h-2 bg-emerald-500 w-[220px]" />
                <div className="flex-1 shrink-0 h-2 bg-red-500" />
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow p-5 mx-auto w-full rounded-3xl shadow-sm backdrop-blur-[2px] bg-white bg-opacity-70 max-md:mt-5">
              <div className="flex gap-5 justify-between px-px w-full">
                <div className="flex gap-4">
                  <div className="shrink-0 w-12 h-12 bg-white rounded-xl border border-solid border-neutral-200" />
                  <div className="flex flex-col">
                    <div className="text-base font-medium leading-6 text-black">
                      Baby Trader
                    </div>
                    <div className="flex gap-0.5 px-px mt-1">
                      <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/b079683a2b29c9abd0f6daf92a1e9bbeed2456223ce6f6e883e150cae2a2787a?apiKey=3e4bab1690d64b71a08812886842dfab&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/b079683a2b29c9abd0f6daf92a1e9bbeed2456223ce6f6e883e150cae2a2787a?apiKey=3e4bab1690d64b71a08812886842dfab&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b079683a2b29c9abd0f6daf92a1e9bbeed2456223ce6f6e883e150cae2a2787a?apiKey=3e4bab1690d64b71a08812886842dfab&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/b079683a2b29c9abd0f6daf92a1e9bbeed2456223ce6f6e883e150cae2a2787a?apiKey=3e4bab1690d64b71a08812886842dfab&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/b079683a2b29c9abd0f6daf92a1e9bbeed2456223ce6f6e883e150cae2a2787a?apiKey=3e4bab1690d64b71a08812886842dfab&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b079683a2b29c9abd0f6daf92a1e9bbeed2456223ce6f6e883e150cae2a2787a?apiKey=3e4bab1690d64b71a08812886842dfab&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/b079683a2b29c9abd0f6daf92a1e9bbeed2456223ce6f6e883e150cae2a2787a?apiKey=3e4bab1690d64b71a08812886842dfab&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/b079683a2b29c9abd0f6daf92a1e9bbeed2456223ce6f6e883e150cae2a2787a?apiKey=3e4bab1690d64b71a08812886842dfab&"
                        className="shrink-0 w-5 border border-solid aspect-square border-neutral-200"
                      />
                      <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/7aa1d989a60f0156f195e6d98fcc14f2595c020f50823dca51e3312b39bef1b7?apiKey=3e4bab1690d64b71a08812886842dfab&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/7aa1d989a60f0156f195e6d98fcc14f2595c020f50823dca51e3312b39bef1b7?apiKey=3e4bab1690d64b71a08812886842dfab&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/7aa1d989a60f0156f195e6d98fcc14f2595c020f50823dca51e3312b39bef1b7?apiKey=3e4bab1690d64b71a08812886842dfab&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/7aa1d989a60f0156f195e6d98fcc14f2595c020f50823dca51e3312b39bef1b7?apiKey=3e4bab1690d64b71a08812886842dfab&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/7aa1d989a60f0156f195e6d98fcc14f2595c020f50823dca51e3312b39bef1b7?apiKey=3e4bab1690d64b71a08812886842dfab&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/7aa1d989a60f0156f195e6d98fcc14f2595c020f50823dca51e3312b39bef1b7?apiKey=3e4bab1690d64b71a08812886842dfab&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/7aa1d989a60f0156f195e6d98fcc14f2595c020f50823dca51e3312b39bef1b7?apiKey=3e4bab1690d64b71a08812886842dfab&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/7aa1d989a60f0156f195e6d98fcc14f2595c020f50823dca51e3312b39bef1b7?apiKey=3e4bab1690d64b71a08812886842dfab&"
                        className="shrink-0 w-5 border border-solid aspect-square border-neutral-200"
                      />
                      <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/ef42053d59d90b0289b1e77adf24aef9ea82b51d6448db66456584d1e376204a?apiKey=3e4bab1690d64b71a08812886842dfab&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/ef42053d59d90b0289b1e77adf24aef9ea82b51d6448db66456584d1e376204a?apiKey=3e4bab1690d64b71a08812886842dfab&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ef42053d59d90b0289b1e77adf24aef9ea82b51d6448db66456584d1e376204a?apiKey=3e4bab1690d64b71a08812886842dfab&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/ef42053d59d90b0289b1e77adf24aef9ea82b51d6448db66456584d1e376204a?apiKey=3e4bab1690d64b71a08812886842dfab&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/ef42053d59d90b0289b1e77adf24aef9ea82b51d6448db66456584d1e376204a?apiKey=3e4bab1690d64b71a08812886842dfab&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ef42053d59d90b0289b1e77adf24aef9ea82b51d6448db66456584d1e376204a?apiKey=3e4bab1690d64b71a08812886842dfab&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/ef42053d59d90b0289b1e77adf24aef9ea82b51d6448db66456584d1e376204a?apiKey=3e4bab1690d64b71a08812886842dfab&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/ef42053d59d90b0289b1e77adf24aef9ea82b51d6448db66456584d1e376204a?apiKey=3e4bab1690d64b71a08812886842dfab&"
                        className="shrink-0 w-5 aspect-square"
                      />
                      <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/11961327e9d2bb4b93878c4fce9cd49c1e70a8cd00dfdfa5870468cc9175b0bb?apiKey=3e4bab1690d64b71a08812886842dfab&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/11961327e9d2bb4b93878c4fce9cd49c1e70a8cd00dfdfa5870468cc9175b0bb?apiKey=3e4bab1690d64b71a08812886842dfab&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/11961327e9d2bb4b93878c4fce9cd49c1e70a8cd00dfdfa5870468cc9175b0bb?apiKey=3e4bab1690d64b71a08812886842dfab&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/11961327e9d2bb4b93878c4fce9cd49c1e70a8cd00dfdfa5870468cc9175b0bb?apiKey=3e4bab1690d64b71a08812886842dfab&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/11961327e9d2bb4b93878c4fce9cd49c1e70a8cd00dfdfa5870468cc9175b0bb?apiKey=3e4bab1690d64b71a08812886842dfab&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/11961327e9d2bb4b93878c4fce9cd49c1e70a8cd00dfdfa5870468cc9175b0bb?apiKey=3e4bab1690d64b71a08812886842dfab&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/11961327e9d2bb4b93878c4fce9cd49c1e70a8cd00dfdfa5870468cc9175b0bb?apiKey=3e4bab1690d64b71a08812886842dfab&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/11961327e9d2bb4b93878c4fce9cd49c1e70a8cd00dfdfa5870468cc9175b0bb?apiKey=3e4bab1690d64b71a08812886842dfab&"
                        className="shrink-0 w-5 aspect-square"
                      />
                    </div>
                  </div>
                </div>
                <div className="px-3 py-1.5 my-auto text-sm leading-5 text-white bg-emerald-500 rounded-[32px]">
                  2 risk
                </div>
              </div>

              <div className="flex gap-3 mt-5 whitespace-nowrap">
                <div className="flex flex-col flex-1">
                  <div className="text-sm leading-5 text-zinc-500">Gain</div>
                  <div className="mt-1 text-base font-medium leading-6 text-emerald-500">
                    28.35%
                  </div>
                </div>
                <div className="flex flex-col flex-1">
                  <div className="text-sm leading-5 text-zinc-500">Copiers</div>
                  <div className="mt-1 text-base font-medium leading-6 text-black">
                    570
                  </div>
                </div>
                <div className="flex flex-col flex-1">
                  <div className="text-sm leading-5 text-zinc-500">
                    Commission
                  </div>
                  <div className="mt-1 text-base font-medium leading-6 text-emerald-500">
                    Free
                  </div>
                </div>
              </div>
              <div className="flex gap-1 justify-between mt-5 text-sm leading-5 whitespace-nowrap text-zinc-500">
                <div>Profit</div>
                <div>Loss</div>
              </div>
              <div className="flex gap-1 justify-between mt-1 text-base font-medium leading-6 text-black whitespace-nowrap">
                <div>$14,180.30</div>
                <div>1,268.22</div>
              </div>
              <div className="flex px-px mt-1 rounded-sm">
                <div className="shrink-0 w-60 h-2 bg-emerald-500" />
                <div className="flex-1 shrink-0 h-2 bg-red-500" />
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow p-5 mx-auto w-full rounded-3xl shadow-sm backdrop-blur-[2px] bg-white bg-opacity-70 max-md:mt-5">
              <div className="flex gap-5 justify-between px-px w-full">
                <div className="flex gap-4">
                  <div className="shrink-0 w-12 h-12 bg-white rounded-xl border border-solid border-neutral-200" />
                  <div className="flex flex-col">
                    <div className="text-base font-medium leading-6 text-black">
                      Baby Trader
                    </div>
                    <div className="flex gap-0.5 px-px mt-1">
                      <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/b079683a2b29c9abd0f6daf92a1e9bbeed2456223ce6f6e883e150cae2a2787a?apiKey=3e4bab1690d64b71a08812886842dfab&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/b079683a2b29c9abd0f6daf92a1e9bbeed2456223ce6f6e883e150cae2a2787a?apiKey=3e4bab1690d64b71a08812886842dfab&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b079683a2b29c9abd0f6daf92a1e9bbeed2456223ce6f6e883e150cae2a2787a?apiKey=3e4bab1690d64b71a08812886842dfab&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/b079683a2b29c9abd0f6daf92a1e9bbeed2456223ce6f6e883e150cae2a2787a?apiKey=3e4bab1690d64b71a08812886842dfab&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/b079683a2b29c9abd0f6daf92a1e9bbeed2456223ce6f6e883e150cae2a2787a?apiKey=3e4bab1690d64b71a08812886842dfab&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b079683a2b29c9abd0f6daf92a1e9bbeed2456223ce6f6e883e150cae2a2787a?apiKey=3e4bab1690d64b71a08812886842dfab&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/b079683a2b29c9abd0f6daf92a1e9bbeed2456223ce6f6e883e150cae2a2787a?apiKey=3e4bab1690d64b71a08812886842dfab&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/b079683a2b29c9abd0f6daf92a1e9bbeed2456223ce6f6e883e150cae2a2787a?apiKey=3e4bab1690d64b71a08812886842dfab&"
                        className="shrink-0 w-5 border border-solid aspect-square border-neutral-200"
                      />
                      <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/7aa1d989a60f0156f195e6d98fcc14f2595c020f50823dca51e3312b39bef1b7?apiKey=3e4bab1690d64b71a08812886842dfab&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/7aa1d989a60f0156f195e6d98fcc14f2595c020f50823dca51e3312b39bef1b7?apiKey=3e4bab1690d64b71a08812886842dfab&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/7aa1d989a60f0156f195e6d98fcc14f2595c020f50823dca51e3312b39bef1b7?apiKey=3e4bab1690d64b71a08812886842dfab&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/7aa1d989a60f0156f195e6d98fcc14f2595c020f50823dca51e3312b39bef1b7?apiKey=3e4bab1690d64b71a08812886842dfab&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/7aa1d989a60f0156f195e6d98fcc14f2595c020f50823dca51e3312b39bef1b7?apiKey=3e4bab1690d64b71a08812886842dfab&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/7aa1d989a60f0156f195e6d98fcc14f2595c020f50823dca51e3312b39bef1b7?apiKey=3e4bab1690d64b71a08812886842dfab&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/7aa1d989a60f0156f195e6d98fcc14f2595c020f50823dca51e3312b39bef1b7?apiKey=3e4bab1690d64b71a08812886842dfab&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/7aa1d989a60f0156f195e6d98fcc14f2595c020f50823dca51e3312b39bef1b7?apiKey=3e4bab1690d64b71a08812886842dfab&"
                        className="shrink-0 w-5 border border-solid aspect-square border-neutral-200"
                      />
                      <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/ef42053d59d90b0289b1e77adf24aef9ea82b51d6448db66456584d1e376204a?apiKey=3e4bab1690d64b71a08812886842dfab&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/ef42053d59d90b0289b1e77adf24aef9ea82b51d6448db66456584d1e376204a?apiKey=3e4bab1690d64b71a08812886842dfab&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ef42053d59d90b0289b1e77adf24aef9ea82b51d6448db66456584d1e376204a?apiKey=3e4bab1690d64b71a08812886842dfab&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/ef42053d59d90b0289b1e77adf24aef9ea82b51d6448db66456584d1e376204a?apiKey=3e4bab1690d64b71a08812886842dfab&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/ef42053d59d90b0289b1e77adf24aef9ea82b51d6448db66456584d1e376204a?apiKey=3e4bab1690d64b71a08812886842dfab&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ef42053d59d90b0289b1e77adf24aef9ea82b51d6448db66456584d1e376204a?apiKey=3e4bab1690d64b71a08812886842dfab&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/ef42053d59d90b0289b1e77adf24aef9ea82b51d6448db66456584d1e376204a?apiKey=3e4bab1690d64b71a08812886842dfab&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/ef42053d59d90b0289b1e77adf24aef9ea82b51d6448db66456584d1e376204a?apiKey=3e4bab1690d64b71a08812886842dfab&"
                        className="shrink-0 w-5 aspect-square"
                      />
                      <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/11961327e9d2bb4b93878c4fce9cd49c1e70a8cd00dfdfa5870468cc9175b0bb?apiKey=3e4bab1690d64b71a08812886842dfab&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/11961327e9d2bb4b93878c4fce9cd49c1e70a8cd00dfdfa5870468cc9175b0bb?apiKey=3e4bab1690d64b71a08812886842dfab&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/11961327e9d2bb4b93878c4fce9cd49c1e70a8cd00dfdfa5870468cc9175b0bb?apiKey=3e4bab1690d64b71a08812886842dfab&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/11961327e9d2bb4b93878c4fce9cd49c1e70a8cd00dfdfa5870468cc9175b0bb?apiKey=3e4bab1690d64b71a08812886842dfab&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/11961327e9d2bb4b93878c4fce9cd49c1e70a8cd00dfdfa5870468cc9175b0bb?apiKey=3e4bab1690d64b71a08812886842dfab&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/11961327e9d2bb4b93878c4fce9cd49c1e70a8cd00dfdfa5870468cc9175b0bb?apiKey=3e4bab1690d64b71a08812886842dfab&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/11961327e9d2bb4b93878c4fce9cd49c1e70a8cd00dfdfa5870468cc9175b0bb?apiKey=3e4bab1690d64b71a08812886842dfab&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/11961327e9d2bb4b93878c4fce9cd49c1e70a8cd00dfdfa5870468cc9175b0bb?apiKey=3e4bab1690d64b71a08812886842dfab&"
                        className="shrink-0 w-5 aspect-square"
                      />
                    </div>
                  </div>
                </div>
                <div className="px-3 py-1.5 my-auto text-sm leading-5 text-white bg-emerald-500 rounded-[32px]">
                  2 risk
                </div>
              </div>

              <div className="flex gap-3 mt-5 whitespace-nowrap">
                <div className="flex flex-col flex-1">
                  <div className="text-sm leading-5 text-zinc-500">Gain</div>
                  <div className="mt-1 text-base font-medium leading-6 text-emerald-500">
                    28.35%
                  </div>
                </div>
                <div className="flex flex-col flex-1">
                  <div className="text-sm leading-5 text-zinc-500">Copiers</div>
                  <div className="mt-1 text-base font-medium leading-6 text-black">
                    570
                  </div>
                </div>
                <div className="flex flex-col flex-1">
                  <div className="text-sm leading-5 text-zinc-500">
                    Commission
                  </div>
                  <div className="mt-1 text-base font-medium leading-6 text-emerald-500">
                    Free
                  </div>
                </div>
              </div>
              <div className="flex gap-1 justify-between mt-5 text-sm leading-5 whitespace-nowrap text-zinc-500">
                <div>Profit</div>
                <div>Loss</div>
              </div>
              <div className="flex gap-1 justify-between mt-1 text-base font-medium leading-6 text-black whitespace-nowrap">
                <div>$14,180.30</div>
                <div>1,268.22</div>
              </div>
              <div className="flex px-px mt-1 rounded-sm">
                <div className="shrink-0 h-2 bg-emerald-500 w-[164px]" />
                <div className="flex-1 shrink-0 h-2 bg-red-500" />
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow p-5 mx-auto w-full rounded-3xl shadow-sm backdrop-blur-[2px] bg-white bg-opacity-70 max-md:mt-5">
              <div className="flex gap-5 justify-between px-px w-full">
                <div className="flex gap-4">
                  <div className="shrink-0 w-12 h-12 bg-white rounded-xl border border-solid border-neutral-200" />
                  <div className="flex flex-col">
                    <div className="text-base font-medium leading-6 text-black">
                      Baby Trader
                    </div>
                    <div className="flex gap-0.5 px-px mt-1">
                      <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/b079683a2b29c9abd0f6daf92a1e9bbeed2456223ce6f6e883e150cae2a2787a?apiKey=3e4bab1690d64b71a08812886842dfab&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/b079683a2b29c9abd0f6daf92a1e9bbeed2456223ce6f6e883e150cae2a2787a?apiKey=3e4bab1690d64b71a08812886842dfab&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b079683a2b29c9abd0f6daf92a1e9bbeed2456223ce6f6e883e150cae2a2787a?apiKey=3e4bab1690d64b71a08812886842dfab&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/b079683a2b29c9abd0f6daf92a1e9bbeed2456223ce6f6e883e150cae2a2787a?apiKey=3e4bab1690d64b71a08812886842dfab&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/b079683a2b29c9abd0f6daf92a1e9bbeed2456223ce6f6e883e150cae2a2787a?apiKey=3e4bab1690d64b71a08812886842dfab&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b079683a2b29c9abd0f6daf92a1e9bbeed2456223ce6f6e883e150cae2a2787a?apiKey=3e4bab1690d64b71a08812886842dfab&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/b079683a2b29c9abd0f6daf92a1e9bbeed2456223ce6f6e883e150cae2a2787a?apiKey=3e4bab1690d64b71a08812886842dfab&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/b079683a2b29c9abd0f6daf92a1e9bbeed2456223ce6f6e883e150cae2a2787a?apiKey=3e4bab1690d64b71a08812886842dfab&"
                        className="shrink-0 w-5 border border-solid aspect-square border-neutral-200"
                      />
                      <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/7aa1d989a60f0156f195e6d98fcc14f2595c020f50823dca51e3312b39bef1b7?apiKey=3e4bab1690d64b71a08812886842dfab&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/7aa1d989a60f0156f195e6d98fcc14f2595c020f50823dca51e3312b39bef1b7?apiKey=3e4bab1690d64b71a08812886842dfab&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/7aa1d989a60f0156f195e6d98fcc14f2595c020f50823dca51e3312b39bef1b7?apiKey=3e4bab1690d64b71a08812886842dfab&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/7aa1d989a60f0156f195e6d98fcc14f2595c020f50823dca51e3312b39bef1b7?apiKey=3e4bab1690d64b71a08812886842dfab&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/7aa1d989a60f0156f195e6d98fcc14f2595c020f50823dca51e3312b39bef1b7?apiKey=3e4bab1690d64b71a08812886842dfab&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/7aa1d989a60f0156f195e6d98fcc14f2595c020f50823dca51e3312b39bef1b7?apiKey=3e4bab1690d64b71a08812886842dfab&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/7aa1d989a60f0156f195e6d98fcc14f2595c020f50823dca51e3312b39bef1b7?apiKey=3e4bab1690d64b71a08812886842dfab&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/7aa1d989a60f0156f195e6d98fcc14f2595c020f50823dca51e3312b39bef1b7?apiKey=3e4bab1690d64b71a08812886842dfab&"
                        className="shrink-0 w-5 border border-solid aspect-square border-neutral-200"
                      />
                      <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/ef42053d59d90b0289b1e77adf24aef9ea82b51d6448db66456584d1e376204a?apiKey=3e4bab1690d64b71a08812886842dfab&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/ef42053d59d90b0289b1e77adf24aef9ea82b51d6448db66456584d1e376204a?apiKey=3e4bab1690d64b71a08812886842dfab&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ef42053d59d90b0289b1e77adf24aef9ea82b51d6448db66456584d1e376204a?apiKey=3e4bab1690d64b71a08812886842dfab&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/ef42053d59d90b0289b1e77adf24aef9ea82b51d6448db66456584d1e376204a?apiKey=3e4bab1690d64b71a08812886842dfab&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/ef42053d59d90b0289b1e77adf24aef9ea82b51d6448db66456584d1e376204a?apiKey=3e4bab1690d64b71a08812886842dfab&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ef42053d59d90b0289b1e77adf24aef9ea82b51d6448db66456584d1e376204a?apiKey=3e4bab1690d64b71a08812886842dfab&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/ef42053d59d90b0289b1e77adf24aef9ea82b51d6448db66456584d1e376204a?apiKey=3e4bab1690d64b71a08812886842dfab&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/ef42053d59d90b0289b1e77adf24aef9ea82b51d6448db66456584d1e376204a?apiKey=3e4bab1690d64b71a08812886842dfab&"
                        className="shrink-0 w-5 aspect-square"
                      />
                      <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/11961327e9d2bb4b93878c4fce9cd49c1e70a8cd00dfdfa5870468cc9175b0bb?apiKey=3e4bab1690d64b71a08812886842dfab&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/11961327e9d2bb4b93878c4fce9cd49c1e70a8cd00dfdfa5870468cc9175b0bb?apiKey=3e4bab1690d64b71a08812886842dfab&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/11961327e9d2bb4b93878c4fce9cd49c1e70a8cd00dfdfa5870468cc9175b0bb?apiKey=3e4bab1690d64b71a08812886842dfab&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/11961327e9d2bb4b93878c4fce9cd49c1e70a8cd00dfdfa5870468cc9175b0bb?apiKey=3e4bab1690d64b71a08812886842dfab&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/11961327e9d2bb4b93878c4fce9cd49c1e70a8cd00dfdfa5870468cc9175b0bb?apiKey=3e4bab1690d64b71a08812886842dfab&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/11961327e9d2bb4b93878c4fce9cd49c1e70a8cd00dfdfa5870468cc9175b0bb?apiKey=3e4bab1690d64b71a08812886842dfab&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/11961327e9d2bb4b93878c4fce9cd49c1e70a8cd00dfdfa5870468cc9175b0bb?apiKey=3e4bab1690d64b71a08812886842dfab&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/11961327e9d2bb4b93878c4fce9cd49c1e70a8cd00dfdfa5870468cc9175b0bb?apiKey=3e4bab1690d64b71a08812886842dfab&"
                        className="shrink-0 w-5 aspect-square"
                      />
                    </div>
                  </div>
                </div>
                <div className="px-3 py-1.5 my-auto text-sm leading-5 text-white bg-emerald-500 rounded-[32px]">
                  2 risk
                </div>
              </div>

              <div className="flex gap-3 mt-5 whitespace-nowrap">
                <div className="flex flex-col flex-1">
                  <div className="text-sm leading-5 text-zinc-500">Gain</div>
                  <div className="mt-1 text-base font-medium leading-6 text-emerald-500">
                    28.35%
                  </div>
                </div>
                <div className="flex flex-col flex-1">
                  <div className="text-sm leading-5 text-zinc-500">Copiers</div>
                  <div className="mt-1 text-base font-medium leading-6 text-black">
                    570
                  </div>
                </div>
                <div className="flex flex-col flex-1">
                  <div className="text-sm leading-5 text-zinc-500">
                    Commission
                  </div>
                  <div className="mt-1 text-base font-medium leading-6 text-emerald-500">
                    Free
                  </div>
                </div>
              </div>
              <div className="flex gap-1 justify-between mt-5 text-sm leading-5 whitespace-nowrap text-zinc-500">
                <div>Profit</div>
                <div>Loss</div>
              </div>
              <div className="flex gap-1 justify-between mt-1 text-base font-medium leading-6 text-black whitespace-nowrap">
                <div>$14,180.30</div>
                <div>1,268.22</div>
              </div>
              <div className="flex px-px mt-1 rounded-sm">
                <div className="shrink-0 h-2 bg-emerald-500 w-[148px]" />
                <div className="flex-1 shrink-0 h-2 bg-red-500" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5 w-full max-w-[1340px] max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow px-5 pt-5 mx-auto w-full rounded-3xl shadow-sm backdrop-blur-[2px] bg-white bg-opacity-70 max-md:mt-5">
              <div className="flex gap-5 justify-between px-px w-full">
                <div className="flex gap-4">
                  <div className="shrink-0 w-12 h-12 bg-white rounded-xl border border-solid border-neutral-200" />
                  <div className="flex flex-col">
                    <div className="text-base font-medium leading-6 text-black">
                      Baby Trader
                    </div>
                    <div className="flex gap-0.5 px-px mt-1">
                      <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/b079683a2b29c9abd0f6daf92a1e9bbeed2456223ce6f6e883e150cae2a2787a?apiKey=3e4bab1690d64b71a08812886842dfab&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/b079683a2b29c9abd0f6daf92a1e9bbeed2456223ce6f6e883e150cae2a2787a?apiKey=3e4bab1690d64b71a08812886842dfab&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b079683a2b29c9abd0f6daf92a1e9bbeed2456223ce6f6e883e150cae2a2787a?apiKey=3e4bab1690d64b71a08812886842dfab&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/b079683a2b29c9abd0f6daf92a1e9bbeed2456223ce6f6e883e150cae2a2787a?apiKey=3e4bab1690d64b71a08812886842dfab&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/b079683a2b29c9abd0f6daf92a1e9bbeed2456223ce6f6e883e150cae2a2787a?apiKey=3e4bab1690d64b71a08812886842dfab&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b079683a2b29c9abd0f6daf92a1e9bbeed2456223ce6f6e883e150cae2a2787a?apiKey=3e4bab1690d64b71a08812886842dfab&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/b079683a2b29c9abd0f6daf92a1e9bbeed2456223ce6f6e883e150cae2a2787a?apiKey=3e4bab1690d64b71a08812886842dfab&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/b079683a2b29c9abd0f6daf92a1e9bbeed2456223ce6f6e883e150cae2a2787a?apiKey=3e4bab1690d64b71a08812886842dfab&"
                        className="shrink-0 w-5 border border-solid aspect-square border-neutral-200"
                      />
                      <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/7aa1d989a60f0156f195e6d98fcc14f2595c020f50823dca51e3312b39bef1b7?apiKey=3e4bab1690d64b71a08812886842dfab&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/7aa1d989a60f0156f195e6d98fcc14f2595c020f50823dca51e3312b39bef1b7?apiKey=3e4bab1690d64b71a08812886842dfab&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/7aa1d989a60f0156f195e6d98fcc14f2595c020f50823dca51e3312b39bef1b7?apiKey=3e4bab1690d64b71a08812886842dfab&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/7aa1d989a60f0156f195e6d98fcc14f2595c020f50823dca51e3312b39bef1b7?apiKey=3e4bab1690d64b71a08812886842dfab&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/7aa1d989a60f0156f195e6d98fcc14f2595c020f50823dca51e3312b39bef1b7?apiKey=3e4bab1690d64b71a08812886842dfab&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/7aa1d989a60f0156f195e6d98fcc14f2595c020f50823dca51e3312b39bef1b7?apiKey=3e4bab1690d64b71a08812886842dfab&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/7aa1d989a60f0156f195e6d98fcc14f2595c020f50823dca51e3312b39bef1b7?apiKey=3e4bab1690d64b71a08812886842dfab&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/7aa1d989a60f0156f195e6d98fcc14f2595c020f50823dca51e3312b39bef1b7?apiKey=3e4bab1690d64b71a08812886842dfab&"
                        className="shrink-0 w-5 border border-solid aspect-square border-neutral-200"
                      />
                      <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/ef42053d59d90b0289b1e77adf24aef9ea82b51d6448db66456584d1e376204a?apiKey=3e4bab1690d64b71a08812886842dfab&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/ef42053d59d90b0289b1e77adf24aef9ea82b51d6448db66456584d1e376204a?apiKey=3e4bab1690d64b71a08812886842dfab&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ef42053d59d90b0289b1e77adf24aef9ea82b51d6448db66456584d1e376204a?apiKey=3e4bab1690d64b71a08812886842dfab&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/ef42053d59d90b0289b1e77adf24aef9ea82b51d6448db66456584d1e376204a?apiKey=3e4bab1690d64b71a08812886842dfab&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/ef42053d59d90b0289b1e77adf24aef9ea82b51d6448db66456584d1e376204a?apiKey=3e4bab1690d64b71a08812886842dfab&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ef42053d59d90b0289b1e77adf24aef9ea82b51d6448db66456584d1e376204a?apiKey=3e4bab1690d64b71a08812886842dfab&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/ef42053d59d90b0289b1e77adf24aef9ea82b51d6448db66456584d1e376204a?apiKey=3e4bab1690d64b71a08812886842dfab&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/ef42053d59d90b0289b1e77adf24aef9ea82b51d6448db66456584d1e376204a?apiKey=3e4bab1690d64b71a08812886842dfab&"
                        className="shrink-0 w-5 aspect-square"
                      />
                      <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/11961327e9d2bb4b93878c4fce9cd49c1e70a8cd00dfdfa5870468cc9175b0bb?apiKey=3e4bab1690d64b71a08812886842dfab&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/11961327e9d2bb4b93878c4fce9cd49c1e70a8cd00dfdfa5870468cc9175b0bb?apiKey=3e4bab1690d64b71a08812886842dfab&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/11961327e9d2bb4b93878c4fce9cd49c1e70a8cd00dfdfa5870468cc9175b0bb?apiKey=3e4bab1690d64b71a08812886842dfab&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/11961327e9d2bb4b93878c4fce9cd49c1e70a8cd00dfdfa5870468cc9175b0bb?apiKey=3e4bab1690d64b71a08812886842dfab&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/11961327e9d2bb4b93878c4fce9cd49c1e70a8cd00dfdfa5870468cc9175b0bb?apiKey=3e4bab1690d64b71a08812886842dfab&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/11961327e9d2bb4b93878c4fce9cd49c1e70a8cd00dfdfa5870468cc9175b0bb?apiKey=3e4bab1690d64b71a08812886842dfab&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/11961327e9d2bb4b93878c4fce9cd49c1e70a8cd00dfdfa5870468cc9175b0bb?apiKey=3e4bab1690d64b71a08812886842dfab&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/11961327e9d2bb4b93878c4fce9cd49c1e70a8cd00dfdfa5870468cc9175b0bb?apiKey=3e4bab1690d64b71a08812886842dfab&"
                        className="shrink-0 w-5 aspect-square"
                      />
                    </div>
                  </div>
                </div>
                <div className="px-3 py-1.5 my-auto text-sm leading-5 text-white bg-emerald-500 rounded-[32px]">
                  3 risk
                </div>
              </div>

              <div className="flex gap-3 mt-5 whitespace-nowrap">
                <div className="flex flex-col flex-1">
                  <div className="text-sm leading-5 text-zinc-500">Gain</div>
                  <div className="mt-1 text-base font-medium leading-6 text-emerald-500">
                    28.35%
                  </div>
                </div>
                <div className="flex flex-col flex-1">
                  <div className="text-sm leading-5 text-zinc-500">Copiers</div>
                  <div className="mt-1 text-base font-medium leading-6 text-black">
                    570
                  </div>
                </div>
                <div className="flex flex-col flex-1">
                  <div className="text-sm leading-5 text-zinc-500">
                    Commission
                  </div>
                  <div className="mt-1 text-base font-medium leading-6 text-emerald-500">
                    Free
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow px-5 pt-5 mx-auto w-full rounded-3xl shadow-sm backdrop-blur-[2px] bg-white bg-opacity-70 max-md:mt-5">
              <div className="flex gap-5 justify-between px-px w-full">
                <div className="flex gap-4">
                  <div className="shrink-0 w-12 h-12 bg-white rounded-xl border border-solid border-neutral-200" />
                  <div className="flex flex-col">
                    <div className="text-base font-medium leading-6 text-black">
                      Baby Trader
                    </div>
                    <div className="flex gap-0.5 px-px mt-1">
                      <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/b079683a2b29c9abd0f6daf92a1e9bbeed2456223ce6f6e883e150cae2a2787a?apiKey=3e4bab1690d64b71a08812886842dfab&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/b079683a2b29c9abd0f6daf92a1e9bbeed2456223ce6f6e883e150cae2a2787a?apiKey=3e4bab1690d64b71a08812886842dfab&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b079683a2b29c9abd0f6daf92a1e9bbeed2456223ce6f6e883e150cae2a2787a?apiKey=3e4bab1690d64b71a08812886842dfab&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/b079683a2b29c9abd0f6daf92a1e9bbeed2456223ce6f6e883e150cae2a2787a?apiKey=3e4bab1690d64b71a08812886842dfab&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/b079683a2b29c9abd0f6daf92a1e9bbeed2456223ce6f6e883e150cae2a2787a?apiKey=3e4bab1690d64b71a08812886842dfab&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b079683a2b29c9abd0f6daf92a1e9bbeed2456223ce6f6e883e150cae2a2787a?apiKey=3e4bab1690d64b71a08812886842dfab&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/b079683a2b29c9abd0f6daf92a1e9bbeed2456223ce6f6e883e150cae2a2787a?apiKey=3e4bab1690d64b71a08812886842dfab&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/b079683a2b29c9abd0f6daf92a1e9bbeed2456223ce6f6e883e150cae2a2787a?apiKey=3e4bab1690d64b71a08812886842dfab&"
                        className="shrink-0 w-5 border border-solid aspect-square border-neutral-200"
                      />
                      <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/7aa1d989a60f0156f195e6d98fcc14f2595c020f50823dca51e3312b39bef1b7?apiKey=3e4bab1690d64b71a08812886842dfab&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/7aa1d989a60f0156f195e6d98fcc14f2595c020f50823dca51e3312b39bef1b7?apiKey=3e4bab1690d64b71a08812886842dfab&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/7aa1d989a60f0156f195e6d98fcc14f2595c020f50823dca51e3312b39bef1b7?apiKey=3e4bab1690d64b71a08812886842dfab&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/7aa1d989a60f0156f195e6d98fcc14f2595c020f50823dca51e3312b39bef1b7?apiKey=3e4bab1690d64b71a08812886842dfab&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/7aa1d989a60f0156f195e6d98fcc14f2595c020f50823dca51e3312b39bef1b7?apiKey=3e4bab1690d64b71a08812886842dfab&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/7aa1d989a60f0156f195e6d98fcc14f2595c020f50823dca51e3312b39bef1b7?apiKey=3e4bab1690d64b71a08812886842dfab&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/7aa1d989a60f0156f195e6d98fcc14f2595c020f50823dca51e3312b39bef1b7?apiKey=3e4bab1690d64b71a08812886842dfab&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/7aa1d989a60f0156f195e6d98fcc14f2595c020f50823dca51e3312b39bef1b7?apiKey=3e4bab1690d64b71a08812886842dfab&"
                        className="shrink-0 w-5 border border-solid aspect-square border-neutral-200"
                      />
                      <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/ef42053d59d90b0289b1e77adf24aef9ea82b51d6448db66456584d1e376204a?apiKey=3e4bab1690d64b71a08812886842dfab&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/ef42053d59d90b0289b1e77adf24aef9ea82b51d6448db66456584d1e376204a?apiKey=3e4bab1690d64b71a08812886842dfab&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ef42053d59d90b0289b1e77adf24aef9ea82b51d6448db66456584d1e376204a?apiKey=3e4bab1690d64b71a08812886842dfab&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/ef42053d59d90b0289b1e77adf24aef9ea82b51d6448db66456584d1e376204a?apiKey=3e4bab1690d64b71a08812886842dfab&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/ef42053d59d90b0289b1e77adf24aef9ea82b51d6448db66456584d1e376204a?apiKey=3e4bab1690d64b71a08812886842dfab&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ef42053d59d90b0289b1e77adf24aef9ea82b51d6448db66456584d1e376204a?apiKey=3e4bab1690d64b71a08812886842dfab&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/ef42053d59d90b0289b1e77adf24aef9ea82b51d6448db66456584d1e376204a?apiKey=3e4bab1690d64b71a08812886842dfab&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/ef42053d59d90b0289b1e77adf24aef9ea82b51d6448db66456584d1e376204a?apiKey=3e4bab1690d64b71a08812886842dfab&"
                        className="shrink-0 w-5 aspect-square"
                      />
                      <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/11961327e9d2bb4b93878c4fce9cd49c1e70a8cd00dfdfa5870468cc9175b0bb?apiKey=3e4bab1690d64b71a08812886842dfab&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/11961327e9d2bb4b93878c4fce9cd49c1e70a8cd00dfdfa5870468cc9175b0bb?apiKey=3e4bab1690d64b71a08812886842dfab&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/11961327e9d2bb4b93878c4fce9cd49c1e70a8cd00dfdfa5870468cc9175b0bb?apiKey=3e4bab1690d64b71a08812886842dfab&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/11961327e9d2bb4b93878c4fce9cd49c1e70a8cd00dfdfa5870468cc9175b0bb?apiKey=3e4bab1690d64b71a08812886842dfab&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/11961327e9d2bb4b93878c4fce9cd49c1e70a8cd00dfdfa5870468cc9175b0bb?apiKey=3e4bab1690d64b71a08812886842dfab&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/11961327e9d2bb4b93878c4fce9cd49c1e70a8cd00dfdfa5870468cc9175b0bb?apiKey=3e4bab1690d64b71a08812886842dfab&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/11961327e9d2bb4b93878c4fce9cd49c1e70a8cd00dfdfa5870468cc9175b0bb?apiKey=3e4bab1690d64b71a08812886842dfab&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/11961327e9d2bb4b93878c4fce9cd49c1e70a8cd00dfdfa5870468cc9175b0bb?apiKey=3e4bab1690d64b71a08812886842dfab&"
                        className="shrink-0 w-5 aspect-square"
                      />
                    </div>
                  </div>
                </div>
                <div className="px-3 py-1.5 my-auto text-sm leading-5 text-white bg-emerald-500 rounded-[32px]">
                  3 risk
                </div>
              </div>

              <div className="flex gap-3 mt-5 whitespace-nowrap">
                <div className="flex flex-col flex-1">
                  <div className="text-sm leading-5 text-zinc-500">Gain</div>
                  <div className="mt-1 text-base font-medium leading-6 text-emerald-500">
                    28.35%
                  </div>
                </div>
                <div className="flex flex-col flex-1">
                  <div className="text-sm leading-5 text-zinc-500">Copiers</div>
                  <div className="mt-1 text-base font-medium leading-6 text-black">
                    570
                  </div>
                </div>
                <div className="flex flex-col flex-1">
                  <div className="text-sm leading-5 text-zinc-500">
                    Commission
                  </div>
                  <div className="mt-1 text-base font-medium leading-6 text-emerald-500">
                    Free
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow px-5 pt-5 mx-auto w-full rounded-3xl shadow-sm backdrop-blur-[2px] bg-white bg-opacity-70 max-md:mt-5">
              <div className="flex gap-5 justify-between px-px w-full">
                <div className="flex gap-4">
                  <div className="shrink-0 w-12 h-12 bg-white rounded-xl border border-solid border-neutral-200" />
                  <div className="flex flex-col">
                    <div className="text-base font-medium leading-6 text-black">
                      Baby Trader
                    </div>
                    <div className="flex gap-0.5 px-px mt-1">
                      <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/b079683a2b29c9abd0f6daf92a1e9bbeed2456223ce6f6e883e150cae2a2787a?apiKey=3e4bab1690d64b71a08812886842dfab&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/b079683a2b29c9abd0f6daf92a1e9bbeed2456223ce6f6e883e150cae2a2787a?apiKey=3e4bab1690d64b71a08812886842dfab&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b079683a2b29c9abd0f6daf92a1e9bbeed2456223ce6f6e883e150cae2a2787a?apiKey=3e4bab1690d64b71a08812886842dfab&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/b079683a2b29c9abd0f6daf92a1e9bbeed2456223ce6f6e883e150cae2a2787a?apiKey=3e4bab1690d64b71a08812886842dfab&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/b079683a2b29c9abd0f6daf92a1e9bbeed2456223ce6f6e883e150cae2a2787a?apiKey=3e4bab1690d64b71a08812886842dfab&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b079683a2b29c9abd0f6daf92a1e9bbeed2456223ce6f6e883e150cae2a2787a?apiKey=3e4bab1690d64b71a08812886842dfab&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/b079683a2b29c9abd0f6daf92a1e9bbeed2456223ce6f6e883e150cae2a2787a?apiKey=3e4bab1690d64b71a08812886842dfab&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/b079683a2b29c9abd0f6daf92a1e9bbeed2456223ce6f6e883e150cae2a2787a?apiKey=3e4bab1690d64b71a08812886842dfab&"
                        className="shrink-0 w-5 border border-solid aspect-square border-neutral-200"
                      />
                      <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/7aa1d989a60f0156f195e6d98fcc14f2595c020f50823dca51e3312b39bef1b7?apiKey=3e4bab1690d64b71a08812886842dfab&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/7aa1d989a60f0156f195e6d98fcc14f2595c020f50823dca51e3312b39bef1b7?apiKey=3e4bab1690d64b71a08812886842dfab&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/7aa1d989a60f0156f195e6d98fcc14f2595c020f50823dca51e3312b39bef1b7?apiKey=3e4bab1690d64b71a08812886842dfab&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/7aa1d989a60f0156f195e6d98fcc14f2595c020f50823dca51e3312b39bef1b7?apiKey=3e4bab1690d64b71a08812886842dfab&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/7aa1d989a60f0156f195e6d98fcc14f2595c020f50823dca51e3312b39bef1b7?apiKey=3e4bab1690d64b71a08812886842dfab&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/7aa1d989a60f0156f195e6d98fcc14f2595c020f50823dca51e3312b39bef1b7?apiKey=3e4bab1690d64b71a08812886842dfab&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/7aa1d989a60f0156f195e6d98fcc14f2595c020f50823dca51e3312b39bef1b7?apiKey=3e4bab1690d64b71a08812886842dfab&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/7aa1d989a60f0156f195e6d98fcc14f2595c020f50823dca51e3312b39bef1b7?apiKey=3e4bab1690d64b71a08812886842dfab&"
                        className="shrink-0 w-5 border border-solid aspect-square border-neutral-200"
                      />
                      <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/ef42053d59d90b0289b1e77adf24aef9ea82b51d6448db66456584d1e376204a?apiKey=3e4bab1690d64b71a08812886842dfab&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/ef42053d59d90b0289b1e77adf24aef9ea82b51d6448db66456584d1e376204a?apiKey=3e4bab1690d64b71a08812886842dfab&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ef42053d59d90b0289b1e77adf24aef9ea82b51d6448db66456584d1e376204a?apiKey=3e4bab1690d64b71a08812886842dfab&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/ef42053d59d90b0289b1e77adf24aef9ea82b51d6448db66456584d1e376204a?apiKey=3e4bab1690d64b71a08812886842dfab&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/ef42053d59d90b0289b1e77adf24aef9ea82b51d6448db66456584d1e376204a?apiKey=3e4bab1690d64b71a08812886842dfab&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ef42053d59d90b0289b1e77adf24aef9ea82b51d6448db66456584d1e376204a?apiKey=3e4bab1690d64b71a08812886842dfab&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/ef42053d59d90b0289b1e77adf24aef9ea82b51d6448db66456584d1e376204a?apiKey=3e4bab1690d64b71a08812886842dfab&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/ef42053d59d90b0289b1e77adf24aef9ea82b51d6448db66456584d1e376204a?apiKey=3e4bab1690d64b71a08812886842dfab&"
                        className="shrink-0 w-5 aspect-square"
                      />
                      <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/11961327e9d2bb4b93878c4fce9cd49c1e70a8cd00dfdfa5870468cc9175b0bb?apiKey=3e4bab1690d64b71a08812886842dfab&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/11961327e9d2bb4b93878c4fce9cd49c1e70a8cd00dfdfa5870468cc9175b0bb?apiKey=3e4bab1690d64b71a08812886842dfab&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/11961327e9d2bb4b93878c4fce9cd49c1e70a8cd00dfdfa5870468cc9175b0bb?apiKey=3e4bab1690d64b71a08812886842dfab&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/11961327e9d2bb4b93878c4fce9cd49c1e70a8cd00dfdfa5870468cc9175b0bb?apiKey=3e4bab1690d64b71a08812886842dfab&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/11961327e9d2bb4b93878c4fce9cd49c1e70a8cd00dfdfa5870468cc9175b0bb?apiKey=3e4bab1690d64b71a08812886842dfab&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/11961327e9d2bb4b93878c4fce9cd49c1e70a8cd00dfdfa5870468cc9175b0bb?apiKey=3e4bab1690d64b71a08812886842dfab&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/11961327e9d2bb4b93878c4fce9cd49c1e70a8cd00dfdfa5870468cc9175b0bb?apiKey=3e4bab1690d64b71a08812886842dfab&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/11961327e9d2bb4b93878c4fce9cd49c1e70a8cd00dfdfa5870468cc9175b0bb?apiKey=3e4bab1690d64b71a08812886842dfab&"
                        className="shrink-0 w-5 aspect-square"
                      />
                    </div>
                  </div>
                </div>
                <div className="px-3 py-1.5 my-auto text-sm leading-5 text-white bg-emerald-500 rounded-[32px]">
                  3 risk
                </div>
              </div>

              <div className="flex gap-3 mt-5 whitespace-nowrap">
                <div className="flex flex-col flex-1">
                  <div className="text-sm leading-5 text-zinc-500">Gain</div>
                  <div className="mt-1 text-base font-medium leading-6 text-emerald-500">
                    28.35%
                  </div>
                </div>
                <div className="flex flex-col flex-1">
                  <div className="text-sm leading-5 text-zinc-500">Copiers</div>
                  <div className="mt-1 text-base font-medium leading-6 text-black">
                    570
                  </div>
                </div>
                <div className="flex flex-col flex-1">
                  <div className="text-sm leading-5 text-zinc-500">
                    Commission
                  </div>
                  <div className="mt-1 text-base font-medium leading-6 text-emerald-500">
                    Free
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow px-5 pt-5 mx-auto w-full rounded-3xl shadow-sm backdrop-blur-[2px] bg-white bg-opacity-70 max-md:mt-5">
              <div className="flex gap-5 justify-between px-px w-full">
                <div className="flex gap-4">
                  <div className="shrink-0 w-12 h-12 bg-white rounded-xl border border-solid border-neutral-200" />
                  <div className="flex flex-col">
                    <div className="text-base font-medium leading-6 text-black">
                      Baby Trader
                    </div>
                    <div className="flex gap-0.5 px-px mt-1">
                      <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/b079683a2b29c9abd0f6daf92a1e9bbeed2456223ce6f6e883e150cae2a2787a?apiKey=3e4bab1690d64b71a08812886842dfab&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/b079683a2b29c9abd0f6daf92a1e9bbeed2456223ce6f6e883e150cae2a2787a?apiKey=3e4bab1690d64b71a08812886842dfab&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b079683a2b29c9abd0f6daf92a1e9bbeed2456223ce6f6e883e150cae2a2787a?apiKey=3e4bab1690d64b71a08812886842dfab&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/b079683a2b29c9abd0f6daf92a1e9bbeed2456223ce6f6e883e150cae2a2787a?apiKey=3e4bab1690d64b71a08812886842dfab&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/b079683a2b29c9abd0f6daf92a1e9bbeed2456223ce6f6e883e150cae2a2787a?apiKey=3e4bab1690d64b71a08812886842dfab&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b079683a2b29c9abd0f6daf92a1e9bbeed2456223ce6f6e883e150cae2a2787a?apiKey=3e4bab1690d64b71a08812886842dfab&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/b079683a2b29c9abd0f6daf92a1e9bbeed2456223ce6f6e883e150cae2a2787a?apiKey=3e4bab1690d64b71a08812886842dfab&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/b079683a2b29c9abd0f6daf92a1e9bbeed2456223ce6f6e883e150cae2a2787a?apiKey=3e4bab1690d64b71a08812886842dfab&"
                        className="shrink-0 w-5 border border-solid aspect-square border-neutral-200"
                      />
                      <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/7aa1d989a60f0156f195e6d98fcc14f2595c020f50823dca51e3312b39bef1b7?apiKey=3e4bab1690d64b71a08812886842dfab&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/7aa1d989a60f0156f195e6d98fcc14f2595c020f50823dca51e3312b39bef1b7?apiKey=3e4bab1690d64b71a08812886842dfab&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/7aa1d989a60f0156f195e6d98fcc14f2595c020f50823dca51e3312b39bef1b7?apiKey=3e4bab1690d64b71a08812886842dfab&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/7aa1d989a60f0156f195e6d98fcc14f2595c020f50823dca51e3312b39bef1b7?apiKey=3e4bab1690d64b71a08812886842dfab&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/7aa1d989a60f0156f195e6d98fcc14f2595c020f50823dca51e3312b39bef1b7?apiKey=3e4bab1690d64b71a08812886842dfab&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/7aa1d989a60f0156f195e6d98fcc14f2595c020f50823dca51e3312b39bef1b7?apiKey=3e4bab1690d64b71a08812886842dfab&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/7aa1d989a60f0156f195e6d98fcc14f2595c020f50823dca51e3312b39bef1b7?apiKey=3e4bab1690d64b71a08812886842dfab&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/7aa1d989a60f0156f195e6d98fcc14f2595c020f50823dca51e3312b39bef1b7?apiKey=3e4bab1690d64b71a08812886842dfab&"
                        className="shrink-0 w-5 border border-solid aspect-square border-neutral-200"
                      />
                      <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/ef42053d59d90b0289b1e77adf24aef9ea82b51d6448db66456584d1e376204a?apiKey=3e4bab1690d64b71a08812886842dfab&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/ef42053d59d90b0289b1e77adf24aef9ea82b51d6448db66456584d1e376204a?apiKey=3e4bab1690d64b71a08812886842dfab&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ef42053d59d90b0289b1e77adf24aef9ea82b51d6448db66456584d1e376204a?apiKey=3e4bab1690d64b71a08812886842dfab&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/ef42053d59d90b0289b1e77adf24aef9ea82b51d6448db66456584d1e376204a?apiKey=3e4bab1690d64b71a08812886842dfab&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/ef42053d59d90b0289b1e77adf24aef9ea82b51d6448db66456584d1e376204a?apiKey=3e4bab1690d64b71a08812886842dfab&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ef42053d59d90b0289b1e77adf24aef9ea82b51d6448db66456584d1e376204a?apiKey=3e4bab1690d64b71a08812886842dfab&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/ef42053d59d90b0289b1e77adf24aef9ea82b51d6448db66456584d1e376204a?apiKey=3e4bab1690d64b71a08812886842dfab&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/ef42053d59d90b0289b1e77adf24aef9ea82b51d6448db66456584d1e376204a?apiKey=3e4bab1690d64b71a08812886842dfab&"
                        className="shrink-0 w-5 aspect-square"
                      />
                      <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/11961327e9d2bb4b93878c4fce9cd49c1e70a8cd00dfdfa5870468cc9175b0bb?apiKey=3e4bab1690d64b71a08812886842dfab&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/11961327e9d2bb4b93878c4fce9cd49c1e70a8cd00dfdfa5870468cc9175b0bb?apiKey=3e4bab1690d64b71a08812886842dfab&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/11961327e9d2bb4b93878c4fce9cd49c1e70a8cd00dfdfa5870468cc9175b0bb?apiKey=3e4bab1690d64b71a08812886842dfab&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/11961327e9d2bb4b93878c4fce9cd49c1e70a8cd00dfdfa5870468cc9175b0bb?apiKey=3e4bab1690d64b71a08812886842dfab&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/11961327e9d2bb4b93878c4fce9cd49c1e70a8cd00dfdfa5870468cc9175b0bb?apiKey=3e4bab1690d64b71a08812886842dfab&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/11961327e9d2bb4b93878c4fce9cd49c1e70a8cd00dfdfa5870468cc9175b0bb?apiKey=3e4bab1690d64b71a08812886842dfab&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/11961327e9d2bb4b93878c4fce9cd49c1e70a8cd00dfdfa5870468cc9175b0bb?apiKey=3e4bab1690d64b71a08812886842dfab&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/11961327e9d2bb4b93878c4fce9cd49c1e70a8cd00dfdfa5870468cc9175b0bb?apiKey=3e4bab1690d64b71a08812886842dfab&"
                        className="shrink-0 w-5 aspect-square"
                      />
                    </div>
                  </div>
                </div>
                <div className="px-3 py-1.5 my-auto text-sm leading-5 text-white bg-emerald-500 rounded-[32px]">
                  3 risk
                </div>
              </div>

              <div className="flex gap-3 mt-5 whitespace-nowrap">
                <div className="flex flex-col flex-1">
                  <div className="text-sm leading-5 text-zinc-500">Gain</div>
                  <div className="mt-1 text-base font-medium leading-6 text-emerald-500">
                    28.35%
                  </div>
                </div>
                <div className="flex flex-col flex-1">
                  <div className="text-sm leading-5 text-zinc-500">Copiers</div>
                  <div className="mt-1 text-base font-medium leading-6 text-black">
                    570
                  </div>
                </div>
                <div className="flex flex-col flex-1">
                  <div className="text-sm leading-5 text-zinc-500">
                    Commission
                  </div>
                  <div className="mt-1 text-base font-medium leading-6 text-emerald-500">
                    Free
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

export default CopyTrade
