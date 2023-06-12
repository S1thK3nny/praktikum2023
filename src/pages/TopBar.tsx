import { DiOpensource } from 'react-icons/di';
import Icon from './Icon';

const TopBar = () => {
    return (
        <nav className="fixed top-0 w-full py-3
        items-left px-5 flex-col columns-3
        bg-indigo-500 text-white shadow-md"> 

        {/* Wrap this in a div, otherwise the whole nav is selectable. */}
            <div className="text-left">
                <a href="https://github.com/S1thK3nny/praktikum2023" className="inline-flex group
                hover:scale-110 transition-all duration-200 ease-in-out 
                hover:font-semibold items-center justify-center relative"> 
                    Source Code&nbsp;<Icon icon = {<DiOpensource size="100"/>} />
                </a>
            </div>
            <div className="text-center font-semibold text-xl">
                <label>
                    URL Shortener
                </label>
            </div>
        </nav>
    );
};

export default TopBar;