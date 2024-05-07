/* eslint-disable no-console */
'use strict'

import * as React from 'react'
import { SessionWallet, allowedWallets } from '../lib/algorand-session-wallet'
import { Center, HStack, VStack, Modal, ModalBody, ModalOverlay, ModalContent, ModalHeader, ModalFooter, Flex, Select, Box, Button, Image } from '@chakra-ui/react'
import { useEffect } from 'react'
import { showErrorToaster } from '../src/Toaster'
import { useDisclosure } from "@chakra-ui/react"
import { getCookie, setCookies, removeCookies } from 'cookies-next'
import { useEthers, useEtherBalance } from '@usedapp/core'
import { formatEther } from '@ethersproject/units'
import { NotAllowedIcon } from '@chakra-ui/icons'
import { useRouter } from 'next/router'
import NFD from '../components/NFD'

type FlareWalletConnectorProps = {
    darkMode: boolean
    connected: Promise<boolean>
    sessionWallet: SessionWallet
    updateWallet(sw: SessionWallet)
    handleFetch()
}

export function FlareWalletConnector(props:FlareWalletConnectorProps)  {

    const [selectorOpen, setSelectorOpen] = React.useState(false)

    useEffect(() => {
        return () => { setSelectorOpen(false); };
    }, []);

    const { isOpen, onOpen, onClose } = useDisclosure()
    const { activateBrowserWallet, deactivate, account } = useEthers()
    const etherBalance = useEtherBalance(account)
    const router = useRouter();
    const refreshData = () => {
        router.replace(router.asPath);
      }

    if (!account) return (
        <Center w={'100%'}>
            <Button variant='outline' onClick={() => activateBrowserWallet()}>Connect Wallet Flare</Button>
        </Center>
    )
    {etherBalance && (
        <div className="balance">
          <br />
          Address:
          <p className="bold">{account}</p>
          <br />
          Balance:
          <p className="bold">{formatEther(etherBalance)}</p>
        </div>
      )}
    return (
    <HStack>
       <Flex w={'100%'}>
        <Select 
            ml={1} 
            mr={1} 
            id={'nfd'}
            defaultValue={account} >
            <option value={account}>{account}</option>
        </Select>
        <Button variant='outline' onClick={() => deactivate()}><NotAllowedIcon/></Button>
    </Flex>
    </HStack>
    )
}