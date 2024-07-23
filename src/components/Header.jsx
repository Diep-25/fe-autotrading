
import logo from '../../public/assets/images/logo.png';
import iconMenu from '../../public/assets/images/svgs/icon-menu.svg';

function Header() {

  const menuData = [
    {
      id: 1,
      name: 'Home',
      url: '/'
    },
    {
      id: 2,
      name: 'Products',
      url: '/products'
    },
    {
      id: 3,
      name: 'Copytrade',
      url: '/copytrade'
    },
    {
      id: 4,
      name: 'Analysts',
      url: '/analysts'
    },
    {
      id: 5,
      name: 'Academy',
      url: '/academy'
    },
    {
      id: 6,
      name: 'Marketplace',
      url: '/marketplace'
    },
    {
      id: 7,
      name: 'News',
      url: '/news'
    },
    {
      id: 8,
      name: 'Contact',
      url: '/contact'
    }
  ];

  return (
    <>
      <header className="w-full h-[76px] py-4 border-b border-neutral-200 ">
        <div className='px-4'>
          <div className='w-full justify-between items-center inline-flex'>
            <a href='' className="h-11 relative">
              <div className="justify-start items-center gap-2 inline-flex">
                <img className="w-6 h-6" src={logo} />
                <div className="text-black text-2xl font-semibold font-['Gellix'] leading-normal">AutoTrading</div>
              </div>
            </a>

            <div className="max-[480px]:hidden p-1 bg-neutral-100 rounded-[44px] border border-neutral-200 justify-start items-center gap-1 flex">

              {menuData.map(item => (
                <a href={item.url} key={item.id} className={`${item.id === 1 ? 'text-black bg-gradient-to-b from-white to-neutral-100 rounded-[36px] shadow border border-neutral-200' : 'text-stone-500'} px-4 py-2 text-black text-sm font-medium font-['Basis Grotesque Arabic Pro'] leading-tight justify-center items-center gap-2.5 flex hover:bg-gradient-to-b hover:from-white transition duration-300 ease-in-out hover:to-neutral-100 hover:rounded-[36px] hover:border hover:border-neutral-200 hover:shadow hover:text-black`}>
                  {item.name}
                </a>
              ))}

            </div>
            <div className="max-[480px]:hidden h-11 justify-end items-center gap-1.5 flex">
              <button className="px-5 py-[8px] transition duration-300 ease-in-out bg-neutral-100 text-black rounded-xl border border-neutral-200 justify-center items-center gap-2.5 flex hover:bg-black hover:text-white">
                Login
              </button>

              <button className="px-5 py-[8px] transition duration-300 ease-in-out bg-black text-white rounded-xl border border-neutral-200 justify-center items-center gap-2.5 flex hover:bg-neutral-100 hover:text-black">
                Sign Up
              </button>

            </div>
            <div className="min-[480px]:hidden h-11 justify-end items-center gap-1.5 flex">
              <button className='w-[36px] h-[36px] bg-black text-center flex justify-center items-center rounded-lg'>
                <img src={iconMenu} alt="iconmenu" />
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
