// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Token is ERC20{

    address public owner;

    constructor() ERC20("Krishna Token", "KS"){        
        owner = msg.sender;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Only the owner can call this function!");
        _;
    }

    function mint(uint256 _amount) public onlyOwner {
        _mint(owner, _amount);
    }

    function burn(uint256 _amount) public {
        require(balanceOf(owner) >= _amount, "Insufficient balance");
        _burn(owner, _amount);
    }

    function transfer(address _recipient, uint256 _amount) public override returns (bool) {
        require(owner != _recipient,"You cannot transfer to yourself!");
        require(balanceOf(owner) >= _amount, " Amount to transfer is greater than balance");
        _transfer(_msgSender(), _recipient, _amount);
        return true;
    }
}
