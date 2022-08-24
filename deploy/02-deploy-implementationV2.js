const { network } = require("hardhat")
const { verify } = require("../hardhat.config")
const { developmentChains } = require("../helper-hardhat-config")

module.exports = async ({getNamedAccounts, deployments}) => {
    const {deploy, log} = deployments
    const { deployer } = await getNamedAccounts()

    const implementationV2 = await deploy("ImplementationV2", {
        from: deployer,
        args: [],
        log: true,
        waitConfirmations: network.config.blockConfirmations,
    })

    if(!developmentChains.includes(network.name) && process.env.ETHERSCAN_API_KEY) {
        log("Verifying.....")
        await verify(implementationV2.address, [])
    }
}