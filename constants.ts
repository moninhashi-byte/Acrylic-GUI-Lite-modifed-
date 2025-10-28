
import type { Fruit, Rarity } from './types';

export const FRUITS: Fruit[] = [
  { name: 'Rocket', rarity: 'Common' },
  { name: 'Spin', rarity: 'Common' },
  { name: 'Chop', rarity: 'Common' },
  { name: 'Spring', rarity: 'Common' },
  { name: 'Bomb', rarity: 'Common' },
  { name: 'Smoke', rarity: 'Uncommon' },
  { name: 'Spike', rarity: 'Uncommon' },
  { name: 'Flame', rarity: 'Uncommon' },
  { name: 'Falcon', rarity: 'Uncommon' },
  { name: 'Ice', rarity: 'Rare' },
  { name: 'Sand', rarity: 'Rare' },
  { name: 'Dark', rarity: 'Rare' },
  { name: 'Light', rarity: 'Rare' },
  { name: 'Magma', rarity: 'Rare' },
  { name: 'Barrier', rarity: 'Rare' },
  { name: 'Rubber', rarity: 'Rare' },
  { name: 'Quake', rarity: 'Legendary' },
  { name: 'Buddha', rarity: 'Legendary' },
  { name: 'Love', rarity: 'Legendary' },
  { name: 'Phoenix', rarity: 'Mythical' },
  { name: 'Rumble', rarity: 'Legendary' },
  { name: 'Paw', rarity: 'Legendary' },
  { name: 'Gravity', rarity: 'Mythical' },
  { name: 'Dough', rarity: 'Mythical' },
  { name: 'Shadow', rarity: 'Mythical' },
  { name: 'Venom', rarity: 'Mythical' },
  { name: 'Control', rarity: 'Mythical' },
  { name: 'Soul', rarity: 'Mythical' },
  { name: 'Dragon', rarity: 'Mythical' },
];

export const RARITY_COLORS: { [key in Rarity]: string } = {
  Common: 'text-gray-300 hover:text-white',
  Uncommon: 'text-green-400 hover:text-green-300',
  Rare: 'text-blue-400 hover:text-blue-300',
  Legendary: 'text-purple-400 hover:text-purple-300',
  Mythical: 'text-red-500 hover:text-red-400',
};
