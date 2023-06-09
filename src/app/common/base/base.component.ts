import { constants, difficulties, endpoint } from "src/app/utils/constants";

export abstract class BaseComponent {
  public get constants() {
    return constants;
  }

  public get endpoints() {
    return endpoint;
  }

  public get difficulties() {
    return difficulties;
  }
}