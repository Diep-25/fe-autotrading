function Footer() {

  return (
    <>
      <div className="custom-gradient">
        <div className="flex flex-col items-start px-16 py-20 pb-0 backdrop-blur-[2px] rounded-[32px_32px_0px_0px] max-md:px-5">
          <div className="z-[-1] pt-[80px]">
            <img
              loading="lazy"
              src="/assets/images/image 7.png"
              className="absolute w-[832px] h-[600px] bottom-0 left-[20%]"
            />
          </div>
          <div className="bg-footer w-full p-16">

            <div className="flex mb-[20px]">
              <div className="w-[30%] relative">
                <img
                  loading="lazy"
                  srcSet="/assets/images/image-footer.png"
                  className="shrink-0 w-full aspect-square absolute top-0 left-0 "
                />
              </div>
              <div className="w-[70%] grid grid-cols-3 gap-4">
                <div>
                  <p className="text-[#888888] text-base font-normal leading-normal">Community</p>
                  <div className="mt-2">
                    <div className="text-black text-base font-normal leading-normal">
                      <a href="" className="leading-[30px]">Facebook</a>
                    </div>
                    <div className="text-black text-base font-normal leading-normal">
                      <a href="" className="leading-[30px]">Instagram</a>
                    </div>
                    <div className="text-black text-base font-normal leading-normal">
                      <a href="" className="leading-[30px]">Twitter</a>
                    </div>
                  </div>
                </div>
                <div>
                  <p className="text-[#888888] text-base font-normal leading-normal">Explore</p>
                  <div className="mt-2">
                    <div className="text-black text-base font-normal leading-normal">
                      <a href="" className="leading-[30px]" >Products</a>
                    </div>
                    <div className="text-black text-base font-normal leading-normal">
                      <a href="" className="leading-[30px]">Copytrade</a>
                    </div>
                    <div className="text-black text-base font-normal leading-normal">
                      <a href="" className="leading-[30px]">Analysts</a>
                    </div>
                    <div className="text-black text-base font-normal leading-normal">
                      <a href="" className="leading-[30px]">Academy</a>
                    </div>
                    <div className="text-black text-base font-normal leading-normal">
                      <a href="" className="leading-[30px]">Marketplace</a>
                    </div>
                    <div className="text-black text-base font-normal leading-normal">
                      <a href="" className="leading-[30px]">News</a>
                    </div>
                    <div className="text-black text-base font-normal leading-normal">
                      <a href="" className="leading-[30px]">Contact</a>
                    </div>
                  </div>
                </div>
                <div>
                  <p className="text-[#888888] text-base font-normal leading-normal">Contact</p>
                  <div className="mt-2">
                    <div className="text-black text-base font-normal leading-normal">
                      <a href="" className="leading-[30px]">(+84)123456789</a>
                    </div>
                    <div className="text-black text-base font-normal leading-normal">
                      <a href="" className="leading-[30px]">info@autotrading.com</a>
                    </div>

                    <div className="text-black text-base mt-4 font-normal leading-normal">
                      <p href="" className="leading-[30px]">00 Street, City, State, Hanoi, Vietnam</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-between w-full items-end">
              <div className="w-[70%]">
                <div className="flex gap-2 text-2xl font-semibold leading-6 text-black whitespace-nowrap max-md:mt-10">
                  <img
                    loading="lazy"
                    srcSet="/assets/images/icon-footer.png"
                    className="shrink-0 w-6 aspect-square"
                  />
                  <div>AutoTrading</div>
                </div>
                <div className="mt-3 text-sm leading-5 text-zinc-500">
                  © 2024 Time Trading.
                </div>
              </div>
              <div className="flex w-[30%] justify-between">
                <div >
                  <p>Privacy Policy</p>
                </div>
                <div>
                  <p>Terms and Conditions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer