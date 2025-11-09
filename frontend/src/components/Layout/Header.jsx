import React from 'react'

const Header = () => {
  return (
    <div className='{`${styles.section}`}'>
      <div className='hidden 800px:h-[50px] 800px:my-[20px] 800px:flex items-center justify-between'>
       <div>
        <Link to='/'>
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALQAAACU..." alt="this is img" />
        </Link>
       </div>
      </div>
    </div>
  )
}

export default Header
