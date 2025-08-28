
import React from 'react';
import type { ScenarioCategory, Wallet } from './types';
import { BankIcon } from './components/icons/BankIcon';
import { FileTextIcon } from './components/icons/FileTextIcon';
import { HomeIcon } from './components/icons/HomeIcon';
import { BriefcaseIcon } from './components/icons/BriefcaseIcon';
import { DollarSignIcon } from './components/icons/DollarSignIcon';
import { ShieldIcon } from './components/icons/ShieldIcon';
import { GiftIcon } from './components/icons/GiftIcon';
import { TrendingUpIcon } from './components/icons/TrendingUpIcon';
import { BoxIcon } from './components/icons/BoxIcon';
import { CreditCardIcon } from './components/icons/CreditCardIcon';

export const SCENARIO_CATEGORIES: ScenarioCategory[] = [
  {
    categoryTitle: "Banking and Financial Institutions",
    icon: <BankIcon />,
    scenarios: [
      { id: 1, title: 'Dormant Savings Accounts', description: 'Savings accounts with no customer-initiated activity for a statutory period.' },
      { id: 2, title: 'Inactive Checking Accounts', description: 'Checking accounts where the owner has not made any deposits or withdrawals.' },
      { id: 3, title: 'Unclaimed Certificates of Deposit (CDs)', description: 'Matured CDs that have not been redeemed or rolled over by the owner.' },
      { id: 4, title: 'Abandoned Safe Deposit Boxes', description: 'Contents of a safe deposit box where the rental period has expired.' },
      { id: 5, title: 'Uncashed Cashier\'s Checks', description: 'Checks issued by a bank that have not been presented for payment.' },
      { id: 6, title: 'Unclaimed Money Orders', description: 'Money orders that were purchased but never cashed.' },
      { id: 7, title: 'Dormant Christmas Club Accounts', description: 'Savings accounts for holiday spending that have been inactive.' },
      { id: 8, title: 'Inactive Foreign Currency Accounts', description: 'Accounts holding foreign currency with no owner contact.' },
      { id: 9, title: 'Unclaimed Bank Drafts', description: 'A check drawn by a bank on itself that remains uncashed.' },
      { id: 10, title: 'Dormant Trust Accounts', description: 'Trust funds held by a bank where the beneficiary cannot be found.' },
    ]
  },
  {
    categoryTitle: "Securities and Investments",
    icon: <TrendingUpIcon />,
    scenarios: [
        { id: 11, title: 'Uncashed Dividend Checks', description: 'Dividend payments issued to shareholders that are never cashed.' },
        { id: 12, title: 'Dormant Brokerage Accounts', description: 'Investment accounts with no activity or contact from the owner.' },
        { id: 13, title: 'Unclaimed Stock Certificates', description: 'Physical stock certificates that have been lost or forgotten.' },
        { id: 14, title: 'Abandoned Mutual Fund Accounts', description: 'Mutual fund shares that have been left untouched for an extended period.' },
        { id: 15, title: 'Unclaimed Matured Bonds', description: 'The principal of a bond that has matured but has not been claimed.' },
        { id: 16, title: 'Inactive Retirement Accounts (IRAs, 401(k)s)', description: 'Retirement accounts of former employees who have not rolled them over.' },
        { id: 17, title: 'Unclaimed Proceeds from a Stock Sale', description: 'Funds from the sale of securities that were never collected by the seller.' },
        { id: 18, title: 'Lost Bearer Bonds', description: 'Unregistered bonds for which ownership is determined by physical possession.' },
        { id: 19, title: 'Unclaimed Securities from a Demutualization', description: 'Stocks or cash issued to policyholders when a mutual company converts to a stock company.' },
        { id: 20, title: 'Unclaimed Digital Assets', description: 'Cryptocurrency held in an exchange where the owner has lost access.' },
    ]
  },
  {
    categoryTitle: "Insurance",
    icon: <ShieldIcon />,
    scenarios: [
        { id: 21, title: 'Unclaimed Life Insurance Proceeds', description: 'Death benefits where the beneficiary is unaware of the policy or cannot be found.' },
        { id: 22, title: 'Unclaimed Annuity Payments', description: 'Matured annuity contracts where payments have not been claimed by the annuitant.' },
        { id: 23, title: 'Unclaimed Health Insurance Premium Refunds', description: 'Overpayments of premiums that are not refunded to the policyholder.' },
        { id: 24, title: 'Unclaimed Auto Insurance Overpayments', description: 'Refunds due to policy changes or cancellations that are not claimed.' },
        { id: 25, title: 'Unclaimed Property and Casualty Insurance Claim Payments', description: 'Claim checks that are not cashed by the recipient.' },
        { id: 26, title: 'Demutualization Payments to Lost Policyholders', description: 'Payments sent that are returned as undeliverable.' },
        { id: 27, title: 'Unclaimed Credit Insurance Refunds', description: 'Refunds on insurance policies tied to loans that are paid off early.' },
        { id: 28, title: 'Unclaimed Long-Term Care Insurance Benefits', description: 'Benefits from a long-term care policy that are not claimed by the insured.' },
    ]
  },
  {
    categoryTitle: "Payroll and Employee Benefits",
    icon: <BriefcaseIcon />,
    scenarios: [
        { id: 29, title: 'Uncashed Payroll Checks', description: 'Salary or wage payments that are never cashed by an employee.' },
        { id: 30, title: 'Unclaimed Final Paychecks', description: 'The last paycheck of a former employee who did not collect it.' },
        { id: 31, title: 'Unclaimed Bonuses or Commissions', description: 'Additional compensation that was not paid out or collected.' },
        { id: 32, title: 'Unclaimed Pension Benefits', description: 'Pension payments for retired employees who cannot be located.' },
        { id: 33, title: 'Unclaimed 401(k) Rollover Checks', description: 'Checks for a 401(k) rollover that are never deposited into a new account.' },
        { id: 34, title: 'Unclaimed Expense Reimbursement Checks', description: 'Reimbursements for business expenses that are not cashed.' },
        { id: 35, title: 'Unclaimed Stock Options', description: 'Vested stock options that are never exercised by a former employee.' },
        { id: 36, title: 'Unclaimed Severance Pay', description: 'Severance packages that are not collected by a terminated employee.' },
    ]
  },
  {
    categoryTitle: "Government and Public Agencies",
    icon: <FileTextIcon />,
    scenarios: [
        { id: 37, title: 'Unclaimed State Tax Refunds', description: 'Tax refunds returned to the state due to an incorrect address.' },
        { id: 38, title: 'Unclaimed Local Property Tax Overpayments', description: 'Refunds for overpaid property taxes that are not claimed.' },
        { id: 39, title: 'Unclaimed Child Support Payments', description: 'Payments collected but not disbursed to the custodial parent.' },
        { id: 40, title: 'Unclaimed Court-Ordered Payments', description: 'Restitution or settlement funds from a court case that are not collected.' },
        { id: 41, title: 'Unclaimed Government Bonds', description: 'Matured savings bonds that have not been redeemed.' },
        { id: 42, title: 'Unclaimed State-Issued Vendor Payments', description: 'Payments to vendors for goods or services that are not cashed.' },
        { id: 43, title: 'Unclaimed Funds from Eminent Domain', description: 'Compensation for property seized by the government that is not claimed.' },
    ]
  },
  {
    categoryTitle: "Business and Commerce",
    icon: <CreditCardIcon />,
    scenarios: [
        { id: 44, title: 'Unredeemed Gift Cards and Certificates', description: 'The value of gift cards that are never used by the recipient.' },
        { id: 45, title: 'Unclaimed Customer Overpayments and Credits', description: 'Credit balances on customer accounts that are not used or refunded.' },
        { id: 46, title: 'Unclaimed Rebates', description: 'Rebate checks that are issued but never cashed.' },
        { id: 47, title: 'Unclaimed Security Deposits', description: 'Deposits for rentals or services that are not returned or claimed.' },
        { id: 48, title: 'Unclaimed Layaway Deposits', description: 'Money paid towards a layaway plan that is never completed or refunded.' },
        { id: 49, title: 'Unclaimed Merchandise Credits', description: 'Store credits issued for returned goods that are never used.' },
        { id: 50, title: 'Unclaimed Loyalty Program Rewards', description: 'Cash-equivalent rewards from a loyalty program that are not redeemed.' },
    ]
  },
  {
    categoryTitle: "Real Estate and Mineral Rights",
    icon: <HomeIcon />,
    scenarios: [
        { id: 51, title: 'Unclaimed Mineral Royalties', description: 'Payments to mineral rights owners from oil and gas production.' },
        { id: 52, title: 'Unclaimed Lease Bonus Payments', description: 'Upfront payments for signing a mineral lease that are not claimed.' },
        { id: 53, title: 'Suspended Oil and Gas Revenue', description: 'Production payments held in suspense due to title disputes.' },
        { id: 54, title: 'Unclaimed Condemnation Awards', description: 'Compensation from the government for seized property.' },
        { id: 55, title: 'Unclaimed Real Estate Sale Proceeds', description: 'Funds from a property sale held in escrow that are not disbursed.' },
    ]
  },
  {
    categoryTitle: "Utilities",
    icon: <DollarSignIcon />,
    scenarios: [
        { id: 56, title: 'Unclaimed Utility Deposits', description: 'Security deposits paid to utility companies that are not refunded.' },
        { id: 57, title: 'Unclaimed Utility Bill Overpayments', description: 'Credit balances on utility accounts that are not claimed by former customers.' },
        { id: 58, title: 'Unclaimed Capital Credits from Electric Cooperatives', description: 'Refunds to members of a cooperative that are not claimed.' },
        { id: 59, title: 'Unclaimed Refunds from Rate Reductions', description: 'Money owed to customers after a utility rate is lowered retroactively.' },
    ]
  },
  {
    categoryTitle: "Estates and Trusts",
    icon: <GiftIcon />,
    scenarios: [
        { id: 60, title: 'Unclaimed Inheritances', description: 'Assets from an estate where the heir cannot be located.' },
        { id: 61, title: 'Dormant Estate Accounts', description: 'Bank accounts set up for an estate that remain inactive.' },
        { id: 62, title: 'Unclaimed Funds from a Trust', description: 'Distributions from a trust that are not claimed by the beneficiary.' },
        { id: 63, title: 'Assets of Intestate Individuals', description: 'An entire estate is turned over to the state when no legal heirs can be found.' },
    ]
  },
  {
    categoryTitle: "Miscellaneous and Unique Situations",
    icon: <BoxIcon />,
    scenarios: [
        { id: 64, title: 'Unclaimed Prize Winnings', description: 'Winnings from lotteries or sweepstakes that are not collected by the winner.' },
        { id: 65, title: 'Unclaimed Royalties (Book, Music, Patent)', description: 'Payments to creators or inventors that are not claimed.' },
        { id: 66, title: 'Unclaimed Health Care Refunds', description: 'Overpayments to hospitals or doctors that are not refunded to the patient.' },
        { id: 67, title: 'Unclaimed Education-Related Funds', description: 'Tuition refunds or dormitory deposits not claimed by a former student.' },
        { id: 68, title: 'Unclaimed Traveler\'s Checks', description: 'Traveler\'s checks that are never used or cashed.' },
        { id: 69, title: 'Unclaimed Class Action Lawsuit Settlements', description: 'Settlement funds that are not claimed by eligible class members.' },
        { id: 70, title: 'Unclaimed Storage Unit Auction Proceeds', description: 'Excess funds from the auction of contents of an abandoned storage unit.' },
        { id: 71, title: 'Unclaimed Mobile Payment App Balances', description: 'Balances in accounts like Venmo or PayPal that have been dormant.' },
    ]
  }
];

export const INITIAL_WALLET_DATA: Wallet = {
  traditional: {
    bankName: 'Linked Bank Account',
    balance: 12450.75,
  },
  crypto: [
    {
      name: 'Bitcoin',
      symbol: 'BTC',
      balance: 0.752,
      usdValue: 49875.33,
    },
    {
      name: 'Ethereum',
      symbol: 'ETH',
      balance: 12.5,
      usdValue: 37500.00,
    },
    {
      name: 'Solana',
      symbol: 'SOL',
      balance: 150.8,
      usdValue: 22620.00,
    }
  ],
};
