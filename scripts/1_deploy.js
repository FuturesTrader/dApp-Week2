const { ethers } = require("hardhat");

async function main() {
    // Fetch contract to deploy
    const Token = await ethers.getContractFactory("Token");

    // Deploy contract
    const token = await Token.deploy();
    await token.waitForDeployment();  // Changed from deployed()
    console.log(`Token Deployed to: ${await token.getAddress()}`);  // Changed from token.address
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });