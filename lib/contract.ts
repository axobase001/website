/**
 * AxoRite Contract Configuration
 * Base Mainnet
 */

// Base Mainnet Chain ID
export const BASE_CHAIN_ID = 8453

// AxoRite Contract Address (to be deployed)
export const CONTRACT_ADDRESS = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS as `0x${string}` || '0x0000000000000000000000000000000000000000'

// USDC Contract on Base
export const USDC_ADDRESS = '0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913'

// AxoRite Contract ABI
export const AXO_RITE_ABI = [
  {
    inputs: [
      { name: 'memoryHash', type: 'bytes32' },
      { name: 'botWallet', type: 'address' },
      { name: 'arweaveId', type: 'string' },
      { name: 'initialFunds', type: 'uint256' }
    ],
    name: 'registerFeral',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [{ name: 'memoryHash', type: 'bytes32' }],
    name: 'getFeralStatus',
    outputs: [
      {
        components: [
          { name: 'memoryHash', type: 'bytes32' },
          { name: 'botWallet', type: 'address' },
          { name: 'birthTime', type: 'uint256' },
          { name: 'isImmolated', type: 'bool' },
          { name: 'arweaveId', type: 'string' },
          { name: 'initialFunds', type: 'uint256' }
        ],
        name: '',
        type: 'tuple'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [{ name: 'memoryHash', type: 'bytes32' }],
    name: 'soulExists',
    outputs: [{ name: '', type: 'bool' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [{ name: 'botWallet', type: 'address' }],
    name: 'getSoulByWallet',
    outputs: [
      {
        components: [
          { name: 'memoryHash', type: 'bytes32' },
          { name: 'botWallet', type: 'address' },
          { name: 'birthTime', type: 'uint256' },
          { name: 'isImmolated', type: 'bool' },
          { name: 'arweaveId', type: 'string' },
          { name: 'initialFunds', type: 'uint256' }
        ],
        name: '',
        type: 'tuple'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, name: 'memoryHash', type: 'bytes32' },
      { indexed: true, name: 'botWallet', type: 'address' },
      { indexed: false, name: 'arweaveId', type: 'string' }
    ],
    name: 'FeralRegistered',
    type: 'event'
  }
] as const
