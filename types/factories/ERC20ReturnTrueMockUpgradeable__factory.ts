/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { ERC20ReturnTrueMockUpgradeable } from "../ERC20ReturnTrueMockUpgradeable";

export class ERC20ReturnTrueMockUpgradeable__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<ERC20ReturnTrueMockUpgradeable> {
    return super.deploy(
      overrides || {}
    ) as Promise<ERC20ReturnTrueMockUpgradeable>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): ERC20ReturnTrueMockUpgradeable {
    return super.attach(address) as ERC20ReturnTrueMockUpgradeable;
  }
  connect(signer: Signer): ERC20ReturnTrueMockUpgradeable__factory {
    return super.connect(signer) as ERC20ReturnTrueMockUpgradeable__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC20ReturnTrueMockUpgradeable {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as ERC20ReturnTrueMockUpgradeable;
  }
}

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "allowance_",
        type: "uint256",
      },
    ],
    name: "setAllowance",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610784806100206000396000f3fe608060405234801561001057600080fd5b50600436106100b45760003560e01c80633ba93f26116100715780633ba93f261461021057806370a082311461022f57806395d89b4114610255578063a457c2d71461025d578063a9059cbb14610136578063dd62ed3e14610289576100b4565b806306fdde03146100b9578063095ea7b31461013657806318160ddd1461017657806323b872dd14610190578063313ce567146101c657806339509351146101e4575b600080fd5b6100c16102b7565b6040805160208082528351818301528351919283929083019185019080838360005b838110156100fb5781810151838201526020016100e3565b50505050905090810190601f1680156101285780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6101626004803603604081101561014c57600080fd5b506001600160a01b03813516906020013561034d565b604080519115158252519081900360200190f35b61017e610359565b60408051918252519081900360200190f35b610162600480360360608110156101a657600080fd5b506001600160a01b0381358116916020810135909116906040013561035f565b6101ce61036c565b6040805160ff9092168252519081900360200190f35b610162600480360360408110156101fa57600080fd5b506001600160a01b038135169060200135610375565b61022d6004803603602081101561022657600080fd5b50356103d1565b005b61017e6004803603602081101561024557600080fd5b50356001600160a01b03166103fb565b6100c1610416565b6101626004803603604081101561027357600080fd5b506001600160a01b038135169060200135610477565b61017e6004803603604081101561029f57600080fd5b506001600160a01b03813581169160200135166104df565b60368054604080516020601f60026000196101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156103435780601f1061031857610100808354040283529160200191610343565b820191906000526020600020905b81548152906001019060200180831161032657829003601f168201915b5050505050905090565b50506000606655600190565b60355490565b5050600060665550600190565b60385460ff1690565b60006103c86103826104fb565b846103c385603460006103936104fb565b6001600160a01b03908116825260208083019390935260409182016000908120918c1681529252902054906104ff565b610560565b50600192915050565b80606560006103de6104fb565b6001600160a01b0316815260208101919091526040016000205550565b6001600160a01b031660009081526033602052604090205490565b60378054604080516020601f60026000196101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156103435780601f1061031857610100808354040283529160200191610343565b60006103c86104846104fb565b846103c38560405180606001604052806025815260200161072a60259139603460006104ae6104fb565b6001600160a01b03908116825260208083019390935260409182016000908120918d1681529252902054919061064c565b506001600160a01b031660009081526065602052604090205490565b3390565b600082820183811015610559576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b9392505050565b6001600160a01b0383166105a55760405162461bcd60e51b81526004018080602001828103825260248152602001806107066024913960400191505060405180910390fd5b6001600160a01b0382166105ea5760405162461bcd60e51b81526004018080602001828103825260228152602001806106e46022913960400191505060405180910390fd5b6001600160a01b03808416600081815260346020908152604080832094871680845294825291829020859055815185815291517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259281900390910190a3505050565b600081848411156106db5760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b838110156106a0578181015183820152602001610688565b50505050905090810190601f1680156106cd5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b50505090039056fe45524332303a20617070726f766520746f20746865207a65726f206164647265737345524332303a20617070726f76652066726f6d20746865207a65726f206164647265737345524332303a2064656372656173656420616c6c6f77616e63652062656c6f77207a65726fa2646970667358221220768b0904fbfa75ee479182665012ba046af7611695471928846b41cbc2b5267964736f6c634300060c0033";
