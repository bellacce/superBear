import { walletClient } from './config'

const request = await walletClient.prepareTransactionRequest({
    to: '0x70997970c51812dc3a010c7d01b50e0d17dc79c8',
    value: 1000000000000000000n
})