import { expect } from "chai";
import { ethers } from "hardhat";
// eslint-disable-next-line node/no-missing-import
import { DefineInContract } from "../typechain";

describe("Gas Golf 2: Assign Variables inside Contract", function () {
    let contract: DefineInContract;
  

  
    describe("when the contract is deployed", function () {
      it("succesfully deploys", async function () {

        const factory = await ethers.getContractFactory("DefineInContract");
        contract = await factory.deploy()
          
        await contract.deployed();
      });

    })

})    