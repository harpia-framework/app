import type { Request, Response } from "harpiats";

import ApiResponse from "app/helpers/ApiResponse";
import { SystemService } from "../services";

export async function Show(request: Request, response: Response) {
  try {
    const data = await SystemService.Show();

    return ApiResponse.success(response, data);
  } catch (error: any) {
    return ApiResponse.error(response, error);
  }
}
