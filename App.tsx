import React, { useState, useMemo } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Card } from './components/Card';
import { ToggleSwitch } from './components/ToggleSwitch';
import { FRUITS, RARITY_COLORS } from './constants';
import type { FruitEspState } from './types';
import { NumberInput } from './components/NumberInput';
import { Dropdown } from './components/Dropdown';

const App: React.FC = () => {
  const initialFruitState = useMemo(() => {
    return FRUITS.reduce((acc, fruit) => {
      acc[fruit.name] = false;
      return acc;
    }, {} as { [key: string]: boolean });
  }, []);

  const [fruitEspState, setFruitEspState] = useState<FruitEspState>({
    masterEnabled: false,
    fruits: initialFruitState,
  });

  const [autoLevelEnabled, setAutoLevelEnabled] = useState<boolean>(false);
  const [targetLevel, setTargetLevel] = useState<number>(700);
  const [levelingMethod, setLevelingMethod] = useState<string>('Fastest');


  const handleMasterFruitEspToggle = (enabled: boolean) => {
    setFruitEspState(prevState => ({
      ...prevState,
      masterEnabled: enabled,
    }));
  };

  const handleFruitToggle = (fruitName: string) => {
    setFruitEspState(prevState => ({
      ...prevState,
      fruits: {
        ...prevState.fruits,
        [fruitName]: !prevState.fruits[fruitName],
      },
    }));
  };

  const handleAutoLevelToggle = (enabled: boolean) => {
    setAutoLevelEnabled(enabled);
  };

  const handleTargetLevelChange = (level: number) => {
    setTargetLevel(level);
  };

  const handleLevelingMethodChange = (method: string) => {
    setLevelingMethod(method);
  };

  return (
    <div className="min-h-screen bg-slate-900 font-sans p-4 flex flex-col items-center antialiased">
      <div className="w-full max-w-2xl">
        <Header />
        <main className="flex flex-col gap-6">
          {/* Fruit ESP Card */}
          <Card
            title="Fruit ESP"
            headerContent={
              <ToggleSwitch
                label="Enable All"
                enabled={fruitEspState.masterEnabled}
                onChange={handleMasterFruitEspToggle}
              />
            }
          >
            <p className="text-sm text-slate-400 mb-4">
              Displays the location of fruits on the map. Toggle individual fruits you want to find.
            </p>
            <div
              className={`grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-3 transition-opacity duration-300 ${
                !fruitEspState.masterEnabled ? 'opacity-50 pointer-events-none' : 'opacity-100'
              }`}
            >
              {FRUITS.map(fruit => (
                <ToggleSwitch
                  key={fruit.name}
                  label={fruit.name}
                  enabled={fruitEspState.fruits[fruit.name]}
                  onChange={() => handleFruitToggle(fruit.name)}
                  labelClassName={`${RARITY_COLORS[fruit.rarity]} transition-colors`}
                />
              ))}
            </div>
          </Card>

          {/* Auto Level Card */}
          <Card title="Auto Level">
            <div className="flex flex-col gap-4">
              <p className="text-sm text-slate-400">
                Automatically levels up your character using the required items and skills. This feature will intelligently manage your progression.
              </p>
              <div className="pt-2">
                <ToggleSwitch
                  label="Enable Auto Leveling"
                  enabled={autoLevelEnabled}
                  onChange={handleAutoLevelToggle}
                  labelClassName="text-slate-100 font-semibold text-base"
                />
              </div>
            </div>
          </Card>

           {/* Auto Leveling Settings Card */}
           <Card title="Auto Leveling Settings">
            <div className={`flex flex-col gap-4 transition-opacity duration-300 ${!autoLevelEnabled ? 'opacity-50 pointer-events-none' : 'opacity-100'}`}>
              <NumberInput
                label="Target Level"
                value={targetLevel}
                onChange={handleTargetLevelChange}
                min={1}
                max={2450}
              />
              <Dropdown
                label="Leveling Method"
                options={['Fastest', 'Balanced', 'Safe']}
                selectedValue={levelingMethod}
                onChange={handleLevelingMethodChange}
              />
            </div>
          </Card>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;