const { ethers, upgrades } = require("hardhat")

async function main() {
    const gnosisSafe = "FILL_HERE"
    console.log("Transfering ownership of ProxyAdmin......")
    // The owner of the Proxy admin can upgrade our contracts
    await upgrades.admin.transferProxyAdminOwnership(gnosisSafe)
    console.log("Transferred ownership of ProxyAdmin to:", gnosisSafe)
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })