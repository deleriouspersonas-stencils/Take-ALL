
import React from 'react';
import type { Scenario } from '../types';
import { LoadingSpinner } from './icons/LoadingSpinner';

interface ScenarioCardProps {
  scenario: Scenario;
  isScanning: boolean;
  onScan: (scenario: Scenario) => void;
  icon: React.ReactNode;
}

export const ScenarioCard: React.FC<ScenarioCardProps> = ({ scenario, isScanning, onScan, icon }) => {
  return (
    <div className="bg-brand-secondary rounded-lg shadow-lg p-6 flex flex-col justify-between transition-transform transform hover:-translate-y-1 hover:shadow-2xl">
      <div>
        <div className="flex items-center mb-4">
          <div className="p-2 bg-brand-accent rounded-full mr-4 text-brand-highlight">
            {icon}
          </div>
          <h3 className="text-lg font-bold text-brand-text">{scenario.title}</h3>
        </div>
        <p className="text-brand-light text-sm mb-6">{scenario.description}</p>
      </div>
      <button
        onClick={() => onScan(scenario)}
        disabled={isScanning}
        className="w-full bg-brand-accent hover:bg-brand-light text-white font-bold py-2 px-4 rounded-lg transition-colors duration-300 flex items-center justify-center disabled:bg-gray-600 disabled:cursor-not-allowed"
      >
        {isScanning ? (
          <>
            <LoadingSpinner className="w-5 h-5 mr-2" />
            Scanning...
          </>
        ) : (
          'Run Scan'
        )}
      </button>
    </div>
  );
};
