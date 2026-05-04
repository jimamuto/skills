param(
    [string]$Destination
)

$ErrorActionPreference = "Stop"

$repoRoot = Resolve-Path (Join-Path $PSScriptRoot "..")

if (-not $Destination) {
    if ($env:CODEX_HOME) {
        $Destination = Join-Path $env:CODEX_HOME "skills"
    } else {
        $Destination = Join-Path $HOME ".codex\skills"
    }
}

New-Item -ItemType Directory -Path $Destination -Force | Out-Null

$excluded = @(".git", "scripts")
$skillDirs = Get-ChildItem -Path $repoRoot -Directory |
    Where-Object { $excluded -notcontains $_.Name -and (Test-Path (Join-Path $_.FullName "SKILL.md")) }

foreach ($skill in $skillDirs) {
    $target = Join-Path $Destination $skill.Name
    if (Test-Path $target) {
        Remove-Item -Path $target -Recurse -Force
    }
    Copy-Item -Path $skill.FullName -Destination $target -Recurse
    Write-Host "Installed $($skill.Name) -> $target"
}

Write-Host "Installed $($skillDirs.Count) skill(s) to $Destination"
