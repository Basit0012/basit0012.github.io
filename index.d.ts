declare global {
  interface Window {
    FinisherHeader: new (...args: any[]) => any; 
  }
}

export {};
