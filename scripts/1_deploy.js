const { ethers } = require("hardhat");

async function main() {
    // Fetch contract to deploy
    const Token = await ethers.getContractFactory("Token")

    // Deploy contract with constructor arguments
    const token = await Token.deploy(
        "Dapp University",  // _name
        "DAPP",            // _symbol
        1000000            // _totalSupply
    )
    await token.waitForDeployment()  // Changed from deployed() to waitForDeployment()

    // Get the deployed contract address - syntax also changed in v6
    const address = await token.getAddress()
    console.log(`Token Deployed to: ${address}`)
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });