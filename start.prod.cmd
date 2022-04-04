docker volume create l10n-manager
docker volume create l10n-manager-db
docker-compose -f docker-compose.yml -f docker-compose.prod.yml up -d
