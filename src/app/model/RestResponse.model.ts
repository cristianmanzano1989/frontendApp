export class RestResponse {

    private responseCode: number;
    private message: string;

    public getresponseCode(): number {
    return this.responseCode;
    }
    public setresponseCode(value: number) {
      this.responseCode = value;
    }

    public getmessage(): string {
      return this.message;
    }
    public setmessage(value: string) {
      this.message = value;
    }


}
