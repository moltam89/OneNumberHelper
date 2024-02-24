const { BigNumber, ethers, utils } = require("ethers");

const main = () => {
	console.log("yo");

	const number = 1;
	const secret = "yourSecret"

	const blindedNumber = getKeccak256(number, secret);

	console.log(number, blindedNumber);
}

const getKeccak256= (number, secret) => {
  return utils.solidityKeccak256([ "uint256", "string" ], [ number, secret ]);  
}

main();