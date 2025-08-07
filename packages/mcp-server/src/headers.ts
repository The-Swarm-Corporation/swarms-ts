// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { type ClientOptions } from 'swarms-ts/client';

import { IncomingMessage } from 'node:http';

export const parseAuthHeaders = (req: IncomingMessage): Partial<ClientOptions> => {
  const apiKey =
    req.headers['x-api-key'] instanceof Array ? req.headers['x-api-key'][0] : req.headers['x-api-key'];
  return { apiKey };
};
