import * as migration_20260428_220720 from './20260428_220720';

export const migrations = [
  {
    up: migration_20260428_220720.up,
    down: migration_20260428_220720.down,
    name: '20260428_220720'
  },
];
