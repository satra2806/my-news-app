import React from 'react'
import { Button } from '@chakra-ui/react'
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, FormControl, FormLabel, Input } from "@chakra-ui/react"
import { useSelector, useDispatch } from 'react-redux';
import MultiSelect from '../react-select';

function InitialFocus() {

    const dispatch = useDispatch();
    const {isModalOpen: isOpen , newsCategory , authorsData , preferredSource , categories , authors } = useSelector((state) => state?.news);
    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)
    const preferredSourceData = [
      { value: 'NewsAPI', label: 'NewsAPI' },
      { value: 'OpenNews', label: 'OpenNews' },
      { value: 'NewsCred', label: 'NewsCred' },
    ]

    return (
      <>
        <Modal
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={() => dispatch({ type: 'news/setIsModalOpen', payload: false })}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Create your account</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl>
                <FormLabel>preferred sources</FormLabel>
                <MultiSelect dataOptions= {preferredSourceData} isMulti = {false} closeMenuOnSelect = {true} sliceName = {'setPreferredSource'} defaultValue={preferredSource}/>
                
                {/* <Input ref={initialRef} placeholder='First name' /> */}
              </FormControl>
  
              <FormControl mt={4}>
                <FormLabel> News Category</FormLabel>
                <MultiSelect dataOptions= {newsCategory} isMulti = {false} closeMenuOnSelect = {true} sliceName = {'setCategories'} defaultValue={categories} />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Authors</FormLabel>
                <MultiSelect dataOptions= {authorsData} isMulti = {false} closeMenuOnSelect = {true} sliceName = {'setAuthors'} defaultValue={authors}
                />
              </FormControl>

            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme='blue' mr={3} onClick={() => dispatch({ type: 'news/setIsModalOpen', payload: false })}>
                Save
              </Button>
              <Button onClick={() => dispatch({ type: 'news/setIsModalOpen', payload: false })}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }

export default InitialFocus