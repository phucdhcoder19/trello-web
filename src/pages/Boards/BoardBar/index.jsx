import { Avatar, AvatarGroup, Button, Chip, Tooltip } from '@mui/material'
import Box from '@mui/material/Box'
import DashboardIcon from '@mui/icons-material/Dashboard'
import VpnLockIcon from '@mui/icons-material/VpnLock'
import AddToDriveIcon from '@mui/icons-material/AddToDrive'
import BoltIcon from '@mui/icons-material/Bolt'
import FilterListIcon from '@mui/icons-material/FilterList'
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1'
const MENU_STYLES = {
  color: 'white',
  backgroundColor: 'transparent',
  border: 'none',
  paddingX: '5px',
  borderRadius: '4px',
  '& .MuiSvgIcon-root': {
    color: 'white'
  },
  '&:hover': { bgcolor: 'primary.50' }
}
function BoardBar() {
  return (
    <Box sx={{
      // backgroundColor: 'primary.dark',
      width: '100%',
      height: (theme) => theme.trello.boardBarHeight,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 2,
      paddingX: 2,
      overflowX: 'auto',
      borderTop: '1px solid #00bfa5',
      borderBottom: '1px solid #00bfa5',
      bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#34495e' : '#1976d2')

    }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
        <Chip
          sx={MENU_STYLES}
          icon={<DashboardIcon />}
          label="Hoang Phuc Dev Board"
          clickable />

        <Chip
          sx={MENU_STYLES}
          icon={<VpnLockIcon />}
          label="Public Private Workspace"
          clickable />

        <Chip
          sx={MENU_STYLES}
          icon={<AddToDriveIcon />}
          label="Add To Google Drive"
          clickable />

        <Chip
          sx={MENU_STYLES}
          icon={<BoltIcon />}
          label="Automation"
          clickable />

        <Chip
          sx={MENU_STYLES}
          icon={<FilterListIcon />}
          label="Filters"
          clickable />
      </Box>


      <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
        <Button
          variant="outlined"
          startIcon={<PersonAddAlt1Icon />}
          sx={{ color: 'white', borderColor: 'white', '&:hover': { borderColor: 'white' } }}
        >Invite</Button>
        <AvatarGroup max={4} sx={{
          gap: '10px',
          '& .MuiAvatar-root': { width: 34, height: 34, fontSize: '16px', border: 'none' }
        }}>
          <Tooltip title="Hoang Phuc Dev">
            <Avatar alt="Hoang Phuc Dev" src="
            https://scontent.fsgn2-5.fna.fbcdn.net/v/t39.30808-1/471128245_1255866359034132_3129553351074727496_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=104&ccb=1-7&_nc_sid=e99d92&_nc_ohc=j3mhJp0JlR0Q7kNvgFANUE_&_nc_oc=AdiILnhyI2mdEzPKLp592vrdDhR_55gFFDcUIerqod6yoGjeTgOZjRsclz-XIiZpPlE&_nc_zt=24&_nc_ht=scontent.fsgn2-5.fna&_nc_gid=ArAG1Rt_7kXsXyKd9FHHUGw&oh=00_AYAvd9rQ6UryfhRb1EkBNy7Y0ypC34gqfyTpWwvwnfPVUA&oe=67AE43B2" />
          </Tooltip>
          <Tooltip title="Hoang Phuc Dev">
            <Avatar alt="Hoang Phuc Dev" src="
            https://scontent.fsgn2-5.fna.fbcdn.net/v/t39.30808-1/471128245_1255866359034132_3129553351074727496_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=104&ccb=1-7&_nc_sid=e99d92&_nc_ohc=j3mhJp0JlR0Q7kNvgFANUE_&_nc_oc=AdiILnhyI2mdEzPKLp592vrdDhR_55gFFDcUIerqod6yoGjeTgOZjRsclz-XIiZpPlE&_nc_zt=24&_nc_ht=scontent.fsgn2-5.fna&_nc_gid=ArAG1Rt_7kXsXyKd9FHHUGw&oh=00_AYAvd9rQ6UryfhRb1EkBNy7Y0ypC34gqfyTpWwvwnfPVUA&oe=67AE43B2" />
          </Tooltip>
          <Tooltip title="Hoang Phuc Dev">
            <Avatar alt="Hoang Phuc Dev" src="
            https://scontent.fsgn2-5.fna.fbcdn.net/v/t39.30808-1/471128245_1255866359034132_3129553351074727496_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=104&ccb=1-7&_nc_sid=e99d92&_nc_ohc=j3mhJp0JlR0Q7kNvgFANUE_&_nc_oc=AdiILnhyI2mdEzPKLp592vrdDhR_55gFFDcUIerqod6yoGjeTgOZjRsclz-XIiZpPlE&_nc_zt=24&_nc_ht=scontent.fsgn2-5.fna&_nc_gid=ArAG1Rt_7kXsXyKd9FHHUGw&oh=00_AYAvd9rQ6UryfhRb1EkBNy7Y0ypC34gqfyTpWwvwnfPVUA&oe=67AE43B2" />
          </Tooltip>

          <Tooltip title="Hoang Phuc Dev">
            <Avatar alt="Hoang Phuc Dev" src="
            https://scontent.fsgn2-5.fna.fbcdn.net/v/t39.30808-1/471128245_1255866359034132_3129553351074727496_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=104&ccb=1-7&_nc_sid=e99d92&_nc_ohc=j3mhJp0JlR0Q7kNvgFANUE_&_nc_oc=AdiILnhyI2mdEzPKLp592vrdDhR_55gFFDcUIerqod6yoGjeTgOZjRsclz-XIiZpPlE&_nc_zt=24&_nc_ht=scontent.fsgn2-5.fna&_nc_gid=ArAG1Rt_7kXsXyKd9FHHUGw&oh=00_AYAvd9rQ6UryfhRb1EkBNy7Y0ypC34gqfyTpWwvwnfPVUA&oe=67AE43B2" />
          </Tooltip>
          <Tooltip title="Hoang Phuc Dev">
            <Avatar alt="Hoang Phuc Dev" src="
            https://scontent.fsgn2-5.fna.fbcdn.net/v/t39.30808-1/471128245_1255866359034132_3129553351074727496_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=104&ccb=1-7&_nc_sid=e99d92&_nc_ohc=j3mhJp0JlR0Q7kNvgFANUE_&_nc_oc=AdiILnhyI2mdEzPKLp592vrdDhR_55gFFDcUIerqod6yoGjeTgOZjRsclz-XIiZpPlE&_nc_zt=24&_nc_ht=scontent.fsgn2-5.fna&_nc_gid=ArAG1Rt_7kXsXyKd9FHHUGw&oh=00_AYAvd9rQ6UryfhRb1EkBNy7Y0ypC34gqfyTpWwvwnfPVUA&oe=67AE43B2" />
          </Tooltip>
          <Tooltip title="Hoang Phuc Dev">
            <Avatar alt="Hoang Phuc Dev" src="
            https://scontent.fsgn2-5.fna.fbcdn.net/v/t39.30808-1/471128245_1255866359034132_3129553351074727496_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=104&ccb=1-7&_nc_sid=e99d92&_nc_ohc=j3mhJp0JlR0Q7kNvgFANUE_&_nc_oc=AdiILnhyI2mdEzPKLp592vrdDhR_55gFFDcUIerqod6yoGjeTgOZjRsclz-XIiZpPlE&_nc_zt=24&_nc_ht=scontent.fsgn2-5.fna&_nc_gid=ArAG1Rt_7kXsXyKd9FHHUGw&oh=00_AYAvd9rQ6UryfhRb1EkBNy7Y0ypC34gqfyTpWwvwnfPVUA&oe=67AE43B2" />
          </Tooltip>
        </AvatarGroup>

      </Box>

    </Box>
  )
}

export default BoardBar
