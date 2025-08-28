
import React from 'react';
import type { Wallet } from '../types';

interface FortunaWalletProps {
  wallet: Wallet;
}

const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(amount);
};

export const FortunaWallet: React.FC<FortunaWalletProps> = ({ wallet }) => {
  const totalCryptoValue = wallet.crypto.reduce((acc, curr) => acc + curr.usdValue, 0);
  const totalBalance = wallet.traditional.balance + totalCryptoValue;

  return (
    <div className="bg-brand-secondary p-6 rounded-lg shadow-lg sticky top-8">
      <h2 className="text-xl font-bold mb-1 text-brand-text">Fortuna Wallet</h2>
      <p className="text-xs text-brand-light mb-4">E2E Encrypted Financial Hub</p>
      
      <div className="mb-6">
        <p className="text-sm text-brand-light">Total Estimated Balance</p>
        <p className="text-3xl font-bold text-brand-highlight">{formatCurrency(totalBalance)}</p>
      </div>

      <div className="space-y-4">
        <div>
          <h3 className="font-semibold text-brand-text mb-2 border-b border-brand-accent pb-1">Traditional Assets</h3>
          <div className="flex justify-between items-center">
            <span className="text-brand-light">{wallet.traditional.bankName}</span>
            <span className="font-medium text-brand-text">{formatCurrency(wallet.traditional.balance)}</span>
          </div>
        </div>

        <div>
          <h3 className="font-semibold text-brand-text mb-2 border-b border-brand-accent pb-1">Digital Assets</h3>
          <div className="space-y-2">
            {wallet.crypto.map((asset) => (
              <div key={asset.symbol} className="flex justify-between items-center">
                <div>
                  <p className="font-medium text-brand-text">{asset.name}</p>
                  <p className="text-xs text-brand-light">{asset.balance} {asset.symbol}</p>
                </div>
                <span className="font-medium text-brand-text">{formatCurrency(asset.usdValue)}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
       <div className="mt-6 flex space-x-2">
            <button className="flex-1 bg-brand-accent hover:bg-brand-light text-white font-bold py-2 px-4 rounded-lg transition-colors duration-300 text-sm">
                Send
            </button>
            <button className="flex-1 bg-brand-accent hover:bg-brand-light text-white font-bold py-2 px-4 rounded-lg transition-colors duration-300 text-sm">
                Receive
            </button>
        </div>
    </div>
  );
};
