# Basic_Upgrades_Patterns

1. Upgrade Implementation to ImplementationV2
2. Proxy contract will point to Implementation and later we will upgrade it to point to ImplementationV2
3. Deploy a Proxy contract manually or use packet hardhat-deploy's build in proxies or use Openzeppelin Upgrades plug in
