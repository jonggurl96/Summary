# Proxy

This directory contains the proxy code for the project.

## Windows

```powershell
./nginx -p working_dir -c conf_dir
```

## Docker Compose

```yaml
services:
  nginx:
    image: nginx:latest
    volumes:
      - type: bind
        source: conf_dir
        target: /etc/nginx/nginx.conf
        read_only: true
```