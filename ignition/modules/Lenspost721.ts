import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const Lenspost721 = buildModule("Lenspost721", (m) => {

  // address _defaultAdmin,
  // string memory _name,
  // string memory _symbol,
  // address _royaltyRecipient,
  // uint128 _royaltyBps,
  // address _primarySaleRecipient
  const lenspost = m.contract("Lenspost721", ["0x0CF97e9C28C5b45C9Dc20Dd8c9d683E0265190CB","LENSPOST","LP","0x0CF97e9C28C5b45C9Dc20Dd8c9d683E0265190CB",500,"0x0CF97e9C28C5b45C9Dc20Dd8c9d683E0265190CB"]);

  return { lenspost };
});

export default Lenspost721;
