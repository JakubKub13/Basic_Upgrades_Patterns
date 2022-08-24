// Manual Way

const { ethers } = require("hardhat")

async function main() {
    const implementationProxyAdmin = await ethers.getContract("ImplementationProxyAdmin")
    const transparentProxy = await ethers.getContract("Implementation_Proxy")

    const proxyImplementationV1 = await ethers.getContractAt("Implementation", transparentProxy.address)
    const version1 = await proxyImplementationV1.version()
    console.log(version1.toString())

    const implementationV2 = await ethers.getContract("ImplementationV2")
    const upgradeTx = await implementationProxyAdmin.upgrade(transparentProxy.address, implementationV2.address)
    await upgradeTx.wait(1)

    const proxyImplementationV2 = await ethers.getContractAt("ImplementationV2", transparentProxy.address) // call functions on transparent proxy address but having ABI of ImplementationV2
    const version = await proxyImplementationV2.version()
    console.log(version.toString())
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })