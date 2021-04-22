import { Box } from '@chakra-ui/layout';
import {
  Alert,
  AlertIcon
} from "@chakra-ui/react";

type Status = 'warning' | 'info'| 'success' | 'error';

interface IProps {
  status: Status
  text: string
}


export const AlertStatus = ({status, text}: IProps) => (
     <Box my={4}>
        <Alert status={status} borderRadius={4} fontSize="15">
          <AlertIcon />
          {text}
      </Alert>
     </Box>
)

