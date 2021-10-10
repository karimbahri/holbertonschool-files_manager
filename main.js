import redisClient from "./utils/redis";

(async () => {
  console.log("is Alive: ", redisClient.isAlive());
  console.log("[myKey] -> ", await redisClient.get("myKey"));
  await redisClient.set("myKey", 12, 5);
  console.log("[myKey] -> ", await redisClient.get("myKey"));

  setTimeout(async () => {
    console.log("[myKey] -> ", await redisClient.get("myKey"));
  }, 1000 * 10);
})();
