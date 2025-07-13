# PowerShell script to move all static export files into out/webizen-app-docs/ for local preview

# Create the target directory if it doesn't exist
if (!(Test-Path -Path "out/webizen-app-docs")) {
    New-Item -ItemType Directory -Path "out/webizen-app-docs" | Out-Null
}

# Move all files and folders except 'webizen-app-docs' into the subfolder
Get-ChildItem -Path "out" | Where-Object { $_.Name -ne "webizen-app-docs" } | ForEach-Object {
    Move-Item $_.FullName -Destination "out/webizen-app-docs/" -Force
}

Write-Host "All files moved to out/webizen-app-docs/. You can now run 'npx serve out' and open http://localhost:3000/webizen-app-docs/ to preview."
