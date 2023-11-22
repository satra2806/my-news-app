// import { IconButton } from '@chakra-ui/react';
// import { SettingsIcon } from '@chakra-ui/icons';
import { MdSettings } from 'react-icons/md'
import { Icon } from '@chakra-ui/react'
import styles from './GearButton.module.css';

function GearButton({ onOpen }) {
  return (
    <div className={styles.gear_icon}>
        <Icon
        as={MdSettings} 
        onClick={() => onOpen(true)}
        aria-label='Settings'
        color={'white'}
        // size='eg' // Customizing the size
        w={8}
        h={8}
        variant='outline'
        />
    </div>
  );
}

export default GearButton;