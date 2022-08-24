const { network } = require("hardhat")
const { verify } = require("../hardhat.config")
const { developmentChains } = require("../helper-hardhat-config")

module.exports = async ({getNamedAccounts, deployments}) => {
    const {deploy, log} = deployments
    const { deployer } = await getNamedAccounts()

    log("------------------")
    const implementation = await deploy("Implementation", {
        from: deployer,
        args: [],
        log: true,
        waitConfirmations: network.config.blockConfirmations,
        proxy: {
            proxyContract: "OpenZeppelinTransparentProxy",
            viaAdminContract: {
                name: "ImplementationProxyAdmin",
                artifact: "ImplementationProxyAdmin"
            },
        },
    })

    if(!developmentChains.includes(network.name) && process.env.ETHERSCAN_API_KEY) {
        log("Verifying.....")
        await verify(implementation.address, [])
    }
}