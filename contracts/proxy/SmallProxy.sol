//SPDX-License-Identifier: MIT
pragma solidity 0.8.16;

import "@openzeppelin/contracts/proxy/Proxy.sol";

contract SmallProxy is Proxy {
// EIP1967
    bytes32 private constant IMPLEMENTATION_SLOT = 0x360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc;

    function setImplementation(address newImplementation) public {
        assembly {
            sstore(IMPLEMENTATION_SLOT, newImplementation)
        }
    }
    function _implementation() internal view override returns (address implementationAddress) {
        assembly {
            implementationAddress := sload(IMPLEMENTATION_SLOT)
        }
    }

    function readStorage() public view returns (uint256 valueAtZeroStorageSlot) {
        assembly{
            valueAtZeroStorageSlot := sload(0)
        }
    }

    function getDataToTransact(uint256 numberToUpdate) public pure returns (bytes memory) {
        return abi.encodeWithSignature("setValue(uint256)", numberToUpdate);
    }
}

contract ImplementationA {
    uint256 public value;

    function setValue(uint256 newValue) public {
        value = newValue;
    }
}

contract ImplementationB {
    uint256 public value;

    function setValue(uint256 newValue) public {
        value = newValue + 88;
    }
}