---
name: magic-21st
description: Search, inspect, and install 10,000+ curated React, Tailwind, and Three.js UI components from 21st.dev via 21st / Magic MCP. Use when designing, building, or styling UI components, menus, landing sections, animations, and widgets.
---

# 21st / Magic MCP Skill

This skill integrates **21st.dev** (formerly Magic MCP) into your workflow to search, discover, generate, and implement modern UI components directly in your project.

## Overview
- **Service**: 21st.dev (Magic MCP)
- **API Endpoint**: `https://21st.dev/api/mcp`
- **MCP Client**: Configured in `~/.gemini/config/mcp_config.json` via `@21st-dev/magic@latest` proxy with API key.

## Available Capabilities & Tools

When connected via MCP, the following tools are available:
1. **`search`**: Search over 10,000+ React, Tailwind CSS, Framer Motion, and Three.js components published on 21st.dev.
   - Example queries: "restaurant menu flip book", "luxury bar hero", "ambient particle background", "interactive reservation modal".
2. **`get_component`**: Retrieve the full JSX/TSX source code, styles, and dependency requirements for a specific component found on 21st.dev.
3. **`generate` / `iterate_generation`**: Generate custom component designs using 21st AI when enabled on the account.

## Workflow

1. **Search for Components**:
   - Query 21st.dev for high-quality, pre-built components that match the required aesthetic or interaction pattern.
2. **Retrieve Source Code**:
   - Inspect the component source code, required npm dependencies (e.g., `framer-motion`, `lucide-react`, `three`), and styling utilities.
3. **Integrate into the Project**:
   - Adapt the component to match the project's design tokens, typography, and color palette.
   - Install any missing peer dependencies with `npm install <package>`.
   - Place components in `src/components/ui/` or `src/components/sections/`.
