// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import SwarmsClient from 'swarms-ts';

const client = new SwarmsClient({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource autoSwarmBuilder', () => {
  // Prism tests are disabled
  test.skip('createCompletion', async () => {
    const responsePromise = client.client.autoSwarmBuilder.createCompletion({});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('listExecutionTypes', async () => {
    const responsePromise = client.client.autoSwarmBuilder.listExecutionTypes();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
