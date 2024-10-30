import * as anchor from "@coral-xyz/anchor";
import { Program } from "@coral-xyz/anchor";
import { Pay } from "../target/types/pay";

describe("pay", () => {
  // Configure the client to use the local cluster.

  const provider = anchor.AnchorProvider.env();
  anchor.setProvider(provider);
  const program = anchor.workspace.Pay as Program<Pay>;

  const connection = provider.connection;

  console.log("payer: ", provider.wallet.publicKey.toBase58());

  const TOKEN_IN = new anchor.web3.PublicKey(
    "So11111111111111111111111111111111111111112"
  );
  const TOKEN_OUT = new anchor.web3.PublicKey(
    "BakLYNXdUFiSKKm14HESawEpiMe8z9Tr3ynKKV1CFXZ6"
  );

  it("Is swapped!", async () => {
  });
});
