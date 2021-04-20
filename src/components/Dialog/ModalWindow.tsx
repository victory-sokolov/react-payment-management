
import {
    Modal,
    ModalBody,
    ModalCloseButton, ModalContent,
    ModalHeader, ModalOverlay
} from "@chakra-ui/react";

export default function ModalWindow({open, close, children}: any) {

    return (
            <Modal isOpen={open} onClose={close}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Add New Credit Card</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        {children}
                    </ModalBody>
                </ModalContent>
            </Modal>
    );
}