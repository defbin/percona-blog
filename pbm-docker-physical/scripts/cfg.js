rs.initiate({
  _id: "cfg",
  configsvr: true,
  members: [
    { _id: 0, host: "cfg0:27019" },
    { _id: 1, host: "cfg1:27019" },
    { _id: 2, host: "cfg2:27019" },
  ],
});
