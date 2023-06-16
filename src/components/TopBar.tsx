// FOR THE LOVE OF GOD; DO NOT EVER MESS WITH THIS AGAIN //

import { DiOpensource } from 'react-icons/di';
import { BsFillDatabaseFill, BsFillHouseDoorFill } from 'react-icons/bs';
import Icon from './Icon';
import Link from 'next/link';

type TopBarProps = {
  backgroundColor: string;
  showMain: boolean;
};

const TopBar = ({ backgroundColor, showMain }: TopBarProps) => {
  const navClasses = `fixed top-0 w-full py-3 px-2 md:px-5 ${backgroundColor} text-white shadow-md`;
  const mainOrStatistics = showMain ? `${process.env.WEBSITE}`: `${process.env.WEBSITE}statistics`;

  return (
    <nav className={navClasses}>
      <div className="w-full flex items-center">

        <div className='w-1/3 flex justify-start'>
          <Link href="https://github.com/S1thK3nny/praktikum2023"
            className="group flex
            hover:scale-110 transition-all duration-200 ease-in-out hover:font-semibold 
            items-stretch relative 
            text-md md:text-xl">

            <div className='hidden md:block'>
              <span className="mr-1">Source Code</span>
            </div>
            <Icon icon={<DiOpensource size="25" />} />
          </Link>
        </div>

        <div className="flex-grow content-center 
        flex items-stretch justify-center 
        md:font-semibold text-lg md:text-xl 
        text-center w-1/3">
          <label>URL Shortener</label>
        </div>

        <div className='w-1/3 flex justify-end'>
          <Link href={mainOrStatistics}
            className="group flex
            hover:scale-110 transition-all duration-200 ease-in-out hover:font-semibold text-md md:text-xl justify-end">

            {showMain ? (
              <Icon icon={<BsFillHouseDoorFill size="25" />} />
            ) : (
              <Icon icon={<BsFillDatabaseFill size="25" />} />
            )}

            <div className='hidden md:block'>
              <span className="ml-1">
                {showMain ? "Main" : "Statistics"}
              </span>
            </div>

          </Link>
        </div>

      </div>
    </nav>
  );
};

export default TopBar;
