docker-compose down --remove-orphans
docker volume rm l10n-manager
docker volume rm l10n-manager-db
docker volume create l10n-manager
docker volume create l10n-manager-db
docker-compose -f docker-compose.yml -f docker-compose.dev.yml up -d --build postgres graphql-engine
