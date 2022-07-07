# Gas Golf Challenge: Assigning Values in Constructor vs In-Contract

[@MatheusDaros](https://github.com/MatheusDaros) 

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

1. https://ethereum.stackexchange.com/a/106800/3506

> `const deploymentData = contract.interface.encodeDeploy([<constructor_arguments>])`
> Then, you could use the data to get the estimated gas limit as follows:
> 
> `const estimatedGas = await ethers.provider.estimateGas({ data: deploymentData });`

2. @ricmoo comment on getFeeData: https://github.com/ethers-io/ethers.js/discussions/2439#discussioncomment-1857403

3. ethers.js docs: https://docs.ethers.io/v5/api/providers/provider/#Provider-getFeeData

4.  Meme from [@vplasencia](https://github.com/vplasencia)

    ![Gas Golf Meme](https://github.com/codesport/gasgolf/blob/master/images/gas-golf.png?raw=true)


# How to Create a New Project Using Yarn

```
yarn set version berry
yarn --version
yarn init -y
yarn add --dev hardhat
yarn hardhat
```
Then choose: `Create an advanced sample project that uses TypeScript`

### Make Sure Everything Is Working: `Lodash` and `Process`

`yarn hardhat test`



1. **If you get an error the following `lodash` error:** 

```
An unexpected error occurred:

Error: @typechain/hardhat tried to access lodash (a peer dependency) but it isn't provided 
by your application; this makes the require call ambiguous and unsound.

Required package: lodash
```

Follow the instructions and install lodash:

`yarn add lodash`


2. **If `process.env` is redlined and says `Cannot find name 'process'. Do you need to install type definitions for node?`** 

Do: 

```
yarn add dotenv
yarn install
```

