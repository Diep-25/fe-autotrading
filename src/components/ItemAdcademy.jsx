
const ItemAdcademy = () => {
  return (
    <>
      <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
        <div className="flex flex-col grow p-5 mx-auto w-full text-sm font-medium leading-5 rounded-3xl shadow-sm backdrop-blur-[2px] bg-white bg-opacity-70 max-md:mt-5">
          <div className="flex gap-1 whitespace-nowrap">
            <div className="justify-center px-2.5 py-1.5 text-yellow-400 rounded-md bg-yellow-400 bg-opacity-10">
              Crypto
            </div>
            <div className="justify-center px-2.5 py-1.5 rounded-md bg-neutral-100 text-stone-500">
              Article
            </div>
          </div>
          <div className="mt-5 text-xl leading-7 text-black">
            Advanced Crypto Trading Techniques
          </div>
          <div className="mt-3 leading-5 text-zinc-500">
            A detailed article that discusses advanced trading techniques
            specific to the crypto market, such as arbitrage, margin trading,
            and using bots.
          </div>
          <div className=" cursor-pointer text-center px-5 py-3 mt-5 text-black bg-white rounded-xl border border-black border-solid">
            Learn More
          </div>
        </div>
      </div>
    </>
  )
}

export default ItemAdcademy
