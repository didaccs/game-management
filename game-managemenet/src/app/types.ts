export interface Game {
    id: number;
    name: string;
    date: Date;
    status: boolean;
    location: string;
    officials?: Official[];
  }

  export interface Official {
    id: number;
    name: string;
    fee: number;
  }