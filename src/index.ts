import { ethers } from "hardhat";

function getEth() {
    //@ts-ignore
    const eth = window.etherum;
    if(!eth) {
        throw new Error("get the metamask");        
    }
    return eth;
}

async function hasAccounts() {
    const eth = getEth();
    const accounts = await eth.request({method: "eth_acccounts"}) as string[];

    return accounts && accounts.length; 
}

async function requestAccounts() {
    const eth = getEth();
    const accounts = await eth.request({method: "eth_requestAcccounts"}) as string[];

    return accounts && accounts.length;
}

async function run() {
    if(!await hasAccounts() && !await requestAccounts()) {
        throw new Error("Plase let me take your money..");
    }
    const hello = new ethers.Contract(
        "0x58b508a6ae5cf104e78a70f2da98a60b3a897146",
        [
            "function hello() public pure returns (string memory)",
        ],
        new ethers.providers.Web3Provider(getEth()),
    )

    document.body.innerHTML = await hello.hello();
}

run();