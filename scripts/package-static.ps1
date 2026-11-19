# Builds the static export and zips `out/` for upload to TurkHosting (Plesk File Manager -> httpdocs -> Extract).
# Usage:  npm run package            (uses https://artifacthub.baglare.com.tr)
#         $env:NEXT_PUBLIC_SITE_URL = "https://baska.baglare.com.tr"; npm run package
$ErrorActionPreference = "Stop"
Set-Location (Join-Path $PSScriptRoot "..")

npm run build
if ($LASTEXITCODE -ne 0) { throw "Build failed." }
if (-not (Test-Path "out/index.html")) { throw "out/index.html missing; static export did not run." }
if (-not (Test-Path "out/.htaccess")) { throw "out/.htaccess missing." }

New-Item -ItemType Directory -Force "dist" | Out-Null
$zip = "dist/artifacthub-site.zip"
if (Test-Path $zip) { Remove-Item $zip -Force }

# Compress-Archive skips dotfiles such as .htaccess, so use .NET ZipFile directly.
Add-Type -AssemblyName System.IO.Compression.FileSystem
[System.IO.Compression.ZipFile]::CreateFromDirectory((Resolve-Path "out").Path, (Join-Path (Resolve-Path "dist").Path "artifacthub-site.zip"))

$size = [math]::Round((Get-Item $zip).Length / 1MB, 2)
Write-Host "Ready: $zip ($size MB). Upload to httpdocs and extract there."
