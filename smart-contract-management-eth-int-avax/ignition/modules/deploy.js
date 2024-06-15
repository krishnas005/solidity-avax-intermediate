async function main() {
  const BankApp = await ethers.getContractFactory("BankApp");
  const bankApp = await BankApp.deploy();

  await bankApp.waitForDeployment();

  console.log("BankApp deployed to:", bankApp.runner.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
