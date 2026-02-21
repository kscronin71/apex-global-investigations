#!/usr/bin/env bash
set -euo pipefail

BASE_URL="${1:-http://localhost:3000}"

home_headers="$(curl -fsSI "${BASE_URL}/" | tr -d '\r')"
home_cache_control="$(printf '%s\n' "$home_headers" | awk -F': ' 'tolower($1)=="cache-control"{print $2; exit}')"
if ! printf '%s' "$home_cache_control" | grep -qi 'no-store'; then
  echo "FAIL: home route cache-control should include no-store (got: ${home_cache_control:-missing})"
  exit 1
fi

html="$(curl -fsSL "${BASE_URL}/")"
css_path="$(printf '%s' "$html" | grep -oE '/_next/static/css[^"]+\.css[^"]*' | head -n 1 || true)"

if [ -z "$css_path" ]; then
  echo "FAIL: no stylesheet link found in HTML response"
  exit 1
fi

status="$(curl -s -o /dev/null -w '%{http_code}' "${BASE_URL}${css_path}")"
if [ "$status" != "200" ] && printf '%s' "$css_path" | grep -q '?v='; then
  # Dev mode can race while compiling. Retry once before failing.
  sleep 1
  status="$(curl -s -o /dev/null -w '%{http_code}' "${BASE_URL}${css_path}")"
fi
if [ "$status" != "200" ]; then
  echo "FAIL: stylesheet returned ${status} (${css_path})"
  exit 1
fi

css_headers="$(curl -fsSI "${BASE_URL}${css_path}" | tr -d '\r')"
css_cache_control="$(printf '%s\n' "$css_headers" | awk -F': ' 'tolower($1)=="cache-control"{print $2; exit}')"
if ! printf '%s' "$css_cache_control" | grep -qi 'immutable'; then
  echo "FAIL: stylesheet cache-control should include immutable (got: ${css_cache_control:-missing})"
  exit 1
fi

css_content="$(curl -fsSL "${BASE_URL}${css_path}")"
if ! printf '%s' "$css_content" | grep -q '.btn-primary'; then
  echo "FAIL: stylesheet did not contain expected app styles (${css_path})"
  exit 1
fi

echo "PASS: cache headers and stylesheet checks passed (${css_path})"
