// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Permit.sol";


contract LineaPepeToken is ERC20, ERC20Burnable, ERC20Permit {

    uint256 private constant INITIAL_SUPPLY = 2024010100000000 * (10 ** 18); 

    constructor() ERC20("LineaPepeToken", "LineaPEPE") ERC20Permit("LineaPepeToken") {
        _mint(msg.sender, INITIAL_SUPPLY); 
    }

}
