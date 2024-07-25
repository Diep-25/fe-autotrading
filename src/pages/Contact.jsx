function Contact() {
  return (
    <div className="flex flex-col items-center px-6 bg-stone-50 max-md:px-5">
      <div className="flex gap-1 items-center p-1 mt-6 text-sm font-medium leading-5 whitespace-nowrap rounded-xl border border-solid bg-neutral-100 border-neutral-200 text-stone-500">
        <div className="self-stretch px-4 py-2">Mobile</div>
        <div className="justify-center self-stretch px-4 py-2 text-black rounded-lg shadow-md">
          Form
        </div>
        <div className="self-stretch px-4 py-2">Email</div>
      </div>
      <div className="flex gap-3 mt-8 max-md:flex-wrap">
        <div className="flex gap-3">
          <div className="justify-center items-center p-1.5 w-8 h-8 text-sm font-medium leading-5 text-center whitespace-nowrap bg-neutral-200 rounded-[32px] text-stone-500">
            M
          </div>
          <div className="my-auto text-base leading-6 text-black">
            +84 123456789
          </div>
        </div>
        
        <div className="flex gap-3">
          <div className="justify-center items-center p-1.5 w-8 h-8 text-sm font-medium leading-5 text-center text-white whitespace-nowrap bg-black rounded-[32px]">
            F
          </div>
          <div className="my-auto text-base leading-6 text-black">
            Complete Form
          </div>
        </div>
        
        <div className="flex gap-3 whitespace-nowrap">
          <div className="justify-center items-center p-1.5 w-8 h-8 text-sm font-medium leading-5 text-center bg-neutral-200 rounded-[32px] text-stone-500">
            E
          </div>
          <div className="my-auto text-base leading-6 text-black">
            info@autotrading.com
          </div>
        </div>
      </div>
      <div className="flex overflow-hidden relative flex-col items-center px-16 pb-10 mt-12 w-full max-w-[1600px] min-h-[824px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/4b078dc5faabd157fbe5b47b202d7973f005f06cf47a45a63cd24c6f053fe098?apiKey=3e4bab1690d64b71a08812886842dfab&"
          className="object-cover absolute inset-0 size-full"
        />
        <div className="relative max-w-full w-[1290px]">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[22%] max-md:ml-0 max-md:w-full">
              <img
                loading="lazy"
                srcSet="../../public/assets/images/image-icon-contact1.png"
                className="grow shrink-0 mt-96 max-w-full aspect-[0.74] w-[250px] max-md:mt-10"
              />
            </div>
            <div className="flex flex-col ml-5 w-[53%] max-md:ml-0 max-md:w-full">
              <div className="flex relative flex-col p-10 w-full rounded-3xl shadow-sm backdrop-blur-[2px] bg-white bg-opacity-70 max-md:px-5 max-md:mt-10 max-md:max-w-full">
                <div className="bg-color-rem flex justify-center items-center px-16 py-10 rounded-xl max-md:px-5 max-md:max-w-full">
                  <img
                    loading="lazy"
                    srcSet="../../public/assets/images/image-contact.png"
                    className="max-w-full aspect-[0.93] w-[168px]"
                  />
                </div>
                <div className="text-3xl font-semibold text-black max-md:max-w-full">
                  Contact us
                </div>
                <input
                  type="email"
                  placeholder="Email"
                  className="justify-center px-6 py-4 mt-6 text-base font-medium leading-6 whitespace-nowrap bg-white rounded-xl border border-solid border-neutral-200 text-zinc-500 max-md:px-5 max-md:max-w-full"
                />
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                  placeholder="Phone"
                  className="justify-center px-6 py-4 mt-6 text-base font-medium leading-6 whitespace-nowrap bg-white rounded-xl border border-solid border-neutral-200 text-zinc-500 max-md:px-5 max-md:max-w-full"
                />
                <textarea
                  placeholder="Message"
                  className="justify-center  px-6 py-4 mt-6 text-base font-medium leading-6 whitespace-nowrap bg-white rounded-xl border border-solid border-neutral-200 text-zinc-500 max-md:px-5 max-md:max-w-full"
                />
                <button className="justify-center px-6 py-4 mt-6 text-base font-medium leading-6 text-center text-white whitespace-nowrap bg-black rounded-xl max-md:px-5 max-md:max-w-full">
                  Submit
                </button>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
              <img
                loading="lazy"
                srcSet="../../public/assets/images/image-icon-contact.png"
                className="shrink-0 self-stretch my-auto max-w-full aspect-square w-[280px] max-md:mt-10"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
