# Summit Up Design System

## Prerequisites

- Node.js 18+

## Installation

1. Repository 클론

```bash
git clone [repository-url]
cd design-system
```

2. Corepack 활성화 & Yarn 버전 설정

```bash
corepack enable
yarn set version 4.5.3
```

## 개발환경 설정

VSCode를 사용하는 경우:

```bash
yarn dlx @yarnpkg/sdks vscode
```

다른 IDE 사용시:

```bash
yarn dlx @yarnpkg/sdks base
```

## Project Structure

```bash
packages/
├── colors/      # 디자인 시스템 컬러 토큰
├── ui/          # 공통 UI 컴포넌트 시스템
└── icons/       # 공통 아이콘 시스템 및 SVG 에셋
```

## 주요 기능

- Yarn Berry & Turborepo
- shadcn/ui 컴포넌트
- Storybook
- Jest 테스트
- ESLint/Prettier

## Development

```bash
yarn dev        # 개발
yarn build      # 빌드
yarn lint       # 린트
yarn test       # 테스트
yarn storybook  # 컴포넌트 문서
```
