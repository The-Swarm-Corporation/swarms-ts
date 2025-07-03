# Swarms

Types:

- <code><a href="./src/resources/top-level.ts">GetRootResponse</a></code>

Methods:

- <code title="get /">client.<a href="./src/index.ts">getRoot</a>() -> unknown</code>

# Health

Types:

- <code><a href="./src/resources/health.ts">HealthCheckResponse</a></code>

Methods:

- <code title="get /health">client.health.<a href="./src/resources/health.ts">check</a>() -> unknown</code>

# Agent

Types:

- <code><a href="./src/resources/agent/agent.ts">AgentCompletion</a></code>
- <code><a href="./src/resources/agent/agent.ts">AgentSpec</a></code>
- <code><a href="./src/resources/agent/agent.ts">AgentRunResponse</a></code>

Methods:

- <code title="post /v1/agent/completions">client.agent.<a href="./src/resources/agent/agent.ts">run</a>({ ...params }) -> AgentRunResponse</code>

## Batch

Types:

- <code><a href="./src/resources/agent/batch.ts">BatchRunResponse</a></code>

Methods:

- <code title="post /v1/agent/batch/completions">client.agent.batch.<a href="./src/resources/agent/batch.ts">run</a>([ ...body ]) -> BatchRunResponse</code>

# Models

Types:

- <code><a href="./src/resources/models.ts">ModelListAvailableResponse</a></code>

Methods:

- <code title="get /v1/models/available">client.models.<a href="./src/resources/models.ts">listAvailable</a>({ ...params }) -> ModelListAvailableResponse</code>

# Swarms

Types:

- <code><a href="./src/resources/swarms/swarms.ts">SwarmSpec</a></code>
- <code><a href="./src/resources/swarms/swarms.ts">SwarmCheckAvailableResponse</a></code>
- <code><a href="./src/resources/swarms/swarms.ts">SwarmGetLogsResponse</a></code>
- <code><a href="./src/resources/swarms/swarms.ts">SwarmRunResponse</a></code>

Methods:

- <code title="get /v1/swarms/available">client.swarms.<a href="./src/resources/swarms/swarms.ts">checkAvailable</a>({ ...params }) -> SwarmCheckAvailableResponse</code>
- <code title="get /v1/swarm/logs">client.swarms.<a href="./src/resources/swarms/swarms.ts">getLogs</a>({ ...params }) -> SwarmGetLogsResponse</code>
- <code title="post /v1/swarm/completions">client.swarms.<a href="./src/resources/swarms/swarms.ts">run</a>({ ...params }) -> SwarmRunResponse</code>

## Batch

Types:

- <code><a href="./src/resources/swarms/batch.ts">BatchRunResponse</a></code>

Methods:

- <code title="post /v1/swarm/batch/completions">client.swarms.batch.<a href="./src/resources/swarms/batch.ts">run</a>([ ...body ]) -> BatchRunResponse</code>
