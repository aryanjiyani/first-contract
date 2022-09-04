import "@nomiclabs/hardhat-ethers";
import { ethers } from "hardhat";

async function foo() {
    const helloworld = await ethers.getContractFactory("helloworld");
    const hello = await helloworld.deploy();
    await hello.deployed();
    return hello;
}

async function deploy()  {
    const hello = await foo();
    return hello; 
}

// @ts-ignore
async function sayHello(hello) {
    console.log("Say Hello:", await hello.hello());
}

deploy().then(sayHello);