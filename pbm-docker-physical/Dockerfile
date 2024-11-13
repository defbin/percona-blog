FROM percona/percona-server-mongodb:7.0.15-multi AS mdb
FROM percona/percona-backup-mongodb:2.7.0-multi AS pbm

FROM oraclelinux:8

RUN mkdir -p /data/db /data/configdb

COPY --from=mdb /usr/bin/mongod /usr/bin/
COPY --from=pbm /usr/bin/pbm* /usr/bin/
