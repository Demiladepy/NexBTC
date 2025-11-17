export interface Wallet {
  id: 'plug' | 'stoic' | 'infinity';
  name: string;
  address?: string;
  balance?: string;
  connected?: boolean;
}
