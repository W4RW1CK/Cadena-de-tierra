// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract CadenaDeTierra {
    string public name = "Cadena de Tierra";
    string public symbol = "CAL";
    uint8 public decimals = 0;

    uint256 public totalSupply;
    uint256 public totalInventory;
    uint256 public remainingInventory;
    uint256 public totalBurned;

    mapping(address => uint256) public balanceOf;

    event Transfer(address indexed from, address indexed to, uint256 value);
    event Bought(address indexed buyer, uint256 amount);
    event Redeemed(address indexed user, uint256 amount);

    constructor(uint256 _initialInventory) {
        require(_initialInventory > 0, "initial inventory required");
        totalInventory = _initialInventory;
        remainingInventory = _initialInventory;
    }

    function buyTokens(uint256 amount) external {
        require(amount > 0, "amount > 0");
        require(amount <= remainingInventory, "not enough inventory");

        balanceOf[msg.sender] += amount;
        totalSupply += amount;

        emit Transfer(address(0), msg.sender, amount);
        emit Bought(msg.sender, amount);
    }

    function redeemAndBurn(uint256 amount) external {
        require(amount > 0, "amount > 0");
        require(balanceOf[msg.sender] >= amount, "insufficient balance");
        require(remainingInventory >= amount, "not enough inventory");

        balanceOf[msg.sender] -= amount;
        totalSupply -= amount;
        remainingInventory -= amount;
        totalBurned += amount;

        emit Transfer(msg.sender, address(0), amount);
        emit Redeemed(msg.sender, amount);
    }

    function getRemainingInventory() external view returns (uint256) {
        return remainingInventory;
    }
}
