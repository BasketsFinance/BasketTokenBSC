const Token = artifacts.require("Basket");

module.exports = async function (deployer, network, accounts) {

    await deployer.deploy(Token, accounts[0]);
    const token = await Token.deployed();

};
