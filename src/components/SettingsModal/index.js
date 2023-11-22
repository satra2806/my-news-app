import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    Button,
    Select
  } from '@chakra-ui/react';
  
  function SettingsModal({ isOpen, onClose, sources, categories, authors }) {
    return (
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Preferences</ModalHeader>
          <ModalBody>
            <Select placeholder='Preferred Source'>
              {sources.map((source) => (
                <option value={source}>{source}</option>
              ))}
            </Select>
            <Select placeholder='Category'>
              {categories.map((category) => (
                <option value={category}>{category}</option>
              ))}
            </Select>
            <Select placeholder='Author'>
              {authors.map((author) => (
                <option value={author}>{author}</option>
              ))}
            </Select>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant='ghost'>Apply</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    );
  }
  
  export default SettingsModal;