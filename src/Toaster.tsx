import { createStandaloneToast } from '@chakra-ui/react'
const toast = createStandaloneToast()

export function showInfo(info: string){
    toast({
        title: 'Message',
        description: info,
        status: 'info',
        duration: 8000,
        isClosable: true,
    })
}

export function showNetworkWaiting(txId: string) {
    toast({
        title: 'Waiting for Network',
        description: 'Transaction Sent Waiting For Confirmation',
        status: 'info',
        duration: 5000,
        isClosable: true,
    })
}

export function showNetworkSuccess(message: string) {
    toast({
        title: 'Success',
        description: message,
        status: 'success',
        duration: 8000,
        isClosable: true,
    })
}
export function showNetworkSuccessTx(txId: string, isLargerThan768: boolean) {
    toast({
        title: 'Success',
        description: (isLargerThan768)? 'Transaction: ' + txId : 'Transaction: ' + txId.substring(0, 5) + '...' + txId.slice(-4),
        status: 'success',
        duration: 8000,
        isClosable: true,
    })
}

export function showNetworkError(txId: string, message: string) {
    toast({
        title: 'A Network error occurred',
        description: 'Transaction: ' + txId + ', ' + message,
        status: 'error',
        duration: 8000,
        isClosable: true,
    })
}

export function showErrorToaster(message: string) {
    toast({
        title: 'An error occurred',
        description: message,
        status: 'error',
        duration: 8000,
        isClosable: true,
    })
}