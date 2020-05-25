#!/usr/bin/env sh

# Remove recursively i18n directories
rm -rf ru

# Remove directories for default language
rm -rf assets
rm -rf about

# Remove files for default language
rm 404.html
rm index.html
rm logo.svg
