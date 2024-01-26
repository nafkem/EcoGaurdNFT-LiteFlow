const hre = require("hardhat");
async function main() {

 //Contract Deployment
 const Ecoguard = await ethers.deployContract("Ecoguard");
 await Ecoguard.waitForDeployment();
 console.log(`Ecoguard  deployed to ${Ecoguard.target}`);

}
  main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
  





