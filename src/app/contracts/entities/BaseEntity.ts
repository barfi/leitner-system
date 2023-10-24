import type { UUID, ISO8601 } from '../common'

/**
 * Represents common fields of all entities
 */
export type BaseEntity = {

  /**
   * Unique identifier
   */
  id: UUID

  /**
   * Date of creation
   */
  createdAt: ISO8601

  /**
   * Update date
   */
  updatedAt: ISO8601

}

/**
 * Base entity keys
 */
export const baseEntityKeys: ReadonlyArray<keyof BaseEntity> = [
  'id',
  'createdAt',
  'updatedAt'
]
