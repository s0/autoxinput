declare module 'xinput' {

  export interface Device {
    id: string;
    name: string;
  };

  export interface Prop {
    name: string;
    value: string | string[];
  }

  export function list(callback: (
    err: Error | undefined,
    list: Array<Device>,
  ) => void): void;

  export function listProps(device: number, callback: (
    err: Error | undefined,
    list: Array<Prop>,
  ) => void): void;

}
