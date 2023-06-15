import { DiOpensource } from 'react-icons/di';
import { BsFillDatabaseFill } from 'react-icons/bs';
import Icon from './Icon';

const TopBar = ({ backgroundColor }: { backgroundColor: string }) => {
  const navClasses = `fixed top-0 w-full py-3 px-2 md:px-5 ${backgroundColor} text-white shadow-md`;
  const statisticsHREF = `${process.env.WEBSITE}statistics`;

  return (
    <nav className={navClasses}>
      <div className="w-full flex items-center justify-start">
        <div>

          <a
            href="https://github.com/S1thK3nny/praktikum2023"
            className="group flex 
            hover:scale-110 transition-all duration-200 ease-in-out hover:font-semibold 
            items-center relative 
            text-md md:text-xl">

            <div className='hidden md:block'>
                <span className="mr-1">Source Code</span>
            </div>
            <Icon icon={<DiOpensource size="25" />} />
          </a>

        </div>
        <div className="flex-grow flex items-center justify-center md:font-semibold text-lg md:text-xl">
          <label>URL Shortener</label>
        </div>

        <div>
          <a
            href={statisticsHREF}
            className="group flex 
            hover:scale-110 transition-all duration-200 ease-in-out hover:font-semibold 
            items-center relative text-md md:text-xl">

            <Icon icon={<BsFillDatabaseFill size="25" />} />
            <div className='hidden md:block'>
                <span className="ml-1">&nbsp;Statistics</span>
            </div>
            
          </a>
        </div>

      </div>
    </nav>
  );
};

export default TopBar;