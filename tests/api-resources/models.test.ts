// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Swarms from 'swarms';

const client = new Swarms({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource models', () => {
  // skipped: tests are disabled for the time being
  test.skip('listAvailable: only required params', async () => {
    const responsePromise = client.models.listAvailable({ 'x-api-key': 'x-api-key' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('listAvailable: required and optional params', async () => {
    const response = await client.models.listAvailable({ 'x-api-key': 'x-api-key' });
  });
});
