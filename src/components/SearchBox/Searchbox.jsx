
import '../../App.css'
import { IoMdSearch } from "react-icons/io";

function Searchbox() {
    return (
        <div>
            <div className="search-box flex items-center relative">
                <IoMdSearch className='mr-2'/>
                <input type="text" placeholder="Search here......" className="pl-4"/>
            </div>
        </div>
    );
}

export default Searchbox;