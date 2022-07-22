import { Injectable } from '@angular/core';
import {Blockchain} from 'SavjeeCoin/src/blockchain'
import EC from "elliptic";


@Injectable({
  providedIn: 'root'
})
export class BlockchainService {

  public blockchaibInstance = new Blockchain;
  public walletKeys = [];

  constructor() { }
}
