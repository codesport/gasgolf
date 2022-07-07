# Gas Golf Findings Assigning Values in Constructor vs In-Contract

@MatheusDaros 

**Conclusion:** Assigning variable values **inside** the contract is cheaper.

**Possible Reason:** There may be additional deployment overhead b/c we're placing additional data in the constructor.

## Hardhat Gas Reporter
![Gas Reporter](https://github.com/codesport/gasgolf/blob/master/images/define-globals-gas-cost.png?raw=true)

## Assign Globals in Constructor
```
$ yarn ts-node scripts/define-constructor-deploy.ts
Using address 0x9E3...e03A
Wallet balance 9.978686068922924
Awaiting confirmations
Token Contract Address: 0x82e5Ec2A9F8744E87d91A2baB2663DAFE5770fF7
Wallet AFTER before deploying 9.978530472422198
```
9.978686068922924-9.97837653492148
**Gas Cost = 3.09534e-3**



## Assign Globals in Contract
```
$ yarn ts-node scripts/define-contract-deploy.ts
Using address  0x9E3...e03A
Wallet balance before deploying 9.978530472422198
Awaiting confirmations
Token Contract Address: 0xe01e9D582fd962084ef42cB2C33b6dDA3789588E
Wallet AFTER before deploying 9.97837653492148
```
9.978530472422198-9.97837653492148
**Gas Cost = 1.539375e-3**

## Resources

https://ethereum.stackexchange.com/a/106800/3506

> `const deploymentData = contract.interface.encodeDeploy([<constructor_arguments>])`
> Then, you could use the data to get the estimated gas limit as follows:
> 
> `const estimatedGas = await ethers.provider.estimateGas({ data: deploymentData });`

https://github.com/ethers-io/ethers.js/discussions/2439#discussioncomment-1857403

https://docs.ethers.io/v5/api/providers/provider/#Provider-getFeeData




# Creating a Spanking New Project Using Yarn

```
yarn set version berry
yarn --version
yarn init -y
yarn add --dev hardhat
yarn hardhat
```
Then choose: `Create an advanced sample project that uses TypeScript`

### Make Sure Everything Is Working

`yarn hardhat test`

If you get an error the following error: 

```
An unexpected error occurred:

Error: @typechain/hardhat tried to access lodash (a peer dependency) but it isn't provided by your application; this makes the require call ambiguous and unsound.

Required package: lodash
```

Follow the instructtions and install lodash:

`yarn add lodash`


If `process.env` is redlined and says `Cannot find name 'process'. Do you need to install type definitions for node?`

Do: 

```
yarn add dotenv
yarn install
```


## Harhat Boilerplate: Advanced Sample Hardhat Project

This project demonstrates an advanced Hardhat use case, integrating other tools commonly used alongside Hardhat in the ecosystem.

The project comes with a sample contract, a test for that contract, a sample script that deploys that contract, and an example of a task implementation, which simply lists the available accounts. It also comes with a variety of other tools, preconfigured to work with the project code.

Try running some of the following tasks:

```shell
npx hardhat accounts
npx hardhat compile
npx hardhat clean
npx hardhat test
npx hardhat node
npx hardhat help
REPORT_GAS=true npx hardhat test
npx hardhat coverage
npx hardhat run scripts/deploy.ts
TS_NODE_FILES=true npx ts-node scripts/deploy.ts
npx eslint '**/*.{js,ts}'
npx eslint '**/*.{js,ts}' --fix
npx prettier '**/*.{json,sol,md}' --check
npx prettier '**/*.{json,sol,md}' --write
npx solhint 'contracts/**/*.sol'
npx solhint 'contracts/**/*.sol' --fix
```

# Etherscan verification

To try out Etherscan verification, you first need to deploy a contract to an Ethereum network that's supported by Etherscan, such as Ropsten.

In this project, copy the .env.example file to a file named .env, and then edit it to fill in the details. Enter your Etherscan API key, your Ropsten node URL (eg from Alchemy), and the private key of the account which will send the deployment transaction. With a valid .env file in place, first deploy your contract:

```shell
hardhat run --network ropsten scripts/deploy.ts
```

Then, copy the deployment address and paste it in to replace `DEPLOYED_CONTRACT_ADDRESS` in this command:

```shell
npx hardhat verify --network ropsten DEPLOYED_CONTRACT_ADDRESS "Hello, Hardhat!"
```

# Performance optimizations

For faster runs of your tests and scripts, consider skipping ts-node's type checking by setting the environment variable `TS_NODE_TRANSPILE_ONLY` to `1` in hardhat's environment. For more details see [the documentation](https://hardhat.org/guides/typescript.html#performance-optimizations).
