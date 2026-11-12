# SQL Scripts

This directory contains SQL scripts for various database operations.

데이터베이스 암호화는 `.pgpass` 파일에 저장.

환경변수 `PGPASSfile`을 사용하여 `pgpass.conf` 파일의 위치를 지정할 수 있습니다.

**Windows PowerShell**

```powershell
$env:PGPASSFILE = "C:\path\to\pgpass.conf"
```

또는

```powershell
[Environment]::SetEnvironmentVariable("PGPASSFILE", "C:\path\to\pgpass.conf", "User")
```

**Linux / macOS**

```shell
export PGPASSFILE="/path/to/pgpass.conf"
chmod 600 "$PGPASSFILE"
```

**pgpass.conf**

```text
hostname:port:database:username:password
```