
import type React from 'react';

export interface Scenario {
  id: number;
  title: string;
  description: string;
}

export interface ScenarioCategory {
  categoryTitle: string;
  icon: React.ReactNode;
  scenarios: Scenario[];
}

export interface Asset {
  ownerName: string;
  lastKnownAddress: string;
  amount: number;
  source: string;
  claimed?: boolean;
}

export interface Wallet {
  traditional: {
    bankName: string;
    balance: number;
  };
  crypto: {
    name: string;
    symbol: string;
    balance: number;
    usdValue: number;
  }[];
}
