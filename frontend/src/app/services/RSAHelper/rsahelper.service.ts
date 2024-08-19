import { Injectable } from "@angular/core";
import * as Forge from "node-forge";

@Injectable({
  providedIn: "root",
})
export class RSAHelperService {
  publicKey: string =
    "LS0tLS1CRUdJTiBQVUJMSUMgS0VZLS0tLS0KTUlHZk1BMEdDU3FHU0liM0RRRUJBUVVBQTRHTkFEQ0JpUUtCZ1FDUFV6VCs3TWxlcDEyVWFUZXdvTFRQZk5LRwp1M3FqNmtyMEUzSXRDUHJlajE0U3RsMStmcTc0eEJWdjNGODAvdHpBUmd3cEJsV2JVQ29vL3lkMEVwcE54b1FjCnVpUXc4c2pmaUVTVVF6ZjJJQXBQRHRVakZGblBUT3NzNlA3dXMvSklxKzBGcXdvVHJtdzNHWXErNUFjRmNvdFkKMjRFY1BocDdlR2hxU2RDTDF3SURBUUFCCi0tLS0tRU5EIFBVQkxJQyBLRVktLS0tLQ==";

  constructor() {}

  public encryptWithPublicKey(valueToEncrypt: string): string {
    const rsa = Forge.pki.publicKeyFromPem(atob(this.publicKey));
    return btoa(rsa.encrypt(valueToEncrypt.toString()));
  }
}
