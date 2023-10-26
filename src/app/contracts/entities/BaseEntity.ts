import type { UUID, ISO8601 } from '../shared/BrandedPrimitives'

/**
 * Represents common fields of all entities
 */
export type BaseEntity = {

  /**
   * Unique identifier
   */
  readonly id: UUID

  /**
   * Date of creation
   */
  readonly createdAt: ISO8601

  /**
   * Update date
   */
  readonly updatedAt: ISO8601

}

/**
 * Base entity keys
 */
export const baseEntityKeys: ReadonlyArray<keyof BaseEntity> = [
  'id',
  'createdAt',
  'updatedAt'
]
