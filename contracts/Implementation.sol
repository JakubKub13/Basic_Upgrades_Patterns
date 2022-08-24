//SPDX-License-Identifier: MIT
pragma solidity 0.8.16;

contract Implementation {
    uint256 internal value;

    event ValueChanged(uint256 newValue);

    function store(uint256 newValue) public {
        value = newValue;
        emit ValueChanged(newValue);
    }

    function viewValue() public view returns(uint256) {
        return value;
    }

    function version() public pure returns(uint256) {
        return 1;
    }
}