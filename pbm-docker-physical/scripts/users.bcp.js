db.getSiblingDB("admin").createRole({
  "role": "pbmAgent",
  "privileges": [{
    "resource": { "anyResource": true },
    "actions": ["anyAction"],
  }],
  "roles": [
    "backup",
    "restore",
    "clusterAdmin",
  ],
});

db.getSiblingDB("admin").createUser({
  user: "bcp",
  pwd: "pass",
  roles: ["pbmAgent"],
});
