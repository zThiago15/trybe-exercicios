import { Connector, RedisConnector } from "./Connectors";

const token = 'ce42033d-9133-457a-a1a1-41ac0b63a333';
const conn = new RedisConnector({
  host: 'redisdb',
  port: 6379,
});
