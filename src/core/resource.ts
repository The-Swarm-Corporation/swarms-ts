// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { SwarmsClient } from '../client';

export abstract class APIResource {
  protected _client: SwarmsClient;

  constructor(client: SwarmsClient) {
    this._client = client;
  }
}
