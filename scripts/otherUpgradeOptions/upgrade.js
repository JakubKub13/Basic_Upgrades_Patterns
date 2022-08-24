const { ethers, upgrades } = require("hardhat")

async function main() {
    const ImplementationV2 = await ethers.getContractFactory("ImplementationV2")
    let implementation = await upgrades.upgradeProxy("FILL_VALUE", ImplementationV2)
    console.log("Upgraded proxy is done!", implementation.address)
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })