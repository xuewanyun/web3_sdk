export interface Wallet {
  id: string;
  name: string;
  icon: React.FC;
  connector: () => Promise<any>;
  description?: string;
  isInstalled?: boolean;
  downloadUrl?: string;
}

export interface Chain {
  id: string;
  name: string;
  rpcUrl: string;
  nativeCurrency: {
    name: string;
    symbol: string;
    decimals: number;
  };
  blockExplorer?: {
    id: string;
    url: string;
  };
}

export interface WalletState {
  address: string;
  chainId: number;
  isConnected: boolean;
  isConnecting: boolean;
  error: string;
}

export interface WalletContextValue extends WalletState {
  connect: (walletId: string) => Promise<void>;
  disconnect: () => Promise<void>;
  switchChain: (chainId: number) => Promise<void>;
  openModal: () => void;
  closeModal: () => void;
  isOpenModal: () => boolean;
  isModalOpen: boolean;
  chains: Chain[];
}

export interface WalletProviderProps {
  children: React.ReactNode;
  wallets: Wallet[];
  chains: Chain[];
  autoConnect?: boolean;
}

export interface WalletModalProps {
  open: boolean;
  onClose: () => void;
  onConnect: (walletId: string) => Promise<void>;
  onSwitchChain: (chainId: number) => Promise<void>;
  chains: Chain[];
}
