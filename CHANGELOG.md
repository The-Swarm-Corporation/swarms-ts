# Changelog

## 0.1.0-alpha.16 (2025-08-23)

Full Changelog: [v0.1.0-alpha.15...v0.1.0-alpha.16](https://github.com/The-Swarm-Corporation/swarms-ts/compare/v0.1.0-alpha.15...v0.1.0-alpha.16)

### Features

* **mcp:** add code execution tool ([2e20f5d](https://github.com/The-Swarm-Corporation/swarms-ts/commit/2e20f5d3d827fdd78233806a6b43a9bf6f660edf))
* **mcp:** add option to infer mcp client ([9c2fe43](https://github.com/The-Swarm-Corporation/swarms-ts/commit/9c2fe43d9921db0651b602a874d98a5851a34d6d))
* **mcp:** parse query string as mcp client options in mcp server ([49456a4](https://github.com/The-Swarm-Corporation/swarms-ts/commit/49456a4135170d3b3dfd0a937497bbe290d6f0e6))


### Chores

* add package to package.json ([358e26f](https://github.com/The-Swarm-Corporation/swarms-ts/commit/358e26f7cd00884d8142b078285f3aa9214a43d9))
* **client:** qualify global Blob ([c58fbd4](https://github.com/The-Swarm-Corporation/swarms-ts/commit/c58fbd46bc9cda5f8e54fc1937adf98e4a1806cb))
* **internal:** codegen related update ([9e351d9](https://github.com/The-Swarm-Corporation/swarms-ts/commit/9e351d9c42bd59691d05548d6897baacae80c999))
* **internal:** make mcp-server publishing public by defaut ([1649d7c](https://github.com/The-Swarm-Corporation/swarms-ts/commit/1649d7ce5bc7e9db5bcbd68798d02c55661bbf5e))
* **internal:** refactor array check ([72b6a69](https://github.com/The-Swarm-Corporation/swarms-ts/commit/72b6a69b683015fe752789fae36b261fb40c68dd))
* **mcp:** add cors to oauth metadata route ([e4e357a](https://github.com/The-Swarm-Corporation/swarms-ts/commit/e4e357a9ffe016657281bead9271b898de9cc1ce))
* **mcp:** update package.json ([a7b824d](https://github.com/The-Swarm-Corporation/swarms-ts/commit/a7b824df03caa800b0dbcfd32e1d807a96db1efc))
* **mcp:** update types ([8ac11a0](https://github.com/The-Swarm-Corporation/swarms-ts/commit/8ac11a00a4da6ee8013f80b68b78bc5e719663ea))
* update CI script ([4175aaf](https://github.com/The-Swarm-Corporation/swarms-ts/commit/4175aaf9ce1200e7291140dad625b563c5c7ebca))

## 0.1.0-alpha.15 (2025-08-18)

Full Changelog: [v0.1.0-alpha.14...v0.1.0-alpha.15](https://github.com/The-Swarm-Corporation/swarms-ts/compare/v0.1.0-alpha.14...v0.1.0-alpha.15)

### Features

* **api:** api update ([b341986](https://github.com/The-Swarm-Corporation/swarms-ts/commit/b341986c4dc8c3e13e99b5547abb920f8ef955dc))


### Chores

* **deps:** update dependency @types/node to v20.17.58 ([c5353d4](https://github.com/The-Swarm-Corporation/swarms-ts/commit/c5353d4d5ab504a241e5d231f069862318eb9146))
* **internal:** formatting change ([430f553](https://github.com/The-Swarm-Corporation/swarms-ts/commit/430f55362cbfa2c7fd8977f6931a3fa5e2cf412e))
* **mcp:** update README ([b5644de](https://github.com/The-Swarm-Corporation/swarms-ts/commit/b5644deb280032d294ef303725d68cc03485a086))

## 0.1.0-alpha.14 (2025-08-15)

Full Changelog: [v0.1.0-alpha.13...v0.1.0-alpha.14](https://github.com/The-Swarm-Corporation/swarms-ts/compare/v0.1.0-alpha.13...v0.1.0-alpha.14)

### Bug Fixes

* **mcp:** generate additionalProperties=true for map schemas to avoid validation issues ([8aa1e16](https://github.com/The-Swarm-Corporation/swarms-ts/commit/8aa1e16fb39ef3f4d2dd90afafd34c27f89f1c49))


### Chores

* **mcp:** document remote server in README.md ([b6604ab](https://github.com/The-Swarm-Corporation/swarms-ts/commit/b6604abe86b52d25cd0289623675e5997bd7273d))

## 0.1.0-alpha.13 (2025-08-14)

Full Changelog: [v0.1.0-alpha.12...v0.1.0-alpha.13](https://github.com/The-Swarm-Corporation/swarms-ts/compare/v0.1.0-alpha.12...v0.1.0-alpha.13)

### Chores

* **internal:** codegen related update ([d3d14ad](https://github.com/The-Swarm-Corporation/swarms-ts/commit/d3d14ada57dd8ba3a95ce40353fb9c382e76d88b))
* **internal:** update comment in script ([f19ae0a](https://github.com/The-Swarm-Corporation/swarms-ts/commit/f19ae0a2094d02d60fd719bcb4ecf520ea14cff1))
* **mcp:** minor cleanup of types and package.json ([92cdd26](https://github.com/The-Swarm-Corporation/swarms-ts/commit/92cdd268ca0385a45c8a090cf0c46b709d9ad9c7))
* update @stainless-api/prism-cli to v5.15.0 ([c17ec1b](https://github.com/The-Swarm-Corporation/swarms-ts/commit/c17ec1b64ce80e09e065ad0ad601aeaf5fb1f5af))

## 0.1.0-alpha.12 (2025-08-07)

Full Changelog: [v0.1.0-alpha.11...v0.1.0-alpha.12](https://github.com/The-Swarm-Corporation/swarms-ts/compare/v0.1.0-alpha.11...v0.1.0-alpha.12)

### Features

* **mcp:** add unix socket option for remote MCP ([8cd0005](https://github.com/The-Swarm-Corporation/swarms-ts/commit/8cd00054e8b97bcc9ffc589194100bf306f3ff6e))


### Chores

* **internal:** move publish config ([12185ea](https://github.com/The-Swarm-Corporation/swarms-ts/commit/12185eaf9b42ac61c5ede965ec6c9667ee04b4c5))
* **mcp:** refactor streamable http transport ([5f419b2](https://github.com/The-Swarm-Corporation/swarms-ts/commit/5f419b2958428a7a1567f592f3612e394d311e5d))

## 0.1.0-alpha.11 (2025-08-07)

Full Changelog: [v0.1.0-alpha.10...v0.1.0-alpha.11](https://github.com/The-Swarm-Corporation/swarms-ts/compare/v0.1.0-alpha.10...v0.1.0-alpha.11)

### Features

* **api:** api update ([1417d70](https://github.com/The-Swarm-Corporation/swarms-ts/commit/1417d709e2fa836a2aba31446ccd8c389f4bb6de))
* **mcp:** add logging when environment variable is set ([d179735](https://github.com/The-Swarm-Corporation/swarms-ts/commit/d179735c0a127f21f36405c48084edb5c9663738))
* **mcp:** remote server with passthru auth ([333179b](https://github.com/The-Swarm-Corporation/swarms-ts/commit/333179b3aef774a13c3be3d45f52cb783823065c))


### Bug Fixes

* **mcp:** avoid sending `jq_filter` to base API ([6171ff7](https://github.com/The-Swarm-Corporation/swarms-ts/commit/6171ff7b4b19c59b22a6ae49ca3c7c72c1c860e1))
* **mcp:** reverse validJson capability option and limit scope ([dc46938](https://github.com/The-Swarm-Corporation/swarms-ts/commit/dc469388055f43f8ce7cb5649797977db4efb5cd))

## 0.1.0-alpha.10 (2025-07-31)

Full Changelog: [v0.1.0-alpha.9...v0.1.0-alpha.10](https://github.com/The-Swarm-Corporation/swarms-ts/compare/v0.1.0-alpha.9...v0.1.0-alpha.10)

### Features

* **api:** api update ([ff8e98a](https://github.com/The-Swarm-Corporation/swarms-ts/commit/ff8e98aa73376d09fd892b9bfe2f7b29a2de19c5))


### Chores

* **internal:** codegen related update ([e7de2c6](https://github.com/The-Swarm-Corporation/swarms-ts/commit/e7de2c6bdaa9578d3470e806b334dd86130f94f7))
* **internal:** remove redundant imports config ([ee4d808](https://github.com/The-Swarm-Corporation/swarms-ts/commit/ee4d8085908e9760be213a08d9147b00e689c1b4))

## 0.1.0-alpha.9 (2025-07-22)

Full Changelog: [v0.1.0-alpha.8...v0.1.0-alpha.9](https://github.com/The-Swarm-Corporation/swarms-ts/compare/v0.1.0-alpha.8...v0.1.0-alpha.9)

### Features

* **api:** api update ([f76eb8e](https://github.com/The-Swarm-Corporation/swarms-ts/commit/f76eb8ed355c392df4c0b4e1d02f424a868734bd))
* **api:** api update ([0cd265f](https://github.com/The-Swarm-Corporation/swarms-ts/commit/0cd265f96b218a1cfbfacf974b4c938bcd2ab87a))

## 0.1.0-alpha.8 (2025-07-22)

Full Changelog: [v0.1.0-alpha.7...v0.1.0-alpha.8](https://github.com/The-Swarm-Corporation/swarms-ts/compare/v0.1.0-alpha.7...v0.1.0-alpha.8)

### Features

* **api:** api update ([8776bf0](https://github.com/The-Swarm-Corporation/swarms-ts/commit/8776bf08f48a0b823f70a93320fe6f0c3f9ccb5b))

## 0.1.0-alpha.7 (2025-07-21)

Full Changelog: [v0.1.0-alpha.6...v0.1.0-alpha.7](https://github.com/The-Swarm-Corporation/swarms-ts/compare/v0.1.0-alpha.6...v0.1.0-alpha.7)

### Features

* **api:** add reasoning agent endpoints and gitbook docs ([c562a25](https://github.com/The-Swarm-Corporation/swarms-ts/commit/c562a25cb94f029148c5c575dc87fa79d62da3c8))
* **api:** add reasoning agent endpoints and gitbook docs ([c562a25](https://github.com/The-Swarm-Corporation/swarms-ts/commit/c562a25cb94f029148c5c575dc87fa79d62da3c8))

## 0.1.0-alpha.6 (2025-07-19)

Full Changelog: [v0.1.0-alpha.5...v0.1.0-alpha.6](https://github.com/The-Swarm-Corporation/swarms-ts/compare/v0.1.0-alpha.5...v0.1.0-alpha.6)

### Features

* **api:** api update ([e18ca03](https://github.com/The-Swarm-Corporation/swarms-ts/commit/e18ca03d152d72a874a8a37db1e79de2b3603cd9))
* **api:** api update ([e05e1df](https://github.com/The-Swarm-Corporation/swarms-ts/commit/e05e1df0db53466e635175fc1e192dea85cbae84))


### Bug Fixes

* **mcp:** include required section for top-level properties and support naming transformations ([d42ad10](https://github.com/The-Swarm-Corporation/swarms-ts/commit/d42ad10771ffe30d9e40dc745ff76a350272e5b1))

## 0.1.0-alpha.5 (2025-07-17)

Full Changelog: [v0.1.0-alpha.4...v0.1.0-alpha.5](https://github.com/The-Swarm-Corporation/swarms-ts/compare/v0.1.0-alpha.4...v0.1.0-alpha.5)

### Bug Fixes

* **mcp:** support jq filtering on cloudflare workers ([cc4b887](https://github.com/The-Swarm-Corporation/swarms-ts/commit/cc4b887bfc708f1e9cceba8e19d4832071eae54d))


### Chores

* **mcp:** rework imports in tools ([0ba5e12](https://github.com/The-Swarm-Corporation/swarms-ts/commit/0ba5e12a2c80ed217d7c72d981c478ad38ed12dc))
* **ts:** reorder package.json imports ([aa154ba](https://github.com/The-Swarm-Corporation/swarms-ts/commit/aa154ba7459134db42a61874292ff7f8219db9c1))

## 0.1.0-alpha.4 (2025-07-13)

Full Changelog: [v0.1.0-alpha.3...v0.1.0-alpha.4](https://github.com/The-Swarm-Corporation/swarms-ts/compare/v0.1.0-alpha.3...v0.1.0-alpha.4)

### Features

* **api:** api update ([ab28e3f](https://github.com/The-Swarm-Corporation/swarms-ts/commit/ab28e3f50e4d19257b36c4ed1e0e607a8736df3f))

## 0.1.0-alpha.3 (2025-07-13)

Full Changelog: [v0.1.0-alpha.2...v0.1.0-alpha.3](https://github.com/The-Swarm-Corporation/swarms-ts/compare/v0.1.0-alpha.2...v0.1.0-alpha.3)

### Features

* **api:** api update ([195c9c8](https://github.com/The-Swarm-Corporation/swarms-ts/commit/195c9c892fd61f774f7bd52c4fa4ea5d4fa78f00))
* **mcp:** support filtering tool results by a jq expression ([923a99d](https://github.com/The-Swarm-Corporation/swarms-ts/commit/923a99d07701aa4de781d705f9ac0dcf5690727f))


### Bug Fixes

* **mcp:** relax input type for asTextContextResult ([ab4e258](https://github.com/The-Swarm-Corporation/swarms-ts/commit/ab4e2588ede32268fd4a20f17ec2ce8d08066136))


### Chores

* configure new SDK language ([62776ed](https://github.com/The-Swarm-Corporation/swarms-ts/commit/62776ed936ecc03de7299cc1f5311dedeef5ff26))
* make some internal functions async ([c67b3ac](https://github.com/The-Swarm-Corporation/swarms-ts/commit/c67b3acb8de7db8d518b08cbba9b9dd6930f6f8a))

## 0.1.0-alpha.2 (2025-07-04)

Full Changelog: [v0.1.0-alpha.1...v0.1.0-alpha.2](https://github.com/The-Swarm-Corporation/swarms-ts/compare/v0.1.0-alpha.1...v0.1.0-alpha.2)

### Features

* **api:** /v1/ratelimits ([ee5c969](https://github.com/The-Swarm-Corporation/swarms-ts/commit/ee5c969e55ca921189724aec5faec05d1755ed62))
* **api:** api update ([3867501](https://github.com/The-Swarm-Corporation/swarms-ts/commit/3867501cbaa71760e991beb9358c4d91d79ca99f))

## 0.1.0-alpha.1 (2025-07-03)

Full Changelog: [v0.0.1-alpha.0...v0.1.0-alpha.1](https://github.com/The-Swarm-Corporation/swarms-ts/compare/v0.0.1-alpha.0...v0.1.0-alpha.1)

### Features

* **api:** api key fix ([eabd42c](https://github.com/The-Swarm-Corporation/swarms-ts/commit/eabd42c654eacb41ca3b2c2ee6b8dd2a5edcac06))


### Chores

* configure new SDK language ([6fa4396](https://github.com/The-Swarm-Corporation/swarms-ts/commit/6fa43962eaf9e34848a93361a25be09b8e916eae))
* update SDK settings ([72ec44b](https://github.com/The-Swarm-Corporation/swarms-ts/commit/72ec44b6f0c32eed9adb9d1c08f2ed80c0b3c060))
* update SDK settings ([f9e3c1d](https://github.com/The-Swarm-Corporation/swarms-ts/commit/f9e3c1dd6507a78aa95c3422973869b31cf03795))
