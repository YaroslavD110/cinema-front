export interface IAPIResult<B = any> {
  isSuccess: boolean;
  errorMessage: string | null;
  body?: B;
}
