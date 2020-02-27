#!/bin/bash

POSTGRES_EMJPM_USER=emjpm
POSTGRES_HASURA_USER=hasura

EMJPM_DB=${POSTGRES_DATABASE_EMJPM}

pg_isready

echo "Restore with ${1}"

pg_restore \
  --no-owner \
  --no-acl \
  --exit-on-error \
  --format=c \
  --verbose \
  --dbname ${EMJPM_DB} \
  ${1}

# psql -d emjpm -c "ALTER SCHEMA public OWNER TO emjpm"
psql -d ${EMJPM_DB} -c "DROP SCHEMA hdb_catalog CASCADE"
psql -d ${EMJPM_DB} -c "DROP SCHEMA hdb_views CASCADE"

psql -v ON_ERROR_STOP=1 ${EMJPM_DB}  <<-EOSQL
  -- EMJPM
  GRANT CONNECT ON DATABASE ${EMJPM_DB} TO ${POSTGRES_EMJPM_USER};
  GRANT ALL PRIVILEGES ON DATABASE ${EMJPM_DB} TO ${POSTGRES_EMJPM_USER};

   -- HASURA
  GRANT ALL PRIVILEGES ON DATABASE ${EMJPM_DB} TO ${POSTGRES_HASURA_USER};
  GRANT SELECT ON ALL TABLES IN SCHEMA information_schema TO ${POSTGRES_HASURA_USER};
  GRANT SELECT ON ALL TABLES IN SCHEMA pg_catalog TO ${POSTGRES_HASURA_USER};

  GRANT USAGE ON SCHEMA public TO ${POSTGRES_HASURA_USER};
  GRANT ALL ON ALL TABLES IN SCHEMA public TO ${POSTGRES_HASURA_USER};
  GRANT ALL ON ALL SEQUENCES IN SCHEMA public TO ${POSTGRES_HASURA_USER};
  ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT ALL PRIVILEGES  ON TABLES TO ${POSTGRES_HASURA_USER};
  ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT ALL PRIVILEGES  ON SEQUENCES TO ${POSTGRES_HASURA_USER};

EOSQL

sleep 10s
