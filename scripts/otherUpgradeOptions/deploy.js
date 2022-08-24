const { ethers, upgrades } = require("hardhat")

async function main() {
    const implementation = await ethers.getContractFactory("Implementation")
    console.log("Deploying Implementation, ProxyAdmin ........")
    const proxy = await upgrades.deployProxy(implementation, [42], { initializer: "store" })
    console.log("Proxy of Implementation deployed to:", proxy.address)
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })