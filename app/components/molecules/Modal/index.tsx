import {useDisclosure} from "@chakra-ui/hooks";
import {
    Button,
    FormControl,
    FormLabel, Input,
    Modal,
    ModalBody, ModalCloseButton,
    ModalContent, ModalFooter,
    ModalHeader,
    ModalOverlay
} from "@chakra-ui/react";
import {ChangeEvent, useRef, useState} from "react";
import s from "./style.module.scss"
import {useServicesContext} from "@/app/hooks";
import {PriceYear, ServiceDatabaseType} from "@/app/types";


export type ModalType = {
    name: string
    price: number
    year:  string
}

export const  InitialModal =() => {
    const { isOpen, onOpen, onClose, } = useDisclosure()
    const {servicesDatabase, addNewServicesToDatabase} = useServicesContext()

    const [modalData, setModalData] = useState<ModalType>(null)

    const initialRef = useRef(null)
    const finalRef = useRef(null)

    const setModalDataHandler = (e: ChangeEvent<HTMLInputElement>)=> {
        setModalData({
            ...modalData,
            [e.target.id]: e.target.value
        })
    }

     const addNewServiceDataByYear = (modalData: ModalType) => {
        if(!modalData) return
         const newPrice =  {[modalData.year]: Number(modalData.price)} as Record<PriceYear | string, number>

        const newService: ServiceDatabaseType = {
            id: servicesDatabase.length + 1,
            name: modalData.name,
            price:  newPrice
        }
         addNewServicesToDatabase([...servicesDatabase, newService])
         setModalData(null)
         onClose()
    }

    return (
        <>
            <Button className={s.addButton} onClick={onOpen}>Add Service</Button>
            <Modal
                initialFocusRef={initialRef}
                finalFocusRef={finalRef}
                isOpen={isOpen}
                onClose={onClose}
            >
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Create your Service</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                           <FormControl >
                           <FormLabel>Service Name</FormLabel>
                           <Input id="name" onChange={setModalDataHandler} ref={initialRef} placeholder='Name' />
                           <FormLabel>Service Price</FormLabel>
                           <Input id="price" onChange={setModalDataHandler} placeholder='Price' />


                           <FormLabel>Service Year</FormLabel>
                           <Input id="year" onChange={setModalDataHandler} placeholder='Year' />
                        </FormControl>
                    </ModalBody>

                    <ModalFooter>
                        <Button onClick={()=> addNewServiceDataByYear(modalData)} className={s.addButton} mr={3}>
                          Save
                        </Button>
                        <Button className={s.addButton} onClick={onClose}>
                           Cancel
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}