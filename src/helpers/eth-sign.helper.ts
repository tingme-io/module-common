import { recoverPersonalSignature } from '@metamask/eth-sig-util';
import { bufferToHex } from 'ethereumjs-util';

export class EthSignHelper {
  public static recoverSignature(rawMessage: string, signed: string): string {
    const msgBufferHex = bufferToHex(Buffer.from(rawMessage, 'utf8'));
    return recoverPersonalSignature({
      data: msgBufferHex,
      signature: signed,
    });
  }
}
