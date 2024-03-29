import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'Mongo',
  connector: 'mongodb',
  url: 'mongodb+srv://sandropastorini:fpkAlXm2zhqvypTJ@sdistribuidos.x4itigw.mongodb.net/SDistribuidos?retryWrites=true&w=majority',
  host: 'sdistribuidos.x4itigw.mongodb.net',
  port: 27017,
  user: 'sandropastorini',
  password: 'fpkAlXm2zhqvypTJ',
  database: 'SDistribuidos',
  useNewUrlParser: true
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class MongoDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'Mongo';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.Mongo', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
