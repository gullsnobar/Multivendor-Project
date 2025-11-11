import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../../styles/styles';
import { productData } from "../../static/data";  // Fixed typo
import { RxDragHandleVertical } from 'react-icons/rx';
import { AiOutlineSearch } from 'react-icons/ai'; // Import added

const Header = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchData, setSearchData] = useState(null);

  const handleSearchChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);

    const filteredProducts = productData && productData.filter((product) => 
      product.name.toLowerCase().includes(term.toLowerCase())
    );
    setSearchData(filteredProducts);
  }

  return (
    <div className={`${styles.section}`}>
      <div className='hidden 800px:h-[50px] 800px:my-[20px] 800px:flex items-center justify-between'>
        <div>
          <Link to='/'>
            <img 
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALQAAACU..." 
              alt="this is img" 
            />
          </Link>
        </div>

        {/* Search box */}
        <div className='w-[50%] relative'>
          <input 
            type="text" 
            placeholder='Search Product..' 
            value={searchTerm} 
            onChange={handleSearchChange} 
            className='h-[40px] w-full px-2 border-[#3957db] border-[2px] rounded-md' 
          />
          <AiOutlineSearch size={30} className='absolute right-2 top-1.5 cursor-pointer' />
        </div>

        {
          searchData && searchData.length !== 0 ? (
            <div className='absolute min-h-[30vh] bg-slate-50 shadow-sm z-[9] p-4'>
              {searchData.map((i, index) => {
                const d = i.name;
                const Product_name = d.replace(/\s+/g, "-");
                return (
                  <Link 
                    to={`/product/${Product_name}`} 
                    key={index} 
                    onClick={() => setSearchData(null)}
                  >
                    {i.name}
                  </Link>
                );
              })}
            </div>
          ) : null
        }
      </div>
    </div>
  );
}

export default Header;
