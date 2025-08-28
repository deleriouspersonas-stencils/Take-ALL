
import React, { useState, useMemo } from 'react';
import type { Scenario, Asset } from '../types';

interface ScanResultModalProps {
  scenario: Scenario;
  assets: Asset[];
  onClose: () => void;
  onClaim: (assets: Asset[]) => void;
}

const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(amount);
};

export const ScanResultModal: React.FC<ScanResultModalProps> = ({ scenario, assets, onClose, onClaim }) => {
    const totalFound = assets.reduce((sum, asset) => sum + asset.amount, 0);
    const [selectedIndices, setSelectedIndices] = useState<Set<number>>(new Set());
    const [isClaiming, setIsClaiming] = useState(false);

    const handleSelect = (index: number) => {
        setSelectedIndices(prev => {
            const newSet = new Set(prev);
            if (newSet.has(index)) {
                newSet.delete(index);
            } else {
                newSet.add(index);
            }
            return newSet;
        });
    };

    const handleClaim = () => {
        setIsClaiming(true);
        const assetsToClaim = assets.filter((_, index) => selectedIndices.has(index));
        onClaim(assetsToClaim);
        setSelectedIndices(new Set());
        // Simple timeout to simulate processing
        setTimeout(() => setIsClaiming(false), 500);
    };

    const selectedTotal = useMemo(() => {
        return assets.reduce((sum, asset, index) => {
            if (selectedIndices.has(index)) {
                return sum + asset.amount;
            }
            return sum;
        }, 0);
    }, [assets, selectedIndices]);


  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50 p-4" role="dialog" aria-modal="true" aria-labelledby="scan-results-title">
      <div className="bg-brand-secondary rounded-lg shadow-2xl p-6 md:p-8 max-w-3xl w-full max-h-[90vh] flex flex-col">
        <div className="flex justify-between items-start mb-4">
            <div>
                 <h2 id="scan-results-title" className="text-2xl font-bold text-brand-highlight">{scenario.title}</h2>
                 <p className="text-brand-light">Scan Results</p>
            </div>
          <button onClick={onClose} className="text-brand-light hover:text-brand-text text-2xl font-bold" aria-label="Close modal">&times;</button>
        </div>
        
        {assets.length > 0 ? (
            <>
                <div className="bg-brand-primary p-4 rounded-lg mb-4 text-center">
                    <p className="text-brand-light">Total Potential Value Found</p>
                    <p className="text-3xl font-bold text-brand-highlight">{formatCurrency(totalFound)}</p>
                </div>
                <div className="overflow-y-auto flex-grow pr-2 -mr-2">
                    <div className="space-y-4">
                    {assets.map((asset, index) => (
                        <div key={index} className={`p-4 rounded-lg transition-colors ${asset.claimed ? 'bg-gray-700 opacity-60' : 'bg-brand-primary'}`}>
                          <div className="flex items-start">
                            <div className="flex-shrink-0 mt-1 mr-4">
                               <input
                                    type="checkbox"
                                    id={`asset-${index}`}
                                    className="h-5 w-5 rounded bg-brand-accent border-brand-light text-brand-highlight focus:ring-brand-highlight disabled:opacity-50"
                                    checked={selectedIndices.has(index)}
                                    onChange={() => handleSelect(index)}
                                    disabled={!!asset.claimed}
                                    aria-label={`Select asset from ${asset.source} for ${formatCurrency(asset.amount)}`}
                                />
                            </div>
                            <div className="flex-grow">
                                <p className="font-bold text-lg text-brand-text">{asset.ownerName}</p>
                                <p className="text-sm text-brand-light">{asset.lastKnownAddress}</p>
                                <p className="text-sm text-brand-accent">Source: {asset.source}</p>
                            </div>
                            <div className="text-right flex-shrink-0 ml-4">
                                <p className="font-bold text-lg text-green-400">{formatCurrency(asset.amount)}</p>
                                {asset.claimed && (
                                    <span className="text-xs bg-brand-highlight text-white font-bold py-1 px-2 rounded-full mt-1 inline-block">Claimed</span>
                                )}
                            </div>
                          </div>
                        </div>
                    ))}
                    </div>
                </div>
            </>
        ) : (
          <div className="text-center py-12">
            <p className="text-lg text-brand-light">No potential assets found for this scenario.</p>
            <p className="text-sm text-brand-accent">Try running another scan or check back later.</p>
          </div>
        )}

        <div className="mt-6 border-t border-brand-accent pt-4 flex justify-between items-center">
          <div>
            {selectedTotal > 0 && (
                <p className="text-brand-light">
                    Selected: <span className="font-bold text-brand-highlight">{formatCurrency(selectedTotal)}</span>
                </p>
            )}
          </div>
          <div className="flex items-center space-x-4">
            <button
              onClick={onClose}
              className="bg-brand-accent hover:bg-brand-light text-white font-bold py-2 px-6 rounded-lg transition-colors duration-300"
            >
              Close
            </button>
             {assets.some(a => !a.claimed) && (
                 <button
                    onClick={handleClaim}
                    disabled={selectedIndices.size === 0 || isClaiming}
                    className="bg-brand-highlight hover:bg-green-500 text-white font-bold py-2 px-6 rounded-lg transition-colors duration-300 disabled:bg-gray-600 disabled:cursor-not-allowed"
                >
                    {isClaiming ? 'Claiming...' : `Claim Selected (${selectedIndices.size})`}
                </button>
             )}
          </div>
        </div>
      </div>
    </div>
  );
};
