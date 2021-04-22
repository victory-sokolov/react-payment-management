
import {
    Modal,
    ModalBody,
    ModalCloseButton, ModalContent,
    ModalHeader, ModalOverlay
} from "@chakra-ui/react";

type ModalProps = {
    open: boolean,
    close: () => void,
    children: React.ReactNode
}

export default function ModalWindow({open, close, children}: ModalProps) {

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