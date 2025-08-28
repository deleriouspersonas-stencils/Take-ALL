
import React, { useState, useCallback } from 'react';
import { Header } from './components/Header';
import { FortunaWallet } from './components/FortunaWallet';
import { ScenarioCard } from './components/ScenarioCard';
import { ScanResultModal } from './components/ScanResultModal';
import { SCENARIO_CATEGORIES, INITIAL_WALLET_DATA } from './constants';
import { generateUnclaimedAssets } from './services/geminiService';
import type { Scenario, Asset, Wallet } from './types';

const App: React.FC = () => {
  const [isScanningId, setIsScanningId] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<false | 'results' | 'error'>(false);
  const [scanResults, setScanResults] = useState<Asset[]>([]);
  const [selectedScenario, setSelectedScenario] = useState<Scenario | null>(null);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [walletData, setWalletData] = useState<Wallet>(INITIAL_WALLET_DATA);

  const handleScan = useCallback(async (scenario: Scenario) => {
    setIsScanningId(scenario.id);
    setSelectedScenario(scenario);
    setScanResults([]);

    try {
      const assets = await generateUnclaimedAssets(scenario.title);
      setScanResults(assets);
      setIsModalOpen('results');
    } catch (error) {
      console.error("Error scanning for assets:", error);
      const message = error instanceof Error ? error.message : "An unknown error occurred. Please try again.";
      setErrorMessage(`Failed to fetch results for "${scenario.title}". ${message}`);
      setIsModalOpen('error');
    } finally {
      setIsScanningId(null);
    }
  }, []);

  const handleClaimAssets = (claimedAssets: Asset[]) => {
    const totalClaimed = claimedAssets.reduce((sum, asset) => sum + asset.amount, 0);

    // 1. Update wallet balance
    setWalletData(prev => ({
      ...prev,
      traditional: {
        ...prev.traditional,
        balance: prev.traditional.balance + totalClaimed
      }
    }));

    // 2. Mark assets as claimed for the modal UI
    const claimedIndices = new Set(
        claimedAssets.map(claimedAsset => 
            scanResults.findIndex(result => 
                result.ownerName === claimedAsset.ownerName && 
                result.amount === claimedAsset.amount && 
                result.source === claimedAsset.source &&
                !result.claimed
            )
        )
    );
    
    setScanResults(prevResults => prevResults.map((asset, index) => {
        if (claimedIndices.has(index)) {
            return { ...asset, claimed: true };
        }
        return asset;
    }));
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedScenario(null);
    setScanResults([]);
    setErrorMessage('');
  };

  return (
    <div className="min-h-screen bg-brand-primary font-sans">
      <Header />
      <main className="container mx-auto p-4 md:p-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8">
            <h1 className="text-3xl font-bold text-brand-text mb-2">Discovery Scenarios</h1>
            <p className="text-brand-light mb-6">Select a scenario to scan for potential unclaimed assets across thousands of sources.</p>
            <div className="space-y-12">
              {SCENARIO_CATEGORIES.map((category) => (
                <section key={category.categoryTitle}>
                  <div className="flex items-center mb-4">
                     <div className="p-2 bg-brand-accent rounded-full mr-3 text-brand-highlight">
                        {category.icon}
                    </div>
                    <h2 className="text-2xl font-semibold text-brand-text">{category.categoryTitle}</h2>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                    {category.scenarios.map((scenario) => (
                      <ScenarioCard
                        key={scenario.id}
                        scenario={scenario}
                        icon={category.icon}
                        isScanning={isScanningId === scenario.id}
                        onScan={() => handleScan(scenario)}
                      />
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </div>
          <aside className="lg:col-span-4">
            <FortunaWallet wallet={walletData} />
            <div className="mt-8 bg-brand-secondary p-6 rounded-lg shadow-lg">
                <h3 className="font-bold text-lg mb-3 text-brand-text">Corporate & Enterprise</h3>
                <p className="text-brand-light mb-4 text-sm">
                    Upgrade to "Full Coverage Corporate" for multi-user accounts, advanced reporting, and bulk scanning capabilities.
                </p>
                <button className="w-full bg-brand-highlight hover:bg-green-500 text-white font-bold py-2 px-4 rounded-lg transition-colors duration-300">
                    Learn More
                </button>
            </div>
          </aside>
        </div>
      </main>

      {isModalOpen === 'results' && selectedScenario && (
        <ScanResultModal
          scenario={selectedScenario}
          assets={scanResults}
          onClose={closeModal}
          onClaim={handleClaimAssets}
        />
      )}

      {isModalOpen === 'error' && (
         <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50 p-4">
            <div className="bg-brand-secondary rounded-lg shadow-2xl p-8 max-w-md w-full text-center">
                <h2 className="text-2xl font-bold text-red-500 mb-4">Scan Failed</h2>
                <p className="text-brand-light mb-6">{errorMessage}</p>
                <button
                    onClick={closeModal}
                    className="bg-brand-accent hover:bg-brand-light text-white font-bold py-2 px-6 rounded-lg transition-colors duration-300"
                >
                    Close
                </button>
            </div>
        </div>
      )}
    </div>
  );
};

export default App;
