function Get-Input([string] $name) {
    $name = "INPUT_$($name.Replace(' ', '_').ToUpper())"
    $value = [Environment]::GetEnvironmentVariable($name)
    $value = if ($value -ne $null) { $value } else { '' }
    return $value.Trim()
}

$nameToGreet = Get-Input 'who'
Write-Host "Hello $nameToGreet"
