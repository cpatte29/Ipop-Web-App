#!/bin/bash
set -euo pipefail

# Only run in Claude Code on the web remote environments
if [ "${CLAUDE_CODE_REMOTE:-}" != "true" ]; then
  exit 0
fi

# Log session startup
echo "🚀 Starting Claude Code session for Ipop-Web-App"
echo "📁 Project: Static HTML/CSS Fundraising Homepage"
echo "✅ No dependencies to install - ready to go!"
echo ""
echo "Quick info:"
echo "  - Main file: index.html"
echo "  - Styles: styles.css"
echo "  - This is a static site with no build process"
echo ""
echo "To preview locally, you can run:"
echo "  python3 -m http.server 8000"
echo "  Then visit: http://localhost:8000"
echo ""
echo "Session ready! 🎉"
