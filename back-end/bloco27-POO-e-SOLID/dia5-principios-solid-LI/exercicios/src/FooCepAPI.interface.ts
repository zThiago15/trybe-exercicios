export default interface iFooCepAPI {
  getAddressByCEP(): Promise<string>;
  getCepByAddress(): Promise<string>
}