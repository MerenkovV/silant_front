import React from 'react'
import style from './Header.module.css'
import Box from '@mui/material/Box';
import Popper from '@mui/material/Popper';

const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popper' : undefined;

  return (
    <header className={style.header}>
      <div className={style.header_container}>
        <a href="#" className={style.logo}>
          <img src="https://static.tildacdn.com/tild6532-6137-4664-b962-623539363734/photo.svg" alt="" width='150px'/>
        </a>
        <a href="#" className={style.car}>Поиск машины</a>
        <button aria-describedby={id} type="button" className={style.auth} 
          onClick={handleClick}>Авторизация</button>
        <Popper id={id} open={open} anchorEl={anchorEl} placement='bottom-end'>
        <Box sx={{ border: 1, p: 1, bgcolor: 'background.paper' }}>
          The content of the Popper.
        </Box>
        </Popper>
      </div>
    </header>
  )
}

export default Header