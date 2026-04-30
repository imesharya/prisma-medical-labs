import * as migration_20260428_220720 from './20260428_220720';
import * as migration_20260430_102939_RBAC from './20260430_102939_RBAC';

export const migrations = [
  {
    up: migration_20260428_220720.up,
    down: migration_20260428_220720.down,
    name: '20260428_220720',
  },
  {
    up: migration_20260430_102939_RBAC.up,
    down: migration_20260430_102939_RBAC.down,
    name: '20260430_102939_RBAC'
  },
];
