// import { IconButton } from '@chakra-ui/react';
// import { SettingsIcon } from '@chakra-ui/icons';
import { MdSettings } from 'react-icons/md'
import { Icon } from '@chakra-ui/react'

function GearButton({ onOpen }) {
  return (
    <Icon
      as={MdSettings} 
      onClick={() => onOpen(true)}
      aria-label='Settings'
      colorScheme='teal' // Customizing the color scheme
      size='lg' // Customizing the size
      variant='outline'
    />
  );
}

export default GearButton;