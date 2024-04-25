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
    birtDate: Date;
    name: string;
    avatar: string;
    fee: number;
  }