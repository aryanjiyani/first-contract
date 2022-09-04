import "@nomiclabs/hardhat-ethers";
import { ethers } from "hardhat";
import { expect } from "chai";

// describe("Hello world", () => {
//     it("should get the hello world", async () => {
//         const HW = await ethers.getContractFactory("HelloWorld");
//         const hello = await HW.deploy();

//         expect(await hello.hello()).to.equal("Hello, World");
//     });
// });

 describe("hello world", function() {
    it("should say hi", async function() {
        // 1. setup env.
        // 2. deploy our contract
        // 3. call our functions to test
        // 2)
        const HelloWorld = await ethers.getContractFactory("HelloWorld");
        const hello = await HelloWorld.deploy();
        await hello.deployed();

        expect(await hello.hello()).to.equal("Hello, World");
    });
});
