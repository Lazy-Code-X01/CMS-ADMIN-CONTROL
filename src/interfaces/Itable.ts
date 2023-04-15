export interface ItopCustomers extends Object {
  username: string;
  order: number;
  price: string;
}

export type TlatestTransactions = {
  orderId: string;
  customer: string;
  totalPrice: string;
  date: string;
  status: string;
};

export interface IcustomersTable {
  ID: number | string;
  userName: string;
  avatar: string;
  email: string;
  phoneNumber: string;
  totalOrders: number;
  totalSpend: string;
  location: string;
}

export interface IProductsTable {
  ID: number | string;
  pic: string;
  product: string;
  inventory: number;
  price: string;
  category: string;
}

export interface IOveralTable {
  id: number | string;
  // pic: string;
  name: string;
  pastor: string;
  city: string;
  phone: string;
  category: string;
}

export type complex =
  // | ItopCustomers
  // | TlatestTransactions
  // | IcustomersTable
  | IOveralTable;

export interface Itable {
  limit?: number;
  selectedCategory?: string;
  headData: string[];
  bodyData: (
    // | ItopCustomers
    // | TlatestTransactions
    // | IcustomersTable
    // | IProductsTable
    | IOveralTable
  )[];
}
