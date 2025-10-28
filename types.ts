
export type Rarity = 'Common' | 'Uncommon' | 'Rare' | 'Legendary' | 'Mythical';

export interface Fruit {
  name: string;
  rarity: Rarity;
}

export interface FruitEspState {
  masterEnabled: boolean;
  fruits: { [fruitName: string]: boolean };
}
