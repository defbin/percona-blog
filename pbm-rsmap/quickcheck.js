db.getSiblingDB("rsmap").coll
    .find().sort({ i: 1 }).toArray()
    .reduce(([count = 0, seq = true, next = 1], { i }) =>
             [count + 1, seq && next == i, i + 1], [])
    .slice(0, 2)
