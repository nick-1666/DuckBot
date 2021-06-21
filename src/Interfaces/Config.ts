import { ColorResolvable } from "discord.js";

export interface Config {
  token: string;
  prefix: string;
  embedFooter: string;
  embedColor: ColorResolvable;
  owners: number[];
  alexApi: string;
}
