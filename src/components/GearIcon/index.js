// import { IconButton } from '@chakra-ui/react';
// import { SettingsIcon } from '@chakra-ui/icons';
import { MdSettings } from 'react-icons/md'
import { Icon } from '@chakra-ui/react'
import styles from './GearButton.module.css';
import { useSelector , useDispatch } from 'react-redux';
import InitialFocus from '../preferenceModal';
function GearButton() {
    const dispatch = useDispatch();
    const isOpen = useSelector((state) => state?.news?.isModalOpen);
    return (
        <>
            <div className={styles.gear_icon}>
                <Icon
                as={MdSettings} 
                onClick={() => {
                    console.log("clicked satra")
                    dispatch({ type: 'news/setIsModalOpen', payload: true })
                }}
                aria-label='Settings'
                color={'white'}
                // size='eg' // Customizing the size
                w={8}
                h={8}
                variant='outline'
                />
            </div>
            <InitialFocus />
        </>
        
    );
}

export default GearButton;