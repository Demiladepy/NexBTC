import type { Wallet } from '../../types/wallet.types';

// NOTE: Replace stubs with real wallet SDK integrations
export async function connectPlug(): Promise<Wallet> {
  await new Promise((r) => setTimeout(r, 300));
  return {
    id: 'plug',
    name: 'Plug',
    connected: true,
    address: 'plug-test-abc123',
    balance: '0.0',
  };
}

export async function connectStoic(): Promise<Wallet> {
  await new Promise((r) => setTimeout(r, 200));
  return {
    id: 'stoic',
    name: 'Stoic',
    connected: true,
    address: 'stoic-xyz789',
    balance: '0.0',
  };
}

export async function connectInfinity(): Promise<Wallet> {
  await new Promise((r) => setTimeout(r, 250));
  return {
    id: 'infinity',
    name: 'Infinity',
    connected: true,
    address: 'inf-0xFAKE',
    balance: '0.0',
  };
}
