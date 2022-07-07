import { expect } from "chai";
import { ethers } from "hardhat";
// eslint-disable-next-line node/no-missing-import
import { DefineInConstructor } from "../typechain";

describe("Gas Golf 1: Assign Variables in Constructor", function () {
    let contract: DefineInConstructor;
  

    describe("when the contract is deployed", function () {
      it("constructor parameters are assigned to globals", async function () {
        const factory = await ethers.getContractFactory("DefineInConstructor");
        contract = await factory.deploy( 2022 )
          
        await contract.deployed();
      });

    })

})    