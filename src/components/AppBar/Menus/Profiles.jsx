import React from 'react'
import Box from '@mui/material/Box'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import { Avatar, Divider, IconButton, ListItemIcon, Tooltip } from '@mui/material'
import { Logout, PersonAdd, Settings } from '@mui/icons-material'
function Profiles() {
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  return (
    <Box>
      <Tooltip title="Account settings">
        <IconButton
          onClick={handleClick}
          size="small"
          sx={{ padding: 0 }}
          aria-controls={open ? 'basic-menu-profiles' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
        >
          <Avatar
            sx={{ width: 30, height: 32 }}
            alt='HoangPhucdev'
            src='https://scontent.fsgn2-5.fna.fbcdn.net/v/t39.30808-1/471128245_1255866359034132_3129553351074727496_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=104&ccb=1-7&_nc_sid=e99d92&_nc_ohc=j3mhJp0JlR0Q7kNvgFANUE_&_nc_oc=AdiILnhyI2mdEzPKLp592vrdDhR_55gFFDcUIerqod6yoGjeTgOZjRsclz-XIiZpPlE&_nc_zt=24&_nc_ht=scontent.fsgn2-5.fna&_nc_gid=ArAG1Rt_7kXsXyKd9FHHUGw&oh=00_AYAvd9rQ6UryfhRb1EkBNy7Y0ypC34gqfyTpWwvwnfPVUA&oe=67AE43B2'
          >
            HP
          </Avatar>
        </IconButton>
      </Tooltip>
      <Menu
        id="basic-menu-profiles"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button-profiles'
        }}
      >
        <MenuItem onClick={handleClose}>
          <Avatar sx={{ width: 28, height: 28, mr: 1 }} /> Profile
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Avatar sx={{ width: 28, height: 28, mr: 1 }} /> My account
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <PersonAdd fontSize="small" />
          </ListItemIcon>
          Add another account
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </Box>
  )
}

export default Profiles
