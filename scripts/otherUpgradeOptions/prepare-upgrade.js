const { ethers, upgrades } = require("hardhat")

async function main() {
    const proxyAddress = "PASTE_ADDRESS_HERE"
    const ImplementationV2 = await ethers.getContractFactory("ImplementationV2")
    console.log("Preparing upgrade.......")
    const implementationV2Address = await upgrades.prepareUpgrade(proxyAddress, ImplementationV2)
    console.log("ImplementationV2 at:", implementationV2Address)
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })