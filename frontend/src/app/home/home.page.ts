import { Component } from "@angular/core";
import { RSAHelperService } from "../services/RSAHelper/rsahelper.service";
import { AESHelperService } from "../services/AESHelper/aeshelper.service";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage {
  public valueToEncrypt = "";
  public valueEncrypted = "";
  public valueToDecrypt = "";
  public aesKey = "";
  public plainValue = "";

  constructor(
    private rsaHelper: RSAHelperService,
    private aesHelper: AESHelperService,
  ) {}

  clickToEncrypt() {
    // 1. generate aes key
    const aesKeyValue = this.aesHelper.aesKey();
    console.log("aesKeyValue", aesKeyValue);
    // 2. encrypt aes key
    const rsaKey = this.rsaHelper.encryptWithPublicKey(aesKeyValue);
    // 3 encryptValues
    const value = {
      textEncrypted: this.aesHelper.encrypt(this.valueToEncrypt),
      aesKey: rsaKey,
    };

    this.valueEncrypted = JSON.stringify(value);
  }

  clickToDecrypt() {
    console.log("valores", {
      cipherText: this.valueToDecrypt,
      aesKey: this.aesKey,
    });
    this.plainValue = this.aesHelper.decrypt(this.valueToDecrypt, this.aesKey);

    console.log("click", this.plainValue);
  }
}
